"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, ArrowUpRight } from "lucide-react";
import { useState, type FormEvent } from "react";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/angelquinteror102@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      if (response.ok) {
        setShowSuccess(true);
        form.reset();
        setTimeout(() => setShowSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Error al enviar:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative pt-20 pb-16 lg:pt-0 lg:pb-0 lg:min-h-screen overflow-hidden">
      {/* Background Split */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-1/2 bg-foreground/[0.02]" />
      </div>

      <div className="relative w-full h-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="lg:grid lg:grid-cols-2 lg:min-h-screen">
          {/* Left Side - Message */}
          <div className="lg:flex lg:flex-col lg:justify-center lg:pr-16 xl:pr-24 lg:py-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              {/* Section indicator */}
              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-px bg-foreground/30" />
                <span className="text-xs font-medium tracking-[0.2em] text-foreground/40 uppercase">
                  Contacto
                </span>
              </div>

              {/* Main Title - Split into lines */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-8">
                <span className="text-foreground">Tienes una</span>
                <br />
                <span className="text-foreground/40">idea.</span>
                <br />
                <span className="text-foreground">Yo la</span>
                <br />
                <span className="bg-gradient-to-r from-foreground via-foreground/80 to-foreground/40 bg-clip-text text-transparent">
                  construyo.
                </span>
              </h2>

              {/* Social Links - Minimal */}
              <div className="space-y-4 mt-12">
                <p className="text-xs font-medium tracking-wider text-foreground/30 uppercase mb-6">
                  También puedes encontrarme en
                </p>

                {[
                  { icon: Github, label: "GitHub", href: "https://github.com/angeldqr", handle: "angeldqr" },
                  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/angeldqr/", handle: "angeldqr" },
                  { icon: Mail, label: "Email", href: "mailto:angelquinteror102@gmail.com", handle: "angelquinteror102@gmail.com" },
                ].map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group flex items-center gap-4 py-3 border-b border-foreground/10 hover:border-foreground/30 transition-colors"
                    >
                      <Icon className="w-4 h-4 text-foreground/40 group-hover:text-foreground transition-colors" />
                      <span className="text-sm text-foreground/60 group-hover:text-foreground transition-colors flex-1">
                        {link.handle}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-foreground/20 group-hover:text-foreground/60 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right Side - Form */}
          <div className="mt-16 lg:mt-0 lg:flex lg:items-center lg:pl-16 xl:pl-24 lg:py-20">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full max-w-md mx-auto lg:mx-0"
            >
              {/* Form Header */}
              <div className="mb-10">
                <p className="text-sm text-foreground/60 leading-relaxed">
                  Cuéntame sobre tu proyecto y te responderé en menos de 24 horas.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder=" "
                    className="peer w-full bg-transparent border-b-2 border-foreground/10 px-0 py-4 text-foreground placeholder-transparent focus:border-foreground focus:outline-none transition-colors"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-0 -top-2 text-xs font-medium text-foreground/40 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-foreground/30 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-foreground/60"
                  >
                    Nombre
                  </label>
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder=" "
                    className="peer w-full bg-transparent border-b-2 border-foreground/10 px-0 py-4 text-foreground placeholder-transparent focus:border-foreground focus:outline-none transition-colors"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-2 text-xs font-medium text-foreground/40 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-foreground/30 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-foreground/60"
                  >
                    Email
                  </label>
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder=" "
                    className="peer w-full bg-transparent border-b-2 border-foreground/10 px-0 py-4 text-foreground placeholder-transparent focus:border-foreground focus:outline-none transition-colors resize-none"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-0 -top-2 text-xs font-medium text-foreground/40 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-foreground/30 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-foreground/60"
                  >
                    Mensaje
                  </label>
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group w-full flex items-center justify-between px-8 py-5 bg-foreground text-background font-semibold rounded-full transition-all hover:bg-foreground/90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? "Enviando..." : "Enviar mensaje"}</span>
                  {isSubmitting ? (
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-background/30 border-t-background" />
                  ) : (
                    <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  )}
                </motion.button>

                {/* Success */}
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-4"
                  >
                    <p className="text-foreground font-medium">✓ Mensaje enviado</p>
                    <p className="text-sm text-foreground/50 mt-1">Te responderé pronto</p>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
