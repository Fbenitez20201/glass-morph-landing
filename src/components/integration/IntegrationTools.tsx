import React from 'react'

interface Tools {
  img: string
  title: string
  subtitle: string
}

export const IntegrationTools = () => {
  const tools = [
    {
      img: "/integration/Dynamics365_scalable.webp",
      title: "Dynamics 365",
      subtitle: "Gestiona relaciones con clientes y optimiza operaciones.",
    },
    {
      img: "/integration/f066c084e6b6ea068ef91db9b0f33c3e.jpg",
      title: "Microsoft 365",
      subtitle: "Colabora en tiempo real con componentes flexibles.",
    },
    {
      img: "/integration/Instagram_logo_2022.svg.png",
      title: "Instagram",
      subtitle: "Conecta con tu audiencia a través de contenido visual.",
    },
    {
      img: "/integration/Facebook_Messenger_logo_2020.svg.png",
      title: "Messenger",
      subtitle: "Chatea con clientes y ofrece soporte instantáneo.",
    },
    {
      img: "/integration/stripe-v2.svg", // Stripe
      title: "Stripe",
      subtitle: "Recibe pagos y gestiona transacciones en línea.",
    },
    {
      img: "/integration/download (2).png", // Shopify
      title: "Shopify",
      subtitle: "Crea y gestiona tu tienda en línea fácilmente.",
    },
    {
      img: "/integration/unnamed (4).png", // Adobe Creative Cloud
      title: "ZOHO CRM",
      subtitle: "Gestiona, organiza y automatiza tus propios procesos.",
    },
    {
      img: "/integration/images.png", // Wompi
      title: "Wompi",
      subtitle: "Recibe pagos seguros en toda Latinoamérica.",
    },
    {
      img: "/integration/unnamed (3).png", // PayPal
      title: "PayPal",
      subtitle: "Envía y recibe pagos de forma rápida y segura.",
    },
    {
      img: "/integration/download (1).png", // Workable
      title: "Workable",
      subtitle: "Agiliza tus procesos de reclutamiento y selección.",
    },
    {
      img: "/integration/unnamed (2).png", // BambooHR
      title: "BambooHR",
      subtitle: "Administra tareas de RRHH y registros de empleados.",
    },
    {
      img: "/integration/unnamed (1).png", // Ganttic
      title: "Ganttic",
      subtitle: "Planifica y gestiona proyectos con diagramas Gantt.",
    },
    {
      img: "/integration/google-apps-for-business-drive.png",
      title: "Google Drive",
      subtitle: "Almacena, comparte y colabora en la nube.",
    },
    {
      img: "/integration/168_Hubspot_logo_logos-512.webp",
      title: "HubSpot",
      subtitle: "Automatiza marketing, ventas y CRM en un solo lugar.",
    },
    {
      img: "/integration/0x0.png", // Looker Studio
      title: "Zardama",
      subtitle: "Comunicación en la nube de visualizaciones de datos efectivas.",
    },
    {
      img: "/integration/retell-ai-icon-filled-256.png",
      title: "Retell AI",
      subtitle: "Automatiza conversaciones con clientes usando voz IA.",
    },
    {
      img: "/integration/download.png", // Slack
      title: "Slack",
      subtitle: "Centraliza la comunicación y mejora la colaboración.",
    },
    {
      img: "/integration/unnamed.png", // Airtable
      title: "Airtable",
      subtitle: "Organiza tu trabajo con bases de datos flexibles.",
    }
  ];
  


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 my-16">
    {tools.map((tool, index) => (
      <FeatureCard
        key={index}
        img={`${tool.img}`}
        title={tool.title}
        subtitle={tool.subtitle}
      />
    ))}
  </div>
  )
}


const FeatureCard = ({ img, title, subtitle }: Tools) => {

  return (
    <div className="bg-gradient-to-tl from-[#0d0d12] to-[#181a29] border border-slate-700/30 rounded-2xl px-4 py-3 w-full shadow-lg hover:shadow-xl transition-all">
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center shadow-inner p-3 overflow-hidden">
          <img src={img} alt={title} className="w-full h-full object-contain rounded-lg" />
        </div>
      </div>
      <h3 className="text-white font-semibold text-lg">{title}</h3>
      <p className="text-sm text-gray-400 leading-snug my-3">{subtitle}</p>
    </div>
  );
};