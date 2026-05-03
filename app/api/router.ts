import { createRouter, publicQuery } from "./middleware";
import { productRouter } from "./routers/product";

export const appRouter = createRouter({
  ping: publicQuery.query(() => ({ ok: true, ts: Date.now() })),
  product: productRouter,
});

export type AppRouter = typeof appRouter;
