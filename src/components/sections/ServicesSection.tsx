"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Globe, Layers, ShoppingCart, Wrench, ChevronRight } from "lucide-react";

const services = [
    {
        id: "01",
        icon: Globe,
        title: "Páginas Web",
        subtitle: "Tu presencia digital",
        description: "Sitios web que destacan tu marca y convierten visitantes en clientes.",
        includes: ["Diseño a medida", "Responsive", "SEO básico", "Hosting guía"],
        color: "#338EF7",
        gradient: "from-blue-500/20 via-blue-500/5 to-transparent",
    },
    {
        id: "02",
        icon: Layers,
        title: "Aplicaciones",
        subtitle: "Sistemas a medida",
        description: "Plataformas que automatizan procesos y mejoran tu productividad.",
        includes: ["Dashboard admin", "Base de datos", "API propia", "Reportes"],
        color: "#9353D3",
        gradient: "from-purple-500/20 via-purple-500/5 to-transparent",
    },
    {
        id: "03",
        icon: ShoppingCart,
        title: "E-commerce",
        subtitle: "Vende en línea",
        description: "Tiendas online completas con pagos seguros y gestión de inventario.",
        includes: ["Carrito", "Pagos", "Inventario", "Reportes"],
        color: "#17C964",
        gradient: "from-emerald-500/20 via-emerald-500/5 to-transparent",
    },
    {
        id: "04",
        icon: Wrench,
        title: "Soporte",
        subtitle: "Mantenimiento continuo",
        description: "Tu sitio siempre actualizado, seguro y funcionando perfectamente.",
        includes: ["Updates", "Backups", "Seguridad", "Soporte"],
        color: "#F5A524",
        gradient: "from-amber-500/20 via-amber-500/5 to-transparent",
    },
];

export default function ServicesSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const lineWidth = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

    return (
        <section
            id="services"
            ref={containerRef}
            className="relative pt-16 pb-24 lg:pt-20 lg:pb-32 overflow-hidden"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30">
                    <div className="absolute inset-0 rounded-full border border-foreground/5" />
                    <div className="absolute inset-12 rounded-full border border-foreground/5" />
                    <div className="absolute inset-24 rounded-full border border-foreground/5" />
                </div>
            </div>

            <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16 lg:mb-24"
                >
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                        <div>
                            <span className="text-xs font-medium tracking-[0.3em] text-foreground/40 uppercase">
                                Servicios
                            </span>
                            <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight">
                                Soluciones
                                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                                    para tu negocio
                                </span>
                            </h2>
                        </div>
                        <p className="text-lg text-foreground/50 max-w-md lg:text-right">
                            Desde una landing page hasta una aplicación completa. Cada proyecto es único.
                        </p>
                    </div>

                    {/* Progress Line */}
                    <div className="hidden lg:block mt-12 h-px bg-foreground/10 relative">
                        <motion.div
                            className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"
                            style={{ width: lineWidth }}
                        />
                    </div>
                </motion.div>

                {/* Services - Staggered Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        const isEven = index % 2 === 0;

                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 50, x: isEven ? -20 : 20 }}
                                whileInView={{ opacity: 1, y: 0, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`group relative ${isEven ? "lg:mt-0" : "lg:mt-16"}`}
                            >
                                <div className="relative h-full rounded-3xl border border-foreground/10 bg-background/5 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-foreground/20 hover:shadow-2xl hover:shadow-foreground/5">
                                    {/* Gradient Background */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                                    />

                                    {/* Content */}
                                    <div className="relative p-8 lg:p-10">
                                        {/* Header Row */}
                                        <div className="flex items-start justify-between mb-8">
                                            <div className="flex items-center gap-4">
                                                {/* Icon */}
                                                <div
                                                    className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                                                    style={{ backgroundColor: `${service.color}15` }}
                                                >
                                                    <Icon className="w-7 h-7" style={{ color: service.color }} />
                                                </div>
                                                {/* Number */}
                                                <span
                                                    className="text-5xl font-bold opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                                                    style={{ color: service.color }}
                                                >
                                                    {service.id}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Title & Description */}
                                        <div className="mb-8">
                                            <p
                                                className="text-xs font-medium tracking-wider uppercase mb-2"
                                                style={{ color: service.color }}
                                            >
                                                {service.subtitle}
                                            </p>
                                            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                                                {service.title}
                                            </h3>
                                            <p className="text-foreground/60 leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>

                                        {/* Includes */}
                                        <div className="mb-8">
                                            <p className="text-xs font-medium text-foreground/40 uppercase tracking-wider mb-3">
                                                Incluye
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {service.includes.map((item) => (
                                                    <span
                                                        key={item}
                                                        className="px-3 py-1.5 text-xs font-medium rounded-full border text-foreground/70 transition-all duration-300 hover:text-foreground"
                                                        style={{
                                                            borderColor: `${service.color}30`,
                                                            backgroundColor: `${service.color}08`,
                                                        }}
                                                    >
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* CTA */}
                                        <motion.a
                                            href="#contact"
                                            whileHover={{ x: 5 }}
                                            className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300"
                                            style={{ color: service.color }}
                                        >
                                            <span>Cotizar ahora</span>
                                            <ChevronRight className="w-4 h-4" />
                                        </motion.a>
                                    </div>

                                    {/* Corner Accent */}
                                    <div
                                        className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700"
                                        style={{ backgroundColor: service.color }}
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mt-20 lg:mt-28"
                >
                    <p className="text-foreground/40 mb-4">¿Tienes algo diferente en mente?</p>
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 text-white font-semibold text-lg shadow-lg shadow-purple-500/20 transition-shadow hover:shadow-purple-500/40"
                    >
                        Cuéntame tu idea
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
