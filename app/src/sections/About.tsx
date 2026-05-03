import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import { motion, useInView } from "framer-motion";

export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-white dark:bg-[#0a0a0a] overflow-hidden">
      {/* Giant Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-['Space_Grotesk'] text-[20vw] font-medium text-[#F0F0F0] dark:text-[#1a1a1a] tracking-[-0.03em] whitespace-nowrap">
          ABOUT
        </span>
      </div>

      <div ref={ref} className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scaleX: 1 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden"
          >
            <motion.div
              initial={{ scaleX: 1 }}
              animate={isInView ? { scaleX: 0 } : {}}
              transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
              className="absolute inset-0 bg-white dark:bg-[#0a0a0a] origin-right z-10"
            />
            <img
              src="/images/about.jpg"
              alt="Artisan crafting"
              className="w-full aspect-[3/4] object-cover"
            />
          </motion.div>

          {/* Text */}
          <div className="lg:py-8">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[11px] uppercase tracking-[0.2em] text-[#BFA45A] font-medium"
            >
              {t.aboutLabel}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="font-['Space_Grotesk'] text-[clamp(28px,4vw,52px)] font-medium text-[#111] dark:text-white mt-4 leading-[1.05] tracking-[-0.02em]"
            >
              {t.aboutHeading}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-[15px] sm:text-base text-[#555] dark:text-[#aaa] mt-6 leading-[1.7]"
            >
              {t.aboutBody}
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 text-xs uppercase tracking-[0.15em] text-[#111] dark:text-white border-b border-[#111] dark:border-white pb-1 hover:text-[#BFA45A] hover:border-[#BFA45A] dark:hover:text-[#BFA45A] dark:hover:border-[#BFA45A] transition-colors"
            >
              {t.aboutCta}
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
