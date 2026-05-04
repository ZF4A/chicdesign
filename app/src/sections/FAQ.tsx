import { useState, useRef, useMemo, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

export default function FAQ() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [query, setQuery] = useState("");
  const [placeholderText, setPlaceholderText] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const faqList = t.faq;

  const suggestions = useMemo(() => faqList.slice(0, 6).map((f) => f.q), [faqList]);

  const filtered = useMemo(() => {
    if (!query.trim()) return faqList;
    const q = query.toLowerCase();
    return faqList.filter((f) => f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q));
  }, [faqList, query]);

  // Typed placeholder effect
  useEffect(() => {
    let mounted = true;
    let si: any;
    let idx = 0;
    let char = 0;
    let deleting = false;

    const loop = () => {
      if (!mounted) return;
      const current = suggestions[idx % suggestions.length] || "";
      if (!deleting) {
        setPlaceholderText(current.slice(0, char + 1));
        char++;
        if (char === current.length) {
          deleting = true;
          si = setTimeout(loop, 1200);
          return;
        }
      } else {
        setPlaceholderText(current.slice(0, char - 1));
        char--;
        if (char === 0) {
          deleting = false;
          idx++;
        }
      }
      si = setTimeout(loop, deleting ? 80 : 120);
    };

    loop();
    return () => {
      mounted = false;
      clearTimeout(si);
    };
  }, [suggestions]);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-white dark:bg-[#0a0a0a]">
      <div ref={ref} className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="font-['Space_Grotesk'] text-[clamp(32px,5vw,64px)] font-medium text-[#111] dark:text-white tracking-[-0.03em]">
            {t.faqTitle}
          </h2>
          <p className="text-sm text-[#555] dark:text-[#aaa] mt-3">{t.faqSubtitle}</p>
        </motion.div>

        <div className="mb-8">
          <div className="max-w-xl mx-auto">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={placeholderText || t.searchPlaceholder || "Search FAQs..."}
              className="w-full rounded-md border border-gray-200 dark:border-gray-800 px-4 py-3 text-sm bg-white dark:bg-[#0a0a0a] text-[#111] dark:text-white"
            />
          </div>
        </div>

        <div className="flex flex-col">
          {filtered.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="border-b border-gray-200 dark:border-gray-800"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left group"
              >
                <span className="text-sm sm:text-base font-medium text-[#111] dark:text-white pr-4 group-hover:text-[#BFA45A] transition-colors">
                  {item.q}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-6 h-6 flex items-center justify-center"
                >
                  <Plus size={18} className="text-[#555] dark:text-[#aaa]" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-[#555] dark:text-[#aaa] pb-5 leading-[1.7]">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
