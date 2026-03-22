import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative text-gray-300 pt-16 pb-8 overflow-hidden">
    <div className="absolute hidden lg:block lg:w-[40rem] lg:h-[40rem] right-0 -top-[6rem] justify-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-auto max-w-full h-auto object-contain scale-[3]"
      >
        <source src="/videos/planetafooter.mp4" type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>
    </div>
      <motion.div
        key={0}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="absolute -top-[11rem] lg:-top-[35.5rem] 2xl:-top-[45rem] z-0 w-full"
      >
        <div className="w-full flex justify-center">
          <img
            src="/fondos/Fondocolor.webp"
            alt="fondo"
            className="w-auto max-w-full h-auto blur-xl"
          />
        </div>
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src="https://framerusercontent.com/images/xtP1yCgjKv6jX6UUEqjDRwgq3o.webp?scale-down-to=2048"
            alt="image"
            className="object-cover"
          />
        </div>
      </motion.div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        {/* Global CTA */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Crece sin límites con <br /> soluciones 360°
          </h2>
          <p className="max-w-2xl mb-8 text-gray-400">
            Tecnología global, automatización inteligente y visión integral para
            escalar tu negocio con Ingenio 360.
          </p>
          <Link to={"/contact"} className="w-full">
            <Button className="border border-orange-600 bg-transparent text-white hover:bg-white/80 hover:text-black duration-300 rounded-full px-8 py-6 text-lg">
              Empieza Ahora
            </Button>
          </Link>
        </div>

        {/* Footer links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-slate-800">
          <div>
            <h3 className="text-white font-medium mb-4">Navegación</h3>
            <ul className="space-y-2">
              <FooterLink isBlank={false} href="/#" text="Inicio" withArrow />
              <FooterLink
                isBlank={false}
                href="/about"
                text="Conócenos"
                withArrow
              />
              <FooterLink
                isBlank={false}
                href="/contact"
                text="Contáctanos"
                withArrow
              />
            </ul>
          </div>

          <div className="">
            <h3 className="text-white font-medium mb-4">Documentación</h3>
            <ul className="space-y-2">
              {/* <FooterLink isBlank={false} href="/blog" text="Blogs" withArrow /> */}
              <FooterLink
                isBlank={false}
                href="/changelog"
                text="Actualizaciones"
                withArrow
              />
              {/* <FooterLink href="#" text="Privacy policy" withArrow />
              <FooterLink href="#" text="T and C" withArrow /> */}
            </ul>
          </div>

          {/* <div>
            <h3 className="text-white font-medium mb-4">Otras Páginas</h3>
            <ul className="space-y-2"> */}
          {/* <FooterLink href="#" text="Coming Soon..." withArrow /> */}
          {/* <FooterLink isBlank={false} href="/404" text="404" withArrow />
            </ul>
          </div> */}

          <div className="">
            <h3 className="text-white font-medium mb-4">Redes Sociales</h3>
            <ul className="space-y-2">
              <FooterLink
                href="https://www.linkedin.com/company/105508860/admin/page-posts/published/"
                text="LinkedIn"
                withArrow
              />
              <FooterLink
                href="https://www.facebook.com/ingenio360software"
                text="Facebook"
                withArrow
              />
              {/* <FooterLink href="#" text="X/twitter" withArrow />
              <FooterLink href="#" text="Github" withArrow /> */}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="glass-card py-4 px-6 mt-16 text-center flex flex-wrap justify-between items-center gap-4">
          <div className="text-sm">All copyrights reserved for @Ingenio360</div>
          <div className="text-sm">Designed by Ingenio Team</div>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  href: string;
  text: string;
  withArrow?: boolean;
  isBlank?: boolean;
}

const FooterLink = ({
  href,
  text,
  withArrow,
  isBlank = true,
}: FooterLinkProps) => {
  return (
    <li>
      <a
        target={isBlank ? "_blank" : undefined}
        href={href}
        className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1"
      >
        {text}
        {withArrow && (
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        )}
      </a>
    </li>
  );
};

export default Footer;
