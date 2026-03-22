import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button"; // Asegúrate que esta ruta es correcta
import { Check } from "lucide-react";
import PricingTable from "./pricing/PricingTable"; // Asegúrate que esta ruta es correcta
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface PricingFeature {
  text: string;
}

interface PricingPlan {
  name: string;
  price: number;
  isPopular?: boolean;
  features: PricingFeature[];
  subtitle?: string;
}

// --- INICIO: Subcomponente CardContent ---
// Este componente contendrá la estructura interna de la tarjeta, para no repetir código.
interface CardContentProps {
  plan: PricingPlan;
  billingCycle: "monthly" | "yearly";
}

const CardContent = ({ plan, billingCycle }: CardContentProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const featuresWrapperRef = useRef<HTMLDivElement>(null);
  const featuresContentRef = useRef<HTMLDivElement>(null);

  const COLLAPSED_MAX_HEIGHT = "170px"; // Altura cuando está colapsado

  useEffect(() => {
    if (featuresWrapperRef.current && featuresContentRef.current) {
      if (isExpanded) {
        featuresWrapperRef.current.style.maxHeight = `${featuresContentRef.current.scrollHeight}px`;
      } else {
        featuresWrapperRef.current.style.maxHeight = COLLAPSED_MAX_HEIGHT;
      }
    }
  }, [isExpanded, plan.features]); // Re-ejecutar si cambian las features o el estado de expansión

  const commonButtonBaseStyles =
    "w-full font-semibold py-3 rounded-full shadow-md active:shadow-inner transition-all duration-300 ease-in-out";
  const buttonPopularClasses =
    "backdrop-blur-2xl bg-zinc-100 border-2 border-pink-500 text-zinc-900 hover:bg-slate-800/70 shadow-lg shadow-pink-500/50";
  const buttonNonPopularClasses =
    "bg-zinc-100 text-zinc-900 hover:bg-zinc-200/80 border border-transparent";

  return (
    <>
      <div className="flex items-center mb-4">
        <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
        {plan.isPopular && (
          <span className="bg-pink-500 text-white text-xs font-semibold ml-3 px-2.5 py-1 rounded-full">
            Popular
          </span>
        )}
      </div>

      <div className="mb-4">
        <span className="text-4xl font-bold text-white">${plan.price}</span>
        <span className="text-gray-400 ml-1">
          /Por {billingCycle === "monthly" ? "mes" : "año"}
        </span>
      </div>

      <div className="w-full bg-white/10 h-[1px] my-6"></div>

      {/* Contenedor para manejar el margen y el crecimiento flexible */}
      <div className="mb-8 flex-grow mt-4">
        <div
          ref={featuresWrapperRef}
          className="overflow-hidden relative transition-[max-height] duration-500 ease-in-out"
          style={{ maxHeight: COLLAPSED_MAX_HEIGHT }} // Altura inicial
        >
          <div ref={featuresContentRef} className="space-y-3">
            {" "}
            {/* Ajustado space-y para un poco menos de espacio */}
            {plan.features.map((feature, i) => (
              <div key={i} className="flex items-start">
                <Check className="w-5 h-5 text-pink-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm leading-relaxed">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
          {/* El gradiente solo se muestra si está colapsado y hay contenido que se corta */}
          {!isExpanded && parseInt(COLLAPSED_MAX_HEIGHT) > 0 && (
            <div className="absolute bottom-0 left-0 w-full h-12  pointer-events-none" />
          )}
        </div>
      </div>

      {plan.features.length > 4 && ( // Asumiendo que >4 features usualmente exceden COLLAPSED_MAX_HEIGHT
        <div className="mb-6 text-center">
          {" "}
          {/* Aumentado margen inferior */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm text-pink-400 hover:text-pink-300 transition-colors"
          >
            {isExpanded
              ? "Ver menos características ▲"
              : "Ver más características ▼"}
          </button>
        </div>
      )}

      <Link to={"/contact"}>
        <Button
          className={`
          ${commonButtonBaseStyles}
          ${plan.isPopular ? buttonPopularClasses : buttonNonPopularClasses}
        `}
        >
          Empieza Ahora
        </Button>
      </Link>
    </>
  );
};
// --- FIN: Subcomponente CardContent ---

// --- INICIO: Componente PricingCard ---
interface PricingCardProps {
  plan: PricingPlan;
  billingCycle: "monthly" | "yearly";
  className?: string;
  style?: React.CSSProperties;
}

const PricingCard = ({
  plan,
  billingCycle,
  className,
  style,
}: PricingCardProps) => {
  // Altura y ancho máximo definidos aquí para todas las tarjetas
  const cardDimensionStyles = `min-h-[35rem] min-w-[22rem]`; // Los que ya tenías

  if (plan.isPopular) {
    // TARJETA POPULAR CON BORDE DE GRADIENTE
    return (
      <div // Contenedor exterior para el borde de gradiente
        className={`
          relative 
          p-[2px]                             // Padding crea el grosor del borde (2px)
          rounded-2xl                       // Redondeo exterior
          bg-gradient-to-br from-[#e83171] via-[#311d45] to-[#874fcb] backdrop-blur-md // TU GRADIENTE
          
          ${cardDimensionStyles}
          ${
            className || ""
          }                  // Para clases de animación (animate-fade-in)
          shadow-2xl shadow-red-500/20      // Sombra sutil que puede tomar un color del gradiente
        `}
        style={style} // Para animationDelay
      >
        <div // Contenedor interior para el contenido y fondo real de la tarjeta
          className={`
            h-full w-full                   // Ocupa todo el espacio del div exterior
            bg-gradient-to-tl from-[#0d0d12] to-[#151726] rounded-lg
            p-8                    
            text-white              
            flex flex-col          
          `}
        >
          <CardContent plan={plan} billingCycle={billingCycle} />
        </div>
      </div>
    );
  } else {
    // TARJETAS NO POPULARES (Estructura de una sola capa)
    const nonPopularBaseClasses = `p-8 rounded-2xl flex flex-col text-white backdrop-blur-md bg-gradient-to-tl from-[#0d0d12] to-[#151726]  border border-neutral-700/80 shadow-xl shadow-black/40`;
    return (
      <div
        className={`
          ${nonPopularBaseClasses}
          ${cardDimensionStyles}
          ${className || ""}
        `}
        style={style}
      >
        <CardContent plan={plan} billingCycle={billingCycle} />
      </div>
    );
  }
};
// --- FIN: Componente PricingCard ---

// --- INICIO: Componente Principal Pricing ---
const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );

  // Definición de pricingPlans (asegúrate que el precio se calcula basado en billingCycle)
  const pricingPlans: PricingPlan[] = [
    {
      name: "Plan Básico ",
      subtitle: "Ideal para automatizar tareas repetitivas por texto.",
      price: billingCycle === "monthly" ? 100 : 1000, // Ejemplo, ajusta tus precios anuales
      features: [
        { text: "Agente de IA conversacional" },
        { text: "Atención básica 24/7" },
        {
          text: "Respuestas automatizadas con lógica condicional (FAQs, pedidos simples)",
        },
        {
          text: "Registro automático de conversaciones en Google Sheets o base de datos posgress",
        },
        { text: "Generación de reportes básicos en texto o tabla" },
      ],
    },
    {
      name: "Plan Profesional",
      subtitle:
        "Para empresas que requieren atención más completa, seguimiento y presentación de productos.",
      price: billingCycle === "monthly" ? 150 : 1700, // Ejemplo
      isPopular: true,
      features: [
        { text: "Todo el Plan Básico" },
        { text: "Recepción y envío de imágenes, audios y archivos" },
        { text: "Envío automático de catálogos interactivos (PDF o HTML)" },
        { text: "Seguimiento de clientes por ID o número de pedido" },
        { text: "Consultas a bases de datos y respuestas personalizadas" },
        { text: "Enlace con herramientas como QuickChart, PDF.co o CRMs" },
      ],
    },
    {
      name: "Plan Corp. - Omnicanal con Voz Avanzada",
      subtitle:
        "Para empresas que necesitan integración total y seguimiento automatizado",
      price: billingCycle === "monthly" ? 250 : 2500, // Ejemplo
      features: [
        { text: "Todo el Plan Profesional" },
        {
          text: "Soporte para mensajes de voz bidireccionales (voz a texto y texto a voz)",
        },
        {
          text: "Integración con central telefónica (Zadarma, Retell AI, etc.)",
        },
        {
          text: "Generación automática de cotizaciones, documentos y contratos en PDF",
        },
        { text: "Análisis de sentimiento y priorización de clientes" },
        { text: "Dashboard de analítica en tiempo real" },
        {
          text: "Flujos avanzados con múltiples agentes interconectados (ventas, cobranzas, soporte, etc.",
        },
      ],
    },
  ];

  const toggleOptions = [
    { label: "Monthly", value: "monthly" as "monthly" | "yearly" },
    { label: "Yearly", value: "yearly" as "monthly" | "yearly" },
  ];

  return (
    <section className="py-20 bg-black" id="pricing z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#dedede]">
            Planes de Precios
          </h2>
          <p className="text-[#747584] max-w-md mx-auto">
            Elija el plan ideal para automatizar conversaciones, agilizar flujos
            y ofrecer atención inteligente en cualquier etapa del proceso.
          </p>
        </div>
        {/* Billing toggle */}
        <div className="flex justify-center mb-12">
          <div className="relative p-1 rounded-full flex items-center border border-neutral-800 backdrop-blur-xl bg-slate-800/50">
            {toggleOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setBillingCycle(option.value)}
                className={`relative px-5 py-2 sm:px-6 rounded-full text-sm transition-colors focus:outline-none font-medium
                  ${
                    billingCycle === option.value
                      ? "text-slate-300" // Manteniendo tu estilo para el texto del toggle
                      : "text-slate-300 hover:text-white"
                  }`}
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                {billingCycle === option.value && (
                  <motion.div
                    className="absolute inset-0 rounded-full border border-purple-500 z-0" // Tu estilo de píldora animada
                    layoutId="activePill"
                    transition={{ type: "spring", stiffness: 280, damping: 25 }}
                  />
                )}
                <span className="relative z-10">{option.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Pricing plans */}
        {/* Cambiado gap-8 a gap-6 o gap-4 si las tarjetas son más anchas con max-w */}
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:max-w-[70rem]">
            {" "}
            {/* items-stretch para que las tarjetas llenen la altura del grid si es necesario */}
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div key={plan.name} className="flex justify-center">
                  {" "}
                  {/* Contenedor para centrar cada tarjeta si max-w está activo */}
                  <PricingCard
                    plan={plan}
                    billingCycle={billingCycle}
                    className="animate-fade-in" // Tus clases de animación
                    style={{ animationDelay: `${index * 0.1}s` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
// --- FIN: Componente Principal Pricing ---

export default Pricing;
