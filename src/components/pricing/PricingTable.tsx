import React from "react";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

interface PricingFeatureComparison {
  feature: string;
  basic: boolean;
  standard: boolean;
  enterprise: boolean;
}

const PricingTable = () => {
  const features: PricingFeatureComparison[] = [
    {
      feature: "Agente de IA conversacional",
      basic: true,
      standard: true,
      enterprise: true,
    },
    {
      feature: "Atención básica 24/7",
      basic: true,
      standard: true,
      enterprise: true,
    },
    {
      feature: "Respuestas automatizadas con lógica condicional (FAQs, pedidos simples)",
      basic: true,
      standard: true,
      enterprise: true,
    },
    {
      feature: "Registro automático de conversaciones en Google Sheets o base de datos posgress",
      basic: true,
      standard: true,
      enterprise: true,
    },
    {
      feature: "Generación de reportes básicos en texto o tabla",
      basic: true,
      standard: true,
      enterprise: true,
    },
    {
      feature: "Recepción y envío de imágenes, audios y archivos",
      basic: false,
      standard: true,
      enterprise: true,
    },
    {
      feature: "Envío automático de catálogos interactivos (PDF o HTML)",
      basic: false,
      standard: true,
      enterprise: true,
    },
    {
      feature: "Seguimiento de clientes por ID o número de pedido",
      basic: false,
      standard: true,
      enterprise: true,
    },
    {
      feature: "Consultas a bases de datos y respuestas personalizadas",
      basic: false,
      standard: true,
      enterprise: true,
    },
    {
      feature: "Enlace con herramientas como QuickChart, PDF.co o CRMs",
      basic: false,
      standard: true,
      enterprise: true,
    },
    {
      feature: "Soporte para mensajes de voz bidireccionales (voz a texto y texto a voz)",
      basic: false,
      standard: false,
      enterprise: true,
    },
    {
      feature: "Integración con central telefónica (Zadarma, Retell AI, etc.)",
      basic: false,
      standard: false,
      enterprise: true,
    },
    {
      feature: "Generación automática de cotizaciones, documentos y contratos en PDF",
      basic: false,
      standard: false,
      enterprise: true,
    },
    {
      feature: "Análisis de sentimiento y priorización de clientes",
      basic: false,
      standard: false,
      enterprise: true,
    },
    {
      feature: "Dashboard de analítica en tiempo real",
      basic: false,
      standard: false,
      enterprise: true,
    },
    {
      feature: "Flujos avanzados con múltiples agentes interconectados (ventas, cobranzas, soporte, etc.)",
      basic: false,
      standard: false,
      enterprise: true,
    },
  ];
  

  const planNames = ["Basic plan", "Standard plan", "Enterprise plan"];

  return (
    <section className="mt-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-16"
        >
          <div>
            <Badge
              variant="outline"
              className="mb-4 px-4 py-2 bg-[#0d0d12] mt-8 text-sm text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
            >
              Detalles
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#dedede]">
            Detalles de Características
            </h2>
            <p className="text-[#747584] max-w-[34rem] mx-auto">
              Compará las funciones disponibles en cada plan de nuestros agentes inteligentes. Desde atención automatizada hasta flujos complejos con voz, reportes y seguimiento avanzado.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mb-16"
        >
          <div className="rounded-xl overflow-x-auto">
            {/* Eliminamos border-separate y border-spacing-y de la tabla si solo queremos bordes inferiores en las filas */}
            <table className="w-full text-left min-w-[700px]">
              <thead>
                {/* La cabecera no lleva borde inferior visible en la imagen 2 */}
                <tr>
                  <th
                    className="py-5 px-6 text-white font-semibold text-sm text-left 
                               rounded-tl-xl sticky left-0 
                               bg-gradient-to-r from-neutral-800 via-neutral-800/90 to-neutral-900"
                  >
                    Features
                  </th>

                  {planNames.map((planName, index) => (
                    <th
                      key={planName}
                      className={`
                      py-5 px-6 text-white font-semibold text-sm text-center
                      ${index === planNames.length - 1 ? "rounded-tr-xl" : ""}
                      ${
                        planName === "Enterprise plan"
                          ? "bg-gradient-to-r from-purple-800/80 via-indigo-800/70 to-neutral-900/60"
                          : "bg-neutral-900"
                      }
                    `}
                    >
                      {planName}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((item, index) => (
                  // Aplicamos el borde inferior a cada fila del cuerpo
                  <tr
                    key={index}
                    className="border-b border-neutral-700/70 transition-colors duration-150 hover:bg-neutral-800/30"
                    // hover:bg-neutral-800/30 para un hover sutil en la fila
                  >
                    <td className="text-neutral-200 py-5 px-6 text-sm sticky left-0 bg-black group-hover:bg-neutral-800/30 transition-colors duration-150">
                      {item.feature}
                    </td>
                    <td className="text-center py-5 px-2 group-hover:bg-neutral-800/30 transition-colors duration-150">
                      {item.basic ? (
                        <Check className="w-5 h-5 text-pink-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-neutral-500 mx-auto" />
                      )}
                    </td>
                    <td className="text-center py-5 px-2 group-hover:bg-neutral-800/30 transition-colors duration-150">
                      {item.standard ? (
                        <Check className="w-5 h-5 text-pink-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-neutral-500 mx-auto" />
                      )}
                    </td>
                    <td className="text-center py-5 px-2 group-hover:bg-neutral-800/30 transition-colors duration-150">
                      {item.enterprise ? (
                        <Check className="w-5 h-5 text-pink-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-neutral-500 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingTable;
