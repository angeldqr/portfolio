"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { useState } from "react";

type Project = {
  id: number;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  image: string;
  color: string;
  links: {
    github?: string;
    demo?: string;
  };
};

const projects: Project[] = [
  {
    id: 1,
    title: "Cronify",
    tagline: "Gestión inteligente de vencimientos",
    description:
      "Plataforma empresarial que automatiza recordatorios críticos y centraliza el control de eventos importantes para equipos de trabajo.",
    stack: ["Vue 3", "Quasar", "Django", "PostgreSQL"],
    image: "/projects/cronify.png",
    color: "#338EF7",
    links: {
      demo: "https://cronify-nu.vercel.app/#/",
    },
  },
  {
    id: 2,
    title: "Expense Tracker",
    tagline: "Control financiero visual",
    description:
      "Aplicación que transforma datos complejos en insights visuales para profesionales que buscan control total sobre sus finanzas.",
    stack: ["Python", "JavaScript", "PostgreSQL", "Chart.js"],
    image: "/projects/expense.png",
    color: "#F5A524",
    links: {
      github: "https://github.com/angeldqr/expense-tracker",
      demo: "https://expense-tracker-beta-ten-83.vercel.app/",
    },
  },
  {
    id: 3,
    title: "Portfolio",
    tagline: "Diseño minimal y moderno",
    description:
      "Sitio web personal optimizado para rendimiento, construido con las últimas tecnologías web y animaciones fluidas.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    image: "/projects/portfolio.png",
    color: "#ffffffff",
    links: {
      github: "https://github.com/angeldqr/portfolio",
    },
  },
  {
    id: 4,
    title: "Próximo Proyecto",
    tagline: "En desarrollo activo",
    description:
      "Un nuevo proyecto está en camino. Estoy trabajando en algo especial que pronto estará disponible. ¡Mantente atento!",
    stack: ["TypeScript", "Next.js", "En progreso..."],
    image: "/projects/coming-soon.png",
    color: "#ebbe6cff",
    links: {},
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div
        className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
          } gap-8 lg:gap-16 items-center`}
      >
        {/* Project Visual */}
        <div className="relative w-full lg:w-3/5 aspect-[16/10] rounded-2xl overflow-hidden">
          {/* Gradient Background */}
          <div
            className="absolute inset-0 transition-all duration-700"
            style={{
              background: `linear-gradient(135deg, ${project.color}15 0%, ${project.color}05 50%, transparent 100%)`,
            }}
          />

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:40px_40px]" />

          {/* Spotlight Effect on Hover */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at ${isHovered ? "50% 50%" : "100% 100%"}, ${project.color}25 0%, transparent 60%)`,
            }}
          />

          {/* Browser Frame */}
          <div className="absolute inset-4 sm:inset-6 rounded-xl border border-foreground/10 bg-background/30 backdrop-blur-sm overflow-hidden shadow-2xl shadow-black/20">
            {/* Top Bar */}
            <div className="h-8 sm:h-10 border-b border-foreground/10 bg-foreground/[0.02] flex items-center px-4 gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
              <span className="ml-4 text-[10px] text-foreground/30 font-mono hidden sm:block">
                {project.title.toLowerCase()}.app
              </span>
            </div>
            {/* Project Image */}
            <div className="absolute inset-0 top-8 sm:top-10">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </div>

          {/* Project Number */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6">
            <span
              className="text-6xl sm:text-8xl font-bold opacity-10 transition-all duration-500 group-hover:opacity-20"
              style={{ color: project.color }}
            >
              0{project.id}
            </span>
          </div>
        </div>

        {/* Project Info */}
        <div className="w-full lg:w-2/5 space-y-6">
          {/* Header */}
          <div>
            <motion.span
              className="inline-block text-xs font-medium tracking-widest uppercase mb-3"
              style={{ color: project.color }}
            >
              Proyecto 0{project.id}
            </motion.span>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight group-hover:text-foreground/90 transition-colors">
              {project.title}
            </h3>
            <p className="mt-2 text-lg text-foreground/50 font-medium">
              {project.tagline}
            </p>
          </div>

          {/* Description */}
          <p className="text-base text-foreground/60 leading-relaxed">
            {project.description}
          </p>

          {/* Stack */}
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-xs font-medium rounded-full border border-foreground/10 bg-foreground/5 text-foreground/60 transition-all hover:bg-foreground/10 hover:text-foreground/80"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 pt-2">
            {project.links.demo && (
              <motion.a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300"
                style={{
                  backgroundColor: project.color,
                  color: "#000",
                }}
              >
                <span>Ver proyecto</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            )}
            {project.links.github && (
              <motion.a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-foreground/10 text-foreground/60 hover:text-foreground hover:border-foreground/20 hover:bg-foreground/5 transition-all"
              >
                <Github className="w-5 h-5" />
              </motion.a>
            )}
            {!project.links.demo && !project.links.github && (
              <span className="text-sm text-foreground/40 italic">
                Próximamente
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative pt-16 pb-24 lg:pt-20 lg:pb-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20 lg:mb-28"
        >
          <span className="inline-block text-xs font-medium tracking-[0.3em] text-foreground/40 uppercase mb-4">
            Portafolio
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Trabajo
            <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-red-400 bg-clip-text text-transparent">
              {" "}destacado
            </span>
          </h2>
          <p className="mt-6 text-lg text-foreground/50 max-w-xl mx-auto">
            Proyectos seleccionados que demuestran mi enfoque en calidad, diseño y experiencia de usuario.
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-24 lg:space-y-40">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-24 lg:mt-32"
        >
          <p className="text-foreground/40 mb-6">
            ¿Tienes un proyecto en mente?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-background font-semibold text-lg transition-all hover:shadow-lg hover:shadow-foreground/20"
          >
            <span>Trabajemos juntos</span>
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
