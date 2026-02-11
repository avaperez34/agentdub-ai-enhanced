import { z } from "zod";
import { publicProcedure, router } from "./_core/trpc";
import { getDb } from "./db";
import { waitlist } from "../drizzle/schema";
import { eq } from "drizzle-orm";
import { notifyOwner } from "./_core/notification";

export const waitlistRouter = router({
  getAll: publicProcedure
    .query(async () => {
      const db = await getDb();
      if (!db) {
        throw new Error("Database not available");
      }
      return await db.select().from(waitlist).orderBy(waitlist.createdAt);
    }),

  add: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        source: z.enum(["directory", "premium", "news", "dashboard"]),
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

        // Send confirmation email to subscriber (placeholder for email service integration)
        try {
          console.log(`[Waitlist] Confirmation email would be sent to: ${input.email}`);
          // In production, integrate with SendGrid, Mailgun, or other email service
          // Example: await sendEmail({
          //   to: input.email,
          //   subject: "Welcome to agentdub.ai Waitlist",
          //   template: "waitlist-confirmation",
          //   data: { email: input.email, source: input.source }
          // });
        } catch (emailError) {
          console.error("[Waitlist] Failed to send confirmation email:", emailError);
        }

        // Notify owner of new waitlist signup
        try {
          await notifyOwner({
            title: "New Waitlist Signup - agentdub.ai",
            content: `New subscriber joined the waitlist!\n\nEmail: ${input.email}\nSource: ${input.source}\nTime: ${new Date().toISOString()}`
          });
        } catch (notificationError) {
          console.error("[Waitlist] Failed to notify owner:", notificationError);
        }

        return { success: true, message: "Added to waitlist" };
      } catch (error) {
        console.error("[Waitlist] Error adding email:", error);
        throw new Error("Failed to add to waitlist");
      }
    }),
});
