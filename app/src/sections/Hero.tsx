import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [displayText, setDisplayText] = useState("");
  const fullText = t.heroSlogan;
  const cubeRef = useRef<HTMLDivElement>(null);

  // Typewriter effect
  useEffect(() => {
    let i = 0;
    setDisplayText("");
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 60);
    return () => clearInterval(timer);
  }, [fullText]);

  // 3D cube scroll rotation
  useEffect(() => {
    const handleScroll = () => {
      if (!cubeRef.current) return;
      const scrollY = window.scrollY;
      const rotateX = (scrollY / window.innerHeight) * 180;
      const rotateY = (scrollY / window.innerHeight) * 90;
      cubeRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-white dark:bg-[#0a0a0a]">
      {/* 3D Cube Background */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: "1000px" }}>
        <div
          ref={cubeRef}
          className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]"
          style={{ transformStyle: "preserve-3d", transition: "transform 0.1s linear" }}
        >
          {[
            { transform: "translateZ(150px) rotateY(0deg)", img: "/images/1.jpg" },
            { transform: "translateZ(150px) rotateY(180deg)", img: "/images/2.jpg" },
            { transform: "translateZ(150px) rotateY(90deg)", img: "/images/5.jpg" },
            { transform: "translateZ(150px) rotateY(-90deg)", img: "/images/8.jpg" },
            { transform: "translateZ(150px) rotateX(90deg)", img: "/images/3.jpg" },
            { transform: "translateZ(150px) rotateX(-90deg)", img: "/images/2.jpg" },
          ].map((face, i) => (
            <div
              key={i}
              className="absolute inset-0 w-full h-full"
              style={{
                transform: face.transform,
                backfaceVisibility: "hidden",
                opacity: 0.15,
              }}
            >
              <img
                src={face.img}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-['Space_Grotesk'] text-[clamp(48px,12vw,140px)] font-medium tracking-[-0.05em] leading-[0.9] text-[#111] dark:text-white">
            CHIC
          </h1>
          <h1 className="font-['Space_Grotesk'] text-[clamp(48px,12vw,140px)] font-medium tracking-[-0.05em] leading-[0.9] text-[#111] dark:text-white -mt-2 sm:-mt-4">
            DESIGN
          </h1>
        </motion.div>

        {/* Typewriter Slogan */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 sm:mt-8 min-h-[3rem]"
        >
          <p className="text-sm sm:text-base text-[#555] dark:text-[#aaa] font-light tracking-wide">
            {displayText}
            <span className="inline-block w-0.5 h-4 bg-[#BFA45A] ml-1 animate-pulse align-middle" />
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <button
            onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
            className="group flex items-center gap-2 px-8 py-3 bg-[#111] dark:bg-white text-white dark:text-[#111] text-xs uppercase tracking-[0.15em] font-medium hover:bg-[#BFA45A] hover:text-white dark:hover:bg-[#BFA45A] dark:hover:text-white transition-all duration-300"
          >
            {t.heroCtaShop}
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center gap-2 px-8 py-3 border border-[#111] dark:border-white text-[#111] dark:text-white text-xs uppercase tracking-[0.15em] font-medium hover:bg-[#111] hover:text-white dark:hover:bg-white dark:hover:text-[#111] transition-all duration-300"
          >
            {t.heroCtaAbout}
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#555] dark:text-[#aaa]">
          {t.heroScroll}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={16} className="text-[#555] dark:text-[#aaa]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
