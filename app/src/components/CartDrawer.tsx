import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import { translations } from "@/lib/translations";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CartDrawer() {
  const { lang } = useLanguage();
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, total, clearCart } = useCart();
  const t = translations[lang];

  const handleCheckout = () => {
    if (items.length === 0) return;
    const lines = items.map(
      (i) => `- ${lang === "fr" ? i.name : i.nameEn || i.name} (x${i.quantity}) — ${i.price.toLocaleString()} ${t.xaf}`
    );
    const message = [
      "Hello Chic Design,",
      "I would like to order:",
      ...lines,
      `\nTotal: ${total.toLocaleString()} ${t.xaf}`,
      "\nPlease contact me for delivery details.",
    ].join("\n");
    const url = `https://wa.me/237699901793?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-[400px] bg-white dark:bg-[#111] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800">
              <h2 className="font-['Space_Grotesk'] text-lg font-medium text-[#111] dark:text-white">
                {t.cart} ({items.length})
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-[#555] dark:text-[#aaa] hover:text-[#111] dark:hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag size={48} className="text-gray-300 dark:text-gray-700 mb-4" />
                  <p className="text-sm text-[#555] dark:text-[#aaa]">{t.cartEmpty}</p>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-4 pb-4 border-b border-gray-100 dark:border-gray-800"
                    >
                      <img
                        src={item.image}
                        alt={lang === "fr" ? item.name : item.nameEn || item.name}
                        className="w-20 h-20 object-cover bg-[#F7F7F7] dark:bg-[#1a1a1a]"
                      />
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-[#111] dark:text-white">
                          {lang === "fr" ? item.name : item.nameEn || item.name}
                        </h3>
                        <p className="text-xs text-[#BFA45A] font-medium mt-1">
                          {item.price.toLocaleString()} {t.xaf}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-6 h-6 flex items-center justify-center border border-gray-200 dark:border-gray-700 text-[#555] dark:text-[#aaa] hover:border-[#111] dark:hover:border-white transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="text-sm text-[#111] dark:text-white w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 flex items-center justify-center border border-gray-200 dark:border-gray-700 text-[#555] dark:text-[#aaa] hover:border-[#111] dark:hover:border-white transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="ml-auto text-xs text-red-500 hover:text-red-600 transition-colors"
                          >
                            {t.cartRemove}
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-gray-100 dark:border-gray-800">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-[#555] dark:text-[#aaa]">{t.cartTotal}</span>
                  <span className="text-lg font-medium text-[#111] dark:text-white">
                    {total.toLocaleString()} {t.xaf}
                  </span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full py-3 bg-[#25D366] text-white text-sm uppercase tracking-[0.12em] font-medium hover:bg-[#1ebd5a] transition-colors"
                >
                  {t.cartCheckout}
                </button>
                <button
                  onClick={clearCart}
                  className="w-full mt-2 py-2 text-xs text-[#555] dark:text-[#aaa] hover:text-red-500 transition-colors"
                >
                  Vider le panier
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
