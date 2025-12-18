"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  MessageSquare,
  TrendingUp,
  BookOpen,
} from "lucide-react";
import {
  SiPython,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiDjango,
  SiPostgresql,
  SiGit,
} from "react-icons/si";

export default function AboutSection() {
  const technicalSkills = [
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Django", icon: SiDjango, color: "#092E20" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "Git", icon: SiGit, color: "#F05032" },
  ];

  const traits = [
    {
      icon: <MessageSquare className="h-4 w-4" />,
      title: "Comunicación",
      description: "Alineo equipo y objetivos con claridad.",
    },
    {
      icon: <TrendingUp className="h-4 w-4" />,
      title: "Mejora continua",
      description: "Propongo upgrades y optimizaciones.",
    },
    {
      icon: <Lightbulb className="h-4 w-4" />,
      title: "Criterio técnico",
      description: "Prevengo riesgos y cuido la calidad.",
    },
    {
      icon: <BookOpen className="h-4 w-4" />,
      title: "Aprendizaje",
      description: "Doc + buenas prácticas siempre.",
    },
  ];

  return (
    <section id="about" className="min-h-svh overflow-hidden pt-20 sm:pt-24 md:pt-28 pb-8 md:pb-10 flex items-center">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <motion.div
          suppressHydrationWarning={true}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="mb-6 md:mb-8"
        >
          <p className="text-xs font-medium tracking-[0.16em] text-foreground/60">
            SOBRE MÍ
          </p>

          <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Minimal, moderno y directo.
              </h2>

              <p className="mt-3 max-w-xl text-sm md:text-base text-foreground/60 leading-relaxed">
                Full‑stack con foco en <span className="text-foreground font-medium">claridad</span>,{" "}
                <span className="text-foreground font-medium">experiencia</span> y{" "}
                <span className="text-foreground font-medium">calidad</span>.
              </p>
            </div>

            <div className="lg:col-span-7">
              <p className="max-w-2xl text-sm md:text-base text-foreground/60 leading-relaxed">
                Soy <span className="text-foreground font-semibold">Ángel Quintero</span>. Estudio en la{" "}
                <span className="text-primary font-medium">Universidad Simón Bolívar</span> (Barranquilla) y disfruto construir
                software con foco en UX, buenas prácticas y un diseño limpio.
              </p>

              <p className="mt-3 max-w-2xl text-sm text-foreground/60 leading-relaxed">
                Trabajo con <span className="text-foreground font-medium">bases sólidas</span>: componentes reutilizables, estilos
                consistentes y APIs claras. Priorizo accesibilidad, detalles de interacción y rendimiento.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7">
          {/* Stack */}
          <motion.div
            suppressHydrationWarning={true}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl border border-foreground/10 bg-background/10 p-5 sm:p-6 md:p-7 hover:bg-background/15 transition-colors">
              <h3 className="text-sm font-semibold text-foreground mb-4">Stack</h3>

              <div className="flex flex-wrap gap-2.5">
                {technicalSkills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: index * 0.03 }}
                      viewport={{ once: true }}
                    >
                      <div className="inline-flex items-center gap-2.5 rounded-full border border-foreground/10 bg-background/20 px-4 py-2 hover:bg-background/30 hover:border-foreground/20 hover:scale-105 transition-all group">
                        <Icon 
                          className="h-5 w-5 transition-transform group-hover:scale-110" 
                          style={{ color: skill.color }} 
                        />
                        <span className="text-xs font-medium text-foreground/80">
                          {skill.name}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-5 pt-5 border-t border-foreground/10">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[11px] text-foreground/50 mb-1.5 uppercase tracking-wide">Frontend</p>
                    <p className="text-sm text-foreground/80 font-medium">React + Tailwind</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-foreground/50 mb-1.5 uppercase tracking-wide">Backend</p>
                    <p className="text-sm text-foreground/80 font-medium">Node/Django + PostgreSQL</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Traits */}
          <motion.div
            suppressHydrationWarning={true}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl border border-foreground/10 bg-background/10 p-5 sm:p-6 md:p-7 hover:bg-background/15 transition-colors">
              <h3 className="text-sm font-semibold text-foreground mb-4">Cómo trabajo</h3>

              <div className="space-y-3">
                {traits.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.04 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-background/20 transition-colors">
                      <div className="mt-0.5 rounded-lg bg-primary/10 p-2 text-primary flex-shrink-0 group-hover:scale-110 group-hover:bg-primary/15 transition-all">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground">{item.title}</p>
                        <p className="mt-0.5 text-xs text-foreground/60 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
