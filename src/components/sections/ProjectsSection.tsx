"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Globe, Layers, Sparkles } from "lucide-react";
import type React from "react";

type Project = {
  title: string;
  description: string;
  stack: string[];
  highlights: string[];
  accent: "blue" | "purple" | "yellow";
  icon: "globe" | "layers" | "sparkles";
  links: {
    github?: string;
    demo?: string;
  };
};

const projects: Project[] = [
  {
    title: "Cronify",
    description:
      "Plataforma empresarial para gestión inteligente de vencimientos. Automatiza recordatorios críticos y centraliza el control de eventos importantes para equipos de trabajo.",
    highlights: [
      "Sistema de autenticación seguro con JWT y Microsoft OAuth 2.0",
      "Dashboard interactivo con calendario y línea de tiempo de eventos",
      "Motor de notificaciones automatizado con Celery y Redis",
    ],
    stack: ["Vue 3", "Quasar", "Pinia", "Django", "DRF", "PostgreSQL"],
    accent: "blue",
    icon: "layers",
    links: {
      github: "",
      demo: "https://cronify-nu.vercel.app/#/",
    },
  },
  {
    title: "Expense Tracker",
    description:
      "Aplicación financiera personal que transforma datos complejos en insights visuales. Diseñada para profesionales que buscan control total sobre sus finanzas.",
    highlights: [
      "Dashboard minimalista con métricas financieras en tiempo real",
      "Visualización de datos con gráficas interactivas (Chart.js)",
      "Sistema de categorización inteligente con filtros avanzados",
    ],
    stack: ["Flask", "SQLAlchemy", "PostgreSQL", "JavaScript", "Chart.js", "HTML/CSS"],
    accent: "yellow",
    icon: "sparkles",
    links: {
      github: "https://github.com/angeldqr/expense-tracker",
      demo: "https://expense-tracker-beta-ten-83.vercel.app/",
    },
  },
  {
    title: "Portfolio profesional",
    description:
      "Sitio web personal con enfoque en diseño minimal y experiencia de usuario. Optimizado para rendimiento y construido con las últimas tecnologías web.",
    highlights: [
      "Arquitectura moderna con Next.js 15 y App Router",
      "Sistema de diseño consistente con Tailwind CSS v4 y HeroUI",
      "Animaciones fluidas y micro-interacciones con Framer Motion",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind v4", "HeroUI", "Framer Motion"],
    accent: "purple",
    icon: "globe",
    links: {
      github: "https://github.com/angeldqr/portfolio",
    },
  },
];

function isExternalLink(url?: string) {
  return Boolean(url && /^https?:\/\//i.test(url));
}

function getAccentClasses(accent: Project["accent"]) {
  switch (accent) {
    case "purple":
      return {
        ring: "hover:ring-[rgba(147,83,211,0.22)]",
        glow: "bg-[rgba(147,83,211,0.10)]",
        dot: "bg-[#9353D3]",
        badge: "text-[rgba(147,83,211,0.95)] border-[rgba(147,83,211,0.25)] bg-[rgba(147,83,211,0.10)]",
      };
    case "yellow":
      return {
        ring: "hover:ring-[rgba(245,165,36,0.22)]",
        glow: "bg-[rgba(245,165,36,0.10)]",
        dot: "bg-[#F5A524]",
        badge: "text-[rgba(245,165,36,0.95)] border-[rgba(245,165,36,0.25)] bg-[rgba(245,165,36,0.10)]",
      };
    default:
      return {
        ring: "hover:ring-[rgba(51,142,247,0.22)]",
        glow: "bg-[rgba(51,142,247,0.10)]",
        dot: "bg-[#338EF7]",
        badge: "text-[rgba(51,142,247,0.95)] border-[rgba(51,142,247,0.25)] bg-[rgba(51,142,247,0.10)]",
      };
  }
}

function ActionButton({
  href,
  label,
  icon,
}: {
  href?: string;
  label: string;
  icon: React.ReactNode;
}) {
  const enabled = isExternalLink(href);

  const base =
    "inline-flex items-center justify-center rounded-full border border-foreground/10 bg-background/30 backdrop-blur-md h-8 w-8 text-foreground/70 transition-all duration-200 shadow-sm";
  const enabledCls = " hover:text-foreground hover:bg-background/50 hover:border-foreground/20 hover:shadow-md hover:scale-105";
  const disabledCls = " opacity-35 cursor-not-allowed";

  if (!enabled) {
    return (
      <span
        className={base + disabledCls}
        aria-disabled="true"
        title={`${label}: próximamente`}
      >
        <span className="sr-only">Próximamente</span>
        {icon}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={base + enabledCls}
      aria-label={`${label}: ${href}`}
      title={label}
    >
      {icon}
    </a>
  );
}

function ProjectIcon({
  name,
  className,
}: {
  name: Project["icon"];
  className?: string;
}) {
  if (name === "globe") return <Globe className={className} />;
  if (name === "sparkles") return <Sparkles className={className} />;
  return <Layers className={className} />;
}

function Tag({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-foreground/10 bg-background/20 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-foreground/75 transition-colors hover:bg-background/30 hover:text-foreground/90">
      {children}
    </span>
  );
}

function PreviewFrame({ accentGlow }: { accentGlow: string }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl border border-foreground/10 bg-background/30 backdrop-blur-sm shadow-inner">
      {/* Accent wash */}
      <div className={"absolute inset-0 " + accentGlow} />

      {/* Fake browser top bar */}
      <div className="absolute left-0 right-0 top-0 h-10 border-b border-foreground/10 bg-background/30 backdrop-blur-md" />
      <div className="absolute left-4 top-3.5 flex gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/20 shadow-sm" />
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/15 shadow-sm" />
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/10 shadow-sm" />
      </div>

      {/* Content grid - más elegante */}
      <div className="absolute inset-0 top-10">
        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-background/0 via-background/10 to-background/60" />
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-svh overflow-visible pt-6 pb-10 flex items-start"
    >
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-10"
        >
          <p className="text-xs font-medium tracking-[0.16em] text-foreground/60">
            PROYECTOS
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Trabajo reciente.
          </h2>

          <p className="mt-4 text-base md:text-lg text-foreground/60 leading-relaxed max-w-2xl">
            Aplicaciones completas que demuestran mi enfoque en calidad, arquitectura limpia y experiencia de usuario.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 lg:gap-8 items-stretch">
          {projects.map((p, idx) => {
            const accent = getAccentClasses(p.accent);

            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group"
              >
                <div
                  className={
                    "relative h-full overflow-hidden rounded-3xl border border-foreground/10 bg-background/5 backdrop-blur-sm ring-1 ring-transparent transition-all duration-300 flex flex-col " +
                    accent.ring +
                    " hover:border-foreground/20 hover:bg-background/10 hover:shadow-xl hover:shadow-foreground/5"
                  }
                >
                  <div className="relative aspect-[16/9] w-full p-4 flex-shrink-0">
                    <PreviewFrame accentGlow={accent.glow} />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/0 via-background/10 to-background/70" />

                    <div className="absolute left-4 top-4 flex items-center gap-2.5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-foreground/10 bg-background/40 backdrop-blur-md shadow-lg">
                        <ProjectIcon name={p.icon} className="h-4.5 w-4.5 text-foreground/90" />
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold tracking-[0.2em] text-foreground/50">
                          {String(idx + 1).padStart(2, "0")}
                        </p>
                        <p className="text-sm font-bold text-foreground">
                          {p.title}
                        </p>
                      </div>
                    </div>

                    <div className="absolute right-4 top-4 flex items-center gap-2">
                      <ActionButton
                        href={p.links.github}
                        label="GitHub"
                        icon={<Github className="h-3.5 w-3.5" />}
                      />
                      <ActionButton
                        href={p.links.demo}
                        label="Demo"
                        icon={<ArrowUpRight className="h-3.5 w-3.5" />}
                      />
                    </div>
                  </div>

                  <div className="p-5 pb-6 flex flex-col gap-3.5 flex-1">
                    <p className="text-sm text-foreground/70 leading-relaxed font-medium">
                      {p.description}
                    </p>

                    <div className="space-y-2 flex-1 pt-0.5">
                      {p.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-2.5">
                          <span className={"h-1.5 w-1.5 rounded-full flex-shrink-0 mt-1.5 " + accent.dot} />
                          <p className="text-xs text-foreground/65 leading-relaxed">{h}</p>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2">
                      <div className="h-px w-full bg-gradient-to-r from-foreground/20 via-foreground/10 to-transparent" />
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      {p.stack.slice(0, 5).map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
