import React, { useState, useEffect } from "react"; // useEffect no se está usando actualmente
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious, // Puedes mantenerlos o quitarlos si los botones custom son suficientes
  CarouselNext, // Puedes mantenerlos o quitarlos
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Para los botones custom
import { Badge } from "@/components/ui/badge";

interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
  image: string;
}

const Testimonials = () => {
  // El estado currentIndex y las funciones next/prevTestimonial son para un carrusel manual.
  // El componente Carousel de shadcn/ui maneja su propio estado interno.
  // Si quieres usar el Carousel de shadcn/ui con sus botones, no necesitas este estado y funciones.
  // Si quieres que TUS botones controlen el Carousel de shadcn, necesitarás pasarle una API al Carousel.
  // Por simplicidad, asumiré que usaremos los botones del Carousel de shadcn/ui o tus botones personalizados
  // controlarán un carrusel más simple si no usamos la API del Carousel de shadcn.

  // Voy a mantener tus botones personalizados y asumir que controlan el carrusel de shadcn/ui
  // Para ello, necesitamos una instancia de la API del carrusel.
  // const [api, setApi] = useState<CarouselApi>() // CarouselApi se importa de shadcn

  // NOTA: Para controlar el Carousel de shadcn/ui con botones externos,
  // se usa su API. El siguiente código es conceptual para ello.
  // useEffect(() => {
  //   if (!api) {
  //     return
  //   }
  //   api.on("select", () => {
  //     setCurrentIndex(api.selectedScrollSnap())
  //   })
  // }, [api])

  const testimonialsData: Testimonial[] = [
    // Renombrado para evitar conflicto y corregido IDs
    {
      id: 1,
      text: "El agente de IA para finanzas nos dio un control que no habíamos logrado ni con planillas ni con asesores externos. Hoy las proyecciones de flujo se generan solas y con más precisión",
      author: "María Fernanda López",
      role: "Directora Financiera",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
      id: 2,
      text: "El bot de atención al cliente responde más rápido que cualquier humano, pero sin perder el toque amable. Desde que lo implementamos, las quejas bajaron casi a cero.",
      author: "Isabela Ramírez",
      role: "Encargada de Servicio al Cliente",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      text: "Nuestro equipo comercial lo agradece: el agente de ventas no solo cotiza en segundos, sino que recuerda lo que pidió cada cliente. Ya no perdemos tiempo ni oportunidades.",
      author: "Carlos Mejía",
      role: "Coordinador Comercial",
      image: "https://randomuser.me/api/portraits/men/8.jpg",
    },
    {
      // IDs únicos
      id: 4,
      text: "Nunca imaginé que una IA pudiera generar reportes tan claros. El agente analiza cada ticket y nos dice dónde mejorar, sin que nadie tenga que revisar manualmente.",
      author: "Ana Lucía Morales",
      role: "Líder de Calidad",
      image: "https://randomuser.me/api/portraits/women/75.jpg",
    },
    {
      id: 5,
      text: "Lo que más valoramos es que el ERP se adaptó a nosotros, no al revés. Las órdenes, la facturación y el inventario fluyen en una sola plataforma sin errores.",
      author: "Ricardo Torres",
      role: "Administrador de Operaciones",
      image: "https://randomuser.me/api/portraits/men/25.jpg",
    },
    {
      id: 6,
      text: "Antes teníamos tres sistemas que no hablaban entre sí. Con este ERP todo está unificado. La visibilidad del negocio mejoró al instante.",
      author: "Carolina Velásquez",
      role: "Gerente General",
      image: "https://randomuser.me/api/portraits/women/55.jpg",
    },
    {
      id: 7,
      text: "La tienda online quedó mejor de lo que imaginamos. En menos de un mes empezamos a vender, y todo está automatizado: pagos, correos, inventario y envíos.",
      author: "Julieta Navarro",
      role: "Emprendedora",
      image: "https://randomuser.me/api/portraits/women/15.jpg",
    },
  ];

  // Si usamos el Carousel de shadcn/ui, sus botones <CarouselPrevious /> y <CarouselNext /> funcionarán automáticamente.
  // Tus botones personalizados tendrían que usar la API del carrusel.
  // Por ahora, simplificaré y usaré los botones integrados de shadcn/ui Carousel, estilizándolos.

  return (
    <section className="relative py-20 md:py-28 bg-black text-neutral-200">
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="https://framerusercontent.com/images/xtP1yCgjKv6jX6UUEqjDRwgq3o.webp?scale-down-to=2048"
          alt="image"
          className="object-cover"
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-4 px-4 py-2 bg-[#0d0d12] text-sm text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
            >
              Reseñas
            </Badge>
            <h2 className="text-5xl font-semibold text-[#dedede] mb-4">
              Clientes Satisfechos
            </h2>
            {/* <p className="text-[#747584] text-base max-w-md mx-auto">
              Smart inventory, real results. See how Cawar improves efficiency
              and prevents stock issues.
            </p> */}
          </div>
        </div>

        {/* Testimonials carousel - Usando shadcn/ui Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true, // Para que el carrusel sea infinito
          }}
          className="w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto" // Ajusta max-w según cuántos items quieres que insinúe
        >
          <div className="mb-8 flex justify-center gap-3">
            <CarouselPrevious
              className="
                relative enabled:hover:bg-neutral-700 disabled:opacity-30
                translate-x-0 translate-y-0 left-0 right-0 top-0 bottom-0 
                w-10 h-10 bg-neutral-800/80 border-neutral-700 text-white rounded-full
            "
            />
            <CarouselNext
              className="
                relative enabled:hover:bg-neutral-700 disabled:opacity-30
                translate-x-0 translate-y-0 left-0 right-0 top-0 bottom-0
                w-10 h-10 bg-neutral-800/80 border-neutral-700 text-white rounded-full
            "
            />
          </div>
          <CarouselContent className="-ml-4">
            {" "}
            {/* ml- negatvo para compensar padding de items si es necesario */}
            {testimonialsData.map((testimonial, index) => (
              <CarouselItem
                key={testimonial.id || index}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                {" "}
                {/* Muestra 1, 2 o 3 items */}
                {/* Contenedor exterior para el "glow" y redondeo */}
                <div className=" rounded-2xl bg-gradient-to-tl from-[#0d0d12] to-[#181a29] h-full max-w-[22rem] shadow-[0_0_20px_rgba(128,128,128,0.05)]">
                  {/* Div interior para el contenido de la tarjeta */}
                  <div className=" rounded-[calc(1rem-2px)] p-3 flex flex-col h-full">
                    {" "}
                    {/* Asegura rounded-2xl es 1rem */}
                    {/* Quote marks */}
                    <div className="bg-[#060608]/80 p-4 rounded-xl">
                      <div className="text-neutral-600 mb-4">
                        {" "}
                        {/* Color de comillas más claro */}
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.5 6C9.5 6 7 8.5 7 12C7 15 9 15.5 10 15.5C11.5 15.5 12.5 14.5 12.5 13C12.5 11.5 11.5 10.5 10 10.5C10.5 9.5 11.5 9 12 8.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.5 6C16.5 6 14 8.5 14 12C14 15 16 15.5 17 15.5C18.5 15.5 19.5 14.5 19.5 13C19.5 11.5 18.5 10.5 17 10.5C17.5 9.5 18.5 9 19 8.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>

                      <p className="text-neutral-300 mb-6 text-base leading-relaxed flex-grow">
                        "{testimonial.text}"
                      </p>
                    </div>
                    {/* Author info - imagen a la derecha */}
                    <div className="flex p-3 items-center justify-between mt-auto pt-4 border-t border-neutral-700/50">
                      {" "}
                      {/* Línea divisora sutil y mt-auto */}
                      <div>
                        <h4 className="font-semibold text-white text-sm">
                          {testimonial.author}
                        </h4>
                        <p className="text-neutral-400 text-xs">
                          {testimonial.role}
                        </p>
                      </div>
                      <div className="w-10 h-10 rounded-full overflow-hidden ml-3 flex-shrink-0">
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Botones de navegación de shadcn/ui, estilizados */}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
