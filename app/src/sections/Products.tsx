import { useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import { trpc } from "@/providers/trpc";
import { translations } from "@/lib/translations";
import { motion, useInView } from "framer-motion";
import { ShoppingCart, MessageCircle } from "lucide-react";

interface ProductItem {
  id: number;
  name: string;
  nameEn?: string | null;
  price: number;
  category: string;
  image: string;
  stock: number;
  featured: number;
}

const fallbackProducts: ProductItem[] = [
  { id: 1, name: "Plateau décoratif en résine", nameEn: "Decorative Resin Tray", price: 15000, category: "resin", image: "/images/1.jpg", stock: 20, featured: 1 },
  { id: 2, name: "Sculpture couple + coupelle", nameEn: "Couple Sculpture + Dish", price: 10000, category: "gypsum", image: "/images/2.jpg", stock: 8, featured: 1 },
  { id: 3, name: "5 Dessous de verre en résine (forme coquillage)", nameEn: "5 Resin Coasters (Shell)", price: 5000, category: "resin", image: "/images/3.jpg", stock: 12, featured: 0 },
  { id: 4, name: "2 pots décoratifs + bibelo + plateau", nameEn: "2 Decorative Pots + Trinket + Tray", price: 25000, category: "gypsum", image: "/images/4.jpg", stock: 15, featured: 0 },
  { id: 5, name: "Sol en résine (effet marbre liquide)", nameEn: "Resin Floor (Liquid Marble)", price: 1000000, category: "resin", image: "/images/5.jpg", stock: 6, featured: 1 },
  { id: 6, name: "Sculpture couple + coupelle", nameEn: "Couple Sculpture + Dish", price: 10000, category: "gypsum", image: "/images/6.jpg", stock: 10, featured: 0 },
  { id: 7, name: "Vase double boule", nameEn: "Double Sphere Vase", price: 15000, category: "resin", image: "/images/7.jpg", stock: 18, featured: 0 },
  { id: 8, name: "Pack rose marbré", nameEn: "Marbled Rose Pack", price: 10000, category: "gypsum", image: "/images/8.jpg", stock: 7, featured: 1 },
  { id: 9, name: "Horloge murale en résine (style géode)", nameEn: "Geode Style Resin Wall Clock", price: 25000, category: "resin", image: "/images/9.jpg", stock: 9, featured: 0 },
  { id: 10, name: "1 Boîtes décorative + plateau + pot", nameEn: "Decorative Box + Tray + Pot", price: 10000, category: "gypsum", image: "/images/10.jpg", stock: 5, featured: 1 },
];

function TiltCard({
  product,
  lang,
  onAdd,
  index,
}: {
  product: ProductItem;
  lang: "fr" | "en";
  onAdd: () => void;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const t = translations[lang];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
  };

  const orderViaWhatsApp = () => {
    const name = lang === "fr" ? product.name : product.nameEn || product.name;
    const message = `Hello Chic Design,\nI am interested in:\n- ${name}\nPrice: ${product.price.toLocaleString()} ${t.xaf}\n\nPlease contact me.`;
    window.open(`https://wa.me/237699901793?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, rotateX: 20 }}
      whileInView={{ opacity: 1, rotateX: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative bg-[#F7F7F7] dark:bg-[#1a1a1a] overflow-hidden transition-shadow duration-500 hover:shadow-[0_12px_24px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_12px_24px_rgba(0,0,0,0.4)]"
        style={{ transformStyle: "preserve-3d", transition: "transform 0.15s ease-out" }}
      >
        {/* Image */}
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={lang === "fr" ? product.name : product.nameEn || product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-3">
            <button
              onClick={onAdd}
              className="flex items-center gap-2 px-4 py-2 bg-white text-[#111] text-xs uppercase tracking-[0.1em] font-medium hover:bg-[#BFA45A] hover:text-white transition-colors"
            >
              <ShoppingCart size={14} />
              {t.addToCart}
            </button>
            <button
              onClick={orderViaWhatsApp}
              className="flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white text-xs uppercase tracking-[0.1em] font-medium hover:bg-[#1ebd5a] transition-colors"
            >
              <MessageCircle size={14} />
              {t.orderWhatsApp}
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="p-4">
          <span className="text-[10px] uppercase tracking-[0.15em] text-[#BFA45A] font-medium">
            {product.category === "resin" ? t.categoryResin : t.categoryGypsum}
          </span>
          <h3 className="text-sm font-medium text-[#111] dark:text-white mt-1 line-clamp-1">
            {lang === "fr" ? product.name : product.nameEn || product.name}
          </h3>
          <p className="text-sm text-[#555] dark:text-[#aaa] mt-1">
            {product.price.toLocaleString()} {t.xaf}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Products() {
  const { lang } = useLanguage();
  const { addItem } = useCart();
  const t = translations[lang];
  const [filter, setFilter] = useState<"all" | "resin" | "gypsum">("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { data: apiProducts } = trpc.product.list.useQuery();
  const products: ProductItem[] = apiProducts && apiProducts.length > 0 ? apiProducts.map(p => ({
    id: p.id,
    name: p.name,
    nameEn: p.nameEn,
    price: p.price,
    category: p.category,
    image: p.image,
    stock: p.stock,
    featured: p.featured,
  })) : fallbackProducts;

  const filtered =
    filter === "all" ? products : products.filter((p) => p.category === filter);

  return (
    <section id="products" className="py-24 lg:py-32 bg-white dark:bg-[#0a0a0a]">
      <div ref={ref} className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="font-['Space_Grotesk'] text-[clamp(32px,5vw,64px)] font-medium text-[#111] dark:text-white tracking-[-0.03em]">
            {t.productsTitle}
          </h2>
          <p className="text-sm text-[#555] dark:text-[#aaa] mt-3">{t.productsSubtitle}</p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-10"
        >
          {(["all", "resin", "gypsum"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-xs uppercase tracking-[0.12em] transition-all duration-300 ${
                filter === cat
                  ? "bg-[#111] dark:bg-white text-white dark:text-[#111]"
                  : "text-[#555] dark:text-[#aaa] hover:text-[#111] dark:hover:text-white border border-gray-200 dark:border-gray-800"
              }`}
            >
              {cat === "all" ? t.categoryAll : cat === "resin" ? t.categoryResin : t.categoryGypsum}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {filtered.map((product, i) => (
            <TiltCard
              key={product.id}
              product={product}
              lang={lang}
              index={i}
              onAdd={() =>
                addItem({
                  id: product.id,
                  name: product.name,
                  nameEn: product.nameEn,
                  price: product.price,
                  image: product.image,
                })
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
