
// import React from 'react';
// import { cn } from "@/lib/utils";

// const BusinessFeatures = () => {
//   return (
//     <section className="py-20" id="features">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="mb-16 text-center">
//           <div className="inline-block glass-card px-6 py-2 mb-6">
//             <span className="text-sm text-pink-400 font-medium">CONSULTORIAS</span>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">Negocio Inteligente</h2>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             Convierte datos en decisiones: usa tecnología para un negocio más inteligente y rentable.
//           </p>
//         </div>
        
//         {/* Feature Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <FeatureCard
//             title="Stay updated with live stock levels across multiple locations."
//             badge={{ text: "Live", color: "green" }}
//             className="animate-fade-in"
//             delay="0s"
//           >
//             <div className="mb-4 space-y-4">
//               {/* Bar chart visualization */}
//               <ProgressBar value={85} color="from-orange-400 to-cyan-400" label="234" />
//               <ProgressBar value={60} color="from-purple-400 to-orange-400" label="145" />
//               <ProgressBar value={40} color="from-green-400 to-blue-400" label="" />
//             </div>
//           </FeatureCard>
          
//           <FeatureCard 
//             title="Never run out of stock—AI detects low levels and automates restocking."
//             badge={{ text: "Automated Stock", color: "default" }}
//             className="animate-fade-in"
//             delay="0.1s"
//           >
//             <div className="mb-4 space-y-3">
//               {/* Confirmation bubbles */}
//               <div className="flex justify-end mb-2">
//                 <span className="inline-block glass px-4 py-1 rounded-full text-sm">Confirmation</span>
//               </div>
//               <div className="flex justify-start mb-2">
//                 <span className="inline-block bg-slate-800/70 backdrop-blur-md px-4 py-1 rounded-full text-sm">Refund</span>
//               </div>
//               <div className="flex justify-end mb-2">
//                 <span className="inline-block glass px-4 py-1 rounded-full text-sm">Confirmation</span>
//               </div>
//             </div>
//           </FeatureCard>
          
//           <FeatureCard 
//             title="Predict future inventory needs with intelligent analytics and insights."
//             badge={{ text: "AI Forecasting", color: "default" }}
//             className="animate-fade-in"
//             delay="0.2s"
//           >
//             <div className="mb-4 flex items-end justify-center gap-6 h-40">
//               {/* Bar chart visualization */}
//               <div className="relative h-full flex items-end">
//                 <div className="w-12 h-[60%] glass rounded-md flex items-center justify-center">
//                   <span className="text-white text-sm font-medium">60%</span>
//                 </div>
//               </div>
//               <div className="relative h-full flex items-end">
//                 <div className="w-12 h-[45%] glass bg-purple-500/20 rounded-md flex items-center justify-center">
//                   <span className="text-white text-sm font-medium">45%</span>
//                 </div>
//               </div>
//               <div className="relative h-full flex items-end">
//                 <div className="w-12 h-[80%] glass rounded-md flex items-center justify-center">
//                   <span className="text-white text-sm font-medium">80%</span>
//                 </div>
//               </div>
//             </div>
//           </FeatureCard>
//         </div>
//       </div>
//     </section>
//   );
// };

// interface FeatureCardProps {
//   title: string;
//   badge: {
//     text: string;
//     color: "green" | "default";
//   };
//   children: React.ReactNode;
//   className?: string;
//   delay?: string;
// }

// const FeatureCard = ({ title, badge, children, className, delay }: FeatureCardProps) => {
//   return (
//     <div 
//       className={cn("glass-card p-8 hover:scale-[1.02] transition-transform", className)}
//       style={{ animationDelay: delay }}
//     >
//       {/* Badge */}
//       <div className="mb-6">
//         <span 
//           className={cn(
//             "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium", 
//             badge.color === "green" ? "bg-green-950 text-green-400" : "glass"
//           )}
//         >
//           {badge.color === "green" && (
//             <span className="h-2 w-2 bg-green-500 rounded-full mr-1.5 animate-pulse"></span>
//           )}
//           {badge.text}
//         </span>
//       </div>
      
//       {/* Content */}
//       {children}
      
//       {/* Title */}
//       <p className="text-gray-400 text-sm">{title}</p>
//     </div>
//   );
// };

// interface ProgressBarProps {
//   value: number;
//   color: string;
//   label?: string;
// }

// const ProgressBar = ({ value, color, label }: ProgressBarProps) => {
//   return (
//     <div className="w-full">
//       <div className="flex items-center">
//         <div className="flex-1 bg-slate-800/70 rounded-full overflow-hidden">
//           <div 
//             className={`h-2 bg-gradient-to-r ${color} rounded-full`}
//             style={{ width: `${value}%` }}
//           ></div>
//         </div>
//         {label && (
//           <span className="ml-3 text-sm text-gray-300">{label}</span>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BusinessFeatures;



import React from "react";
import { Badge } from "@/components/ui/badge"; // Badge está importado pero no se usa en esta lógica específica
import { motion } from "framer-motion"; // Importando motion para animaciones

const BusinessFeatures = () => {
  // Corregí "tittle" a "title" y "Al" a "AI" para consistencia y uso común.
  // La imagen de referencia también usa "AI".
  const featuresData = [
    {
      title: "Ciberseguridad",
      description:
        " Ofrecemos soluciones integrales de ciberseguridad enfocadas en protección de infraestructura, prevención de ataques, monitoreo en tiempo real y cumplimiento normativo. Incluye control de accesos, detección de amenazas, gestión de vulnerabilidades, respaldo seguro y respuesta ante incidentes.",
      img: "/features/feature 1.webp", // Asegúrate que estas rutas de imagen sean correctas y accesibles desde tu carpeta public
    },
    {
      title: "Cloud Computing",
      description:
        "Transformamos tu operación tecnológica con soluciones cloud escalables, seguras y de alta disponibilidad. Desplegamos infraestructura personalizada que permite sincronización en tiempo real, acceso remoto seguro y gestión centralizada de tus sistemas críticos.",
      img: "/features/feature 2.jpg",
    },
    {
      title: "Predicciones de IA",
      description:
        "Anticípate al futuro: nuestros algoritmos de Machine Learning generan predicciones precisas de ventas y compras, basadas en tu propio comportamiento histórico y tendencias del mercado.",
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
                className="group"
                key={feature.title} // Usando feature.title como key, asegúrate que los títulos sean únicos
              >
                {/* Contenedor de la Imagen */}
                <div className={`${index >= 3 ? "h-72 md:h-96" : "h-48 md:h-56"} mb-5 rounded-lg overflow-hidden`}>
                  {" "}
                  {/* Altura ajustada para mejor visual, se puede modificar */}
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="w-full h-full duration-500 object-cover opacity-70 group-hover:opacity-100" // 'object-cover' llenará el área, potencialmente recortando la imagen.
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

export default BusinessFeatures;
