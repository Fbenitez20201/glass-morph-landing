import React from 'react';
import Marquee from "react-fast-marquee"; // Importa react-fast-marquee

// Tus datos de partners (logos)
const partnersData = [ // Renombrado para claridad
  {
    id: 1,
    name: "Partner 1", // Añadido un 'name' para el alt de la imagen, buena práctica
    logo: "https://framerusercontent.com/images/0W1fhXPeFDFt4YrviBbPrahHv8.webp?scale-down-to=512"
  },
  {
    id: 3,
    name: "Partner 3",
    logo: "https://framerusercontent.com/images/qnxdODSYK8W7A10PPnzbcsJ8eQ.webp?scale-down-to=512"
  },
  {
    id: 4,
    name: "Partner 4",
    logo: "https://framerusercontent.com/images/2hWlTkPLGL0jVO8OC1DKAWjk4.png?scale-down-to=512"
  },
  {
    id: 5,
    name: "Partner 5",
    logo: "https://framerusercontent.com/images/HqeiHKLwD4h0bWrxGKzSHfx4XP8.png"
  },
  // Para un buen efecto marquee, es ideal tener más logos o duplicarlos
  // La librería lo hará automáticamente si el contenido es menor al ancho del contenedor
  // pero visualmente se ve mejor si tienes al menos suficientes para llenar el ancho una vez.
  // Por ejemplo, podrías añadir más o duplicar los existentes para este ejemplo:
  {
    id: 6,
    name: "Partner 6",
    logo: "/carouselPartners/partner1.png"
  },
  {
    id: 7,
    name: "Partner 7",
    logo: "/carouselPartners/partner2.png"
  },
  {
    id: 8,
    name: "Partner 8",
    logo: "/carouselPartners/partner3.png"
  },
  {
    id:9,
    name: "Partner 9",
    logo: "/carouselPartners/partner4.png"
  },
  {
    id: 10,
    name: "Partner 10",
    logo: "/carouselPartners/partner5.png"
  },
  {
    id: 11,
    name: "Partner 11",
    logo: "/carouselPartners/partner6.png"
  },
  {
    id: 12,
    name: "Partner 12",
    logo: "/carouselPartners/partner7.png"
  },
];

const Partners = () => {
  return (
    <section className="py-16 lg:py-20 bg-black"> 
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-neutral-400 text-sm sm:text-base mb-10 lg:mb-12 animate-fade-in">
          Empresas que confían en nosotros
        </h2>
        

        <div 
          className="animate-fade-in" 
          style={{ animationDelay: '0.2s' }} 
        >
          <Marquee
            gradient={false}
            speed={50} 
            direction="left"
          >
            {partnersData.map((partner) => (
              <div 
                key={partner.id} 
                className="mx-6 sm:mx-8 md:mx-10 lg:mx-12 flex-shrink-0" 
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-10 sm:h-12 md:h-14 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Partners;