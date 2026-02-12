import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { waitlistRouter } from "./waitlist";
import { shortLinksRouter } from "./shortLinks";
import { analytics404Router } from "./analytics404";
import { domainInquiriesRouter } from "./domainInquiries";
import { subscriptionsRouter } from "./subscriptions";
import { agentWaitlistRouter } from "./agentWaitlist";
import { publicProcedure, router } from "./_core/trpc";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  waitlist: waitlistRouter,
  agentWaitlist: agentWaitlistRouter,
  shortLinks: shortLinksRouter,
  analytics404: analytics404Router,
  domainInquiries: domainInquiriesRouter,
  subscriptions: subscriptionsRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // TODO: add feature routers here, e.g.
  // todo: router({
  //   list: protectedProcedure.query(({ ctx }) =>
  //     db.getUserTodos(ctx.user.id)
  //   ),
  // }),
});

export type AppRouter = typeof appRouter;
