"use client";

import { useEffect, useRef, useState } from "react";

const benefits = [
  {
    title: "Blindaje juridico",
    desc: "Todas las comunicaciones cuentan con respaldo y evidencia verificable.",
    icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
  },
  {
    title: "Trazabilidad completa",
    desc: "Cada accion queda registrada con fecha, usuario e historial.",
    icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Cumplimiento contractual",
    desc: "Facilita demostrar obligaciones, acuerdos y decisiones.",
    icon: "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z",
  },
  {
    title: "Gestion eficiente",
    desc: "Menos correos, menos documentos dispersos y mayor control.",
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
  },
];

export default function ProcessFlow3D() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="proceso" ref={sectionRef} className="py-16 md:py-20 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #1a1f3d 0%, #111528 50%, #1a1f3d 100%)' }}>
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-50" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="text-teal-400 text-sm font-semibold uppercase tracking-wider">Beneficios</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Por que elegir SGO</h2>
          <p className="text-slate max-w-2xl mx-auto">Respaldo, trazabilidad y control en cada etapa de tus contratos.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`glass-card glass-card-hover rounded-2xl p-7 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-teal-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={b.icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-off-white mb-2">{b.title}</h3>
                  <p className="text-slate text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider max-w-4xl mx-auto mt-16" />
    </section>
  );
}
