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
      name: "Plateau décoratif en résine",
      nameEn: "Decorative Resin Tray",
      description: "Plateau décoratif en résine. Matériau : Résine. Couleurs : Rose poudré, doré, nacré. Contenu : 1 plateau avec poignées dorées, surface lisse avec reflets nacrés. Dimensions : Moyen format (plateau de service). Style : Féminin, élégant.",
      descriptionEn: "Decorative resin tray. Material: Resin. Colors: Powder pink, gold, pearly. Includes: 1 tray with gold handles, smooth surface with pearly reflections. Medium size (serving tray). Style: Feminine, elegant.",
      price: 15000,
      category: "resin",
      image: "/images/product-1.jpg",
      stock: 20,
      featured: 1,
    },
    {
      name: "Sculpture couple + coupelle",
      nameEn: "Couple Sculpture + Dish",
      description: "Sculpture en gypsun. Matériau : Gypsun. Couleurs : Blanc mat, doré. Contenu : 1 sculpture couple enlacé, 1 coupelle coquillage doré, 1 plateau ovale perlé. Dimensions : Petit format (décoratif). Style : Romantique, mariage.",
      descriptionEn: "Gypsun sculpture. Material: Gypsun. Colors: Matte white, gold. Includes: 1 entwined couple sculpture, 1 golden shell dish, 1 pearled oval tray. Small decorative size. Style: Romantic, wedding.",
      price: 10000,
      category: "gypsum",
      image: "/images/product-2.jpg",
      stock: 8,
      featured: 1,
    },
    {
      name: "5 Dessous de verre en résine (forme coquillage)",
      nameEn: "5 Resin Coasters (Shell)",
      description: "5 dessous de verre en résine. Matériau : Résine. Couleurs : Blanc nacré, bordure dorée, fleurs séchées bleues turquoise. Contenu : 5 pièces avec inscription personnalisée, perles blanches intégrées. Dimensions : Petit format (sous-verre). Style : Mariage, événement, personnalisé.",
      descriptionEn: "5 resin coasters. Material: Resin. Colors: Pearly white, gold rim, turquoise dried flowers. Includes: 5 pieces with personalized inscription, embedded white pearls. Small size (coasters). Style: Wedding, event, personalized.",
      price: 5000,
      category: "resin",
      image: "/images/product-3.jpg",
      stock: 12,
      featured: 0,
    },
    {
      name: "2 pots décoratifs + bibelo + plateau",
      nameEn: "2 Decorative Pots + Trinket + Tray",
      description: "Ensemble décoratif en gypsun. Matériau : Gypsun. Couleurs : Blanc mat, jaune vif. Contenu : 1 vase tacheté, 1 vase empilé (3 anneaux), 1 coupelle, 1 plateau rond. Dimensions : Moyen format (ensemble déco). Style : Pop art, moderne.",
      descriptionEn: "Decorative set in gypsun. Material: Gypsun. Colors: Matte white, bright yellow. Includes: 1 speckled vase, 1 stacked vase (3 rings), 1 dish, 1 round tray. Medium size decor set. Style: Pop art, modern.",
      price: 25000,
      category: "gypsum",
      image: "/images/product-4.jpg",
      stock: 15,
      featured: 0,
    },
    {
      name: "Sol en résine (effet marbre liquide)",
      nameEn: "Resin Floor (Liquid Marble)",
      description: "Sol intérieur en résine effet marbre liquide. Matériau : Résine. Couleurs : Blanc cassé, gris perle, veinures argentées/noires. Contenu : Sol intérieur brillant avec effet marbré fluide, reflets lumineux. Dimensions : Surface au sol (grand format). Style : Contemporain, luxe. Surface: 10m^2.",
      descriptionEn: "Interior resin floor with liquid marble effect. Material: Resin. Colors: Off-white, pearl gray, silver/black veins. Includes: glossy floor with fluid marbling and luminous reflections. Surface: 10m^2. Style: Contemporary, luxury.",
      price: 1000000,
      category: "resin",
      image: "/images/product-5.jpg",
      stock: 6,
      featured: 1,
    },
    {
      name: "Sculpture couple + coupelle",
      nameEn: "Couple Sculpture + Dish",
      description: "Sculpture en gypsun. Matériau : Gypsun. Couleurs : Blanc mat, doré. Contenu : 1 sculpture couple enlacé, 1 coupelle coquillage doré, 1 plateau ovale perlé. Dimensions : Petit format (décoratif). Style : Romantique, mariage.",
      descriptionEn: "Gypsun sculpture. Material: Gypsun. Colors: Matte white, gold. Includes: 1 entwined couple sculpture, 1 golden shell dish, 1 pearled oval tray. Small decorative size. Style: Romantic, wedding.",
      price: 10000,
      category: "gypsum",
      image: "/images/product-6.jpg",
      stock: 10,
      featured: 0,
    },
    {
      name: "Vase double boule",
      nameEn: "Double Sphere Vase",
      description: "Vase original en gypsun. Matériau : Gypsun. Couleurs : Transparent. Contenu : 1 vase en forme de 2 sphères superposées. Dimensions : Moyen format (vase original). Style : Design, floral.",
      descriptionEn: "Original double-sphere vase in gypsun. Material: Gypsun. Colors: Transparent. Includes: 1 vase shaped as 2 stacked spheres. Medium size. Style: Design, floral.",
      price: 15000,
      category: "resin",
      image: "/images/product-7.jpg",
      stock: 18,
      featured: 0,
    },
    {
      name: "Pack rose marbré",
      nameEn: "Marbled Rose Pack",
      description: "Pack romantique en gypsun. Matériau : Gypsun. Couleurs : Rose poudré, blanc. Contenu : 1 vase avec rose artificielle, 1 pot couvercle festonné, 1 plateau ovale. Dimensions : Moyen format (ensemble déco). Style : Romantique, féminin.",
      descriptionEn: "Romantic gypsun pack. Material: Gypsun. Colors: Powder pink, white. Includes: 1 vase with artificial rose, 1 lidded scalloped pot, 1 oval tray. Medium decor set. Style: Romantic, feminine.",
      price: 10000,
      category: "gypsum",
      image: "/images/product-8.jpg",
      stock: 7,
      featured: 1,
    },
    {
      name: "Horloge murale en résine (style géode)",
      nameEn: "Geode Style Resin Wall Clock",
      description: "Horloge murale en résine style géode. Matériau : Résine. Couleurs : Blanc nacré, doré, transparent. Contenu : 1 horloge ronde avec bordure irrégulière en cristaux dorés, cadran blanc avec chiffres romains dorés, aiguilles dorées. Dimensions : Grand format (horloge murale). Style : Luxe, minéral.",
      descriptionEn: "Geode-style resin wall clock. Material: Resin. Colors: Pearly white, gold, transparent. Includes: 1 round clock with irregular crystal gold edge, white dial with gold roman numerals and gold hands. Large wall clock. Style: Luxury, mineral.",
      price: 25000,
      category: "resin",
      image: "/images/product-9.jpg",
      stock: 9,
      featured: 0,
    },
    {
      name: "1 Boîtes décorative + plateau + pot",
      nameEn: "Decorative Box + Tray + Pot",
      description: "Ensemble salle de bain/dressing en gypsun. Matériau : Gypsun. Couleurs : Rose poudré, gris marbré. Contenu : 1 boîte couvercle festonné, 1 vase/bouteille côtelé, 1 plateau ovale. Dimensions : Moyen format (ensemble salle de bain/dressing). Style : Romantique, doux.",
      descriptionEn: "Bathroom/dressing deco set in gypsun. Material: Gypsun. Colors: Powder pink, marble gray. Includes: 1 scalloped lid box, 1 ribbed vase/bottle, 1 oval tray. Medium size. Style: Romantic, soft.",
      price: 10000,
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
