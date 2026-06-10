"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const benefits = [
  {
    number: "01",
    title: "Blindaje juridico",
    desc: "Todas las comunicaciones con respaldo verificable y firma electronica avanzada.",
    icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
  },
  {
    number: "02",
    title: "Trazabilidad completa",
    desc: "Cada accion registrada con fecha, usuario, historial y marca de tiempo.",
    icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    number: "03",
    title: "Cumplimiento contractual",
    desc: "Facilita demostrar obligaciones, acuerdos y decisiones ante cualquier disputa.",
    icon: "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z",
  },
  {
    number: "04",
    title: "Gestion eficiente",
    desc: "Menos correos, menos documentos dispersos. Mayor control operativo.",
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
  },
];

export default function Benefits() {
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
    <section id="beneficios" ref={ref} className="section-dark py-20 md:py-28 relative overflow-hidden">
      {/* Background image strip */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/magnific__create-a-composition-with-a-construction-worker-on__11815.png"
          alt=""
          fill
          className="object-cover opacity-[0.04]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-teal text-sm font-semibold uppercase tracking-wider">
            Beneficios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Por que elegir SGO
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Respaldo, trazabilidad y control en cada etapa de tus contratos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`group relative rounded-2xl p-8 transition-all duration-500 overflow-hidden ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${i * 120}ms`,
                background: "rgba(32, 48, 56, 0.4)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Hover glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-teal/0 group-hover:bg-teal/8 rounded-full blur-3xl transition-all duration-500 pointer-events-none" />

              <div className="flex items-start gap-5 relative z-10">
                <div className="flex-shrink-0">
                  <span className="text-teal/30 text-3xl font-extrabold leading-none">
                    {b.number}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-lg bg-teal/10 flex items-center justify-center">
                      <svg className="w-4.5 h-4.5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={b.icon} />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-off-white">{b.title}</h3>
                  </div>
                  <p className="text-steel text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
