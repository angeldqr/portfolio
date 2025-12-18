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
      "Sistema web integral para la gestión, seguimiento y notificación proactiva de vencimientos de eventos y actividades críticas.",
    highlights: [
      "Auth moderna (JWT + Microsoft OAuth) y roles de Admin",
      "CRUD de eventos con validación robusta y soft delete",
      "Notificaciones proactivas por correo vía Celery/Redis",
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
      "App web para controlar finanzas personales: registra, categoriza y visualiza ingresos y gastos con claridad.",
    highlights: [
      "Dashboard con balance, ingresos y gastos",
      "Gráficas interactivas (línea y dona) con Chart.js",
      "CRUD de transacciones con filtros por mes, tipo y categoría",
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
      "Portfolio personal con diseño dark minimal, animaciones suaves y sección de proyectos estilo product preview.",
    highlights: [
      "Next.js + TypeScript con App Router",
      "Tailwind v4 + HeroUI para UI consistente",
      "Animaciones con Framer Motion y micro-interacciones",
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
    "inline-flex items-center justify-center rounded-full border border-foreground/10 bg-background/20 backdrop-blur-sm h-8 w-8 text-foreground/70 transition-colors";
  const enabledCls = " hover:text-foreground hover:bg-background/40 hover:border-foreground/20";
  const disabledCls = " opacity-40 cursor-not-allowed";

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
    <span className="inline-flex items-center rounded-full border border-foreground/10 bg-background/20 px-3 py-1 text-xs text-foreground/70">
      {children}
    </span>
  );
}

function PreviewFrame({ accentGlow }: { accentGlow: string }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl border border-foreground/10 bg-background/20">
      {/* Accent wash */}
      <div className={"absolute inset-0 " + accentGlow} />

      {/* Fake browser top bar */}
      <div className="absolute left-0 right-0 top-0 h-9 border-b border-foreground/10 bg-background/20" />
      <div className="absolute left-3.5 top-3 flex gap-1.5">
        <span className="h-2 w-2 rounded-full bg-foreground/20" />
        <span className="h-2 w-2 rounded-full bg-foreground/15" />
        <span className="h-2 w-2 rounded-full bg-foreground/10" />
      </div>

      {/* Content grid - simplificado */}
      <div className="absolute inset-0 top-9">
        <div className="absolute inset-0 opacity-[0.15] [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/5 to-background/50" />
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-svh overflow-visible pt-32 sm:pt-36 md:pt-44 pb-16 md:pb-20 flex items-center"
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
            Una selección breve.
          </h2>

          <p className="mt-4 text-base md:text-lg text-foreground/60 leading-relaxed max-w-2xl">
            Aplicaciones y soluciones que he construido.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 lg:gap-8 items-stretch">
          {projects.map((p, idx) => {
            const accent = getAccentClasses(p.accent);

            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                viewport={{ once: true }}
                className="group"
              >
                <div
                  className={
                    "relative h-full overflow-hidden rounded-3xl border border-foreground/10 bg-background/10 ring-1 ring-transparent transition-all will-change-transform flex flex-col " +
                    accent.ring +
                    " hover:border-foreground/20 hover:bg-background/15"
                  }
                >
                  <div className="relative aspect-[16/10] w-full p-4 flex-shrink-0">
                    <PreviewFrame accentGlow={accent.glow} />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/0 via-background/0 to-background/50" />

                    <div className="absolute left-4 top-4 flex items-center gap-2.5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-foreground/10 bg-background/30 backdrop-blur">
                        <ProjectIcon name={p.icon} className="h-4.5 w-4.5 text-foreground/80" />
                      </div>
                      <div>
                        <p className="text-[10px] font-medium tracking-[0.16em] text-foreground/50">
                          {String(idx + 1).padStart(2, "0")}
                        </p>
                        <p className="text-sm font-semibold text-foreground">
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
                    <p className="text-sm text-foreground/65 leading-relaxed">
                      {p.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {p.stack.slice(0, 4).map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>

                    <div className="space-y-2 flex-1">
                      {p.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-2">
                          <span className={"h-1.5 w-1.5 rounded-full flex-shrink-0 mt-1.5 " + accent.dot} />
                          <p className="text-xs text-foreground/70 leading-relaxed">{h}</p>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2">
                      <div className="h-px w-full bg-foreground/10" />
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
