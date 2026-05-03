import { Routes, Route } from "react-router";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { CartProvider } from "@/context/CartContext";
import Home from "./pages/Home";
import BlackFriday from "./pages/BlackFriday";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";

export default function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="black-friday" element={<BlackFriday />} />
            <Route path="contact" element={<Contact />} />
            <Route path="admin" element={<Admin />} />
          </Routes>
        </CartProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}
