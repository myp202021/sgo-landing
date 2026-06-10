"use client";

import { useEffect, useRef, useState } from "react";

const profiles = [
  "Empresas constructoras",
  "Inmobiliarias",
  "Mandantes privados",
  "Empresas de ingenieria",
  "Consultoras",
  "Operadores de infraestructura",
  "Concesionarias",
  "Equipos legales",
];

export default function UserProfiles() {
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
    <section id="perfiles" ref={ref} className="py-16 md:py-20 bg-navy-light relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-cyan-blue/3 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
            Perfiles
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Quienes deberian usar SGO?
          </h2>
          <p className="text-slate max-w-2xl mx-auto">
            Cualquier organizacion que necesite respaldar formalmente sus comunicaciones y proteger sus contratos.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {profiles.map((p, i) => (
            <div
              key={p}
              className={`glass-card glass-card-hover rounded-2xl p-6 text-center transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21"
                  />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-off-white">{p}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider max-w-4xl mx-auto mt-20" />
    </section>
  );
}
