"use client";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@heroui/react";

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
  return (
    <Navbar className="px-6">
      <NavbarBrand className="gap-3">
        <AcmeLogo />
        <p className="font-bold text-inherit">Ángel Quintero</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/about">
            Sobre mí
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" color="primary" href="/projects">
            Proyectos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/courses">
            Cursos
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="gap-6">
        <NavbarItem className="hidden lg:flex">
          <Link href="/contact">Contacto</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/contact" variant="flat" className="px-5">
            Contáctame
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
