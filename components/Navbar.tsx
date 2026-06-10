"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          <a href="#" className="flex items-center">
            <Image
              src="/images/sgo-logo-blanco.png"
              alt="SGO.CL"
              width={140}
              height={35}
              className="h-8 w-auto"
              priority
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-white/75 hover:text-white text-sm font-medium transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="cta-primary text-sm px-6 py-2.5 rounded-lg"
            >
              Solicitar Demo
            </a>
          </div>

          <button
            className="md:hidden text-white/80 p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden nav-glass rounded-xl mt-1 p-4 space-y-1 animate-fade-in">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-white/70 hover:text-white text-sm font-medium py-2.5 px-3 rounded-lg hover:bg-white/5 transition-all"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="block text-center cta-primary text-sm px-6 py-3 rounded-lg mt-3"
            >
              Solicitar Demo
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
