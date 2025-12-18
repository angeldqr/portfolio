"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
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
      // Usando formsubmit.co (reemplaza con tu email)
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

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/angeldqr",
      icon: <Github className="h-5 w-5" />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/angeldqr/",
      icon: <Linkedin className="h-5 w-5" />,
    },
    {
      name: "Email",
      href: "mailto:angelquinteror102@gmail.com",
      icon: <Mail className="h-5 w-5" />,
    },
  ];

  return (
    <section id="contact" className="min-h-svh overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-10 md:pb-12 flex items-center">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="mb-6 md:mb-8"
        >
          <p className="text-xs font-medium tracking-[0.16em] text-foreground/60">
            CONTACTO
          </p>

          <div className="mt-3 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Hablemos.
              </h2>

              <p className="mt-3 max-w-xl text-sm md:text-base text-foreground/60 leading-relaxed">
                ¿Tienes un proyecto en mente o quieres colaborar? Escríbeme y conversemos.
              </p>

              {/* Links sociales */}
              <div className="mt-6">
                <p className="text-xs font-medium text-foreground/50 mb-3">Encuéntrame en:</p>
                <div className="flex items-center gap-3 flex-wrap">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center h-11 w-11 rounded-full border border-foreground/10 bg-background/20 text-foreground/70 transition-all hover:text-foreground hover:bg-background/40 hover:border-foreground/20"
                      aria-label={link.name}
                      title={link.name}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              {/* Formulario */}
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.05 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-foreground/10 bg-background/10 p-4 sm:p-5 md:p-6 lg:p-8 space-y-4 md:space-y-5"
              >
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-foreground/80">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-xl border border-foreground/10 bg-background/20 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-foreground/30 focus:outline-none focus:ring-2 focus:ring-foreground/10 transition-colors"
                placeholder="Tu nombre completo"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-foreground/80">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-xl border border-foreground/10 bg-background/20 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-foreground/30 focus:outline-none focus:ring-2 focus:ring-foreground/10 transition-colors"
                placeholder="tu@email.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-foreground/80">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full rounded-xl border border-foreground/10 bg-background/20 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-foreground/30 focus:outline-none focus:ring-2 focus:ring-foreground/10 transition-colors resize-none"
                placeholder="Cuéntame sobre tu proyecto o consulta..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3 text-sm font-semibold text-background transition-all hover:bg-foreground/90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-background/30 border-t-background" />
                  Enviando...
                </>
              ) : (
                <>
                  Enviar mensaje
                  <Send className="h-4 w-4" />
                </>
              )}
            </button>

            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400"
              >
                ✓ Mensaje enviado correctamente. Te responderé pronto.
              </motion.div>
            )}
              </motion.form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
