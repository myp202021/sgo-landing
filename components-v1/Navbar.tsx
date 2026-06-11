"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  { label: "Productos", href: "#productos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Perfiles", href: "#perfiles" },
  { label: "Blog", href: "#blog" },
  { label: "FAQ", href: "#faq" },
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <Image
              src="/images/sgo-icon.png"
              alt="SGO"
              width={36}
              height={36}
              className="rounded-lg brightness-0 invert"
            />
            <span className="text-xl font-bold tracking-wide text-white">
              SGO<span className="text-blue-400">.CL</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-slate hover:text-blue-300 text-sm font-medium transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://beta.sgo.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-glow text-white font-bold text-sm px-6 py-2.5 rounded-full"
            >
              Solicitar Demo
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
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

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden nav-glass rounded-2xl mt-2 p-4 space-y-3 animate-fade-in">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-slate hover:text-blue-300 text-sm font-medium py-2 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://beta.sgo.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center cta-glow text-white font-bold text-sm px-6 py-3 rounded-full mt-2"
            >
              Solicitar Demo
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
