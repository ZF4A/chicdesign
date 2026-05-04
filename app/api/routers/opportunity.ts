import { z } from "zod";
import { createRouter, publicQuery } from "../middleware";
import { getDb } from "../../api/queries/connection";
import { opportunities } from "@db/schema";
import { eq, gt, sql } from "drizzle-orm";

export const opportunityRouter = createRouter({
  // list only active opportunities (not expired)
  list: publicQuery.query(async () => {
    const db = getDb();
    const now = new Date();
    const rows = await db.select().from(opportunities).where(gt(opportunities.expiresAt, now)).orderBy(opportunities.createdAt);
    return rows;
  }),

  // summary counts for active opportunities
  summary: publicQuery.query(async () => {
    const db = getDb();
    const now = new Date();
    const rows = await db.select().from(opportunities).where(gt(opportunities.expiresAt, now));
    const totals = rows.reduce(
      (acc, r) => {
        acc.views += r.views || 0;
        acc.applications += r.applications || 0;
        acc.conversions += r.conversions || 0;
        return acc;
      },
      { views: 0, applications: 0, conversions: 0 }
    );
    return {
      ...totals,
      activeListings: rows.length,
    };
  }),

  // increment counters for metrics
  incrementView: publicQuery
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      const db = getDb();
      await db.update(opportunities).set({ views: sql`${opportunities.views} + 1` }).where(eq(opportunities.id, input.id));
      return { success: true };
    }),

  incrementApplication: publicQuery
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      const db = getDb();
      await db.update(opportunities).set({ applications: sql`${opportunities.applications} + 1` }).where(eq(opportunities.id, input.id));
      return { success: true };
    }),

  incrementConversion: publicQuery
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      const db = getDb();
      await db.update(opportunities).set({ conversions: sql`${opportunities.conversions} + 1` }).where(eq(opportunities.id, input.id));
      return { success: true };
    }),

  create: publicQuery
    .input(
      z.object({
        title: z.string().min(1),
        description: z.string().optional(),
        expiresAt: z.string(), // ISO date string
      })
    )
    .mutation(async ({ input }) => {
      const db = getDb();
      const result = await db.insert(opportunities).values({
        title: input.title,
        description: input.description || null,
        expiresAt: new Date(input.expiresAt),
      });
      return result;
    }),
});
