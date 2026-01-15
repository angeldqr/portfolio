"use client";

import { motion } from "framer-motion";
import { Code2, Lightbulb, Rocket, Heart } from "lucide-react";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiGit,
} from "react-icons/si";

const skills = [
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Git", icon: SiGit, color: "#F05032" },
];

const passions = [
  {
    icon: Lightbulb,
    title: "Resolver problemas reales",
    description: "Cada línea de código tiene un propósito: simplificar la vida de alguien.",
  },
  {
    icon: Rocket,
    title: "Innovar constantemente",
    description: "Me emociona explorar nuevas tecnologías y aplicarlas en proyectos reales.",
  },
  {
    icon: Heart,
    title: "Superar expectativas",
    description: "No entrego proyectos, entrego experiencias que generan impacto.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-[90vh] flex items-center overflow-hidden py-16"
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-[80px]" />
      </div>

      <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-primary/40" />
            <span className="text-xs font-medium tracking-[0.2em] text-foreground/40 uppercase">
              Sobre mí
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1]">
                Ángel Quintero
              </h2>
              <p className="mt-3 text-xl text-primary font-medium">
                Desarrollador Web · Barranquilla, CO
              </p>
            </div>
            <div>
              <p className="text-lg text-foreground/50 leading-relaxed lg:text-right">
                Me apasiona transformar ideas complejas en{" "}
                <span className="text-foreground/80 font-medium">soluciones elegantes</span>.
                Creo que la tecnología debe ser invisible: tan intuitiva que el usuario
                solo nota lo bien que funciona.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left - What Drives Me */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {passions.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4 }}
                    className="group p-6 rounded-2xl border border-foreground/10 bg-foreground/[0.02] hover:border-primary/30 hover:bg-foreground/[0.04] transition-all cursor-default"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 text-sm">
                      {item.title}
                    </h3>
                    <p className="text-xs text-foreground/50 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right - Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="h-full p-6 rounded-2xl border border-foreground/10 bg-foreground/[0.02]">
              <div className="flex items-center gap-3 mb-5">
                <Code2 className="w-4 h-4 text-foreground/40" />
                <span className="text-xs font-medium tracking-wider text-foreground/40 uppercase">
                  Herramientas que domino
                </span>
              </div>

              <div className="grid grid-cols-4 gap-3">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0, rotate: -10 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.15, y: -4 }}
                      className="group flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-foreground/5 transition-all cursor-default"
                    >
                      <Icon
                        className="w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity"
                        style={{ color: skill.color }}
                      />
                      <span className="text-[10px] text-foreground/40 group-hover:text-foreground/60 transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
