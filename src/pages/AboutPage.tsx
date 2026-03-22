import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FounderMessage from "@/components/about/FounderMessage";
import CoreValues from "@/components/about/CoreValues";
import KeyMetrics from "@/components/about/KeyMetrics";
import TeamSection from "@/components/about/TeamSection";
import { HeaderGeneralPage } from "@/components/ui/HeaderGeneralPage";

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />

      <HeaderGeneralPage
        badgeText="Conócenos"
        title="Soluciones 360 para transformar empresas inteligentes"
        subtitle="Impulsamos la evolución operativa de empresas en Latinoamérica con tecnología basada en IA, automatización, datos y ERP integrados. Diseñamos sistemas que optimizan procesos críticos, reducen errores y escalan sin fricción."
        classNamesTitle="max-w-[48rem]"
        classNamesSubtitle="max-w-xl md:max-w-[40rem]"
      />

      {/* Main Content */}
      <main className="relative z-20 bg-black flex-grow">
        {/* Founder Message Section */}
        <FounderMessage />

        {/* Core Values Section */}
        <CoreValues />

        {/* Key Metrics Section */}
        <KeyMetrics />

        {/* Team Section */}
        <TeamSection />
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
