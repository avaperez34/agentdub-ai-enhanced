import { z } from "zod";
import { publicProcedure, router } from "./_core/trpc";
import * as db from "./db";
import { agentWaitlist } from "../drizzle/schema";
import { eq } from "drizzle-orm";
import { notifyOwner } from "./_core/notification";

export const agentWaitlistRouter = router({
  signup: publicProcedure
    .input(
      z.object({
        email: z.string().email("Invalid email address"),
        name: z.string().optional(),
        company: z.string().optional(),
        interest: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      try {
        // Check if email already exists
        const existing = await db.getAgentWaitlistByEmail(input.email);
        if (existing) {
          throw new Error("This email is already on the waitlist");
        }

        // Insert into database
        const result = await db.addToAgentWaitlist({
          email: input.email,
          name: input.name || null,
          company: input.company || null,
          interest: input.interest || "general",
          createdAt: new Date(),
        });

        // Notify admin
        await notifyOwner({
          title: "🤖 New Sovereign AI Agent Waitlist Signup",
          content: `
Email: ${input.email}
Name: ${input.name || "Not provided"}
Company: ${input.company || "Not provided"}
Interest: ${input.interest || "general"}

Total agent waitlist signups: Check /admin/agent-waitlist for full list.
          `,
        });

        return {
          success: true,
          message: "Successfully joined the waitlist!",
        };
      } catch (error) {
        throw new Error(error instanceof Error ? error.message : "Failed to join waitlist");
      }
    }),

  getAll: publicProcedure.query(async () => {
    try {
      const db_instance = await db.getDb();
      if (!db_instance) return [];
      const result = await db_instance.select().from(agentWaitlist);
      return result;
    } catch (error) {
      console.error("[Agent Waitlist] Failed to fetch all entries:", error);
      return [];
    }
  }),

  getStats: publicProcedure.query(async () => {
    try {
      const total = await db.getAgentWaitlistCount();
      return {
        totalSignups: total,
      };
    } catch (error) {
      return {
        totalSignups: 0,
      };
    }
  }),
});
