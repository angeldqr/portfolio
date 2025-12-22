"use client";

import { Button } from "@heroui/react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="inicio" className="min-h-svh overflow-hidden pt-16 pb-10 flex items-start">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 mt-8">
        <motion.div
          suppressHydrationWarning={true}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="mb-6 md:mb-8"
        >


          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] max-w-4xl"
          >
            Construyendo soluciones tecnológicas
            <span className="block mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground/70">
              con código y diseño.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.25 }}
            viewport={{ once: true }}
            className="mt-6 text-lg sm:text-xl md:text-2xl text-foreground/60 font-medium"
          >
            Innovando • Creando • Aprendiendo
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-2xl space-y-4"
        >
          <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
            Desarrollador <span className="text-foreground font-semibold">full‑stack</span> enfocado en crear{" "}
            <span className="text-primary font-medium">experiencias digitales excepcionales</span> con tecnologías modernas.
            Transformo ideas en soluciones funcionales y elegantes.
          </p>

          <p className="text-sm md:text-base text-foreground/60 leading-relaxed">
            Cada proyecto es una oportunidad para aplicar{" "}
            <span className="text-foreground font-medium">mejores prácticas</span>, buscar{" "}
            <span className="text-primary font-medium">soluciones innovadoras</span> y entregar valor real.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 sm:mt-10"
        >
          <Button
            as="a"
            href="#projects"
            color="primary"
            size="lg"
            className="font-semibold w-full sm:w-auto"
          >
            Ver mis proyectos
          </Button>
          <Button
            as="a"
            href="#contact"
            variant="bordered"
            size="lg"
            className="font-semibold w-full sm:w-auto"
          >
            Contáctame
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
