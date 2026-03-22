import React from "react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Ezequiel Aguiar",
    position: "Ing. CEO",
    description:
      "Ingeniero en Sistemas con más de 10 años de experiencia en tecnología e innovación empresarial. Especialista en Python, Ingeniería de Datos, Big Data, Machine Learning, Cloud, y automatización de procesos mediante herramientas como Power Automate y N8N. Cuento con 77 certificaciones internacionales otorgadas por entidades como Microsoft, Google, Cisco, IBM, entre otras.",
    img: "/team/team-1.jpg",
    linkedin: "https://www.linkedin.com/in/ezequiel-aguiar-843b28122/",
  },
  {
    name: "Fernando Benítez",
    position: "Ing. CTO & COO",
    description:
      "Experto en integración de sistemas empresariales, automatización avanzada e inteligencia artificial aplicada. Senior en Python y Node.js, con amplia experiencia en arquitectura de software y desarrollo de soluciones escalables que optimizan procesos clave del negocio.",
    img: "/team/team-2.jpg",
    linkedin: "https://www.linkedin.com/in/fernando-ben%C3%ADtez-9a25922b8/",
  },
  {
    name: "Ronald Mineros",
    position: "Lic. CFO",
    description:
      "Experto en combinar finanzas con desarrollo de software. Senior en Java y especialista en software contable y análisis financiero. Su dominio técnico-financiero lo convirtió en el arquitecto de nuestras soluciones financieras automatizadas.",
    img: "/team/team-3.jpg",
    linkedin: "https://www.linkedin.com/in/ronald-l%C3%B3pez-53986a221/",
  },
  {
    name: "Sofia Andino",
    position: "Lic. Directora Comercial",
    description:
      "Estratega comercial especializada en soluciones tecnológicas y desarrollo de software. Experta en identificar oportunidades de mercado y traducir necesidades empresariales en productos tecnológicos innovadores que impulsan el crecimiento sostenible.",
    img: "/team/team-4.jpg",
    linkedin: "https://www.linkedin.com/in/sofia-andino-346242188/",
  },
  {
    name: "Elena Molina",
    position: "Ing. Process Owner",
    description:
      "Ingeniera especializada en optimización de procesos empresariales mediante tecnología avanzada. Responsable de diseñar y supervisar flujos de trabajo eficientes que integran soluciones de software para maximizar la productividad operacional.",
    img: "/team/team-5.jpg",
    linkedin:
      "https://www.linkedin.com/in/flor-elena-molina-miranda-073201323/",
  },
  {
    name: "Paola Moreno",
    position: "Lic. Head of ESG",
    description:
      "Responsable de la estrategia de sostenibilidad y cumplimiento ESG. Especialista en alinear operaciones tecnológicas con estándares internacionales (GRI, SASB), impulsando una agenda verde, diversidad e inclusión en el sector tech.",
    img: "/team/team-6.jpg",
    linkedin: "https://www.linkedin.com/in/paola-mar%C3%ADa-moreno-72a58119b/",
  },
  {
    name: "Rogger Calvette",
    position: "Ing. Senior Backend Developer",
    description:
      "Desarrollador backend excepcional, experto en Python, JavaScript, tecnologías cloud (AWS, Azure, GCP) y arquitecturas distribuidas. Especialista en ERP, Odoo y sistemas de alta disponibilidad. Su dominio técnico asegura soluciones sólidas y escalables.",
    img: "/team/team-7.jpg",
    linkedin: "https://www.linkedin.com/in/royers-calvette-9076b722/",
  },
  {
    name: "Gabriel Morales",
    position: "Ing. Full Stack Developer",
    description:
      "Desarrollador Full Stack con talento excepcional en diseño y desarrollo de aplicaciones web. Experto en JavaScript, React, Python, Flask y APIs. Creador de plataformas innovadoras que combinan funcionalidad técnica superior con experiencia de usuario excepcional.",
    img: "/team/team-8.jpg",
    linkedin:
      "https://www.linkedin.com/in/gabriel-armando-morales-rondon-0b101b183/",
  },
];

const TeamSection = () => {
  return (
    <section className="bg-black py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 bg-[#0d0d12] text-sm text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
          >
            Equipo
          </Badge>
          <h2 className="text-5xl font-semibold text-[#dedede] mb-4">
            Conoce nuestro equipo
          </h2>
          <p className="text-[#747584] text-base max-w-md mx-auto">
            Un equipo de expertos apasionados por impulsar la transformación
            digital de procesos empresariales mediante soluciones inteligentes
            basadas y el apoyo de IA.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl shadow-lg border border-neutral-800 bg-neutral-900"
            >
              <div className="relative aspect-[3/4]">
                <img
                  src={member.img}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />

                <div className="absolute  inset-x-0 bottom-0 p-4">
                  <div className="p-4 group-hover:opacity-0 duration-200 absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent">
                    <div>
                      <h3 className="text-white font-semibold text-base md:text-lg">
                        {member.name}
                      </h3>
                      <p className="text-neutral-400 text-xs md:text-sm">
                        {member.position}
                      </p>
                    </div>
                  </div>

                  <div
                    className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black via-black/80
                               transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 
                               transition-all duration-500 ease-in-out"
                  >
                    <div>
                      <h3 className="text-white font-semibold text-base md:text-lg">
                        {member.name}
                      </h3>
                      <p className="text-neutral-400 text-xs md:text-sm">
                        {member.position}
                      </p>
                    </div>
                    <div className="mt-4">
                      <p className="text-neutral-300 text-xs md:text-sm ">
                        {member.description}
                      </p>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-400 hover:underline text-sm mt-4"
                      >
                        <Linkedin className="w-4 h-4 mr-1" /> LinkedIn
                      </a>
                    </div>
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

export default TeamSection;
