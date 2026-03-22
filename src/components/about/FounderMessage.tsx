import React from "react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const FounderMessage = () => {
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
    <section className="bg-black py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Columna Izquierda (Texto) */}
          <div className="order-2 md:order-1">
            <Badge
              variant="outline"
              className="mb-4 px-4 py-2 bg-[#0d0d12] text-sm text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
            >
              Fundador
            </Badge>

            <motion.h1
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-6 flex flex-wrap justify-start"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {"Un mensaje de nuestros fundadores"
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
              className="text-base md:text-base text-[#999aab]"
            >
              <p className=" ">
                En <strong>Ingenio 360</strong>, creemos que la tecnología no
                debe ser un lujo, sino una herramienta accesible, potente y
                funcional. Por eso desarrollamos soluciones que permiten a las
                empresas automatizar, escalar y tomar decisiones con datos
                reales.
              </p>
              <p className="mt-3 ">
                Nuestra misión es clara:{" "}
                <strong>
                  liberar el potencial de cada negocio a través de sistemas
                  inteligentes que trabajan sin descanso.
                </strong>{" "}
                Desde el primer agente de IA hasta un ERP completo, cada
                producto está pensado para generar resultados medibles y
                sostenibles. Gracias por confiar en nosotros. Esto recién
                comienza.
              </p>
            </motion.div>
          </div>

          {/* Columna Derecha (Imagen) */}
          <motion.div
            key={0}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="order-1 md:order-2"
          >
            <div className="p-4 border border-neutral-700/80 rounded-lg">
              <div className="bg-slate-700 rounded-lg w-full max-w-md mx-auto md:max-w-none shadow-lg ring-1 ring-white/10">
                <video
                  className="w-full h-full rounded-lg"
                  src="https://cdn.pixabay.com/video/2024/02/07/199623-910995789_large.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderMessage;
