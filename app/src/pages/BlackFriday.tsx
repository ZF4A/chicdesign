import { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import CartDrawer from "@/components/CartDrawer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/sections/Footer";
import { ArrowRight, Sparkles, Gift, Clock, ShoppingBag, Star, Zap } from "lucide-react";

function ConfettiCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces: {
      x: number;
      y: number;
      w: number;
      h: number;
      color: string;
      vx: number;
      vy: number;
      rotation: number;
      rotationSpeed: number;
    }[] = [];

    const colors = ["#BFA45A", "#D42C2C", "#111111", "#FFFFFF", "#555555", "#E8E8E8"];

    for (let i = 0; i < 150; i++) {
      pieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        w: Math.random() * 8 + 4,
        h: Math.random() * 4 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 2,
        vy: Math.random() * 3 + 2,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;

        if (p.y > canvas.height) {
          p.y = -20;
          p.x = Math.random() * canvas.width;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });
      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ opacity: 0.6 }}
    />
  );
}

export default function BlackFriday() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const handleShop = () => {
    const message = `Hello Chic Design,\nI want to take advantage of the Black Friday offer!\nAll items at 5,000 FCFA.\nPlease contact me.`;
    window.open(`https://wa.me/237699901793?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#F7F7F7] dark:bg-[#111]">
      <Header />
      <ConfettiCanvas />

      <main className="relative z-20">
        {/* Hero Banner */}
        <section className="min-h-[80vh] flex items-center justify-center px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#D42C2C] text-white text-xs uppercase tracking-[0.15em] font-medium mb-8"
            >
              <Zap size={14} />
              {t.bfBadge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-['Space_Grotesk'] text-[clamp(36px,8vw,80px)] font-medium text-[#D42C2C] tracking-[-0.03em] leading-[1.05]"
            >
              BLACK FRIDAY
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-['Space_Grotesk'] text-[clamp(20px,3vw,36px)] font-medium text-[#111] dark:text-white tracking-[-0.02em] mt-2"
            >
              {t.bfTitle}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-[#555] dark:text-[#aaa] mt-6 max-w-2xl mx-auto"
            >
              {t.bfSubtitle}
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              onClick={handleShop}
              className="mt-10 inline-flex items-center gap-3 px-10 py-4 bg-[#D42C2C] text-white text-sm uppercase tracking-[0.15em] font-medium hover:bg-[#b82424] transition-colors"
            >
              <ShoppingBag size={18} />
              {t.bfCta}
              <ArrowRight size={18} />
            </motion.button>
          </div>
        </section>

        {/* Content Blocks */}
        <section className="max-w-4xl mx-auto px-4 pb-20">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Sparkles, text: t.bfDesc1 },
              { icon: Gift, text: t.bfDesc2 },
              { icon: Star, text: t.bfDesc3 },
              { icon: Clock, text: t.bfDesc4 },
            ].map((block, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white dark:bg-[#0a0a0a] p-6 border border-gray-200 dark:border-gray-800"
              >
                <block.icon size={24} className="text-[#D42C2C] mb-4" />
                <p className="text-sm text-[#555] dark:text-[#aaa] leading-[1.7]">{block.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 bg-white dark:bg-[#0a0a0a] p-6 border border-gray-200 dark:border-gray-800 text-center"
          >
            <p className="text-sm text-[#555] dark:text-[#aaa] leading-[1.7]">{t.bfDesc5}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 bg-[#111] dark:bg-white p-8 text-center"
          >
            <p className="text-white dark:text-[#111] text-lg leading-[1.7]">{t.bfDesc6}</p>
            <button
              onClick={handleShop}
              className="mt-6 inline-flex items-center gap-2 px-8 py-3 bg-[#D42C2C] text-white text-xs uppercase tracking-[0.15em] font-medium hover:bg-[#b82424] transition-colors"
            >
              <ShoppingBag size={16} />
              {t.bfCta}
            </button>
          </motion.div>
        </section>
      </main>

      <Footer />
      <CartDrawer />
      <FloatingWhatsApp />
    </div>
  );
}
