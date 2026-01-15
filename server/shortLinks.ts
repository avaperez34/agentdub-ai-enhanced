import { z } from "zod";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { shortLinks } from "../drizzle/schema";
import { getDb } from "./db";
import { eq, desc, sql } from "drizzle-orm";
import { TRPCError } from "@trpc/server";

export const shortLinksRouter = router({
  /**
   * Create a new short link
   * Protected: requires authentication
   */
  create: protectedProcedure
    .input(
      z.object({
        slug: z.string().min(1).max(32).regex(/^[a-z0-9-]+$/, "Slug must contain only lowercase letters, numbers, and hyphens"),
        targetUrl: z.string().url("Must be a valid URL"),
        title: z.string().optional(),
        description: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database unavailable" });

      // Check if slug already exists
      const existing = await db.select().from(shortLinks).where(eq(shortLinks.slug, input.slug)).limit(1);
      
      if (existing.length > 0) {
        throw new TRPCError({
          code: "CONFLICT",
          message: "This slug is already taken. Please choose a different one.",
        });
      }

      await db.insert(shortLinks).values({
        slug: input.slug,
        targetUrl: input.targetUrl,
        title: input.title,
        description: input.description,
        createdBy: ctx.user.id,
      });

      return { success: true, slug: input.slug };
    }),

  /**
   * Get all short links (with stats)
   * Protected: requires authentication
   */
  list: protectedProcedure.query(async () => {
    const db = await getDb();
    if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database unavailable" });

    const links = await db
      .select()
      .from(shortLinks)
      .orderBy(desc(shortLinks.createdAt));

    return links;
  }),

  /**
   * Get a single short link by slug
   * Public: needed for redirect functionality
   */
  getBySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database unavailable" });

      const [link] = await db
        .select()
        .from(shortLinks)
        .where(eq(shortLinks.slug, input.slug))
        .limit(1);

      if (!link) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Short link not found",
        });
      }

      return link;
    }),

  /**
   * Increment click counter for a short link
   * Public: called on every redirect
   */
  incrementClicks: publicProcedure
    .input(z.object({ slug: z.string() }))
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database unavailable" });

      await db
        .update(shortLinks)
        .set({ clicks: sql`${shortLinks.clicks} + 1` })
        .where(eq(shortLinks.slug, input.slug));

      return { success: true };
    }),

  /**
   * Delete a short link
   * Protected: requires authentication
   */
  delete: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database unavailable" });

      await db.delete(shortLinks).where(eq(shortLinks.id, input.id));
      return { success: true };
    }),

  /**
   * Update a short link
   * Protected: requires authentication
   */
  update: protectedProcedure
    .input(
      z.object({
        id: z.number(),
        targetUrl: z.string().url().optional(),
        title: z.string().optional(),
        description: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database unavailable" });

      const { id, ...updates } = input;
      
      await db
        .update(shortLinks)
        .set(updates)
        .where(eq(shortLinks.id, id));

      return { success: true };
    }),
});
