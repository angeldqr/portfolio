"use client";

import { Image, Button } from "@heroui/react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="inicio" className="min-h-screen flex items-center">
      <main className="w-full max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-24 items-center">
          {/* Columna izquierda - Texto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Construyendo soluciones tecnológicas
            </h1>

            <p className="text-xl md:text-2xl text-foreground/60">
              Innovando • Creando • Aprendiendo
            </p>

            <div className="text-lg md:text-xl text-foreground/80 leading-relaxed space-y-4">
              <p>
                Desarrollador web enfocado en crear{" "}
                <span className="text-violet-400 font-medium">experiencias digitales excepcionales</span> con tecnologías modernas.
                Transformo ideas en{" "}
                <span className="text-primary font-medium">soluciones funcionales</span> y{" "}
                <span className="text-blue-400 font-medium">elegantes</span>.
              </p>

              <p>
                Cada proyecto es una <span className="text-pink-400 font-medium">oportunidad</span> para aprender y evolucionar,
                aplicando siempre las <span className="text-yellow-400 font-medium">mejores prácticas</span> y buscando{" "}
                <span className="text-danger-400 font-medium">soluciones innovadoras</span>.
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

          {/* Columna derecha - Imagen */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <Image
              isBlurred
              width={400}
              src="https://via.placeholder.com/400x500/808080/FFFFFF?text=Tu+Foto"
              alt="Ángel Quintero"
              className="w-full max-w-md grayscale"
            />
          </motion.div>
        </div>
      </main>
    </section>
  );
}
