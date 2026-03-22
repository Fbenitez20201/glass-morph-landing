import React from "react";
import { motion } from "framer-motion";

// Datos para las métricas
const metrics = [
  {
    value: "99.9%",
    description: "Disponibilidad garantizada en nuestras soluciones, sin caídas ni excusas."
  },
  {
    value: "10M+",
    description: "Interacciones y procesos gestionados automáticamente con trazabilidad total."
  },
  {
    value: "24/7",
    description: "IA operativa día y noche. Sin pausas, sin permisos. Tu sistema siempre activo."
  },
  {
    value: "Presencia en +12 Inc.",
    description: "Adaptamos nuestras soluciones a realidades empresariales tan diversas como complejas."
  }
];

const KeyMetrics = () => {
  return (
    <section className="bg-black py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="flex flex-col items-center text-center max-w-[280px] w-full min-w-0">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500">
                  {metric.value}
                </div>
                <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-snug break-words">
                  {metric.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyMetrics;
