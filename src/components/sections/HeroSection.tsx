"use client";

import { Button } from "@heroui/react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="inicio" className="h-svh overflow-hidden py-10 md:py-12 flex items-center">
      <main className="w-full max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl space-y-6"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Construyendo soluciones tecnológicas
          </h1>

          <p className="text-xl md:text-2xl text-foreground/60">
            Innovando • Creando • Aprendiendo
          </p>

          <div className="text-base md:text-lg text-foreground/70 leading-relaxed space-y-3 max-w-2xl">
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

          <div className="flex gap-4 pt-4">
            <Button
              as="a"
              href="#projects"
              color="primary"
              size="lg"
              className="font-semibold"
            >
              Ver mis proyectos
            </Button>
            <Button
              as="a"
              href="#contact"
              variant="bordered"
              size="lg"
              className="font-semibold"
            >
              Contáctame
            </Button>
          </div>
        </motion.div>
      </main>
    </section>
  );
}
