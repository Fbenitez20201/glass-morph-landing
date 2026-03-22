import React from "react";
import { Badge } from "@/components/ui/badge"; // Badge está importado pero no se usa en esta lógica específica
import { motion } from "framer-motion"; // Importando motion para animaciones

const FeaturesGrid = () => {
  // Corregí "tittle" a "title" y "Al" a "AI" para consistencia y uso común.
  // La imagen de referencia también usa "AI".
  const featuresData = [
    {
      title: "Ciberseguridad",
      description:
        "Ofrecemos soluciones integrales de ciberseguridad enfocadas en protección de infraestructura, prevención de ataques, monitoreo en tiempo real y cumplimiento normativo. Incluye control de accesos, detección de amenazas, gestión de vulnerabilidades, respaldo seguro y respuesta ante incidentes.",
      img: "/features/feature 1.webp",
    },
    {
      title: "Cloud Computing",
      description:
        "Transformamos tu operación tecnológica con soluciones cloud escalables, seguras y de alta disponibilidad. Desplegamos infraestructura personalizada que permite sincronización en tiempo real, acceso remoto seguro y gestión centralizada de tus sistemas críticos.",
      img: "/features/feature 2.jpg",
    },
    {
      title: "Pronóstico con IA",
      description:
        "Anticipa las necesidades de inventario con análisis inteligentes y proyecciones basadas en inteligencia artificial.",
      img: "/features/feature 3.webp",
    },
    {
      title: "RPA y Automatizaciones",
      description:
        "Automatiza procesos clave, reduce costos operativos y libera tu equipo para tareas de valor.",
      img: "https://framerusercontent.com/images/gm1EzHe3CSBq9hx7H92CcENjXo.png?scale-down-to=1024",
    },
    {
      title: "ERP Adaptado a Tu Negocio",
      description:
        "Integramos y personalizamos la plataforma ERP que necesites para un flujo de trabajo eficiente y sin fisuras.",
      img: "https://framerusercontent.com/images/iyE09OcW3kaSs43FFYhlVIK8Iw.png?scale-down-to=1024",
    },
  ];

  return (
    <section className="bg-black py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
                <div className="text-center mb-16">
                  <Badge
                    variant="outline"
                    className="mb-4 px-4 py-2 bg-[#0d0d12] text-sm text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
                  >
                    Especialidades
                  </Badge>
                  <h2 className="text-5xl font-semibold text-[#dedede] mb-4">
                    Negocio Inteligente
                  </h2>
                  <p className="text-[#747584] text-base max-w-md mx-auto">
                    Convierte datos en decisiones: usa tecnología para un negocio más inteligente y rentable.
                  </p>
                </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`
                border border-neutral-800
                rounded-xl 
                shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out 
                flex flex-col
                ${index < 3 ? "lg:col-span-2" : "lg:col-span-3"} 
                {/* Para pantallas 'sm', los ítems tomarán naturalmente 1 de 2 columnas. */}
                {/* El quinto ítem (index 4) estará en una nueva fila, ocupando la primera celda (mitad del ancho) si sm:grid-cols-2. */}
                {/* Este es un flujo responsivo estándar. Si se necesitan col-spans específicos para sm/md, se pueden agregar. */}
              `}
            >
              <div
                key={feature.title} // Usando feature.title como key, asegúrate que los títulos sean únicos
                className="group"
              >
                {/* Contenedor de la Imagen */}
                <div className={`${index >= 3 ? "h-72 md:h-96" : "h-48 md:h-56"} mb-5 rounded-lg overflow-hidden`}>
                  {" "}
                  {/* Altura ajustada para mejor visual, se puede modificar */}
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 duration-500" // 'object-cover' llenará el área, potencialmente recortando la imagen.
                    // Usa 'object-contain' si necesitas ver la imagen completa sin recortar,
                    // y podrías querer agregar un color de fondo a este div si las imágenes tienen transparencia.
                  />
                </div>
                {/* Contenido de Texto */}
                <div className="p-3">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed flex-grow">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
