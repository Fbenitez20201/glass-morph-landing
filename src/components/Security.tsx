import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface SecurityFeatureProps {
  icon: string;
  title: string;
  description: string;
}

const Security = () => {
  const securityFeatures = [
    {
      icon: "https://framerusercontent.com/images/ucRQOw5XdRVkXncnOyDjiXCQuc.webp",
      title: "Control Basado en Roles",
      description: "Accesos seguros solo para usuarios autorizados.",
    },
    {
      icon: "https://framerusercontent.com/images/ieEmvXG6iKuVuh1vwYc0891mNLc.webp",
      title: "Detección de Fraude con IA",
      description: "Identifica y detiene transacciones sospechosas en tiempo real.",
    },
    {
      icon: "https://framerusercontent.com/images/YeKCufar345Tb3RhIuAsoBh98E.webp",
      title: "Nube Segura",
      description: "Copias de seguridad automáticas y cumplimiento con normativas.",
    },
    {
      icon: "https://framerusercontent.com/images/TO7hqRC3qvAVycJNMGGd13UUIuI.webp",
      title: "Cifrado de Extremo a Extremo",
      description: "Protección total contra accesos no autorizados.",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="security">
            <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="https://framerusercontent.com/images/xtP1yCgjKv6jX6UUEqjDRwgq3o.webp?scale-down-to=2048"
          alt="image"
          className="object-cover"
        />
      </div>
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 right-20 w-64 h-64 bg-security-gradient opacity-40"></div>
        <div className="absolute bottom-40 left-20 w-48 h-48 bg-security-gradient opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 bg-[#0d0d12] mt-8 text-sm text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
          >
            Seguridad
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Supremacía de la Protección Empresarial
          </h2>
          <p className="text-[#747584] max-w-md mx-auto">
            Protección avanzada para mantener sus datos, transacciones y negocio a salvo de amenazas y filtraciones.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center pb-16">
          {/* Security features - Left side */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <SecurityFeature
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Center 3D cube visualization */}
            <div className="lg:col-span-2 order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="w-full"
          >
              <div
                className="relative h-80 flex items-center justify-center animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                {/* Simulated 3D cube with glow */}
                <div className="relative perspective-1000">
                  <img
                    src="https://framerusercontent.com/images/9q0eixFRzP6z7pmGHrix2aJvFgw.webp?scale-down-to=1024"
                    alt="animate-3d"
                  />

                  {/* Floating smaller cubes */}
                  <div
                    className="absolute top-[90px] right-[60px] w-12 h-12 animate-float-rotate [animation-delay:0.4s]"
                  >
                    <img
                      src="https://framerusercontent.com/images/dK6eMVs9SNb7XMGoCQNcnkIQP3o.webp"
                      alt="animate-3d"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div
                    className="absolute top-[90px] scale-[0.5] left-[20px] w-20 h-20 transform rotate-90 animate-float-rotate [animation-delay:0.9s]"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <img
                      src="https://framerusercontent.com/images/dK6eMVs9SNb7XMGoCQNcnkIQP3o.webp"
                      alt="animate-3d"
                    />
                  </div>
                  <div
                    className="absolute bottom-0 lg:bottom-[35px] scale-[1.5] left-[30px] w-32 h-32  transform rotate-24 animate-float-rotate [animation-delay:8s]"
                    style={{ animationDelay: "3s" }}
                  >
                    <img
                      src="https://framerusercontent.com/images/dK6eMVs9SNb7XMGoCQNcnkIQP3o.webp"
                      alt="animate-3d"
                    />
                  </div>
                  <div
                    className="absolute bottom-[35px] scale-[1.2] right-[40px] w-44 h-44 transform -rotate-12 animate-float-rotate [animation-delay:0.8s]"
                    style={{ animationDelay: "1s" }}
                  >
                    <img
                      src="https://framerusercontent.com/images/dK6eMVs9SNb7XMGoCQNcnkIQP3o.webp"
                      alt="animate-3d"
                    />
                  </div>
                </div>
              </div>
          </motion.div>
            </div>
        </div>
      </div>
    </section>
  );
};

const SecurityFeature = ({
  icon,
  title,
  description,
  className,
  style,
}: SecurityFeatureProps & {
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div className={` p-6`} style={style}>
      <div className="mb-4 w-12 h-12 rounded-full">
        <img src={icon} alt={title} className="w-full h-full" />
      </div>
      <h3 className="text-sm font-bold mb-2">{title}</h3>
      <p className="text-[#747584] text-sm">{description}</p>
    </div>
  );
};

export default Security;
