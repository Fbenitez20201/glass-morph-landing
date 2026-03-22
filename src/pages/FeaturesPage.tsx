import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturesGrid from "@/components/features/FeaturesGrid";
import SimpleSteps from "@/components/SimpleSteps";
import Security from "@/components/Security";
import { HeaderGeneralPage } from "@/components/ui/HeaderGeneralPage";

const FeaturesPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <HeaderGeneralPage
        badgeText="Características"
        title="Características de Nuestros Servicios e implementaciones"
        subtitle="Ofrecemos soluciones tecnológicas personalizadas que se adaptan a las necesidades reales de tu negocio. Con el impulso de la Inteligencia Artificial, potenciamos cada desarrollo para que tu operación sea más eficiente, inteligente y escalable."
        classNamesTitle=" max-w-[33rem]"
        classNamesSubtitle="max-w-xl md:max-w-lg"
      />

      {/* Main Content */}
      <main className="relative z-20 bg-black flex-grow">
        <FeaturesGrid />
      </main>

      <SimpleSteps />

      <Security />

      <Footer />
    </div>
  );
};

export default FeaturesPage;
