import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import PricingTable from "@/components/pricing/PricingTable";
import { HeaderGeneralPage } from "@/components/ui/HeaderGeneralPage";

const PricingPage = () => {

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />

      <HeaderGeneralPage
        badgeText="Precios"
        title="Planes de Precios de Agentes de IA"
        subtitle="Elija el plan perfecto para escalar sus ventas y efectividad empresarial con un Agente de IA"
        classNamesTitle=" max-w-[19rem] lg:max-w-[31rem]"
        classNamesSubtitle="max-w-xl md:max-w-lg"
      />

      {/* Main Content */}
      <main className="relative z-20 bg-black flex-grow">
        <Pricing />
      </main>

      {/* Pricing comparison table */}
      <PricingTable />

      <FAQ/>

      <Footer />
    </div>
  );
};

export default PricingPage;
