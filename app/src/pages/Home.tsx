import Header from "@/components/Header";
import CartDrawer from "@/components/CartDrawer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Products from "@/sections/Products";
import Training from "@/sections/Training";
import FAQ from "@/sections/FAQ";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Training />
        <FAQ />
      </main>
      <Footer />
      <CartDrawer />
      <FloatingWhatsApp />
    </>
  );
}
