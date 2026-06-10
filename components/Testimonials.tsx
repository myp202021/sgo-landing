"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Bruno Gysling",
    company: "MASERCO",
    text: "La plataforma acompana de cerca con un equipo humano super comprometido y diligente.",
    initials: "BG",
  },
  {
    name: "Marco Saez",
    company: "QUILIN",
    text: "Han considerado mis solicitudes y sugerencias en el desarrollo y mejora de la aplicacion.",
    initials: "MS",
  },
  {
    name: "Esteban Rocha",
    company: "Inversiones Petrohue",
    text: "Tanto la plataforma como el equipo de SGO han contribuido en los ultimos anos a lograr los objetivos establecidos en nuestros contratos.",
    initials: "ER",
  },
  {
    name: "Carlos Sanhueza",
    company: "Gonzalez Garcia Ltda",
    text: "Se hicieron responsables de la tramitacion e instalacion de mi Firma Electronica Avanzada asegurandose de su correcto funcionamiento.",
    initials: "CS",
  },
  {
    name: "Rigoberto Sierra",
    company: "DACAMROS",
    text: "Me han ayudado a resolver mis dudas todas las veces que lo he necesitado, incluso fuera del horario establecido.",
    initials: "RS",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="testimonios" ref={ref} className="section-dark py-20 md:py-28 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/magnific__create-a-composition-with-two-miners-with-their-ba__52328.png"
          alt=""
          fill
          className="object-cover opacity-[0.03]"
        />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-teal/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <span className="text-teal text-sm font-semibold uppercase tracking-wider">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-white/70 max-w-xl mx-auto">
            Empresas que ya digitalizaron la gestion de sus obras con SGO.
          </p>
        </div>

        {/* Top row: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto mb-5">
          {testimonials.slice(0, 3).map((t, i) => (
            <div
              key={t.name}
              className={`rounded-2xl p-7 relative transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${i * 150}ms`,
                background: "rgba(32, 48, 56, 0.5)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/90 text-[15px] leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-10 h-10 bg-teal/12 rounded-full flex items-center justify-center text-teal text-sm font-bold">
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{t.name}</div>
                  <div className="text-teal text-xs">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row: 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {testimonials.slice(3).map((t, i) => (
            <div
              key={t.name}
              className={`rounded-2xl p-7 relative transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${(i + 3) * 150}ms`,
                background: "rgba(32, 48, 56, 0.5)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/90 text-[15px] leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-10 h-10 bg-teal/12 rounded-full flex items-center justify-center text-teal text-sm font-bold">
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{t.name}</div>
                  <div className="text-teal text-xs">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
