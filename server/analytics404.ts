import { z } from "zod";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { error404Logs } from "../drizzle/schema";
import { getDb } from "./db";
import { desc, sql, eq } from "drizzle-orm";
import { TRPCError } from "@trpc/server";

export const analytics404Router = router({
  /**
   * Log a 404 error
   * Public: called from 404 page
   */
  log: publicProcedure
    .input(
      z.object({
        requestedUrl: z.string(),
        referrer: z.string().optional(),
        userAgent: z.string().optional(),
        suggestedUrl: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) return { success: false };

      await db.insert(error404Logs).values({
        requestedUrl: input.requestedUrl,
        referrer: input.referrer || null,
        userAgent: input.userAgent || null,
        suggestedUrl: input.suggestedUrl || null,
        wasRedirected: 0,
      });

      return { success: true };
    }),

  /**
   * Mark a 404 log as redirected (user clicked suggestion)
   * Public: called when user clicks suggested URL
   */
  markRedirected: publicProcedure
    .input(z.object({ requestedUrl: z.string() }))
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) return { success: false };

      // Update the most recent log entry for this URL
      await db.execute(sql`
        UPDATE error_404_logs 
        SET was_redirected = 1 
        WHERE requested_url = ${input.requestedUrl} 
        ORDER BY created_at DESC 
        LIMIT 1
      `);

      return { success: true };
    }),

  /**
   * Get 404 error statistics
   * Protected: admin only
   */
  getStats: protectedProcedure.query(async () => {
    const db = await getDb();
    if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database unavailable" });

    // Get total 404 errors
    const [totalResult] = await db.execute(sql`
      SELECT COUNT(*) as total FROM error_404_logs
    `);
    const total = (totalResult as any).total || 0;

    // Get top 404 URLs
    const topUrls = await db.execute(sql`
      SELECT 
        requested_url,
        COUNT(*) as count,
        SUM(was_redirected) as redirected_count,
        MAX(created_at) as last_seen
      FROM error_404_logs
      GROUP BY requested_url
      ORDER BY count DESC
      LIMIT 20
    `);

    // Get recent 404 errors
    const recentErrors = await db
      .select()
      .from(error404Logs)
      .orderBy(desc(error404Logs.createdAt))
      .limit(50);

    // Get redirect success rate
    const [redirectResult] = await db.execute(sql`
      SELECT 
        SUM(CASE WHEN suggested_url IS NOT NULL THEN 1 ELSE 0 END) as with_suggestion,
        SUM(was_redirected) as redirected
      FROM error_404_logs
    `);
    const redirectStats = redirectResult as any;
    const redirectRate = redirectStats.with_suggestion > 0 
      ? (redirectStats.redirected / redirectStats.with_suggestion * 100).toFixed(1)
      : 0;

    return {
      total,
      topUrls,
      recentErrors,
      redirectRate,
    };
  }),

  /**
   * Get all 404 logs with pagination
   * Protected: admin only
   */
  list: protectedProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).default(20),
        offset: z.number().min(0).default(0),
      })
    )
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database unavailable" });

      const logs = await db
        .select()
        .from(error404Logs)
        .orderBy(desc(error404Logs.createdAt))
        .limit(input.limit)
        .offset(input.offset);

      const [countResult] = await db.execute(sql`
        SELECT COUNT(*) as total FROM error_404_logs
      `);
      const total = (countResult as any).total || 0;

      return {
        logs,
        total,
        hasMore: input.offset + input.limit < total,
      };
    }),
});
