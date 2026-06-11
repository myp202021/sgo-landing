"use client";

import { useEffect, useRef, useState } from "react";

const profiles = [
  {
    icon: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21",
    title: "Empresas Constructoras",
    desc: "Control de obra, registro diario de anotaciones, respuesta a observaciones de la inspeccion fiscal. Cumple con la normativa MOP sin papeles.",
    features: ["Libro de Obras Digital", "Registro diario", "Respuesta a observaciones", "Firma electronica"],
    color: "amber",
  },
  {
    icon: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605",
    title: "Consultoras",
    desc: "Inspeccion fiscal, seguimiento de avance, comunicaciones formales al mandante. Acceso en tiempo real al libro de consultoria y documentos de obra.",
    features: ["Libro de Consultoria", "Comunicaciones LCE", "Seguimiento de avance", "Reportes"],
    color: "cyan-blue",
  },
  {
    icon: "M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z",
    title: "Inspeccion Fiscal (IFO)",
    desc: "Supervision, aprobaciones y resoluciones. Visibilidad total de anotaciones, plazos, documentos y comunicaciones formales en un solo lugar.",
    features: ["Supervision en tiempo real", "Aprobaciones", "Resoluciones", "Auditoria completa"],
    color: "amber-light",
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string; dot: string }> = {
  amber: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/20", dot: "bg-blue-500" },
  "cyan-blue": { bg: "bg-cyan-blue/10", text: "text-cyan-blue", border: "border-cyan-blue/20", dot: "bg-cyan-blue" },
  "amber-light": { bg: "bg-blue-500-light/10", text: "text-blue-400-light", border: "border-blue-500-light/20", dot: "bg-blue-500-light" },
};

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
            Tres actores, una plataforma
          </h2>
          <p className="text-slate max-w-2xl mx-auto">
            Cada perfil tiene su vista y permisos especificos. Todos conectados en tiempo real.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {profiles.map((p, i) => {
            const c = colorClasses[p.color];
            return (
              <div
                key={p.title}
                className={`glass-card glass-card-hover rounded-2xl p-7 text-center transition-all duration-700 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className={`w-16 h-16 ${c.bg} rounded-2xl flex items-center justify-center mx-auto mb-5`}>
                  <svg
                    className={`w-8 h-8 ${c.text}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={p.icon} />
                  </svg>
                </div>
                <h3 className={`text-xl font-bold mb-3 ${c.text}`}>{p.title}</h3>
                <p className="text-slate text-sm leading-relaxed mb-5">{p.desc}</p>
                <div className="space-y-2">
                  {p.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-off-white/80">
                      <div className={`w-1.5 h-1.5 rounded-full ${c.dot} flex-shrink-0`} />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="section-divider max-w-4xl mx-auto mt-20" />
    </section>
  );
}
