import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProductionLine } from "@/components/ProductionLine";
import { TechnologyAdvantages } from "@/components/TechnologyAdvantages";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ProductionLine />
      <TechnologyAdvantages />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;