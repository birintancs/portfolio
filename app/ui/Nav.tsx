'use client';

import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Link from "next/link";

const NavLinks = () => (
  <>
    <Link href="#Home" className="hover:text-orange-400 font-medium">Home</Link>
    <Link href="#experience" className="hover:text-orange-400 font-medium">Experience</Link>
    <Link href="#projects" className="hover:text-orange-400 font-medium">Projects</Link>
    <Link href="#certs" className="hover:text-orange-400 font-medium">Certifications</Link>
    <Link href="#contact" className="hover:text-orange-400 font-medium">Contact</Link>
  </>
);

export default function Nav() {
  const [menuOpen, setMenuToggle] = useState(false);

  return (
    <nav className="relative flex items-center justify-end z-20">
      {/* Desktop Menu */}
      <ul className="hidden md:flex flex-row justify-end gap-4 text-white text-base">
        <NavLinks />
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="w-6 h-6 md:hidden flex items-center justify-center text-white"
        onClick={() => setMenuToggle(!menuOpen)}
        aria-label="Toggle Navigation" 
      > 
        {menuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="fixed top-0 right-0 w-1/3 h-screen bg-gray-800 flex flex-col items-center justify-center transition-all duration-300"
          style={{ zIndex: 100 }}
        >
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={() => setMenuToggle(false)}
            aria-label="Close Menu"
          >
            <XMarkIcon className="h-8 w-8" />
          </button>
          <ul className="flex flex-col gap-6 text-white text-xl">
            <NavLinks />
          </ul>
        </div>
      )}
    </nav>
  );
}
