"use client";

import { Card, CardBody } from "@heroui/react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  MessageSquare,
  TrendingUp,
  BookOpen,
  Coffee,
  Terminal,
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
      icon: <Coffee className="h-4 w-4" />,
      title: "Enfoque",
      description: "Caminar me ayuda a desbloquear ideas.",
    },
    {
      icon: <BookOpen className="h-4 w-4" />,
      title: "Aprendizaje",
      description: "Doc + buenas prácticas siempre.",
    },
    {
      icon: <Terminal className="h-4 w-4" />,
      title: "Exploración",
      description: "Experimento con tecnologías.",
    },
  ];

  return (
    <section id="about" className="h-svh overflow-hidden py-10 md:py-12 flex items-center">
      <div className="w-full max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <p className="text-xs font-medium tracking-[0.16em] text-foreground/60">
            SOBRE MÍ
          </p>
          <div className="mt-3 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Minimal, moderno y directo.
              </h2>

              <p className="mt-3 max-w-xl text-sm md:text-base text-foreground/60 leading-relaxed">
                Full‑stack con foco en <span className="text-foreground font-medium">claridad</span>,
                <span className="text-foreground font-medium"> experiencia</span> y
                <span className="text-foreground font-medium"> calidad</span>.
              </p>

              <div className="mt-4 max-w-xl flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-foreground/60">
                <span className="inline-flex items-center gap-3">
                  <span className="h-1 w-1 rounded-full bg-foreground/30" />
                  Producto + calidad
                </span>
                <span className="inline-flex items-center gap-3">
                  <span className="h-1 w-1 rounded-full bg-foreground/30" />
                  UI limpia + performance
                </span>
                <span className="inline-flex items-center gap-3">
                  <span className="h-1 w-1 rounded-full bg-foreground/30" />
                  Git + buenas prácticas
                </span>
              </div>
            </div>
            <div className="lg:col-span-7">
              <p className="max-w-2xl text-sm md:text-base text-foreground/60 leading-relaxed">
                Soy <span className="text-foreground font-semibold">Ángel Quintero</span>. Estudio en la{" "}
                <span className="text-primary font-medium">Universidad Simón Bolívar</span> (Barranquilla) y disfruto construir
                software con foco en UX, buenas prácticas y un diseño limpio.
              </p>

              <p className="mt-3 max-w-2xl text-sm md:text-base text-foreground/60 leading-relaxed">
                Trabajo con <span className="text-foreground font-medium">bases sólidas</span>: componentes reutilizables, estilos
                consistentes, APIs claras y un flujo ordenado. Busco que cada parte sea fácil de mantener y escalar, sin perder
                velocidad.
              </p>

              <p className="mt-3 max-w-2xl text-sm text-foreground/60 leading-relaxed">
                En proyectos, priorizo <span className="text-foreground font-medium">accesibilidad</span>, detalles de
                interacción y rendimiento. Me gusta medir, iterar y dejar el código mejor de lo que lo encontré.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Stack (chips) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <Card className="bg-default-50">
              <CardBody className="p-5 md:p-6">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-sm font-semibold text-foreground">Stack</h3>
                  <span className="text-xs text-foreground/60">Con qué trabajo</span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {technicalSkills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay: index * 0.02 }}
                        viewport={{ once: true }}
                      >
                        <div className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/30 px-3 py-2 hover:bg-background/50 transition-colors">
                          <Icon className="h-4 w-4" style={{ color: skill.color }} />
                          <span className="text-sm font-medium text-foreground/80">
                            {skill.name}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="rounded-xl border border-foreground/10 bg-background/30 px-3 py-2">
                    <p className="text-[11px] text-foreground/60">Frontend</p>
                    <p className="text-sm text-foreground/80">React + Tailwind</p>
                  </div>
                  <div className="rounded-xl border border-foreground/10 bg-background/30 px-3 py-2">
                    <p className="text-[11px] text-foreground/60">Backend</p>
                    <p className="text-sm text-foreground/80">Node/Django + PostgreSQL</p>
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="rounded-xl border border-foreground/10 bg-background/30 px-3 py-2">
                    <p className="text-[11px] text-foreground/60">Filosofía</p>
                    <p className="text-sm text-foreground/80">
                      Menos complejidad, más valor. Código legible.
                    </p>
                  </div>
                  <div className="rounded-xl border border-foreground/10 bg-background/30 px-3 py-2">
                    <p className="text-[11px] text-foreground/60">Ahora mismo</p>
                    <p className="text-sm text-foreground/80">
                      Full‑stack + interfaces con buen detalle.
                    </p>
                  </div>
                </div>

                <p className="mt-3 text-xs md:text-sm text-foreground/60 leading-relaxed">
                  Aportar calidad y perder rendimiento son opuestos. Por eso, elijo tecnologías que equilibran ambos.
                </p>
              </CardBody>
            </Card>
          </motion.div>

          {/* Traits (soft + intereses) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <Card className="bg-default-50">
              <CardBody className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-sm font-semibold text-foreground">Cómo trabajo</h3>
                  <span className="text-xs text-foreground/60">En pocas palabras</span>
                </div>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {traits.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.03 }}
                      viewport={{ once: true }}
                      className="rounded-xl border border-foreground/10 bg-background/30 p-3"
                    >
                      <div className="flex items-start gap-2">
                        <div className="mt-0.5 rounded-lg bg-primary/10 p-2 text-primary">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">{item.title}</p>
                          <p className="mt-0.5 text-xs text-foreground/60 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
