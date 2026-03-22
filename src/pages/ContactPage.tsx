import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/contact/ContactForm";
import FAQ from "@/components/FAQ";
import { HeaderGeneralPage } from "@/components/ui/HeaderGeneralPage";

const ContactPage = () => {

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar linkGetStarted="#"/>

      <HeaderGeneralPage
        badgeText="Contacto"
        title="Contáctanos, Preguntas o Asistencia con tu Cuenta"
        subtitle="¿Tienes preguntas o necesitas ayuda? Nuestro equipo está aquí para ayudarte. Contáctanos para demostraciones, soporte o cualquier consulta que tengas."
        classNamesTitle=" max-w-[20rem] lg:max-w-[39rem]"
        classNamesSubtitle="max-w-xl md:max-w-[34rem]"
      />

      {/* Main Content */}
      <main className="relative z-20 bg-black flex-grow">
        <ContactForm />
      </main>

      <FAQ />

      <Footer linkGetStarted="#" />
    </div>
  );
};

export default ContactPage;
