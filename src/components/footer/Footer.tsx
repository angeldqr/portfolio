"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/angeldqr",
      icon: <Github className="h-4 w-4" />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/angeldqr/",
      icon: <Linkedin className="h-4 w-4" />,
    },
    {
      name: "Email",
      href: "mailto:angelquinteror102@gmail.com",
      icon: <Mail className="h-4 w-4" />,
    },
  ];

  return (
    <footer className="border-t border-foreground/10 bg-background/50 backdrop-blur">
      <div className="w-full max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} Ángel Quintero. Todos los derechos reservados.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-foreground/10 bg-background/20 text-foreground/70 transition-all hover:text-foreground hover:bg-background/40 hover:border-foreground/20"
                aria-label={link.name}
                title={link.name}
              >
                {link.icon}
              </a>
            ))}

            {/* Scroll to top */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-foreground/10 bg-background/20 text-foreground/70 transition-all hover:text-foreground hover:bg-background/40 hover:border-foreground/20"
              aria-label="Volver arriba"
              title="Volver arriba"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
