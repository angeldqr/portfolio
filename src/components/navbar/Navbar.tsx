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

export default function NavbarComponent() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { id: "inicio", label: "Inicio" },
    { id: "about", label: "Sobre mí" },
    { id: "projects", label: "Proyectos" },
    { id: "courses", label: "Educación" },
    { id: "contact", label: "Contacto" },
  ];

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        const sections = ["inicio", "about", "projects", "courses", "contact"];
        const scrollPosition = window.scrollY + 150;

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
      }, 16);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  useEffect(() => {
    // Prevenir scroll del body cuando el menú está abierto
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Overlay de fondo cuando el menú está abierto */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-background/95 backdrop-blur-md z-[9998] sm:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="full"
        classNames={{
          base: `transition-all duration-300 z-[10000] ${isScrolled ? "backdrop-blur-md bg-background/80" : "bg-background/40"}`,
          wrapper: "w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16",
          item: "hidden sm:flex",
          menu: "bg-background/98 backdrop-blur-xl sm:hidden z-[9999]",
        }}
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle 
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            className="text-foreground"
          />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-2" justify="center">
          <NavbarBrand
            onClick={() => scrollToSection("inicio")}
            className="cursor-pointer transition-transform hover:scale-105 active:scale-95"
          >
            <Image
              src="/aq.png"
              alt="Logo"
              width={70}
              height={70}
              className="rounded-md"
              priority
            />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex" justify="start">
          <NavbarBrand
            onClick={() => scrollToSection("inicio")}
            className="cursor-pointer transition-transform hover:scale-105 active:scale-95"
          >
            <Image
              src="/aq.png"
              alt="Logo"
              width={120}
              height={120}
              className="rounded-md"
              priority
            />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-6 md:gap-8 lg:gap-10" justify="center">
          {menuItems.slice(0, -1).map((item) => (
            <NavbarItem key={item.id} isActive={activeSection === item.id}>
              <Link
                color="foreground"
                onPress={() => scrollToSection(item.id)}
                className={`relative cursor-pointer transition-all duration-200 ${
                  activeSection === item.id 
                    ? "text-foreground font-medium" 
                    : "text-foreground/60 hover:text-foreground/90"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem isActive={activeSection === "contact"}>
            <Link
              color="foreground"
              onPress={() => scrollToSection("contact")}
              className={`relative cursor-pointer transition-all duration-200 ${
                activeSection === "contact" 
                  ? "text-foreground font-medium" 
                  : "text-foreground/60 hover:text-foreground/90"
              }`}
            >
              Contacto
              {activeSection === "contact" && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          <div className="px-4 pt-4 pb-4 border-b border-foreground/10">
            <NavbarBrand
              onClick={() => {
                scrollToSection("inicio");
                setIsMenuOpen(false);
              }}
              className="cursor-pointer"
            >
              <Image
                src="/aq.png"
                alt="Logo"
                width={60}
                height={60}
                className="rounded-md"
              />
            </NavbarBrand>
          </div>

          <div className="px-2 py-4">
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item.id}-${index}`}>
                <Link
                  className={`w-full py-3 px-4 rounded-xl transition-all duration-200 ${
                    activeSection === item.id
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-foreground/70 hover:bg-foreground/5 hover:text-foreground"
                  }`}
                  color={activeSection === item.id ? "primary" : "foreground"}
                  onPress={() => scrollToSection(item.id)}
                  size="lg"
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}
          </div>
        </NavbarMenu>
      </Navbar>
    </>
  );
}
