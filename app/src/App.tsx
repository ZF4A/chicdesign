import { Routes, Route, useLocation } from "react-router";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { CartProvider } from "@/context/CartContext";
import Home from "./pages/Home";
import BlackFriday from "./pages/BlackFriday";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import Opportunities from "./pages/Opportunities";

export default function App() {
  const location = useLocation();

  // Scroll to top on route change so pages start at top when navigating via navbar
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname]);
  return (
    <LanguageProvider>
      <ThemeProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="black-friday" element={<BlackFriday />} />
            <Route path="contact" element={<Contact />} />
            <Route path="opportunities" element={<Opportunities />} />
            <Route path="admin" element={<Admin />} />
          </Routes>
        </CartProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}
