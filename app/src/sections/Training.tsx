import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Training() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleRegister = (type: string) => {
    const message = `Hello Chic Design,\nI would like to register for the ${type} training.\nPlease send me more information.`;
    window.open(`https://wa.me/237699901793?text=${encodeURIComponent(message)}`, "_blank");
  };

  const cards = [
    {
      title: t.basicTitle,
      price: t.basicPrice,
      duration: t.basicDuration,
      desc: t.basicDesc,
      cta: t.basicCta,
      type: "Basic",
    },
    {
      title: t.advancedTitle,
      price: t.advancedPrice,
      duration: t.advancedDuration,
      desc: t.advancedDesc,
      cta: t.advancedCta,
      type: "Advanced",
    },
  ];

  return (
    <section id="training" className="py-24 lg:py-32 bg-[#F7F7F7] dark:bg-[#111]">
      <div ref={ref} className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="font-['Space_Grotesk'] text-[clamp(32px,5vw,64px)] font-medium text-[#111] dark:text-white tracking-[-0.03em]">
            {t.trainingTitle}
          </h2>
          <p className="text-sm text-[#555] dark:text-[#aaa] mt-3">{t.trainingSubtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="group bg-white dark:bg-[#0a0a0a] border border-[#E5E5E5] dark:border-[#222] p-8 lg:p-10 hover:border-[#111] dark:hover:border-white hover:-translate-y-1 transition-all duration-500"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#BFA45A] font-medium">
                {card.duration}
              </span>
              <h3 className="font-['Space_Grotesk'] text-2xl lg:text-3xl font-medium text-[#111] dark:text-white mt-3 tracking-[-0.02em]">
                {card.title}
              </h3>
              <div className="flex items-baseline gap-1 mt-4">
                <span className="text-[clamp(36px,5vw,56px)] font-medium text-[#111] dark:text-white tracking-[-0.03em]">
                  {card.price}
                </span>
                <span className="text-sm text-[#555] dark:text-[#aaa]">{t.xaf}</span>
              </div>
              <p className="text-sm text-[#555] dark:text-[#aaa] mt-4 leading-[1.7]">
                {card.desc}
              </p>
              <button
                onClick={() => handleRegister(card.type)}
                className="mt-8 group/btn flex items-center gap-2 px-6 py-3 border border-[#111] dark:border-white text-[#111] dark:text-white text-xs uppercase tracking-[0.12em] font-medium hover:bg-[#111] hover:text-white dark:hover:bg-white dark:hover:text-[#111] transition-all duration-300"
              >
                {card.cta}
                <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
