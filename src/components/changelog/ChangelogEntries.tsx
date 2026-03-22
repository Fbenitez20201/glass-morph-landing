
import React from "react";
import { motion } from "framer-motion";

// Type for individual changelog entry
interface ChangelogEntry {
  date: string;
  version: string;
  title: string;
  description: string;
  imageClass: string; // CSS class for styling the placeholder image
  additionalText?: string;
  features: Features[]
  img: string; // URL for the image
}

interface Features {
  title: string
  features: string[];
}

const ChangelogEntries = () => {
  // Sample changelog data
  const entries: ChangelogEntry[] = [
    {
      date: "15 de mayo de 2025 ",
      version: "",
      title: "Ya operamos con las tecnologías más recientes en inteligencia artificial, automatización, ciberseguridad y cloud computing, integrándolas en soluciones reales que nuestros clientes ya están usando.",
      description: "En Ingenio360, nos enorgullece anunciar que ya estamos utilizando las tecnologías más avanzadas en cloud computing y ciberseguridad, integrando las últimas tendencias del sector para ofrecer a nuestros clientes soluciones robustas, eficientes y seguras.",
      imageClass: "bg-gradient-to-r from-purple-900/50 to-blue-900/50",
      features: [
        {
          title: "Implementación de Arquitectura Zero Trust y Seguridad Autónoma",
          features: [
            `Adopción del modelo de seguridad Zero Trust, basado en el principio de "nunca confiar, siempre verificar", asegurando que cada acceso a nuestros sistemas sea autenticado y autorizado rigurosamente.`,

            `Integración de sistemas de seguridad autónomos impulsados por inteligencia artificial, que detectan y responden a amenazas en tiempo real sin intervención humana, mejorando significativamente nuestra capacidad de respuesta ante incidentes .`
          ]
        },
        {
          title: "Infraestructura en la Nube de Nueva Generación",
          features: [
            `Migración a infraestructuras multicloud e híbridas, permitiéndonos operar con flexibilidad y resiliencia, adaptándonos rápidamente a las necesidades cambiantes del mercado.`,

            `Implementación de herramientas de análisis de vulnerabilidades y protección en tiempo de ejecución, garantizando que nuestras aplicaciones y datos estén protegidos en todo momento .`
          ]
        },        
        {
          title: "Compromiso con la Sostenibilidad y la Innovación",
          features: [
            `Optimización del consumo energético de nuestros centros de datos, alineándonos con las mejores prácticas de sostenibilidad y reduciendo nuestra huella de carbono.`,

            `Participación activa en el desarrollo de soluciones innovadoras, colaborando con partners tecnológicos para estar siempre un paso adelante en la adopción de nuevas tecnologías .`
          ]
        },
      ],
      additionalText: "",
      img: "https://framerusercontent.com/images/xp90kS0ZgLw2uEY7vdpiO8PdCQE.png"
    },
    {
      date: "1 de mayo de 2025 ",
      version: "",
      title: "Ya Estamos Usando MCP: Contexto Persistente para una IA Realmente Inteligente",
      description: "En Ingenio360 ya integramos el nuevo Model Context Protocol (MCP) como parte de nuestra arquitectura de inteligencia artificial, lo que nos permite construir agentes más inteligentes, contextuales y persistentes. Mientras otros apenas están descubriendo esta innovación, nosotros ya la tenemos en producción.",
      imageClass: "bg-gradient-to-r from-pink-900/50 to-purple-900/50",
      features: [
        {
          title: "¿Qué estamos haciendo con MCP?",
          features: [
            `●	Nuestros agentes ahora mantienen el contexto de interacción entre sesiones, sin necesidad de reentrenar ni resetear información.`,

            `●	Con MCP, las decisiones de IA son más coherentes, porque el modelo entiende quién eres, qué has hecho antes y hacia dónde vas.`,
            `●	Usamos MCP para conectar múltiples fuentes de datos y mantener la memoria de usuario distribuida entre sistemas.`,
            `●	Hemos combinado MCP con nuestras automatizaciones en n8n, lo que permite flujos conversacionales realmente personalizados y persistentes.`,
            `●	Aplicado en ventas, soporte, educación y agentes internos, donde recordar el historial mejora la experiencia y la eficiencia.`,
          ]
        },
      ],
      img: "https://framerusercontent.com/images/vTXYmDZYABSFFl6398jTq2CLCTs.png"
    },
    {
      date: "31 de marzo de 2025 ",
      version: "",
      title: "Adoptamos las Nuevas Funciones Empresariales de Copilot Studio: Automatización con IA a Otro Nivel",
      description: "En Ingenio360 ya hemos adoptado las últimas funcionalidades empresariales de Copilot Studio, reforzando nuestro compromiso con la innovación y la automatización inteligente de procesos. Esta actualización marca un salto significativo en la forma en que diseñamos y desplegamos agentes conversacionales capaces de interactuar con sistemas empresariales reales, tomar decisiones y ejecutar tareas en múltiples canales.",
      imageClass: "bg-gradient-to-r from-blue-900/50 to-cyan-900/50",
      features: [
        {
          title: "Cambios Clave que Ya Estamos Implementando:",
          features: [
            `Integración directa con fuentes empresariales como SAP, Microsoft 365 y bases de datos internas, permitiendo copilotos que entienden el contexto real del negocio.`,

            `Automatización avanzada con flujos condicionales, lógica personalizada y reglas operativas, sin necesidad de código complejo.`,
            `Uso de Copilot Studio para agentes en Teams, WhatsApp y aplicaciones internas, acelerando la atención, soporte y ventas.`,
            `Control de acceso y trazabilidad robusta, con monitoreo de cada acción ejecutada por los copilotos en entornos productivos.`,
            `Extensión del entorno con conectores propios, incluyendo interacciones con CRM, ERPs y APIs externas a medida.`,
          ]
        },
      ],
      additionalText: "",
      img: "https://framerusercontent.com/images/MHHFj9q0BVoGGiuncP30xOUO8.png"
    }
  ];

  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {entries.map((entry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
            <div 
              key={index} 
              className={`${index !== entries.length - 1 ? 'border-b border-slate-700/50 pb-16' : ''}`}
            >
              <div className="grid md:grid-cols-[150px_1fr] gap-8 items-start">
                {/* Date and Version */}
                <div className="text-left border-2 border-neutral-800 rounded-lg p-4">
                  <p className="text-[#dedede] text-sm font-semibold">{entry.date}</p>
                  <p className="text-[#747584] text-xs mt-1">{entry.version}</p>
                </div>
                
                {/* Main Content */}
                <div>
                  <h3 className="font-bold text-2xl lg:text-3xl text-white mb-2">{entry.title}</h3>
                  <p className="text-[#dedede] text-base mb-6">{entry.description}</p>
                  
                  {/* Image placeholder */}
                  <div className={`${entry.imageClass} rounded-lg w-full overflow-hidden aspect-video lg:aspect-[16/9] mb-6 flex items-center justify-center`}>
                    <img src={entry.img} alt={entry.title} className="object-cover w-full h-full"/>
                  </div>
                  
                  {
                    entry.features.map((feature, i) => (
                      <div key={i} className="mb-3">
                        <h4 className="text-[#dedede] font-semibold text-lg mb-3">{feature.title}</h4>
                        <ul className="space-y-2 list-disc list-inside pl-1">
                          {feature.features.map((fea, idx) => (
                            <li key={idx} className="text-[#747584] text-sm">{fea}</li>
                          ))}
                        </ul>
                      </div>
                    ))
                  }
                  
                  {entry.additionalText && (
                    <p className="text-[#747584] text-sm mt-4">{entry.additionalText}</p>
                  )}
                </div>
              </div>
            </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChangelogEntries;
