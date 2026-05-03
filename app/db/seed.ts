import { getDb } from "../api/queries/connection";
import { products } from "./schema";

async function seed() {
  const db = getDb();
  
  const existing = await db.select().from(products);
  if (existing.length > 0) {
    console.log("Products already seeded, skipping...");
    return;
  }

  const seedProducts = [
    {
      name: "Dessous de Verre Résine Géode",
      nameEn: "Resin Geode Coasters",
      description: "Set de 4 dessous de verre en résine avec motifs géode, paillettes dorées et cristaux. Uniques et faits main.",
      descriptionEn: "Set of 4 resin coasters with geode patterns, gold glitter and crystals. Unique and handmade.",
      price: 8500,
      category: "resin",
      image: "/images/product-1.jpg",
      stock: 20,
      featured: 1,
    },
    {
      name: "Lampe Sculpture Plâtre",
      nameEn: "Gypsum Sculptural Lamp",
      description: "Lampe de table sculpturale en plâtre avec design organique moderne. Lumière ambiante chaleureuse.",
      descriptionEn: "Sculptural gypsum table lamp with organic modern design. Warm ambient light.",
      price: 45000,
      category: "gypsum",
      image: "/images/product-2.jpg",
      stock: 8,
      featured: 1,
    },
    {
      name: "Plateau Résine Feuille d'Or",
      nameEn: "Gold Leaf Resin Tray",
      description: "Plateau décoratif en résine avec feuilles d'or et fleurs séchées incorporées. Élégant et fonctionnel.",
      descriptionEn: "Decorative resin tray with gold leaf and embedded dried flowers. Elegant and functional.",
      price: 22000,
      category: "resin",
      image: "/images/product-3.jpg",
      stock: 12,
      featured: 0,
    },
    {
      name: "Serre-Livres Plâtre Brut",
      nameEn: "Raw Gypsum Bookends",
      description: "Paire de serre-livres en plâtre brut avec texture naturelle et faces polies. Design minimaliste.",
      descriptionEn: "Pair of raw gypsum bookends with natural texture and polished faces. Minimalist design.",
      price: 18000,
      category: "gypsum",
      image: "/images/product-4.jpg",
      stock: 15,
      featured: 0,
    },
    {
      name: "Vase Résine Fleurs Séchées",
      nameEn: "Resin Vase with Dried Flowers",
      description: "Vase cylindrique en résine transparente avec vraies fleurs séchées incorporées. Pièce unique.",
      descriptionEn: "Cylindrical vase in clear resin with real embedded dried flowers. Unique piece.",
      price: 35000,
      category: "resin",
      image: "/images/product-5.jpg",
      stock: 6,
      featured: 1,
    },
    {
      name: "Plaque Murale Plâtre Relief",
      nameEn: "Gypsum Relief Wall Plate",
      description: "Plaque murale ronde en plâtre avec motifs en relief inspirés de l'art classique. Finition mate.",
      descriptionEn: "Round gypsum wall plate with relief patterns inspired by classical art. Matte finish.",
      price: 15000,
      category: "gypsum",
      image: "/images/product-6.jpg",
      stock: 10,
      featured: 0,
    },
    {
      name: "Cadre Photo Résine Botanique",
      nameEn: "Botanical Resin Photo Frame",
      description: "Cadre photo en résine transparente avec feuilles et fleurs séchées incorporées. Style bohème chic.",
      descriptionEn: "Photo frame in clear resin with embedded dried leaves and flowers. Boho chic style.",
      price: 12000,
      category: "resin",
      image: "/images/product-7.jpg",
      stock: 18,
      featured: 0,
    },
    {
      name: "Statuette Plâtre Moderne",
      nameEn: "Modern Gypsum Statuette",
      description: "Statuette abstraite en plâtre blanc mat, forme humaine stylisée. Objet d'art contemporain.",
      descriptionEn: "Abstract white matte gypsum statuette, stylized human form. Contemporary art object.",
      price: 28000,
      category: "gypsum",
      image: "/images/product-8.jpg",
      stock: 7,
      featured: 1,
    },
    {
      name: "Boîte à Bijoux Résine Luxe",
      nameEn: "Luxury Resin Jewelry Box",
      description: "Boîte à bijoux rectangulaire en résine transparente avec perles et feuilles d'or incorporées.",
      descriptionEn: "Rectangular jewelry box in clear resin with embedded pearls and gold leaf.",
      price: 20000,
      category: "resin",
      image: "/images/product-9.jpg",
      stock: 9,
      featured: 0,
    },
    {
      name: "Horloge Murale Plâtre",
      nameEn: "Gypsum Wall Clock",
      description: "Horloge murale en plâtre blanc avec cadre sculpté torsadé. Design moderne et élégant.",
      descriptionEn: "White gypsum wall clock with twisted sculpted frame. Modern and elegant design.",
      price: 38000,
      category: "gypsum",
      image: "/images/product-10.jpg",
      stock: 5,
      featured: 1,
    },
  ];

  for (const product of seedProducts) {
    await db.insert(products).values(product);
  }

  console.log(`Seeded ${seedProducts.length} products.`);
}

seed().catch(console.error);
