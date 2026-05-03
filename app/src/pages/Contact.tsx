import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import CartDrawer from "@/components/CartDrawer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/sections/Footer";
import { Send, MessageCircle, User, FileText, AlignLeft } from "lucide-react";

export default function Contact() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [name, setName] = useState("");
  const [purpose, setPurpose] = useState("order");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const purposeLabel =
      purpose === "order"
        ? t.contactPurposeOrder
        : purpose === "question"
        ? t.contactPurposeQuestion
        : purpose === "custom"
        ? t.contactPurposeCustom
        : t.contactPurposeOther;

    const fullMessage = `Hello Chic Design,\n\nName: ${name}\nPurpose: ${purposeLabel}\n\n${message || "I would like to get in touch with you."}`;

    window.open(`https://wa.me/237699901793?text=${encodeURIComponent(fullMessage)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <Header />

      <main className="pt-24 pb-20">
        <div className="max-w-[600px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full mb-6">
              <MessageCircle size={28} className="text-white" />
            </div>
            <h1 className="font-['Space_Grotesk'] text-[clamp(28px,4vw,48px)] font-medium text-[#111] dark:text-white tracking-[-0.03em]">
              {t.contactTitle}
            </h1>
            <p className="text-sm text-[#555] dark:text-[#aaa] mt-3">{t.contactSubtitle}</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {/* Name */}
            <div>
              <label className="flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-[#555] dark:text-[#aaa] mb-2">
                <User size={14} />
                {t.contactName}
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 bg-[#F7F7F7] dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 text-[#111] dark:text-white text-sm focus:outline-none focus:border-[#BFA45A] transition-colors"
                placeholder={t.contactName}
              />
            </div>

            {/* Purpose */}
            <div>
              <label className="flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-[#555] dark:text-[#aaa] mb-2">
                <FileText size={14} />
                {t.contactPurpose}
              </label>
              <select
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="w-full px-4 py-3 bg-[#F7F7F7] dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 text-[#111] dark:text-white text-sm focus:outline-none focus:border-[#BFA45A] transition-colors appearance-none"
              >
                <option value="order">{t.contactPurposeOrder}</option>
                <option value="question">{t.contactPurposeQuestion}</option>
                <option value="custom">{t.contactPurposeCustom}</option>
                <option value="other">{t.contactPurposeOther}</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-[#555] dark:text-[#aaa] mb-2">
                <AlignLeft size={14} />
                {t.contactMessage}
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="w-full px-4 py-3 bg-[#F7F7F7] dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 text-[#111] dark:text-white text-sm focus:outline-none focus:border-[#BFA45A] transition-colors resize-none"
                placeholder={t.contactMessage}
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 py-4 bg-[#25D366] text-white text-sm uppercase tracking-[0.12em] font-medium hover:bg-[#1ebd5a] transition-colors"
            >
              <Send size={16} />
              {t.contactSend}
            </button>
          </motion.form>

          {/* Direct WhatsApp */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 text-center"
          >
            <p className="text-xs text-[#555] dark:text-[#aaa] mb-3">{t.contactPhone}</p>
            <a
              href="https://wa.me/237699901793"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#25D366] hover:underline"
            >
              <MessageCircle size={16} />
              +237 699 901 793
            </a>
          </motion.div>
        </div>
      </main>

      <Footer />
      <CartDrawer />
      <FloatingWhatsApp />
    </div>
  );
}
