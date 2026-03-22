import React, { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isLoading, setIsLoading] = useState(false)

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;
    setIsLoading(true);
    
    try {
      const result = await emailjs.sendForm(
        "service_2wz8mb8",
        "template_l13hcbl",
        formRef.current,
        "-WBncVwR5pGzAO4In" 
      );
      setIsLoading(false)

      toast.success("¡Mensaje enviado con éxito! En breve recibirás una copia en tu correo electrónico.");
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      setIsLoading(false)
      toast.error("Hubo un error al enviar el mensaje.");
    }
  };

  return (
    <section className="py-16 bg-black lg:px-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            {/* Email Us Block */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex flex-col items-start gap-4">
                  <div className="w-20 h-20 ">
                    <img
                      src="https://framerusercontent.com/images/LbYkfyeeCvsjaPe4HaGjN9oymI.webp"
                      alt=""
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white/60">
                      Envíenos un Correo
                    </h3>
                    <p className="text-lg text-[#747584]/80 mt-1 text-justify">
                      Contáctanos para recibir asistencia rápida, agendar una
                      demo o resolver cualquier consulta sobre nuestras
                      soluciones.
                    </p>
                    <a
                      href="mailto:cotizacion@ingenio-360.com"
                      /* Correo de la imagen 2 */ className="text-lg mt-2 block text-neutral-100/80 hover:text-purple-400 transition-colors"
                    >
                      ventas@ingenio360soft.com
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Bloque Call Us - Estilo Imagen 2 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex flex-col items-start gap-4">
                  <div className="w-20 h-20 ">
                    <img
                      src="https://framerusercontent.com/images/u84FPx9ygs8C0DiVlAiL8qOUs.webp"
                      alt=""
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white/60">
                      Llámanos
                    </h3>
                    <p className="text-lg text-[#747584]/80 mt-1 text-justify">
                      Déjenos un mensaje y uno de nuestros especialistas se
                      pondrá en contacto a la brevedad.
                    </p>
                    <a
                      href="https://wa.me/50364554356"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg mt-2 block text-neutral-100/80 hover:text-purple-400 transition-colors"
                    >
                      +503 6455 4356
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Join Community Block */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-gradient-to-tl from-[#0d0d12] to-[#181a29] backdrop-blur-lg border border-slate-700/30 p-6 rounded-xl">
                <div className="flex flex-col lg:flex-row items-center gap-6">
                  <div>
                    <h3 className="font-semibold text-xl text-white/80">
                      Únete a Nuestro Equipo
                    </h3>
                    <p className="text-md text-[#747584] mt-1 text-justify">
                      Descubrí oportunidades profesionales en Ingenio 360.
                      Conectate con nuestra comunidad en LinkedIn y sé parte del
                      equipo que está transformando la tecnología en
                      Latinoamérica.
                    </p>

                    <div className="mt-8 space-y-4">
                      <div className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">
                          Carreras activas
                        </span>
                      </div>
                      <div className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">
                          Proyectos de impacto real
                        </span>
                      </div>
                      <div className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">
                          Cultura de innovación y crecimiento
                        </span>
                      </div>
                    </div>
                    <Link to={"https://www.linkedin.com/company/105508860/admin/page-posts/published/"}>
                      <Button className="mt-6 py-2 px-4 bg-slate-500 font-semibold rounded-full">
                        Únetenos
                      </Button>
                    </Link>
                  </div>

                  <div className="min-w-24 min-h-24 hidden md:flex bg-gradient-to-br from-purple-600 to-blue-600 rounded-full items-center justify-center">
                    <img
                      src="https://framerusercontent.com/images/f5JtywTZ3HHkaKvlikefoyjTdXI.webp"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-gradient-to-tl from-[#0d0d12] to-[#181a29] border border-slate-700/30 p-8 rounded-xl">
              <h2 className="font-semibold text-2xl text-white mb-6">
                Mandanos un correo
              </h2>

              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <Label
                      htmlFor="firstName"
                      className="text-sm text-slate-300"
                    >
                      Nombre
                    </Label>
                    <Input name="firstName" required placeholder="Nombre" />
                  </div>
                  <div>
                    <Label
                      htmlFor="lastName"
                      className="text-sm text-slate-300"
                    >
                      Apellido
                    </Label>
                    <Input name="lastName" required placeholder="Apellido" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm text-slate-300">
                    Correo Electrónico
                  </Label>
                  <Input
                    name="email"
                    type="email"
                    required
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-sm text-slate-300">
                    Número de Teléfono
                  </Label>
                  <Input
                    name="phone"
                    type="tel"
                    required
                    placeholder="Número"
                  />
                </div>

                <div>
                  <Label htmlFor="query" className="text-sm text-slate-300">
                    Su Consulta
                  </Label>
                  <Textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="¿Qué necesitas comentarnos?"
                  />
                </div>

                <Button
                  isLoading={isLoading}
                  type="submit"
                  className="py-3 px-6 w-full bg-slate-200 text-slate-900 font-semibold hover:bg-slate-300 focus:ring-2 focus:ring-slate-400 rounded-md"
                  >
                  Enviar
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
