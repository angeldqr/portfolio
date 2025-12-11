"use client";

import { Image, Button } from "@heroui/react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="w-full max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 pt-16 pb-10">
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
                Soy <span className="font-semibold text-foreground">Ángel Quintero</span>, un programador web de 19 años
                que trabaja con tecnologías modernas como{" "}
                <span className="text-primary font-medium">Python</span>,{" "}
                <span className="text-primary font-medium">JavaScript</span>,{" "}
                <span className="text-primary font-medium">React</span> y{" "}
                <span className="text-primary font-medium">Tailwind CSS</span>.
              </p>

              <p>
                Actualmente estudio en la Universidad Simón Bolívar de Barranquilla.
                En mi tiempo libre, disfruto{" "}
                <span className="text-blue-400 font-medium">salir a caminar</span> y{" "}
                <span className="text-green-400 font-medium">aprender cosas nuevas</span> sobre el desarrollo web.
              </p>

              <p>
                Me apasiona crear <span className="text-violet-400 font-medium">interfaces intuitivas</span> y experiencias de usuario memorables.
                Cada proyecto es una <span className="text-pink-400 font-medium">oportunidad</span> para aprender y mejorar mis habilidades,
                siempre buscando las <span className="text-yellow-400 font-medium">mejores prácticas</span> y <span className="text-danger-400 font-medium">soluciones innovadoras</span>.
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                as="a"
                href="/projects"
                color="primary"
                size="lg"
                className="font-semibold"
              >
                Ver mis proyectos
              </Button>
              <Button
                as="a"
                href="/contact"
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
    </div>
  );
}
