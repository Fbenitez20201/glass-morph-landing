import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

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

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <section className="relative min-h-screen pt-28 flex items-center">
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute  left-0 w-full scale-[1.7] h-full objPect-cover "
      >
        <source src="/videos/background-video.mp4" type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="https://framerusercontent.com/images/xtP1yCgjKv6jX6UUEqjDRwgq3o.webp?scale-down-to=2048"
          alt="image"
          className="object-cover scale-150"
        />
      </div>

      {/* Overlay oscuro encima del video */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-[#000000]/75 z-0"></div>

      {/* Contenido encima del video */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

        {/* Título principal */}
        <div className="order-2 md:order-1 flex flex-col items-center mt-16 mb-6">
          <motion.h1
            className="text-2xl md:text-[15rem] lg:text-[15rem] font-semibold max-w-[58rem] text-white mb-32 flex flex-wrap justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {"404"
              .split("")
              .map((char, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
          </motion.h1>

          <motion.div
            key={0}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-base md:text-xl text-[#747584] max-w-3xl">
            It looks like you've wandered off the path. The page you're looking for doesn’t exist or has been moved. Let’s get you back on track!
            </p>
          </motion.div>
        </div>

        {/* Botones CTA */}
        <div
          className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <Button className="bg-white hover:bg-gray-100 text-slate-900 rounded-full px-8 py-6 font-medium text-lg">
            <Link to={"/contact"}>Contactanos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
