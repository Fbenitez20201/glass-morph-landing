import React, { useState, useEffect, useRef } from "react";
import { Check, Truck, ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Step {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

const SimpleSteps = () => {
  const [activeStep, setActiveStep] = useState<Step>(steps[0]);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Setup intersection observer
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveStep(steps[index]);
            }
          });
        },
        { threshold: 0.6 } // Trigger when 60% of the element is visible
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="py-24 bg-black" id="process">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#dedede]">
            Obtén tu Solución en 3 Simples Pasos
          </h2>
          <p className="text-[#747584] max-w-lg mx-auto">
            Siga estos sencillos pasos para revolucionar su proceso de gestión de inventario con nuestra solución impulsada por IA.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left column - sticky card */}
          <div className="w-full hidden lg:block lg:w-2/5">
            <div className="sticky top-24  w-[20rem] overflow-hidden rounded-lg border border-neutral-800 flex flex-col items-center justify-end text-center">
              {/* Icon circle with gradient border */}
              <img
                src={activeStep.icon}
                alt=""
                className="w-full h-full object-cover"
              />

              <div className="pb-6 px-3">
                <h3 className="text-lg font-bold text-[#dedede] mb-2 text-left">
                  {activeStep.title}
                </h3>
                <p className="text-[#747584] text-sm text-left">
                  {activeStep.description}
                </p>
              </div>
            </div>
          </div>

          {/* Right column - scrollable steps */}
          <div className="w-full lg:w-3/5">
            <div className="space-y-32">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  ref={(el) => (stepRefs.current[index] = el)}
                  className=" animate-float"
                >
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{step.description}</p>

                  {/* Image */}
                  <div className="rounded-lg overflow-hidden border border-neutral-800">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const steps: Step[] = [
  {
    id: "signup",
    title: "Contáctanos",
    description:
      "Evalúamos tu caso y seleccionamos la solución que mejor se adapta a las necesidades reales de tu negocio.",
    icon: "https://framerusercontent.com/images/wTKUiOMTkkqxStq3M1agpCn5E.webp?scale-down-to=512",
    image:
      "/simple-step/simple1.jpg",
  },
  {
    id: "setup",
    title: "Levantamiento de Procesos",
    description:
      "Realizamos un diagnóstico completo para adaptar la solución a tu empresa, no al revés. Tu operación es única y así debe ser tu tecnología.",
    icon: "https://framerusercontent.com/images/FgtngYfbBnOWFP44T7lLqm8NY.webp?scale-down-to=512",
    image:
      "/simple-step/simple2.jpg",
  },
  {
    id: "deadelivery",
    title: "Implementación y Beneficios",
    description: "Relájate mientras nosotros implementamos todo. Disfruta de una solución funcional, adaptada y con soporte continuo.",
    icon: "https://framerusercontent.com/images/agoP4kpucj3LQjLog4rrcTVQ3M.webp?scale-down-to=512",
    image:
      "/simple-step/simple3.jpg",
  },
];

export default SimpleSteps;
