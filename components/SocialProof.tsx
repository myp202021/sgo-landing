"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "+400", label: "Obras conectadas en Chile", icon: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" },
  { value: "24/7", label: "Disponibilidad garantizada", icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" },
  { value: "FEA", label: "Firma electronica avanzada", icon: "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" },
  { value: "+10", label: "Anos de experiencia", icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" },
];

const badges = [
  { icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z", label: "Respaldo cronologico" },
  { icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z", label: "Evidencia verificable" },
  { icon: "M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z", label: "Centralizacion documental" },
  { icon: "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3", label: "Acceso web y movil" },
  { icon: "M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244", label: "Integracion de procesos" },
];

export default function SocialProof() {
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
    <section ref={ref} className="section-navy py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <span className="text-teal text-sm font-semibold uppercase tracking-wider">
            Confianza
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Respaldo que habla por si solo
          </h2>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto mb-14">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`text-center py-6 px-4 rounded-2xl transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{
                transitionDelay: `${i * 100}ms`,
                background: "rgba(32, 48, 56, 0.5)",
                border: "1px solid rgba(48,152,168,0.1)",
              }}
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-teal/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                </svg>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">{s.value}</div>
              <p className="text-steel text-xs font-medium">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Badges row */}
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {badges.map((b, i) => (
            <div
              key={b.label}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-full transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: `${400 + i * 80}ms`,
                background: "rgba(48,152,168,0.06)",
                border: "1px solid rgba(48,152,168,0.12)",
              }}
            >
              <svg className="w-4 h-4 text-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d={b.icon} />
              </svg>
              <span className="text-white/90 text-sm font-medium">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
