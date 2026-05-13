"use client";

import { useState, useEffect, useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Registro de Obra",
    description: "Alta del proyecto en el sistema",
    detail:
      "Se crea la obra en la plataforma con todos sus datos: nombre, ubicacion, contrato, plazos y actores involucrados. En minutos tu proyecto queda operativo.",
    icon: "M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    number: "02",
    title: "Configuracion de Perfiles",
    description: "Constructora, consultora, IFO",
    detail:
      "Se asignan los roles y permisos para cada actor: empresa constructora, consultora e inspeccion fiscal. Cada perfil tiene su vista y accesos especificos.",
    icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
  },
  {
    number: "03",
    title: "Libro de Obras Digital",
    description: "Registro diario, observaciones, instrucciones",
    detail:
      "Cada dia se registran anotaciones, observaciones e instrucciones con firma electronica y marca de tiempo. Todo queda con trazabilidad completa y validez legal.",
    icon: "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z",
  },
  {
    number: "04",
    title: "Comunicaciones Electronicas",
    description: "Oficios, cartas, resoluciones con firma",
    detail:
      "Todas las comunicaciones contractuales formales: oficios, cartas, resoluciones y notificaciones. Con firma electronica avanzada y confirmacion de recepcion.",
    icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
  },
  {
    number: "05",
    title: "Gestion Documental",
    description: "Planos, informes, contratos centralizados",
    detail:
      "Todos los documentos de obra centralizados: planos, especificaciones tecnicas, informes de avance y certificados. Versionamiento automatico y control de acceso.",
    icon: "M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z",
  },
  {
    number: "06",
    title: "Seguimiento y Control",
    description: "Dashboard en tiempo real, alertas",
    detail:
      "Dashboard con el estado de cada obra, alertas de plazos, reportes exportables y visibilidad total para la toma de decisiones. Accesible desde cualquier dispositivo.",
    icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
  },
];

export default function ProcessFlow3D() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());
  const [particles, setParticles] = useState<
    { left: string; delay: string; duration: string; w: string; h: string }[]
  >([]);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 8 }).map(() => ({
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 8}s`,
        duration: `${6 + Math.random() * 6}s`,
        w: `${2 + Math.random() * 3}px`,
        h: `${2 + Math.random() * 3}px`,
      }))
    );
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleSteps((prev) => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="proceso"
      ref={sectionRef}
      className="py-16 md:py-20 bg-navy relative overflow-hidden"
    >
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p, i) => (
          <div
            key={i}
            className="process-particle"
            style={{
              left: p.left,
              animationDelay: p.delay,
              animationDuration: p.duration,
              width: p.w,
              height: p.h,
            }}
          />
        ))}
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-amber/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-amber text-sm font-semibold uppercase tracking-wider">
            Asi funciona
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            6 pasos para digitalizar tu obra
          </h2>
          <p className="text-slate max-w-2xl mx-auto">
            Desde el registro hasta el control total. Un proceso simple y estructurado.
          </p>
        </div>

        {/* Progress bar */}
        <div className="max-w-4xl mx-auto mb-12 hidden md:block">
          <div className="relative h-1 bg-white/5 rounded-full">
            <div
              className="absolute h-full bg-gradient-to-r from-amber to-amber-light rounded-full transition-all duration-700"
              style={{
                width: `${(visibleSteps.size / 6) * 100}%`,
              }}
            />
            <div className="flex justify-between absolute -top-2 left-0 right-0">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`w-5 h-5 rounded-full border-2 transition-all duration-500 ${
                    visibleSteps.has(i)
                      ? "bg-amber border-amber-light shadow-[0_0_10px_rgba(249,115,22,0.5)]"
                      : "bg-navy border-white/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 3D Card Grid */}
        <div className="process-perspective">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            style={{ gridAutoRows: "200px" }}
          >
            {steps.map((step, i) => {
              const isVisible = visibleSteps.has(i);
              const isActive = activeStep === i;
              return (
                <div
                  key={step.number}
                  ref={(el) => {
                    cardRefs.current[i] = el;
                  }}
                  data-index={i}
                  className={`process-card-wrapper ${
                    isVisible ? "process-card-visible" : "process-card-hidden"
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                  onClick={() => setActiveStep(isActive ? null : i)}
                  onMouseEnter={() => setActiveStep(i)}
                  onMouseLeave={() => setActiveStep(null)}
                >
                  <div
                    className={`process-card-inner ${isActive ? "process-card-flipped" : ""}`}
                  >
                    {/* Front */}
                    <div className="process-card-face process-card-front glass-card rounded-2xl p-6 cursor-pointer">
                      <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-amber/40 to-transparent" />

                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-amber/20 text-3xl font-bold">{step.number}</span>
                        <div className="w-10 h-10 bg-amber/10 rounded-lg flex items-center justify-center text-amber">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d={step.icon} />
                          </svg>
                        </div>
                      </div>
                      <h3 className="text-base font-bold mb-2">{step.title}</h3>
                      <p className="text-slate text-sm leading-relaxed">{step.description}</p>

                      {/* Connection dots */}
                      {i < steps.length - 1 && (i + 1) % 3 !== 0 && (
                        <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                          <div className="process-connector">
                            <div className="process-connector-dot" />
                            <div className="process-connector-dot" />
                            <div className="process-connector-dot" />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Back */}
                    <div className="process-card-face process-card-back glass-card rounded-2xl p-6 cursor-pointer">
                      <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-amber to-transparent" />
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 bg-amber/20 rounded-lg flex items-center justify-center text-amber">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d={step.icon} />
                          </svg>
                        </div>
                        <span className="text-amber font-bold text-sm">Paso {step.number}</span>
                      </div>
                      <h3 className="text-sm font-bold mb-2 text-amber">{step.title}</h3>
                      <p className="text-off-white text-xs leading-relaxed">{step.detail}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <p className="text-center text-slate/50 text-xs mt-8 md:hidden">
          Toca cada paso para ver mas detalles
        </p>
        <p className="text-center text-slate/50 text-xs mt-8 hidden md:block">
          Pasa el cursor sobre cada paso para ver los detalles
        </p>
      </div>
    </section>
  );
}
