"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link
} from "@heroui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function NavbarComponent() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: "inicio", label: "Inicio" },
    { id: "about", label: "Sobre mí" },
    { id: "projects", label: "Proyectos" },
    { id: "courses", label: "Educación" },
    { id: "contact", label: "Contacto" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "about", "projects", "courses", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      classNames={{
        wrapper: "w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16"
      }}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-2" justify="center">
        <NavbarBrand
          onClick={() => scrollToSection("inicio")}
          className="cursor-pointer"
        >
          <Image
            src="/aq.png"
            alt="Logo"
            width={80}
            height={80}
            className="rounded-md"
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex" justify="start">
        <NavbarBrand
          onClick={() => scrollToSection("inicio")}
          className="cursor-pointer"
        >
          <Image
            src="/aq.png"
            alt="Logo"
            width={130}
            height={130}
            className="rounded-md"
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        <NavbarItem isActive={activeSection === "inicio"}>
          <Link
            color="foreground"
            onPress={() => scrollToSection("inicio")}
            className={`cursor-pointer ${activeSection === "inicio" ? "" : "opacity-60"}`}
          >
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem isActive={activeSection === "about"}>
          <Link
            color="foreground"
            onPress={() => scrollToSection("about")}
            className={`cursor-pointer ${activeSection === "about" ? "" : "opacity-60"}`}
          >
            Sobre mí
          </Link>
        </NavbarItem>
        <NavbarItem isActive={activeSection === "projects"}>
          <Link
            color="foreground"
            onPress={() => scrollToSection("projects")}
            className={`cursor-pointer ${activeSection === "projects" ? "" : "opacity-60"}`}
          >
            Proyectos
          </Link>
        </NavbarItem>
        <NavbarItem isActive={activeSection === "courses"}>
          <Link
            color="foreground"
            onPress={() => scrollToSection("courses")}
            className={`cursor-pointer ${activeSection === "courses" ? "" : "opacity-60"}`}
          >
            Educación
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem isActive={activeSection === "contact"}>
          <Link
            color="foreground"
            onPress={() => scrollToSection("contact")}
            className={`cursor-pointer ${activeSection === "contact" ? "" : "opacity-60"}`}
          >
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <div className="flex justify-end px-4 pt-2 pb-2">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="inline-flex items-center justify-center h-8 w-8 rounded-full hover:bg-foreground/10 transition-colors"
            aria-label="Cerrar menú"
          >
            <X className="h-5 w-5 text-foreground" />
          </button>
        </div>

        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.id}-${index}`}>
            <Link
              className="w-full"
              color={activeSection === item.id ? "primary" : "foreground"}
              onPress={() => scrollToSection(item.id)}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
