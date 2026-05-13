"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Bruno Gysling",
    company: "MASERCO",
    text: "La plataforma acompaña de cerca con un equipo humano super comprometido y diligente.",
    initials: "BG",
  },
  {
    name: "Marco Sáez",
    company: "QUILÍN",
    text: "Han considerado mis solicitudes y sugerencias en el desarrollo y mejora de la aplicación.",
    initials: "MS",
  },
  {
    name: "Esteban Rocha",
    company: "Inversiones Petrohue",
    text: "Tanto la plataforma como el equipo de SGO.cl han contribuido en los últimos años a lograr los objetivos establecidos en nuestros contratos.",
    initials: "ER",
  },
  {
    name: "Carlos Sanhueza",
    company: "Constructora González García Ltda",
    text: "Se hicieron responsables de la tramitación e instalación de mi Firma Electrónica Avanzada asegurándose de su correcto funcionamiento.",
    initials: "CS",
  },
  {
    name: "Rigoberto Sierra",
    company: "DACAMROS",
    text: "Me han ayudado a resolver mis dudas todas las veces que lo he necesitado, incluso fuera del horario establecido en las especificaciones.",
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
    <section ref={ref} className="py-16 md:py-20 bg-navy-light relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber/3 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <span className="text-amber text-sm font-semibold uppercase tracking-wider">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-slate max-w-2xl mx-auto">
            Empresas que ya digitalizaron sus obras con SGO.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`glass-card rounded-2xl p-8 relative transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              {/* Quote mark */}
              <div className="absolute top-6 right-8 text-amber/10 text-7xl font-bold leading-none select-none">
                &ldquo;
              </div>

              <p className="text-off-white/80 text-[15px] leading-relaxed mb-6 relative z-10">
                {t.text}
              </p>

              <div className="flex items-center gap-4 border-t border-white/5 pt-5">
                <div className="w-11 h-11 bg-amber/15 rounded-full flex items-center justify-center text-amber font-bold text-sm">
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-off-white text-sm">{t.name}</div>
                  <div className="text-amber text-xs">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider max-w-4xl mx-auto mt-20" />
    </section>
  );
}
