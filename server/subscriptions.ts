import { z } from "zod";
import { protectedProcedure, publicProcedure, router } from "./_core/trpc";
import {
  getSubscriptionPlans,
  getUserSubscriptions,
  getActiveSubscription,
  createSubscription,
  createSubscriptionHistory,
} from "./db";

export const subscriptionsRouter = router({
  // Get all available subscription plans
  listPlans: publicProcedure.query(async () => {
    const plans = await getSubscriptionPlans();
    return plans;
  }),

  // Get current user's subscriptions
  getUserSubscriptions: protectedProcedure.query(async ({ ctx }) => {
    const subscriptions = await getUserSubscriptions(ctx.user.id);
    return subscriptions;
  }),

  // Get user's active subscription
  getActiveSubscription: protectedProcedure.query(async ({ ctx }) => {
    const subscription = await getActiveSubscription(ctx.user.id);
    return subscription;
  }),

  // Create a new subscription
  createSubscription: protectedProcedure
    .input(
      z.object({
        planId: z.number().int().positive(),
        autoRenew: z.boolean().default(true),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        const now = new Date();
        const renewalDate = new Date();
        renewalDate.setMonth(renewalDate.getMonth() + 1);

        // Create subscription
        const result = await createSubscription({
          userId: ctx.user.id,
          planId: input.planId,
          status: "active",
          startDate: now,
          renewalDate,
          autoRenew: input.autoRenew ? 1 : 0,
        });

        // Get the subscription ID from the result
        const subscriptionId = (result as any)?.insertId || (result as any)?.[0]?.id || 1;

        // Create history record
        await createSubscriptionHistory({
          subscriptionId: subscriptionId as number,
          userId: ctx.user.id,
          action: "created",
          newPlanId: input.planId,
          notes: "Subscription created by user",
        });

        return {
          success: true,
          subscriptionId,
        };
      } catch (error) {
        console.error("[Subscriptions] Failed to create subscription:", error);
        throw new Error("Failed to create subscription");
      }
    }),

  // Cancel a subscription
  cancelSubscription: protectedProcedure
    .input(z.object({ subscriptionId: z.number().int().positive() }))
    .mutation(async ({ ctx, input }) => {
      try {
        // Verify ownership
        const subs = await getUserSubscriptions(ctx.user.id);
        const subscription = subs.find((s) => s.id === input.subscriptionId);

        if (!subscription) {
          throw new Error("Subscription not found");
        }

        // Create history record
        await createSubscriptionHistory({
          subscriptionId: input.subscriptionId,
          userId: ctx.user.id,
          action: "cancelled",
          previousPlanId: subscription.planId,
          notes: "Subscription cancelled by user",
        })

        return { success: true };
      } catch (error) {
        console.error("[Subscriptions] Failed to cancel subscription:", error);
        throw new Error("Failed to cancel subscription");
      }
    }),
});
