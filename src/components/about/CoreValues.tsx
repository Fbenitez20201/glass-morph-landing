import React from "react";
import { Lightbulb, Users, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const CoreValues = () => {
  const values = [
    {
      icon: '/about/aboutInnovation.webp',
      title: "Mentalidad Creativa",
      description:
        "No seguimos tendencias: las creamos. Desarrollamos soluciones ágiles, seguras y con visión de futuro.",
    },
    {
      image: "/about/about.webp",
    },
    {
      icon: '/about/aboutImpactful.webp',
      title: "Impacto Real",
      description:
        "Creamos tecnología que transforma: reduce carga operativa, mejora decisiones y da visibilidad completa del negocio.",
    },
    {
      icon: '/about/aboutCollaboration.webp',
      title: "Sinergia Total",
      description:
        "Conectamos personas, procesos y tecnología para crear sistemas que fluyen como uno solo. No vendemos software: creamos integraciones vivas.",
    },
  ];

  return (
    <section className="bg-black py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 bg-[#0d0d12] text-sm text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
          >
            Integridad
          </Badge>
          <h2 className="text-5xl font-semibold text-[#dedede] mb-4">
            Impulsados por visión, tecnología y propósito
          </h2>
          {/* <p className="text-[#747584] text-base max-w-md mx-auto">
            Committed to transparency, innovation, and impact, we empower
            businesses with smart solutions for growth.
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
            <div
              key={index}
              className={`bg-[#0d0d12] rounded-2xl ${value.image ? 'p-3' : 'p-6 '} flex items-start gap-4 border border-[#1e1e28] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]`}
              style={{
                background: value.image
                  ? undefined
                  : "radial-gradient(100% 100% at 50% 0%, rgba(37, 37, 50, 0.5) 0%, rgba(13, 13, 18, 1) 100%)",
              }}
            >
              {value.image ? (
                <div className="overflow-hidden rounded-xl w-full h-44 flex justify-center items-center">
                  <img
                    src={value.image}
                    alt="Team"
                    className="rounded-xl w-full object-cover"
                  />
                </div>
              ) : (
                <div className="flex flex-col">
                  <div className="h-[4rem] w-[4rem]">
                    <img
                      src={value.icon}
                      alt={value.title}
                      className="rounded-xl w-full object-cover"
                    />
                  </div>
                  <div className="mt-6">
                    <h3 className="text-white font-semibold text-lg mb-1">
                      {value.title}
                    </h3>
                    <p className="text-sm text-gray-400">{value.description}</p>
                  </div>
                </div>
              )}
            </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
