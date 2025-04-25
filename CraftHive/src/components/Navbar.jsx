
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

export default function CraftHive_Navbar() {
  return (
    <Navbar fluid rounded>
      <NavbarBrand>
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="#">
          About
        </NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}


/*import React from "react";
import {Menu, CircleHelp} from 'lucide-React';
import '../App.css';

const Navbar = () => {
    return (
        <nav className="top-navbar">
            <div className="flex items-start gap-4">
                <Menu color="white" />
            </div>
            <div className="flex items-end gap-4">
                <CircleHelp color="white"/>
            </div>
        </nav>
    );
};

  export default Navbar;*/