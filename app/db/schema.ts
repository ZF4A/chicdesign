import {
  mysqlTable,
  serial,
  varchar,
  text,
  int,
  timestamp,
} from "drizzle-orm/mysql-core";

export const products = mysqlTable("products", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  nameEn: varchar("name_en", { length: 255 }),
  description: text("description"),
  descriptionEn: text("description_en"),
  price: int("price").notNull(),
  category: varchar("category", { length: 100 }).notNull(),
  image: varchar("image", { length: 500 }).notNull(),
  stock: int("stock").notNull().default(10),
  featured: int("featured").notNull().default(0),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow().onUpdateNow(),
});

export type Product = typeof products.$inferSelect;
export type NewProduct = typeof products.$inferInsert;

