import { describe, it, expect, vi, beforeEach } from "vitest";
import { subscriptionsRouter } from "./subscriptions";
import * as db from "./db";

// Mock the database functions
vi.mock("./db", () => ({
  getSubscriptionPlans: vi.fn(),
  getUserSubscriptions: vi.fn(),
  getActiveSubscription: vi.fn(),
  createSubscription: vi.fn(),
  createSubscriptionHistory: vi.fn(),
}));

describe("Subscriptions Router", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("listPlans", () => {
    it("should return available subscription plans", async () => {
      const mockPlans = [
        {
          id: 1,
          name: "Starter",
          description: "Basic plan",
          price: "29.99",
          billingCycle: "monthly",
          features: ["Feature 1", "Feature 2"],
          maxSignals: 10,
          maxExports: 5,
          priority: 0,
          isActive: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      vi.mocked(db.getSubscriptionPlans).mockResolvedValue(mockPlans as any);

      const result = await subscriptionsRouter.createCaller({} as any).listPlans();
      expect(result).toEqual(mockPlans);
    });
  });

  describe("getUserSubscriptions", () => {
    it("should return user subscriptions when authenticated", async () => {
      const mockSubscriptions = [
        {
          id: 1,
          userId: 123,
          planId: 1,
          status: "active",
          startDate: new Date(),
          endDate: null,
          renewalDate: new Date(),
          autoRenew: 1,
          signalsUsedThisMonth: 5,
          exportsUsedThisMonth: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      vi.mocked(db.getUserSubscriptions).mockResolvedValue(mockSubscriptions as any);

      const caller = subscriptionsRouter.createCaller({
        user: { id: 123, name: "Test User", email: "test@example.com", role: "user" },
      } as any);

      const result = await caller.getUserSubscriptions();
      expect(result).toEqual(mockSubscriptions);
      expect(db.getUserSubscriptions).toHaveBeenCalledWith(123);
    });
  });

  describe("getActiveSubscription", () => {
    it("should return active subscription for user", async () => {
      const mockSubscription = {
        id: 1,
        userId: 123,
        planId: 1,
        status: "active",
        startDate: new Date(),
        endDate: null,
        renewalDate: new Date(),
        autoRenew: 1,
        signalsUsedThisMonth: 5,
        exportsUsedThisMonth: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      vi.mocked(db.getActiveSubscription).mockResolvedValue(mockSubscription as any);

      const caller = subscriptionsRouter.createCaller({
        user: { id: 123, name: "Test User", email: "test@example.com", role: "user" },
      } as any);

      const result = await caller.getActiveSubscription();
      expect(result).toEqual(mockSubscription);
      expect(db.getActiveSubscription).toHaveBeenCalledWith(123);
    });
  });
});
