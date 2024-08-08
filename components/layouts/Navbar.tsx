"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import ThemeSwitcher from "./ThemeSwitcher";
import Link from "next/link";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Journey",
      path: "/",
    },
    {
      name: "Knowlwdge",
      path: "/knowlwdge",
    },
    {
      name: "Works",
      path: "/",
    },
  ];

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">Bécanee</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link href="/" aria-current="page">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/about" color="foreground">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Journey
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/knowledge" color="foreground">
            Knowledge
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Works
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button as={Link} color="primary" href="#" variant="flat" size="sm">
            Sign in
          </Button>
        </NavbarItem>
      </NavbarContent>
      <ThemeSwitcher />
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            key={`${item.name}-${index}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Link
              color={
                index === 0
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href={item.path}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
