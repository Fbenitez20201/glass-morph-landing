import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
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
    <section className="relative min-h-screen pt-44 pb-16 flex items-start  lg:items-center">
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute -top-[10rem] left-0 w-full scale-[3] lg:scale-[1.7] h-full objPect-cover "
      >
        <source src="/videos/background-video.mp4" type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>
      <div className="absolute inset-0 w-full h-full z-0">
        <img src="https://framerusercontent.com/images/xtP1yCgjKv6jX6UUEqjDRwgq3o.webp?scale-down-to=2048" alt="image" className="object-cover scale-150"/>
      </div>

      {/* Overlay oscuro encima del video */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-[#000000]/75 z-0"></div>

      {/* Contenido encima del video */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 max-md:-translate-y-24">
        {/* Notificación */}
        {/* Título principal */}
        <div className="order-2 md:order-1 flex flex-col items-center mb-6 ">
          <motion.h1
            className="text-2xl md:text-5xl lg:text-7xl font-semibold max-w-[19rem] lg:max-w-[58rem] text-white mb-6 flex flex-wrap justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {"Automatizaciones de IA y Desarrollo de Software"
              .split("")
              .map((char, index) => (
              <span className="text-center">
                <motion.span key={index} variants={letterVariants}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              </span> 
              ))}
          </motion.h1>

          <motion.div
            key={0}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-base md:text-xl text-[#747584] max-w-3xl">
              Impulsa tu empresa con soluciones inteligentes que combinan
              inteligencia artificial, automatización y desarrollo
              personalizado.
            </p>
          </motion.div>
        </div>

        {/* Botones CTA */}
        <div
          className="flex flex-col sm:flex-row justify-center gap-4 mb-16 animate-fade-in max-md:px-12"
          style={{ animationDelay: "0.6s" }}
        >
          <Button className="bg-white hover:bg-gray-100 text-slate-900 rounded-full px-8 py-6 font-medium text-lg">
            <Link to={"/contact"} className="w-full">Contactanos</Link>
          </Button>
          <Button className="bg-transparent border border-slate-700/70 hover:bg-slate-800/50 text-white rounded-full px-8 py-6 font-medium text-lg">
            <Link to={"/pricing"} className="w-full">Precios</Link>
          </Button>
        </div>

        {/* Glassmorphism bar */}
        <div
          className="relative w-full h-[250px] sm:h-[300px] md:h-[600px] lg:h-[750px] xl:h-[900px] mt-16 animate-fade-in overflow-hidden"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="absolute inset-0 rounded-2xl backdrop-blur-xl lg:bg-gradient-to-r from-red-500/20 via-purple-500/20 to-blue-500/20 p-[2px] lg:shadow-[0_0_45px_rgba(239,68,68,0.3)]">
            <div className="w-full lg:h-full rounded-2xl bg-black/40 flex items-center justify-center overflow-hidden">
              {/* <div className="h-[1px] w-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 opacity-70"></div> */}
              <img src="/fondos/Images.jpg" alt="image" className="object-cover w-full h-full"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
