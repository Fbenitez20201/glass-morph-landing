import React from "react"; // useState no se usa aquí
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // Asegúrate que esta ruta es correcta
import { Plus, Minus } from "lucide-react"; // Importa Plus y Minus (o X si prefieres)
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion"; // Importa motion de framer-motion

interface Features {
  text: string;
}

interface FAQItem {
  question: string;
  answer: string;
  features?: Features[] 
}

const FAQ = () => {
  const faqItems: FAQItem[] = [
    {
      question: "¿Qué tipos de agentes ofrecen?",
      answer:"Ofrecemos agentes especializados para:",
      features:[
        { text: "Ventas (cotización y cierre inteligente)" },
        { text: "Atención al cliente (soporte y gestión de reclamos)" },
        { text: "Finanzas (análisis automatizado y reportes visuales)" },
        { text: "Recursos Humanos (reclutamiento y selección)" },
        { text: "Secretaría Virtual (gestión de agenda y tareas administrativas)" },
      ]

    },
    {
      question: "¿Los agentes pueden integrarse a mis plataformas actuales?",
      answer:
        "Sí. Todos los agentes pueden conectarse a CRMs, ERPs y herramientas como Microsoft-Google Workspace, Odoo, SAP, Google Workspace, y bases de datos SQL.",
    },
    {
      question: "¿El agente tiene límite de respuestas o interacciones al mes?",
      answer:
        "No. Nuestros agentes operan sin restricciones de mensajes ni límites artificiales. Creemos en soluciones escalables y funcionales, diseñadas para adaptarse a tu operación real, no en barreras que entorpecen el servicio.",
    },
    {
      question: "¿Puedo recibir reportes automáticos con el agente de finanzas?",
      answer:
        "Sí. El agente genera reportes visuales con ROI, márgenes, comparativos mensuales y alertas de desviaciones, todo en tiempo real.",
    },
    {
      question: "Qué canales manejan los agentes?",
      answer:
        "Los agentes se integran con múltiples canales, incluyendo:",
      features: [
        {text: "Slack"},
        {text: "Microsoft "},
        {text: "Teams"},
        {text: "WhatsApp"},
        {text: "Telegram"},
        {text: "Instagram"},
        {text: "Facebook "},
        {text: "Messenger"},
        {text: "correo electrónico"},
      ]
    },
  ];

  return (
    <section className="py-20 bg-black" id="faq">
      {" "}
      {/* Fondo negro para la sección */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-5"
          >
            <div className="">
              <div className="mb-5">
                <Badge
                  variant="outline"
                  className=" px-4 py-2 bg-[#0d0d12] mt-8 text-sm text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
                >
                  Dudas
                </Badge>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              ¿Tienes dudas sobre los agentes? Te las resolvemos.
              </h2>
              <p className="text-gray-400 leading-relaxed">
              Todo lo que necesitas saber sobre nuestras soluciones de agentes inteligentes en un solo lugar: funciones, precios, integraciones, canales y mucho más, explicado sin rodeos.
              </p>
            </div>
          </motion.div>

          <div className="lg:col-span-7">
            <Accordion type="single" collapsible className="w-full space-y-5">
              {faqItems.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="    
                    backdrop-blur-md        
                    rounded-2xl
                    bg-gradient-to-r from-[#0d0d12] to-[#151726]             
                    border border-neutral-700/80
                     
                    transition-colors duration-300
                    overflow-hidden         
                    animate-fade-in      
                  "
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <AccordionTrigger
                      className="
                      px-6 py-5 w-full text-left 
                      hover:no-underline 
                      text-base font-medium text-white 
                      flex justify-between items-center
                      group {/* Necesario para que group-data-* funcione en hijos, aunque data-state está en el mismo Trigger */}
                      [&_svg.lucide-chevron-down]:hidden {/* Oculta el chevron por defecto de shadcn */}
                    "
                    >
                      <span className="flex-1 pr-2">{faq.question}</span>{" "}
                      {/* pr-2 para espacio antes del ícono */}
                      {/* Íconos personalizados que reaccionan al estado del AccordionTrigger */}
                      <Plus className="w-5 h-5 text-purple-300 transition-opacity duration-300 opacity-100 group-data-[state=open]:opacity-0 group-data-[state=open]:hidden" />
                      <Minus className="w-5 h-5 text-purple-300 transition-opacity duration-300 opacity-0 group-data-[state=open]:opacity-100 group-data-[state=open]:block absolute right-6" />{" "}
                      {/* Posicionamiento absoluto para superponer */}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300/90 px-6 pb-6 pt-2 leading-relaxed">
                      {" "}
                      {/* pt-2 para un poco de espacio */}
                      {faq.answer}
                      {faq.features && (
                        <div className="mt-4">
                          <ul className="list-disc mt-5 list-inside space-y-1">
                            {faq.features.map((feature, idx) => (
                              <li key={idx} className="text-gray-400">
                                {feature.text}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
