export interface Project {
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
}

export type CourseStatus = "Completado" | "En progreso" | "Recomendado";

export interface Course {
  title: string;
  provider: string;
  status: CourseStatus;
  year?: string;
  skills: string[];
  href?: string;
  previewImage?: string;
}

export interface MenuItem {
  id: string;
  label: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export type ProjectAccent = Project["accent"];
export type ProjectIcon = Project["icon"];