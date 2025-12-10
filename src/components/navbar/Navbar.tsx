import React from "react";
import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";
import Link from "next/link";

/**
 * Minimal, responsive Navbar using Hero UI components.
 * Sections: Home, About, Projects, Courses, Contact
 */
export default function Navbar() {
  return (
    <HeroNavbar isBordered>
      <NavbarBrand>
        <Link href="/" className="text-lg font-semibold">
          Ángel Quintero
        </Link>
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarItem>
          <Link href="/">Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/about">About</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/projects">Projects</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/courses">Courses</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/contact">Contact</Link>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile menu toggle / menu */}
      <NavbarMenuToggle />
      <NavbarMenu>
        <NavbarMenuItem>
          <Link href="/">Home</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/about">About</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/projects">Projects</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/courses">Courses</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/contact">Contact</Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </HeroNavbar>
  );
}
