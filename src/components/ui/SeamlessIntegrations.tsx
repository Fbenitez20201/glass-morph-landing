// Nombre de archivo sugerido: SeamlessIntegrations.jsx
import React from 'react';
import { Check } from 'lucide-react';
import Marquee from "react-fast-marquee"; // Importar react-fast-marquee
import { Badge } from "@/components/ui/badge";
import { motion } from 'framer-motion';


// --- DATOS DE EJEMPLO ---
const mainIntegrationsData = [
  "Integraciones para eCommerce",
  "Agentes de IA para ventas",
  "CRMs modernos con IA integrada",
  "Plataformas de eCommerce con asistentes de IA",
  "Análisis financiero y empresarial con agentes y dashboards en Power BI o Tableau"
];


const row1IconsData = [
  { id: 'r1_1', src: "/integration/Dynamics365_scalable.webp", alt: "Dynamics 365" },
  { id: 'r1_2', src: "/integration/f066c084e6b6ea068ef91db9b0f33c3e.jpg", alt: "Microsoft 365" },
  { id: 'r1_3', src: "/integration/Instagram_logo_2022.svg.png", alt: "Instagram" },
  { id: 'r1_4', src: "/integration/Facebook_Messenger_logo_2020.svg.png", alt: "Messenger" },
  { id: 'r1_5', src: "/integration/stripe-v2.svg", alt: "Stripe" },
  { id: 'r1_6', src: "/integration/download (2).png", alt: "Shopify" },
  { id: 'r1_7', src: "/integration/unnamed (4).png", alt: "Adobe CC" },
  { id: 'r1_8', src: "/integration/images.png", alt: "Wompi" },
  { id: 'r1_9', src: "/integration/unnamed (3).png", alt: "PayPal" },
];

const row2IconsData = [
  { id: 'r2_1', src: "/integration/download (1).png", alt: "Workable" },
  { id: 'r2_2', src: "/integration/unnamed (2).png", alt: "BambooHR" },
  { id: 'r2_3', src: "/integration/unnamed (1).png", alt: "Ganttic" },
  { id: 'r2_4', src: "/integration/google-apps-for-business-drive.png", alt: "Google Drive" },
  { id: 'r2_5', src: "/integration/168_Hubspot_logo_logos-512.webp", alt: "HubSpot" },
  { id: 'r2_6', src: "/integration/0x0.png", alt: "Zardama" },
  { id: 'r2_7', src: "/integration/retell-ai-icon-filled-256.png", alt: "Retell AI" },
  { id: 'r2_8', src: "/integration/download.png", alt: "Slack" },
  { id: 'r2_9', src: "/integration/unnamed.png", alt: "Airtable" },
];

const featureHighlightsData = [
  { iconName: "AIChatbotCRM", title: "Agentes Multidisciplinarios", description: "Agentes inteligentes que responden mensajes y llamadas en áreas como ventas, atención al cliente, finanzas, RRHH y más." },
  { iconName: "ERPSystem", title: "Integraciones con ERPs", description: "Conectamos tu ERP existente con nuestras soluciones o realizamos mejoras clave dentro del mismo." },
  { iconName: "SupplierProcurement", title: "Creación de Endpoints para Proveedores", description: "Accede a datos en tiempo real para mejorar tu cadena de suministro." },
  { iconName: "POSIntegration", title: "Integración con Medios de Pago", description: "Automatizamos cobros con plataformas como Stripe, Wompi y otras, adaptadas a tu flujo operativo." },
];


// --- SUBCOMPONENTE: ScrollingIconsDisplay (Reemplaza CircularIconCarousel) ---
const ScrollingIconsDisplay = () => {
  const iconSize = "w-12 h-12 md:w-14 md:h-14"; // Tamaño de cada caja de icono
  const iconInnerSize = "w-7 h-7 md:w-8 md:h-8"; // Tamaño del placeholder de color del icono

  return (
    <div className='relative flex items-center justify-center'>
      <img src="https://framerusercontent.com/images/TOwTEytQyibjxvmakMhRLpWyqE.webp?scale-down-to=1024" alt="img"  className='absolute h-[18rem] w-[18rem] lg:h-[36rem] lg:w-[69rem] animate-spinSlow'/>
      <div 
        className="
          relative 
          w-48 h-48 md:w-96 md:h-96 lg:w-[390px] lg:h-[390px] 
          rounded-full 
          bg-black  // Un fondo un poco más visible para el círculo
          border-4 border-neutral-300/50 
          shadow-2xl shadow-black/50
          flex flex-col items-center justify-center 
          overflow-hidden 
          p-3 md:p-4 // Pequeño padding para que los marquees no toquen el borde exacto
          backdrop-blur-lg
        "
      >
        {/* Fila Superior de Iconos (Marquee hacia la derecha) */}
        <Marquee direction="right" speed={30} gradient={false} className="py-2 md:py-3">
          {row1IconsData.map((icon) => (
            <div 
              key={icon.id} 
              className={`${iconSize} border border-neutral-800 rounded-lg flex items-center justify-center mx-2 md:mx-3 shadow-md`}
            >
              <div className={`${iconInnerSize} rounded overflow-hidden`}>
                <img src={icon.src} alt={icon.id} className='object-cover' />
              </div>
              {/* En producción: <img src={icon.src} alt={icon.alt} className="w-full h-full object-contain p-2" /> */}
            </div>
          ))}
        </Marquee>

        {/* Fila Inferior de Iconos (Marquee hacia la izquierda) */}
        <Marquee direction="left" speed={30} gradient={false} className="py-2 md:py-3">
          {row2IconsData.map((icon) => (
            <div 
              key={icon.id} 
              className={`${iconSize} border border-neutral-800 rounded-lg flex items-center justify-center mx-2 md:mx-3 shadow-md`}
            >
              <div className={`${iconInnerSize} rounded  overflow-hidden`}>
                <img src={icon.src} alt={icon.id} className='object-cover' />
              </div>
              {/* En producción: <img src={icon.src} alt={icon.alt} className="w-full h-full object-contain p-1.5" /> */}
            </div>
          ))}
        </Marquee>
        
        {/* Opcional: Un overlay de viñeta o gradiente interno para dar más efecto de profundidad al círculo */}
        <div className="absolute inset-0 rounded-full box-border pointer-events-none
                        shadow-[inset_0_0_30px_15px_rgba(0,0,0,0.3)]"> 
        </div>
      </div>
    </div>
  );
};

// --- SUBCOMPONENTE: FeatureHighlightCard (Sin cambios respecto a la respuesta anterior) ---
const FeatureHighlightCard = ({ iconName, title, description }: { iconName: string, title: string, description: string }) => {
  const renderIcon = () => {
    const iconClass = "w-5 h-5";
    switch (iconName) {
      case "AIChatbotCRM": return { image: 'https://framerusercontent.com/images/R1jNCEChQ0598xbPNiffIZ7iUtg.webp'};
      case "ERPSystem": return { image: 'https://framerusercontent.com/images/9NvNYRuw75DA4V8tompot3Gl5s.webp'};
      case "SupplierProcurement": return { image: 'https://framerusercontent.com/images/wTpbt40TzqBTMOwMB9zXNSj28v0.webp'};
      case "POSIntegration": return { image: 'https://framerusercontent.com/images/4snh5INOcv3Eq4V4C35Mk3AYWM8.webp'};
      default: return { image: 'https://framerusercontent.com/images/4snh5INOcv3Eq4V4C35Mk3AYWM8.webp'}; // Icono por defecto
    }
  };
  return (
    <div className=" p-5 rounded-xl text-center md:text-left h-full flex flex-col">
      <div className="flex justify-center md:justify-start mb-3.5">
        <div className="w-16 h-16 rounded-lg flex items-center justify-center shadow">
          {renderIcon().image && (
            <img src={renderIcon().image} alt={iconName} className="w-full h-full object-cover" />
          )}
        </div>
      </div>
      <h4 className="font-semibold text-md text-white mb-1.5">{title}</h4>
      <p className="text-base text-[#747584] leading-relaxed">{description}</p>
    </div>
  );
};

// --- COMPONENTE PRINCIPAL: SeamlessIntegrations ---
const SeamlessIntegrations = () => {
  return (
    <section className="py-20 md:py-28 text-neutral-300 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-28 items-center relative"> {/* Aumentado más el gap */}
          {/* Columna Izquierda */}
          <div className="lg:pr-8 text-center lg:text-left">
            <div className="inline-block mb-5">
              <Badge
            variant="outline"
            className="mb-4 px-4 py-2 bg-[#0d0d12] text-sm text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
          >
            Implementación
          </Badge>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Implementación y Beneficios
            </h2>
            <p className="text-lg text-neutral-400 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Conecta tu negocio a lo mejor de la Inteligencia Artificial. Desde modelos LLM en CRM hasta agentes autónomos para servicio al cliente, ventas o finanzas.
            </p>
            <ul className="space-y-4 inline-block text-left max-w-md mx-auto lg:mx-0">
              {mainIntegrationsData.map((item, index) => (
                <li key={index} className="flex items-center">
                  <Check className="w-5 h-5 text-pink-500 mr-3 flex-shrink-0" />
                  <span className="text-md text-neutral-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="absolute hidden md:block inset-0 w-full h-full z-0">
            <img src="https://framerusercontent.com/images/xtP1yCgjKv6jX6UUEqjDRwgq3o.webp?scale-down-to=2048" alt="image" className="object-cover"/>
          </div>

          {/* Columna Derecha: Iconos Deslizantes */}
          <div className="flex items-center justify-center mt-10 lg:mt-0">
            <ScrollingIconsDisplay /> {/* Usando el nuevo componente */}
          </div>
        </div>

        {/* Fila Inferior: Highlights de Características */}
        <div className="mt-20 md:mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featureHighlightsData.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >

            <FeatureHighlightCard 
              key={highlight.title}
              iconName={highlight.iconName}
              title={highlight.title}
              description={highlight.description}
              />
              </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeamlessIntegrations;

/*
  NOTA IMPORTANTE SOBRE LOS ICONOS EN ScrollingIconsDisplay:
  He usado placeholders de colores (`placeholderColor`). Deberás reemplazarlos con tus
  componentes de iconos o etiquetas <img>. Por ejemplo:

  En ScrollingIconsDisplay, dentro del map de row1IconsData:
  ...
  className={`${iconSize} bg-neutral-700/70 rounded-lg flex items-center justify-center mx-2 md:mx-3 shadow-md overflow-hidden`} // Añadido overflow-hidden
  >
    <img src={icon.src} alt={icon.alt} className="w-3/4 h-3/4 object-contain" /> // Ajusta el tamaño interno del icono
  </div>
  ...
  Y tus datos `row1IconsData` deberían tener una propiedad `src` con la ruta a la imagen.
*/