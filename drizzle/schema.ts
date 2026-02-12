import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, decimal, json } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// TODO: Add your tables here
/**
 * Waitlist table for collecting email signups
 * Tracks users interested in Directory full launch and Premium subscriptions
 */
export const waitlist = mysqlTable("waitlist", {
  id: int("id").autoincrement().primaryKey(),
  email: varchar("email", { length: 320 }).notNull().unique(),
  source: varchar("source", { length: 64 }).notNull(), // 'directory' or 'premium'
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type Waitlist = typeof waitlist.$inferSelect;
export type InsertWaitlist = typeof waitlist.$inferInsert;

/**
 * Short links table for custom URL shortener (agentdub.ai/s/[slug])
 * Enables tracking and control of shared links on social media
 */
export const shortLinks = mysqlTable("short_links", {
  id: int("id").autoincrement().primaryKey(),
  slug: varchar("slug", { length: 32 }).notNull().unique(), // Short identifier (e.g., "gcc-ai")
  targetUrl: text("target_url").notNull(), // Full destination URL
  title: varchar("title", { length: 255 }), // Optional title for management UI
  description: text("description"), // Optional description
  clicks: int("clicks").default(0).notNull(), // Click counter
  createdBy: int("created_by"), // User ID who created the link (optional)
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type ShortLink = typeof shortLinks.$inferSelect;
export type InsertShortLink = typeof shortLinks.$inferInsert;

/**
 * 404 error logs for analytics and debugging
 * Tracks broken links to identify patterns and fix issues
 */
export const error404Logs = mysqlTable("error_404_logs", {
  id: int("id").autoincrement().primaryKey(),
  requestedUrl: text("requested_url").notNull(), // The URL that returned 404
  referrer: text("referrer"), // Where the user came from
  userAgent: text("user_agent"), // Browser/device info
  suggestedUrl: text("suggested_url"), // Auto-suggested correction (if any)
  wasRedirected: int("was_redirected").default(0).notNull(), // 1 if user clicked suggestion, 0 otherwise
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type Error404Log = typeof error404Logs.$inferSelect;
export type InsertError404Log = typeof error404Logs.$inferInsert;

/**
 * Domain inquiries table for premium domain purchase requests
 * Stores contact information from users interested in buying domains
 */
export const domainInquiries = mysqlTable("domain_inquiries", {
  id: int("id").autoincrement().primaryKey(),
  domain: varchar("domain", { length: 255 }).notNull(), // Domain name (e.g., "ksaudi.com")
  name: varchar("name", { length: 255 }).notNull(), // Inquirer's name
  email: varchar("email", { length: 320 }).notNull(), // Inquirer's email
  message: text("message"), // Optional message from inquirer
  status: mysqlEnum("status", ["new", "contacted", "negotiating", "sold", "declined"]).default("new").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type DomainInquiry = typeof domainInquiries.$inferSelect;
export type InsertDomainInquiry = typeof domainInquiries.$inferInsert;

/**
 * Subscription plans table
 * Defines available subscription tiers for clients
 */
export const subscriptionPlans = mysqlTable("subscription_plans", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 100 }).notNull(), // e.g., "Starter", "Professional", "Enterprise"
  description: text("description"), // Plan description
  price: decimal("price", { precision: 10, scale: 2 }).notNull(), // Monthly price
  billingCycle: mysqlEnum("billing_cycle", ["monthly", "annual"]).default("monthly").notNull(),
  features: json("features").$type<string[]>().notNull(), // Array of feature strings
  maxSignals: int("max_signals"), // Max signals accessible per month (null = unlimited)
  maxExports: int("max_exports"), // Max file exports per month (null = unlimited)
  priority: int("priority").default(0).notNull(), // Display order
  isActive: int("is_active").default(1).notNull(), // 1 = active, 0 = archived
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type SubscriptionPlan = typeof subscriptionPlans.$inferSelect;
export type InsertSubscriptionPlan = typeof subscriptionPlans.$inferInsert;

/**
 * Subscriptions table
 * Tracks active subscriptions for users
 */
export const subscriptions = mysqlTable("subscriptions", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  planId: int("plan_id").notNull().references(() => subscriptionPlans.id),
  status: mysqlEnum("status", ["active", "paused", "cancelled", "expired"]).default("active").notNull(),
  startDate: timestamp("start_date").notNull(),
  endDate: timestamp("end_date"), // null = ongoing
  renewalDate: timestamp("renewal_date"), // Next renewal date
  autoRenew: int("auto_renew").default(1).notNull(), // 1 = auto-renew, 0 = manual
  signalsUsedThisMonth: int("signals_used_this_month").default(0).notNull(),
  exportsUsedThisMonth: int("exports_used_this_month").default(0).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Subscription = typeof subscriptions.$inferSelect;
export type InsertSubscription = typeof subscriptions.$inferInsert;

/**
 * Subscription history table
 * Tracks all subscription changes for audit trail
 */
export const subscriptionHistory = mysqlTable("subscription_history", {
  id: int("id").autoincrement().primaryKey(),
  subscriptionId: int("subscription_id").notNull().references(() => subscriptions.id, { onDelete: "cascade" }),
  userId: int("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  action: mysqlEnum("action", ["created", "upgraded", "downgraded", "renewed", "cancelled", "paused", "resumed"]).notNull(),
  previousPlanId: int("previous_plan_id").references(() => subscriptionPlans.id),
  newPlanId: int("new_plan_id").references(() => subscriptionPlans.id),
  notes: text("notes"), // Additional context
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type SubscriptionHistory = typeof subscriptionHistory.$inferSelect;
export type InsertSubscriptionHistory = typeof subscriptionHistory.$inferInsert;

/**
 * Agent waitlist table
 * Collects email signups for the Sovereign AI Agent launch
 */
export const agentWaitlist = mysqlTable("agent_waitlist", {
  id: int("id").autoincrement().primaryKey(),
  email: varchar("email", { length: 320 }).notNull(),
  name: varchar("name", { length: 255 }),
  company: varchar("company", { length: 255 }),
  interest: varchar("interest", { length: 255 }), // e.g., "predictive-analytics", "fraud-detection", "general"
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type AgentWaitlist = typeof agentWaitlist.$inferSelect;
export type InsertAgentWaitlist = typeof agentWaitlist.$inferInsert;
