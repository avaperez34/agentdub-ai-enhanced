import { describe, it, expect } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

function createPublicContext(): TrpcContext {
  const ctx: TrpcContext = {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };

  return ctx;
}

describe("Agent Waitlist Router", () => {
  it("should signup a new agent waitlist subscriber", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.agentWaitlist.signup({
      email: `agent-test-${Date.now()}@example.com`,
      name: "Agent Tester",
      company: "Test Corp",
      interest: "predictive-analytics",
    });

    expect(result).toEqual({
      success: true,
      message: "Successfully joined the waitlist!",
    });
  });

  it("should reject duplicate email signup", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);
    const email = `duplicate-test-${Date.now()}@example.com`;

    // First signup
    await caller.agentWaitlist.signup({
      email,
      name: "First User",
      company: "Company A",
      interest: "general",
    });

    // Second signup with same email should fail
    try {
      await caller.agentWaitlist.signup({
        email,
        name: "Second User",
        company: "Company B",
        interest: "fraud-detection",
      });
      expect.fail("Should have thrown an error for duplicate email");
    } catch (error: any) {
      expect(error.message).toContain("already on the waitlist");
    }
  });

  it("should reject invalid email format", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.agentWaitlist.signup({
        email: "invalid-email",
        name: "Invalid Email User",
        company: "Test Corp",
        interest: "general",
      });
      expect.fail("Should have thrown an error for invalid email");
    } catch (error: any) {
      expect(error.message).toContain("Invalid email");
    }
  });

  it("should allow optional fields", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.agentWaitlist.signup({
      email: `minimal-test-${Date.now()}@example.com`,
      // name, company, and interest are optional
    });

    expect(result).toEqual({
      success: true,
      message: "Successfully joined the waitlist!",
    });
  });

  it("should get agent waitlist statistics", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const stats = await caller.agentWaitlist.getStats();

    expect(stats).toHaveProperty("totalSignups");
    expect(typeof stats.totalSignups).toBe("number");
    expect(stats.totalSignups).toBeGreaterThanOrEqual(0);
  });

  it("should retrieve all agent waitlist entries", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const entries = await caller.agentWaitlist.getAll();

    expect(Array.isArray(entries)).toBe(true);
    
    // Check that entries have expected structure
    if (entries.length > 0) {
      const entry = entries[0];
      expect(entry).toHaveProperty("email");
      expect(entry).toHaveProperty("createdAt");
      expect(typeof entry.email).toBe("string");
    }
  });

  it("should support different interest categories", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const interests = [
      "general",
      "predictive-analytics",
      "fraud-detection",
      "investment-optimization",
      "compliance",
      "other",
    ];

    for (const interest of interests) {
      const result = await caller.agentWaitlist.signup({
        email: `interest-${interest}-${Date.now()}-${Math.random()}@example.com`,
        interest,
      });

      expect(result.success).toBe(true);
    }
  });

  it("should store signup with all provided fields", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const email = `full-info-${Date.now()}@example.com`;
    const name = "Full Info User";
    const company = "Full Info Corp";
    const interest = "investment-optimization";

    const result = await caller.agentWaitlist.signup({
      email,
      name,
      company,
      interest,
    });

    expect(result.success).toBe(true);

    // Verify the entry was stored by retrieving all entries
    const entries = await caller.agentWaitlist.getAll();
    const storedEntry = entries.find((e: any) => e.email === email);

    expect(storedEntry).toBeDefined();
    expect(storedEntry?.name).toBe(name);
    expect(storedEntry?.company).toBe(company);
    expect(storedEntry?.interest).toBe(interest);
  });

  it("should handle signup with only email (minimal data)", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const email = `minimal-${Date.now()}@example.com`;
    const result = await caller.agentWaitlist.signup({
      email,
    });

    expect(result.success).toBe(true);

    // Verify the entry was stored
    const entries = await caller.agentWaitlist.getAll();
    const storedEntry = entries.find((e: any) => e.email === email);

    expect(storedEntry).toBeDefined();
    expect(storedEntry?.email).toBe(email);
    expect(storedEntry?.interest).toBe("general"); // Should default to general
  });
});
