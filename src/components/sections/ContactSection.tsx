"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="min-h-screen py-20 bg-default-50/50">
      <div className="w-full max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-foreground">
            Contacto
          </h2>
          <p className="text-xl md:text-2xl text-foreground/60">
            Próximamente...
          </p>
        </motion.div>
      </div>
    </section>
  );
}
