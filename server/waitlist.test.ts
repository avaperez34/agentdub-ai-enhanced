import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { appRouter } from "./routers";
import { getDb } from "./db";
import { waitlist } from "../drizzle/schema";
import { eq } from "drizzle-orm";

describe("Waitlist Router", () => {
  let caller: ReturnType<typeof appRouter.createCaller>;
  let db: Awaited<ReturnType<typeof getDb>>;

  beforeAll(async () => {
    db = await getDb();
    if (!db) {
      throw new Error("Database not available for testing");
    }

    // Create a caller without authentication context (public procedures)
    caller = appRouter.createCaller({
      user: null,
      req: {} as any,
      res: {} as any,
    });

    // Clean up test data
    await db.delete(waitlist).where(eq(waitlist.email, "test@example.com"));
    await db.delete(waitlist).where(eq(waitlist.email, "test2@example.com"));
  });

  afterAll(async () => {
    // Clean up test data
    if (db) {
      await db.delete(waitlist).where(eq(waitlist.email, "test@example.com"));
      await db.delete(waitlist).where(eq(waitlist.email, "test2@example.com"));
    }
  });

  it("should add email to waitlist with directory source", async () => {
    const result = await caller.waitlist.add({
      email: "test@example.com",
      source: "directory",
    });

    expect(result.success).toBe(true);
    expect(result.message).toContain("Added to waitlist");

    // Verify in database
    const entries = await db!.select().from(waitlist).where(eq(waitlist.email, "test@example.com"));
    expect(entries.length).toBe(1);
    expect(entries[0].email).toBe("test@example.com");
    expect(entries[0].source).toBe("directory");
  });

  it("should add email to waitlist with premium source", async () => {
    const result = await caller.waitlist.add({
      email: "test2@example.com",
      source: "premium",
    });

    expect(result.success).toBe(true);
    expect(result.message).toContain("Added to waitlist");

    // Verify in database
    const entries = await db!.select().from(waitlist).where(eq(waitlist.email, "test2@example.com"));
    expect(entries.length).toBe(1);
    expect(entries[0].source).toBe("premium");
  });

  it("should handle duplicate email gracefully", async () => {
    // First submission
    await caller.waitlist.add({
      email: "test@example.com",
      source: "directory",
    });

    // Duplicate submission
    const result = await caller.waitlist.add({
      email: "test@example.com",
      source: "premium", // Different source, same email
    });

    expect(result.success).toBe(true);
    expect(result.message).toContain("already on waitlist");

    // Verify only one entry exists
    const entries = await db!.select().from(waitlist).where(eq(waitlist.email, "test@example.com"));
    expect(entries.length).toBe(1);
  });

  it("should reject invalid email format", async () => {
    await expect(
      caller.waitlist.add({
        email: "not-an-email",
        source: "directory",
      })
    ).rejects.toThrow();
  });

  it("should reject invalid source", async () => {
    await expect(
      caller.waitlist.add({
        email: "test@example.com",
        // @ts-expect-error Testing invalid source
        source: "invalid",
      })
    ).rejects.toThrow();
  });
});
