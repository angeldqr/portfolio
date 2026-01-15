"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Calendar, CheckCircle2 } from "lucide-react";

type Course = {
  title: string;
  provider: string;
  year: string;
  skills: string[];
  href?: string;
  previewImage?: string;
};

const courses: Course[] = [
  {
    title: "Data Science con Python — NumPy & Pandas",
    provider: "Udemy",
    year: "2025",
    skills: ["Pandas", "NumPy", "Data Science"],
    href: "https://www.udemy.com/certificate/UC-94548dd4-a794-4e45-ae35-5ef19994234f/",
    previewImage: "/certificates/udemy-data-science-numpy-pandas-2025.jpg",
  },
  {
    title: "100 Proyectos para Aprender Python desde Cero",
    provider: "Udemy",
    year: "2025",
    skills: ["Python", "Proyectos", "Fundamentos"],
    href: "https://www.udemy.com/certificate/UC-ad6efc2b-39be-4f00-8030-368099250ff0/",
    previewImage: "/certificates/udemy-100-proyectos-python-2025.jpg",
  },
];

export default function CoursesSection() {
  return (
    <section id="courses" className="relative pt-8 pb-24 lg:pt-12 lg:pb-32 overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, -15, 0], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-[15%] w-48 h-48 rounded-full bg-amber-500/10 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 15, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-20 left-[10%] w-56 h-56 rounded-full bg-orange-500/10 blur-3xl"
        />
      </div>

      <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        {/* Header - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 lg:mb-16"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div>
              <span className="text-xs font-medium tracking-[0.2em] text-foreground/40 uppercase">
                Certificaciones
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Conocimiento
                <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                  {" "}comprobable
                </span>
              </h2>
            </div>
            <p className="text-sm text-foreground/40 max-w-xs lg:text-right">
              Credenciales verificables que respaldan mi expertise técnico.
            </p>
          </div>
        </motion.div>

        {/* Certificates Timeline */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px">
            <div className="h-full bg-gradient-to-b from-foreground/5 via-foreground/20 to-foreground/5" />
          </div>

          <div className="space-y-10 lg:space-y-0">
            {courses.map((course, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative lg:flex lg:items-center ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                    } ${index > 0 ? "lg:mt-16" : ""}`}
                >
                  {/* Timeline Node */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-20">
                    <motion.div
                      whileHover={{ scale: 1.3 }}
                      className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg shadow-amber-500/40 ring-4 ring-background"
                    />
                  </div>

                  {/* Certificate Card */}
                  <div className={`lg:w-1/2 ${isEven ? "lg:pr-16" : "lg:pl-16"}`}>
                    <motion.a
                      href={course.href}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.3 }}
                      className="group block relative rounded-2xl border border-foreground/10 bg-gradient-to-br from-foreground/[0.02] to-transparent overflow-hidden transition-all duration-500 hover:border-amber-500/30 hover:shadow-xl hover:shadow-amber-500/10"
                    >
                      {/* Shine Effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      </div>

                      {/* Certificate Image */}
                      <div className="relative aspect-[16/10] overflow-hidden">
                        {course.previewImage ? (
                          <Image
                            src={course.previewImage}
                            alt={course.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-foreground/10 flex items-center justify-center">
                            <span className="text-foreground/20">Preview no disponible</span>
                          </div>
                        )}

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

                        {/* View Button */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-black font-semibold text-sm shadow-xl">
                            Ver certificado
                            <ExternalLink className="w-4 h-4" />
                          </span>
                        </div>

                        {/* Status Badge */}
                        <div className="absolute top-3 left-3 z-10">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white text-[10px] font-medium">
                            <CheckCircle2 className="w-3 h-3 text-amber-400" />
                            Completado
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative p-5">
                        {/* Meta */}
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="w-3 h-3 text-foreground/40" />
                          <span className="text-[11px] text-foreground/40">{course.year}</span>
                          <span className="text-foreground/20">·</span>
                          <span className="text-[11px] text-foreground/40">{course.provider}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-amber-400 transition-colors leading-tight">
                          {course.title}
                        </h3>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-1.5">
                          {course.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2.5 py-1 text-[10px] font-medium rounded-md border border-amber-500/20 bg-amber-500/5 text-foreground/60"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.a>
                  </div>

                  {/* Decorative Number */}
                  <div className={`hidden lg:flex lg:w-1/2 items-center justify-center ${isEven ? "lg:pl-16" : "lg:pr-16"}`}>
                    <motion.span
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="text-[140px] font-bold bg-gradient-to-b from-foreground/10 to-foreground/[0.02] bg-clip-text text-transparent leading-none select-none"
                    >
                      0{index + 1}
                    </motion.span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
