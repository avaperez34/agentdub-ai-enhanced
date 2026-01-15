import { z } from "zod";
import { publicProcedure, router } from "./_core/trpc";
import { getDb } from "./db";
import { waitlist } from "../drizzle/schema";
import { eq } from "drizzle-orm";

export const waitlistRouter = router({
  add: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        source: z.enum(["directory", "premium"]),
      })
    )
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) {
        throw new Error("Database not available");
      }

      try {
        // Check if email already exists
        const existing = await db
          .select()
          .from(waitlist)
          .where(eq(waitlist.email, input.email))
          .limit(1);

        if (existing.length > 0) {
          return { success: true, message: "Email already on waitlist" };
        }

        // Insert new waitlist entry
        await db.insert(waitlist).values({
          email: input.email,
          source: input.source,
        });

        return { success: true, message: "Added to waitlist" };
      } catch (error) {
        console.error("[Waitlist] Error adding email:", error);
        throw new Error("Failed to add to waitlist");
      }
    }),
});
