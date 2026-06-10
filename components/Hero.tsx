"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

function AnimatedNumber({
  target,
  suffix = "",
  prefix = "",
}: {
  target: number;
  suffix?: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <span ref={ref} className="text-3xl md:text-4xl font-bold text-teal tabular-nums">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  { target: 400, prefix: "+", suffix: "", label: "Proyectos conectados" },
  { target: 24, prefix: "", suffix: "/7", label: "Disponibilidad" },
  { target: 3, prefix: "", suffix: "", label: "Perfiles de usuario" },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="hero-bg min-h-screen flex items-center relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/magnific__create-a-composition-with-a-team-of-construction-w__52336.png"
          alt=""
          fill
          className="object-cover opacity-35"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(26,40,48,0.92) 0%, rgba(32,48,56,0.85) 50%, rgba(26,40,48,0.95) 100%)",
          }}
        />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 grid-pattern pointer-events-none" />

      {/* Glow accent */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-teal/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-28 md:py-32 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div
            className={`transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-teal/8 border border-teal/20 rounded-full px-4 py-1.5 mb-8">
              <div className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              <span className="text-teal text-sm font-medium">
                +400 proyectos conectados
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold leading-[1.08] mb-6 tracking-tight">
              Blinda la gestion de tus contratos{" "}
              <span className="text-teal">
                desde el primer dia.
              </span>
            </h1>

            <p className="text-lg text-white leading-relaxed mb-8 max-w-xl">
              Evita perdidas de informacion, reduce riesgos legales y manten
              todas las comunicaciones respaldadas con plena trazabilidad y
              validez juridica.
            </p>

            {/* Trust row with icons */}
            <div className="flex flex-wrap gap-x-6 gap-y-4">
              <div className="flex items-center gap-2.5 text-sm text-white">
                <div className="w-8 h-8 rounded-lg bg-teal/15 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>
                Firma electronica avanzada
              </div>
              <div className="flex items-center gap-2.5 text-sm text-white">
                <div className="w-8 h-8 rounded-lg bg-teal/15 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                Trazabilidad completa
              </div>
              <div className="flex items-center gap-2.5 text-sm text-white">
                <div className="w-8 h-8 rounded-lg bg-teal/15 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                Respaldo juridico
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="rounded-2xl p-7 md:p-8 relative overflow-hidden card-glass">
              {/* Glow behind form */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-teal/8 rounded-full blur-3xl pointer-events-none" />

              <h2 className="text-xl font-bold text-white mb-1">Solicita una demo</h2>
              <p className="text-sm text-white/90 mb-6">
                Un especialista te contactara en menos de 24 horas.
              </p>

              <form action="https://formsubmit.co/contacto@sgo.cl" method="POST">
                <input type="hidden" name="_subject" value="Nueva solicitud demo — SGO Landing" />
                <input type="hidden" name="_cc" value="contacto@mulleryperez.cl" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="https://sgo-landing-pi.vercel.app/?enviado=true" />

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wider">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      required
                      placeholder="Tu nombre completo"
                      className="form-input w-full px-4 py-3 rounded-xl text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wider">
                      Correo *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="tu@empresa.com"
                      className="form-input w-full px-4 py-3 rounded-xl text-sm"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wider">
                        Telefono *
                      </label>
                      <input
                        type="tel"
                        name="telefono"
                        required
                        placeholder="+56 9..."
                        className="form-input w-full px-4 py-3 rounded-xl text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wider">
                        Empresa *
                      </label>
                      <input
                        type="text"
                        name="empresa"
                        required
                        placeholder="Tu empresa"
                        className="form-input w-full px-4 py-3 rounded-xl text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wider">
                      N&deg; de colaboradores
                    </label>
                    <select
                      name="colaboradores"
                      className="form-input w-full px-4 py-3 rounded-xl text-sm"
                    >
                      <option value="">Selecciona</option>
                      <option value="1-50">1 a 50</option>
                      <option value="51-200">51 a 200</option>
                      <option value="201-500">201 a 500</option>
                      <option value="500+">Mas de 500</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full cta-primary py-3.5 rounded-xl text-base"
                  >
                    Solicitar demo gratuita
                  </button>
                </div>
              </form>

              <p className="text-[10px] text-white/20 mt-4 text-center">
                Tus datos estan protegidos. No compartimos informacion con terceros.
              </p>
            </div>

            {/* Stats below form */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center py-4 rounded-xl" style={{ background: "rgba(32,48,56,0.5)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <AnimatedNumber target={s.target} prefix={s.prefix} suffix={s.suffix} />
                  <p className="text-white/70 text-[10px] font-semibold mt-1 uppercase tracking-wider">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy to-transparent pointer-events-none" />
    </section>
  );
}
