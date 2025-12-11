"use client";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@heroui/react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function NavbarComponent() {
  const pathname = usePathname();

  return (
    <Navbar
      isBordered
      maxWidth="full"
      classNames={{
        wrapper: "w-full max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16"
      }}
    >
        <NavbarBrand as={Link} href="/" className="cursor-pointer">
          <Image
            src="/aq.png"
            alt="Logo"
            width={130}
            height={130}
            className="rounded-md"
          />
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
