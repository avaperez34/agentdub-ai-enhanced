import { eq, and } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, subscriptionPlans, subscriptions, subscriptionHistory, InsertSubscription, InsertSubscriptionHistory, agentWaitlist, InsertAgentWaitlist } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

export async function getSubscriptionPlans() {
  const db = await getDb();
  if (!db) return [];
  try {
    return await db.select().from(subscriptionPlans).where(eq(subscriptionPlans.isActive, 1)).orderBy(subscriptionPlans.priority);
  } catch (error) {
    console.error("[Database] Failed to get subscription plans:", error);
    return [];
  }
}

export async function getUserSubscriptions(userId: number) {
  const db = await getDb();
  if (!db) return [];
  try {
    return await db.select().from(subscriptions).where(eq(subscriptions.userId, userId));
  } catch (error) {
    console.error("[Database] Failed to get user subscriptions:", error);
    return [];
  }
}

export async function getActiveSubscription(userId: number) {
  const db = await getDb();
  if (!db) return undefined;
  try {
    const result = await db.select().from(subscriptions).where(and(eq(subscriptions.userId, userId), eq(subscriptions.status, "active"))).limit(1);
    return result.length > 0 ? result[0] : undefined;
  } catch (error) {
    console.error("[Database] Failed to get active subscription:", error);
    return undefined;
  }
}

export async function createSubscription(data: InsertSubscription) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  try {
    return await db.insert(subscriptions).values(data);
  } catch (error) {
    console.error("[Database] Failed to create subscription:", error);
    throw error;
  }
}

export async function createSubscriptionHistory(data: InsertSubscriptionHistory) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  try {
    return await db.insert(subscriptionHistory).values(data);
  } catch (error) {
    console.error("[Database] Failed to create subscription history:", error);
    throw error;
  }
}

export async function addToAgentWaitlist(data: InsertAgentWaitlist) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  try {
    return await db.insert(agentWaitlist).values(data);
  } catch (error) {
    console.error("[Database] Failed to add to agent waitlist:", error);
    throw error;
  }
}

export async function getAgentWaitlistByEmail(email: string) {
  const db = await getDb();
  if (!db) return undefined;
  try {
    const result = await db.select().from(agentWaitlist).where(eq(agentWaitlist.email, email)).limit(1);
    return result.length > 0 ? result[0] : undefined;
  } catch (error) {
    console.error("[Database] Failed to get agent waitlist entry:", error);
    return undefined;
  }
}

export async function getAgentWaitlistCount() {
  const db = await getDb();
  if (!db) return 0;
  try {
    const result = await db.select().from(agentWaitlist);
    return result.length;
  } catch (error) {
    console.error("[Database] Failed to get agent waitlist count:", error);
    return 0;
  }
}
