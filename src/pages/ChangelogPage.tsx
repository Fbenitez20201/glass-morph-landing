import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import ChangelogEntries from "@/components/changelog/ChangelogEntries";
import { motion } from "framer-motion";
import { HeaderGeneralPage } from "@/components/ui/HeaderGeneralPage";

const ChangelogPage = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />

      <HeaderGeneralPage
        badgeText="Actualizaciones"
        title="En Ingenio360 no esperamos las tendencias, las adoptamos primero."
        subtitle="Ya operamos con las tecnologías más recientes en inteligencia artificial, automatización, ciberseguridad y cloud computing, integrándolas en soluciones reales que nuestros clientes ya están usando."
        classNamesTitle=" max-w-[39rem]"
        classNamesSubtitle="max-w-xl md:max-w-[38rem]"
      />

      {/* Main Content */}
      <main className="relative z-20 bg-black flex-grow">
        <ChangelogEntries />
      </main>

      <Footer />
    </div>
  );
};

export default ChangelogPage;
