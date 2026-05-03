import { z } from "zod";
import { createRouter, publicQuery } from "../middleware";
import { getDb } from "../../api/queries/connection";
import { products } from "@db/schema";
import { eq } from "drizzle-orm";

export const productRouter = createRouter({
  list: publicQuery.query(async () => {
    const db = getDb();
    return db.select().from(products).orderBy(products.createdAt);
  }),

  getById: publicQuery
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      const db = getDb();
      const rows = await db.select().from(products).where(eq(products.id, input.id));
      return rows[0] ?? null;
    }),

  create: publicQuery
    .input(
      z.object({
        name: z.string().min(1),
        nameEn: z.string().optional(),
        description: z.string().optional(),
        descriptionEn: z.string().optional(),
        price: z.number().min(0),
        category: z.string().min(1),
        image: z.string().min(1),
        stock: z.number().min(0).default(10),
        featured: z.number().min(0).max(1).default(0),
      })
    )
    .mutation(async ({ input }) => {
      const db = getDb();
      const result = await db.insert(products).values({
        name: input.name,
        nameEn: input.nameEn || null,
        description: input.description || null,
        descriptionEn: input.descriptionEn || null,
        price: input.price,
        category: input.category,
        image: input.image,
        stock: input.stock,
        featured: input.featured,
      });
      return result;
    }),

  update: publicQuery
    .input(
      z.object({
        id: z.number(),
        name: z.string().min(1),
        nameEn: z.string().optional(),
        description: z.string().optional(),
        descriptionEn: z.string().optional(),
        price: z.number().min(0),
        category: z.string().min(1),
        image: z.string().min(1),
        stock: z.number().min(0),
        featured: z.number().min(0).max(1),
      })
    )
    .mutation(async ({ input }) => {
      const db = getDb();
      const { id, ...data } = input;
      await db
        .update(products)
        .set({
          ...data,
          nameEn: data.nameEn || null,
          description: data.description || null,
          descriptionEn: data.descriptionEn || null,
          updatedAt: new Date(),
        })
        .where(eq(products.id, id));
      return { success: true };
    }),

  delete: publicQuery
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      const db = getDb();
      await db.delete(products).where(eq(products.id, input.id));
      return { success: true };
    }),
});
