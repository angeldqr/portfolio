"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type React from "react";

type CourseStatus = "Completado" | "En progreso" | "Recomendado";

type Course = {
  title: string;
  provider: string;
  status: CourseStatus;
  year?: string;
  skills: string[];
  href?: string;
  previewImage?: string;
};

const courses: Course[] = [
  {
    title: "Data Science con Python — NumPy & Pandas",
    provider: "Udemy",
    status: "Completado",
    year: "2025",
    skills: ["Pandas", "NumPy", "Data Science"],
    href: "https://www.udemy.com/certificate/UC-94548dd4-a794-4e45-ae35-5ef19994234f/",
    previewImage: "/certificates/udemy-data-science-numpy-pandas-2025.jpg",
  },
  {
    title: "100 Proyectos para Aprender Python desde Cero",
    provider: "Udemy",
    status: "Completado",
    year: "2025",
    skills: ["Python", "Proyectos", "Fundamentos"],
    href: "https://www.udemy.com/certificate/UC-ad6efc2b-39be-4f00-8030-368099250ff0/",
    previewImage: "/certificates/udemy-100-proyectos-python-2025.jpg",
  },
];

function isExternalLink(url?: string) {
  return Boolean(url && /^https?:\/\//i.test(url));
}

function getStatusStyle(status: CourseStatus) {
  switch (status) {
    case "Completado":
      return {
        label: "Completado",
        cls: "text-emerald-200/90 border-emerald-400/20 bg-emerald-500/10",
        dot: "bg-emerald-400",
      };
    case "En progreso":
      return {
        label: "En progreso",
        cls: "text-[#F5A524]/90 border-[rgba(245,165,36,0.28)] bg-[rgba(245,165,36,0.12)]",
        dot: "bg-[#F5A524]",
      };
    default:
      return {
        label: "Recomendado",
        cls: "text-sky-200/90 border-sky-400/20 bg-sky-500/10",
        dot: "bg-sky-400",
      };
  }
}

function Chip({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-foreground/10 bg-background/20 px-3 py-1 text-xs text-foreground/70">
      {children}
    </span>
  );
}

function LinkButton({ href, label }: { href?: string; label: string }) {
  const enabled = isExternalLink(href);

  const base =
    "inline-flex items-center justify-center rounded-full border border-foreground/10 bg-background/20 h-9 px-4 text-xs font-medium text-foreground/70 transition-colors";
  const enabledCls = " hover:text-foreground hover:bg-background/40";
  const disabledCls = " opacity-50 cursor-not-allowed";

  if (!enabled) {
    return (
      <span className={base + disabledCls} aria-disabled="true" title={`${label}: próximamente`}>
        {label}
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
      {label}
    </a>
  );
}

function CertificateThumbnail({
  title,
  src,
}: {
  title: string;
  src?: string;
}) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl border border-foreground/10 bg-background/20">
      {src ? (
        <Image
          src={src}
          alt={title}
          className="h-full w-full object-contain"
          width={400}
          height={300}
          unoptimized={true}
        />
      ) : (
        <div className="relative h-full w-full">
          <div className="absolute inset-0 opacity-[0.22] [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:36px_36px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/10 to-background/70" />
          <div className="relative flex h-full w-full items-center justify-center p-6">
            <div className="text-center">
              <p className="text-xs font-medium text-foreground/75">
                Preview no disponible
              </p>
              <p className="mt-2 text-[11px] text-foreground/55 leading-relaxed max-w-[42ch]">
                Sube un screenshot del certificado a <span className="text-foreground/70 font-medium">/public/certificates</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function CoursesSection() {
  return (
    <section id="courses" className="min-h-svh overflow-hidden pt-12 pb-10 flex items-start">
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
            EDUCACIÓN
          </p>

          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight max-w-3xl">
            Aprendizaje continuo.
          </h2>

          <p className="mt-3 max-w-2xl text-sm md:text-base text-foreground/60 leading-relaxed">
            Certificaciones reales y verificables.
          </p>
        </motion.div>

<motion.div
          suppressHydrationWarning={true}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6"
        >
          {courses.map((c, idx) => {
            const s = getStatusStyle(c.status);
            const clickable = isExternalLink(c.href);
            const Wrapper = (props: { children: React.ReactNode; className?: string }) =>
              clickable ? (
                <a
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Ver certificado: ${c.title}`}
                  className={props.className}
                >
                  {props.children}
                </a>
              ) : (
                <div className={props.className}>{props.children}</div>
              );

            return (
              <div
                key={c.href ?? `${idx}-${c.title}`}
                className="group rounded-3xl border border-foreground/10 bg-background/10 overflow-hidden hover:bg-background/15 hover:border-foreground/20 transition-colors"
              >
                {/* Preview (más pequeña, pero mostrando el certificado completo) */}
                <div className="relative aspect-[4/3] p-3 md:p-4">
                  <Wrapper className="absolute inset-0">
                    <div className="absolute inset-0 p-3 md:p-4">
                      <CertificateThumbnail title={c.title} src={c.previewImage} />
                    </div>

                    {/* Hover hint */}
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="absolute inset-0 bg-black/35" />
                      <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[11px] text-white/85 backdrop-blur">
                        Ver certificado
                        <span aria-hidden="true">↗</span>
                      </div>
                    </div>
                  </Wrapper>

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/0 via-background/0 to-background/80" />

                  <div className="absolute left-3 top-3 md:left-4 md:top-4">
                    <span
                      className={
                        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-medium backdrop-blur " +
                        s.cls
                      }
                    >
                      <span className={"h-1.5 w-1.5 rounded-full " + s.dot} />
                      {s.label}
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-5 pb-5 sm:pb-6 flex flex-col gap-3 sm:gap-3.5">
                  <div>
                    <p className="text-sm font-semibold text-foreground leading-snug">
                      {c.title}
                    </p>
                    <p className="mt-1 text-xs text-foreground/60">
                      {c.provider}
                      {c.year ? ` · ${c.year}` : ""}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {c.skills.slice(0, 5).map((sk) => (
                      <Chip key={sk}>{sk}</Chip>
                    ))}
                  </div>

                  <div className="mt-1 flex items-center justify-between gap-3 flex-wrap sm:flex-nowrap">
                    <div className="h-px flex-1 bg-foreground/10 min-w-[40px]" />
                    <LinkButton href={c.href} label="Ver en Udemy" />
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
