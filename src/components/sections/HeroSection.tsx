"use client";

import { Button } from "@heroui/react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="inicio" className="min-h-svh overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-10 md:pb-12 flex items-center">
      <main className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
<motion.div
          suppressHydrationWarning={true}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl space-y-4 sm:space-y-5 md:space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1]">
            Construyendo soluciones tecnológicas
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-foreground/60">
            Innovando • Creando • Aprendiendo
          </p>

          <div className="text-sm sm:text-base md:text-lg text-foreground/70 leading-relaxed space-y-3 max-w-2xl">
            <p>
              Desarrollador web enfocado en crear <span className="text-primary font-medium">experiencias digitales excepcionales</span> con tecnologías modernas.
              Transformo ideas en soluciones funcionales y elegantes.
            </p>

            <p>
              Cada proyecto es una oportunidad para aprender y evolucionar,
              aplicando siempre las <span className="text-foreground font-medium">mejores prácticas</span> y buscando{" "}
              <span className="text-primary font-medium">soluciones innovadoras</span>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
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
          </div>
        </motion.div>
      </main>
    </section>
  );
}
