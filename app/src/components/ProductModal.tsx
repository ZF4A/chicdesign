import React from "react";
import { ShoppingCart, MessageCircle, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function ProductModal({
  product,
  open,
  onClose,
  initialAction,
}: {
  product: {
    id: number;
    name: string;
    nameEn?: string | null;
    price: number;
    image: string;
  } | null;
  open: boolean;
  onClose: () => void;
  initialAction?: "add" | "order";
}) {
  const { addItem } = useCart();
  const { lang } = useLanguage();
  const t = translations[lang];

  const displayName = product ? (lang === "fr" ? product.name : product.nameEn || product.name) : "";

  if (!open || !product) return null;

  const handleAdd = () => {
    addItem({ id: product.id, name: product.name, price: product.price, image: product.image, nameEn: product.nameEn });
    onClose();
  };

  const handleOrder = () => {
    const name = product.name;
    const message = `Hello Chic Design,\nI am interested in:\n- ${name}\nPrice: ${product.price}\n\nPlease contact me.`;
    window.open(`https://wa.me/237699901793?text=${encodeURIComponent(message)}`, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white dark:bg-[#0b0b0b] rounded-lg shadow-xl w-[min(95%,640px)] mx-4">
        <button onClick={onClose} className="absolute top-3 right-3 p-2 text-gray-600 hover:text-gray-900">
          <X />
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6">
          <div className="flex items-center justify-center">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">{displayName}</h3>
            <p className="text-gray-600 mb-4">{product.price.toLocaleString()} {t.xaf}</p>

            <div className="flex gap-3">
              <button
                onClick={handleAdd}
                className="flex items-center gap-2 px-4 py-2 bg-[#111] text-white rounded hover:opacity-90"
              >
                <ShoppingCart /> {t.addToCart}
              </button>
              <button
                onClick={handleOrder}
                className="flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded hover:opacity-90"
              >
                <MessageCircle /> {t.orderWhatsApp}
              </button>
            </div>
            <div className="mt-4 text-sm text-gray-500">{lang === "fr" ? "Appuyez en dehors pour fermer ou X" : "Tap outside the card or press X to close."}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
