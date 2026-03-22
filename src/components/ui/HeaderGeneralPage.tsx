import React from 'react'
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface HeaderGeneralPageProps {
  title: string;
  subtitle: string;
  badgeText?: string;
  classNamesTitle?: string;
  classNamesSubtitle?: string;
  badgeClassName?: string;
}


export const HeaderGeneralPage = ({subtitle, title, badgeClassName, badgeText, classNamesSubtitle, classNamesTitle}:HeaderGeneralPageProps) => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const letterVariants =  {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-[50vh] md:min-h-[55vh] pt-20 pb-20 overflow-hidden">
    {/* Gradient Motion Effect */}
    <motion.div
      key={0}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="absolute top-[23rem] lg:top-[5rem]"
    >
      <div className="w-full flex justify-center">
        <img
          src="/fondos/Fondocolor.webp"
          alt="fondo"
          className="w-auto max-w-full h-auto blur-xl"
        />
      </div>
      <div className="absolute inset-0 w-full h-full z-0">
        <img src="https://framerusercontent.com/images/xtP1yCgjKv6jX6UUEqjDRwgq3o.webp?scale-down-to=2048" alt="image" className="object-cover"/>
      </div>
    </motion.div>

    {/* Hero Content */}
    <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <Badge
        variant="outline"
        className={`mb-4 px-4 py-2 bg-[#0d0d12] mt-8 text-sm text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 ${badgeClassName}`}
      >
        {badgeText}
      </Badge>

      <motion.h1
        className={`text-2xl md:text-3xl lg:text-5xl font-semibold text-white mb-6 flex flex-wrap text-balance justify-center ${classNamesTitle}`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {title.split(" ").map((word, wordIndex) => (
  <span key={wordIndex} className="inline-block mr-2">
    {word.split("").map((char, charIndex) => (
      <motion.span key={charIndex} variants={letterVariants}>
        {char}
      </motion.span>
    ))}
  </span>
))}
      </motion.h1>

      <motion.div
        key={0}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className={`text-base md:text-base text-[#747584] ${classNamesSubtitle}`}>
          {subtitle}
        </p>
      </motion.div>
    </div>
  </section>
  )
}
