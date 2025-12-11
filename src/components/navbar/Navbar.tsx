"use client";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@heroui/react";
import { usePathname } from "next/navigation";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function NavbarComponent() {
  const pathname = usePathname();

  return (
    <Navbar isBordered className="px-6">
      <NavbarBrand className="gap-3">
        <AcmeLogo />
        <p className="font-bold text-inherit">Ángel Quintero</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        <NavbarItem isActive={pathname === "/"}>
          <Link color={pathname === "/" ? "foreground" : "foreground"} href="/" className={pathname === "/" ? "" : "opacity-60"}>
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/about"}>
          <Link color={pathname === "/about" ? "foreground" : "foreground"} href="/about" className={pathname === "/about" ? "" : "opacity-60"}>
            Sobre mí
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/projects"}>
          <Link color={pathname === "/projects" ? "foreground" : "foreground"} href="/projects" className={pathname === "/projects" ? "" : "opacity-60"}>
            Proyectos
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/courses"}>
          <Link color={pathname === "/courses" ? "foreground" : "foreground"} href="/courses" className={pathname === "/courses" ? "" : "opacity-60"}>
            Cursos
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem isActive={pathname === "/contact"}>
          <Link color={pathname === "/contact" ? "foreground" : "foreground"} href="/contact" className={pathname === "/contact" ? "" : "opacity-60"}>
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
