import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

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
