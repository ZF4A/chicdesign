import { createRouter, publicQuery } from "./middleware";
import { productRouter } from "./routers/product";
import { opportunityRouter } from "./routers/opportunity";

export const appRouter = createRouter({
  ping: publicQuery.query(() => ({ ok: true, ts: Date.now() })),
  product: productRouter,
  opportunity: opportunityRouter,
});

export type AppRouter = typeof appRouter;
