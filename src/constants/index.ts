import type { MenuItem, SocialLink } from "@/types";

export const MENU_ITEMS: MenuItem[] = [
  { id: "inicio", label: "Inicio" },
  { id: "about", label: "Sobre mí" },
  { id: "projects", label: "Proyectos" },
  { id: "courses", label: "Educación" },
  { id: "contact", label: "Contacto" },
] as const;

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/angeldqr",
    icon: undefined, // Se define en los componentes para mantener compatibilidad con lucide-react
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/angeldqr/",
    icon: undefined,
  },
  {
    name: "Email",
    href: "mailto:angelquinteror102@gmail.com",
    icon: undefined,
  },
];

export const TECHNICAL_SKILLS = [
  { name: "Python", icon: "SiPython", color: "#3776AB" },
  { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E" },
  { name: "React", icon: "SiReact", color: "#61DAFB" },
  { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#06B6D4" },
  { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
  { name: "Django", icon: "SiDjango", color: "#092E20" },
  { name: "PostgreSQL", icon: "SiPostgresql", color: "#4169E1" },
  { name: "Git", icon: "SiGit", color: "#F05032" },
] as const;