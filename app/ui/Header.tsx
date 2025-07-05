'use client'
import Nav from "@/app/ui/Nav"
import Logo from "./Logo"
import { useEffect, useState } from 'react'

export default function Header() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > lastScrollTop + 3) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-1/2 translate-x-[-50%] w-[95%] flex flex-wrap items-center justify-between mx-auto z-20 bg-[#2B2E3B] p-4 md:px-10 rounded-full shadow-lg transition-all duration-300 ease-in-out
        ${hidden ? "-top-40" : "top-5"}`}
    >
      <Logo />
      <Nav />
    </header>
  );
}
