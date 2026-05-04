import { Link } from "react-router";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import { Instagram, MessageCircle, ArrowUp, ExternalLink } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const { setIsOpen } = useCart();

  return (
    <footer className="bg-[#111] text-white py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 flex items-start gap-4">
            <Link to="/" className="flex items-center gap-3">
              <img src="/images/cd.jpg" alt="CHIC DESIGN" className="w-16 h-16 rounded-full object-cover" />
            </Link>
            <div>
              <Link to="/" className="font-['Space_Grotesk'] text-xl font-medium tracking-[-0.03em]">
                CHIC DESIGN
              </Link>
              <div className="mt-2 flex items-center gap-2 lg:hidden">
                <button onClick={() => setIsOpen(true)} className="px-3 py-1 bg-white text-[#111] rounded">Ajouter</button>
                <a href="https://wa.me/237699901793" className="px-3 py-1 bg-[#25D366] text-white rounded">Commander</a>
              </div>
            </div>
            <p className="text-sm text-[#aaa] mt-4 leading-[1.7] max-w-xs">
              {lang === "fr"
                ? "Sculpter l'espace avec résine et plâtre. Des créations uniques, faites main à Yaoundé."
                : "Sculpting spaces with resin and gypsum. Unique handmade creations from Yaoundé."}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#aaa] font-medium mb-4">
              {t.footerLinks}
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <button
                  onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-sm text-[#aaa] hover:text-white transition-colors"
                >
                  {t.navShop}
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-sm text-[#aaa] hover:text-white transition-colors"
                >
                  {t.navAbout}
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("training")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-sm text-[#aaa] hover:text-white transition-colors"
                >
                  {t.navTraining}
                </button>
              </li>
              <li>
                <Link to="/black-friday" className="text-sm text-[#aaa] hover:text-white transition-colors">
                  {t.navBlackFriday}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-[#aaa] hover:text-white transition-colors">
                  {t.navContact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#aaa] font-medium mb-4">
              {t.footerSupport}
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <button
                  onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-sm text-[#aaa] hover:text-white transition-colors"
                >
                  {t.navFAQ}
                </button>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-[#aaa] hover:text-white transition-colors">
                  {t.navContact}
                </Link>
              </li>
              <li>
                <span className="text-sm text-[#aaa]">WhatsApp: +237 699 901 793</span>
              </li>
              <li>
                <span className="text-sm text-[#aaa]">{t.footerDelivery}</span>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#aaa] font-medium mb-4">
              {t.footerSocials}
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/chic_design237?igsh=b2s5NHVyeWQ2cmZ1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center text-[#aaa] hover:text-white hover:border-white transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.tiktok.com/@chic_design237?_r=1&_t=ZS-95vL1nRi8Kj"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center text-[#aaa] hover:text-white hover:border-white transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.89 2.89 2.89 0 0 1 2.88-2.88c.2 0 .39.02.58.06V9.66a6.33 6.33 0 0 0-.58-.03A6.34 6.34 0 0 0 3.05 16a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.5a8.15 8.15 0 0 0 4.78 1.54V6.7a4.85 4.85 0 0 1-.92-.01z"/>
                </svg>
              </a>
              <a
                href="https://chat.whatsapp.com/JXk026wDAaN4RWsLXyYhp9?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center text-[#aaa] hover:text-[#25D366] hover:border-[#25D366] transition-colors"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href="https://wa.me/237699901793"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center text-[#aaa] hover:text-[#25D366] hover:border-[#25D366] transition-colors"
              >
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-[#222] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#555]">© 2024 {t.footerRights}</p>
          <p className="text-xs text-[#555]">{t.footerPayment}</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-[#aaa] hover:text-white transition-colors group"
          >
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
