"use client";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@heroui/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function NavbarComponent() {
  const [activeSection, setActiveSection] = useState("inicio");

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
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar
      isBordered
      maxWidth="full"
      classNames={{
        wrapper: "w-full max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16"
      }}
    >
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
            Cursos
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
    </Navbar>
  );
}
