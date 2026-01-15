import { z } from "zod";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { TRPCError } from "@trpc/server";
import { getDb } from "./db";
import { domainInquiries } from "../drizzle/schema";
import { eq, desc } from "drizzle-orm";
import { notifyOwner } from "./_core/notification";

export const domainInquiriesRouter = router({
  /**
   * Create a new domain inquiry (public - no auth required)
   */
  create: publicProcedure
    .input(
      z.object({
        domain: z.string().min(1, "Domain is required"),
        name: z.string().min(1, "Name is required"),
        email: z.string().email("Valid email is required"),
        message: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Database unavailable",
        });
      }

      try {
        // Insert inquiry into database
        await db.insert(domainInquiries).values({
          domain: input.domain,
          name: input.name,
          email: input.email,
          message: input.message || null,
          status: "new",
        });

        // Send notification to owner
        await notifyOwner({
          title: `New Domain Inquiry: ${input.domain}`,
          content: `**From:** ${input.name} (${input.email})\n\n**Domain:** ${input.domain}\n\n**Message:**\n${input.message || "No message provided"}\n\nView all inquiries at /admin/domain-inquiries`,
        });

        return { success: true };
      } catch (error) {
        console.error("Error creating domain inquiry:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to submit inquiry",
        });
      }
    }),

  /**
   * List all domain inquiries (protected - admin only)
   */
  list: protectedProcedure
    .input(
      z
        .object({
          status: z.enum(["new", "contacted", "negotiating", "sold", "declined"]).optional(),
          limit: z.number().min(1).max(100).default(50),
        })
        .optional()
    )
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Database unavailable",
        });
      }

      try {
        const { status, limit = 50 } = input || {};
        
        let query = db.select().from(domainInquiries).orderBy(desc(domainInquiries.createdAt)).limit(limit);
        
        if (status) {
          query = query.where(eq(domainInquiries.status, status)) as any;
        }

        const inquiries = await query;
        return inquiries;
      } catch (error) {
        console.error("Error listing domain inquiries:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to fetch inquiries",
        });
      }
    }),

  /**
   * Update inquiry status (protected - admin only)
   */
  updateStatus: protectedProcedure
    .input(
      z.object({
        id: z.number(),
        status: z.enum(["new", "contacted", "negotiating", "sold", "declined"]),
      })
    )
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Database unavailable",
        });
      }

      try {
        await db
          .update(domainInquiries)
          .set({ status: input.status })
          .where(eq(domainInquiries.id, input.id));

        return { success: true };
      } catch (error) {
        console.error("Error updating inquiry status:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to update status",
        });
      }
    }),

  /**
   * Get inquiry statistics (protected - admin only)
   */
  getStats: protectedProcedure.query(async () => {
    const db = await getDb();
    if (!db) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Database unavailable",
      });
    }

    try {
      const allInquiries = await db.select().from(domainInquiries);
      
      const stats = {
        total: allInquiries.length,
        new: allInquiries.filter((i) => i.status === "new").length,
        contacted: allInquiries.filter((i) => i.status === "contacted").length,
        negotiating: allInquiries.filter((i) => i.status === "negotiating").length,
        sold: allInquiries.filter((i) => i.status === "sold").length,
        declined: allInquiries.filter((i) => i.status === "declined").length,
      };

      return stats;
    } catch (error) {
      console.error("Error getting inquiry stats:", error);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to fetch stats",
      });
    }
  }),
});
