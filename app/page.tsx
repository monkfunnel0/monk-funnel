import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import WebsiteFactorySection from "@/components/sections/WebsiteFactorySection";
import PixelSection from "@/components/sections/PixelSection";
import PricingSection from "@/components/sections/PricingSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ToolsSection from "@/components/sections/ToolsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/layout/Footer";
import FloatingNPC from "@/components/widgets/FloatingNPC";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServicesSection />
      <WebsiteFactorySection />
      <PixelSection />
      <PricingSection />
      <TestimonialsSection />
      <ToolsSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <FloatingNPC />
    </>
  );
}
