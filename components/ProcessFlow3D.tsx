"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const benefits = [
  {
    number: "01",
    title: "Blindaje juridico",
    desc: "Todas las comunicaciones cuentan con respaldo y evidencia verificable.",
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
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-teal text-sm font-semibold uppercase tracking-wider">
            Beneficios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Por que elegir SGO
          </h2>
          <p className="text-white max-w-2xl mx-auto text-lg">
            Respaldo, trazabilidad y control en cada etapa de tus contratos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left: Benefits cards */}
          <div className="space-y-5">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className={`group flex items-start gap-5 p-5 rounded-xl transition-all duration-500 hover:bg-white/[0.03] ${
                  visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <span className="text-teal/25 text-4xl font-extrabold leading-none mt-1 select-none">
                  {b.number}
                </span>
                <div>
                  <div className="flex items-center gap-3 mb-1.5">
                    <div className="w-8 h-8 rounded-lg bg-teal/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={b.icon} />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-white">{b.title}</h3>
                  </div>
                  <p className="text-white text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Image */}
          <div
            className={`relative rounded-2xl overflow-hidden aspect-[3/4] transition-all duration-700 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <Image
              src="/images/magnific__recreate-img1-but-change-the-helmet-for-a-white-on__52335.png"
              alt="Ingeniero con casco blanco revisando documentacion digital"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent" />
            {/* Overlay badge */}
            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl" style={{ background: "rgba(26,40,48,0.85)", backdropFilter: "blur(12px)", border: "1px solid rgba(48,152,168,0.15)" }}>
              <p className="text-white font-bold text-base mb-1">+400 proyectos protegidos</p>
              <p className="text-white/60 text-sm">Constructoras, consultoras e IFO confian en SGO.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
