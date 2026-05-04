import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { useCart } from "@/context/CartContext";
import { translations } from "@/lib/translations";
import {
  ShoppingBag,
  Sun,
  Moon,
  Menu,
  X,
  MessageCircle,
  Globe,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const { lang, toggleLang } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const { count, setIsOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const t = translations[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navItems = [
    { label: t.navShop, href: "#products" },
    { label: t.navAbout, href: "#about" },
    { label: t.navTraining, href: "#training" },
    { label: t.navFAQ, href: "#faq" },
    { label: "Opportunities", to: "/opportunities" },
    { label: t.navBlackFriday, to: "/black-friday" },
    { label: t.navContact, to: "/contact" },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
  };

  const navigate = useNavigate();

  const navigateOrScroll = (href: string) => {
    if (!href.startsWith("#")) return;
    const id = href.replace("#", "");
    // If we're on the root page, just scroll. Otherwise navigate to root then scroll.
    if (location.pathname === "/" || location.pathname === "") {
      scrollToSection(href);
    } else {
      navigate("/");
      // wait a tick for navigation to complete, then scroll
      setTimeout(() => scrollToSection(href), 100);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 dark:bg-[#111]/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Left: Mobile menu + Logo */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 -ml-2 text-[#111] dark:text-white hover:opacity-60 transition-opacity"
                aria-label="Menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
              <div className="flex items-center gap-3">
                <Link to="/" className="flex items-center gap-2">
                  <img src="/images/cd.jpg" alt="CHIC DESIGN" className="w-10 h-10 rounded-full object-cover" />
                </Link>
                {/* On small screens show quick Add/Order buttons near the logo */}
                <div className="flex items-center gap-2 lg:hidden">
                  <button
                    onClick={() => setIsOpen(true)}
                    aria-label="Open cart"
                    className="w-8 h-8 bg-white text-[#111] rounded-full flex items-center justify-center shadow-sm"
                  >
                    <ShoppingBag size={16} />
                  </button>
                  <a
                    href="https://wa.me/237699901793"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-sm"
                  >
                    <MessageCircle size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Center: Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                item.to ? (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="text-xs uppercase tracking-[0.12em] text-[#555] dark:text-[#aaa] hover:text-[#111] dark:hover:text-white transition-all duration-300 hover:translate-x-1"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      navigateOrScroll(item.href!);
                    }}
                    className="text-xs uppercase tracking-[0.12em] text-[#555] dark:text-[#aaa] hover:text-[#111] dark:hover:text-white transition-all duration-300 hover:translate-x-1"
                  >
                    {item.label}
                  </a>
                )
              ))}
            </nav>

            {/* Right: Lang, Theme, Cart */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={toggleLang}
                className="flex items-center gap-1 text-xs uppercase tracking-[0.12em] text-[#555] dark:text-[#aaa] hover:text-[#111] dark:hover:text-white transition-colors p-2"
                aria-label="Toggle language"
              >
                <Globe size={14} />
                <span className="hidden sm:inline">{lang === "fr" ? "FR" : "EN"}</span>
              </button>

              <button
                onClick={toggleTheme}
                className="p-2 text-[#555] dark:text-[#aaa] hover:text-[#111] dark:hover:text-white transition-colors"
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isDark ? "dark" : "light"}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isDark ? <Sun size={18} /> : <Moon size={18} />}
                  </motion.div>
                </AnimatePresence>
              </button>

              <button
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-1.5 p-2 text-[#555] dark:text-[#aaa] hover:text-[#111] dark:hover:text-white transition-colors relative"
                aria-label="Cart"
              >
                <ShoppingBag size={18} />
                <span className="text-xs uppercase tracking-[0.12em] hidden sm:inline">
                  {t.cart}
                </span>
                {count > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#BFA45A] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {count}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white dark:bg-[#111] pt-20 px-6 lg:hidden"
          >
            <nav className="flex flex-col gap-6 mt-8">
              {navItems.map((item, i) => (
                item.to ? (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={item.to}
                      onClick={() => setMobileOpen(false)}
                      className="text-2xl font-['Space_Grotesk'] text-[#111] dark:text-white"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.a
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      navigateOrScroll(item.href!);
                      setMobileOpen(false);
                    }}
                    className="text-2xl font-['Space_Grotesk'] text-[#111] dark:text-white text-left"
                  >
                    {item.label}
                  </motion.a>
                )
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
