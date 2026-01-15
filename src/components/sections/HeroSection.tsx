"use client";

import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import dynamic from "next/dynamic";

// Carga dinámica del Aurora para evitar SSR issues con WebGL
const Aurora = dynamic(() => import("@/components/ui/Aurora"), {
  ssr: false,
});

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-svh overflow-hidden flex items-center justify-center"
    >
      {/* Aurora Background */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#fcfcfc", "#ffc72e", "#ff2929"]}
          amplitude={1.2}
          blend={0.6}
          speed={0.8}
        />
        {/* Overlay para mejorar legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 text-sm text-foreground/70 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Disponible para proyectos</span>
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-[1.05] tracking-tight"
        >
          Creo experiencias
          <br />
          <span className="bg-gradient-to-r from-amber-200 via-orange-300 to-red-400 bg-clip-text text-transparent">
            digitales únicas
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl text-foreground/60 max-w-2xl mx-auto leading-relaxed"
        >
          Diseño y desarrollo soluciones que combinan{" "}
          <span className="text-foreground font-medium">estética premium</span> con{" "}
          <span className="text-foreground font-medium">funcionalidad impecable</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 sm:mt-12"
        >
          <Button
            as="a"
            href="#projects"
            size="lg"
            className="font-semibold w-full sm:w-auto px-8 bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-shadow"
          >
            Ver mis proyectos
          </Button>
          <Button
            as="a"
            href="#contact"
            variant="bordered"
            size="lg"
            className="font-semibold w-full sm:w-auto px-8 border-foreground/20 hover:bg-foreground/5"
          >
            Contáctame
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-8 sm:gap-12 mt-16 sm:mt-20"
        >
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold text-foreground">2+</p>
            <p className="text-xs sm:text-sm text-foreground/50 mt-1">
              Años de experiencia
            </p>
          </div>
          <div className="w-px h-10 bg-foreground/10" />
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold text-foreground">3+</p>
            <p className="text-xs sm:text-sm text-foreground/50 mt-1">
              Proyectos completados
            </p>
          </div>
          <div className="w-px h-10 bg-foreground/10" />
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold text-foreground">100%</p>
            <p className="text-xs sm:text-sm text-foreground/50 mt-1">
              Clientes satisfechos
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-foreground/40 hover:text-foreground/60 transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.a>
      </motion.div>
    </section>
  );
}
