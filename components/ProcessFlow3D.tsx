"use client";

import { useState, useEffect, useRef } from "react";

const steps = [
  { number: "01", title: "Registro de Obra", description: "Alta del proyecto, configuración inicial, datos del contrato MOP", icon: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" },
  { number: "02", title: "Configuración de Perfiles", description: "Constructora, consultora e IFO con permisos diferenciados", icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" },
  { number: "03", title: "Libro de Obras Digital", description: "Registro diario de obra, observaciones, instrucciones con firma electrónica", icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" },
  { number: "04", title: "Comunicaciones Electrónicas", description: "Oficios, cartas, resoluciones con respaldo legal y trazabilidad", icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" },
  { number: "05", title: "Gestión Documental", description: "Planos, informes, especificaciones centralizadas con versionamiento", icon: "M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" },
  { number: "06", title: "Seguimiento y Control", description: "Dashboard en tiempo real, alertas automáticas, reportes MOP", icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" },
];

export default function ProcessFlow3D() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
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

  // Auto-advance steps
  useEffect(() => {
    if (!isAutoPlaying || !visible) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, visible]);

  return (
    <section id="proceso" ref={sectionRef} className="py-16 md:py-20 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #1a1f3d 0%, #111528 50%, #1a1f3d 100%)' }}>
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-50" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Proceso</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">6 pasos para digitalizar tu obra</h2>
          <p className="text-slate max-w-2xl mx-auto">Desde el registro hasta el control total. Un proceso simple y estructurado.</p>
        </div>

        {/* 3D Pipeline visualization */}
        <div className="relative" style={{ perspective: '1200px' }}>

          {/* Animated pipeline track */}
          <div className="hidden md:block relative h-20 mb-8">
            {/* Track line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2" style={{ background: 'linear-gradient(90deg, rgba(59,130,246,0.1), rgba(59,130,246,0.3), rgba(59,130,246,0.1))' }} />

            {/* Animated pulse traveling along the track */}
            <div className="absolute top-1/2 -translate-y-1/2 h-1 rounded-full" style={{
              background: 'linear-gradient(90deg, transparent, #3b82f6, transparent)',
              width: '20%',
              left: `${(activeStep / (steps.length - 1)) * 80}%`,
              transition: 'left 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '0 0 20px rgba(59,130,246,0.5), 0 0 40px rgba(59,130,246,0.2)',
            }} />

            {/* Step nodes on track */}
            {steps.map((step, i) => (
              <button
                key={i}
                onClick={() => { setActiveStep(i); setIsAutoPlaying(false); }}
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 transition-all duration-500"
                style={{ left: `${(i / (steps.length - 1)) * 100}%` }}
              >
                <div className={`relative flex items-center justify-center transition-all duration-500 ${
                  i === activeStep
                    ? 'w-16 h-16 scale-110'
                    : i < activeStep
                      ? 'w-12 h-12'
                      : 'w-12 h-12'
                }`}>
                  {/* Glow ring for active */}
                  {i === activeStep && (
                    <div className="absolute inset-0 rounded-full animate-ping" style={{ background: 'rgba(59,130,246,0.15)', animationDuration: '2s' }} />
                  )}

                  {/* Node circle */}
                  <div className={`relative z-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                    i === activeStep
                      ? 'w-14 h-14 bg-blue-500 text-navy shadow-[0_0_30px_rgba(59,130,246,0.5)]'
                      : i < activeStep
                        ? 'w-10 h-10 bg-blue-500/20 text-blue-400 border-2 border-blue-500/40'
                        : 'w-10 h-10 bg-white/5 text-slate border-2 border-white/10'
                  }`}>
                    <span className="font-bold text-xs">{step.number}</span>
                  </div>
                </div>

                {/* Label below node */}
                <div className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium transition-all duration-300 ${
                  i === activeStep ? 'text-blue-400 opacity-100' : 'text-slate/50 opacity-70'
                }`}>
                  {step.title}
                </div>
              </button>
            ))}
          </div>

          {/* Active step detail card — 3D transformed */}
          <div className="mt-16 md:mt-8" style={{ transformStyle: 'preserve-3d' }}>
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`transition-all duration-700 ${i === activeStep ? 'block' : 'hidden'}`}
              >
                <div
                  className="glass-card rounded-2xl p-8 md:p-10 max-w-3xl mx-auto relative overflow-hidden"
                  style={{
                    transform: visible ? 'rotateX(0deg) translateZ(0)' : 'rotateX(10deg) translateZ(-50px)',
                    transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '0 0 40px rgba(59,130,246,0.08), 0 20px 60px rgba(0,0,0,0.3)',
                  }}
                >
                  {/* Top glow line */}
                  <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.5), transparent)' }} />

                  {/* Background number */}
                  <div className="absolute -right-4 -top-4 text-[120px] font-bold text-blue-400/5 leading-none select-none">{step.number}</div>

                  <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 shrink-0" style={{ boxShadow: '0 0 20px rgba(59,130,246,0.15)' }}>
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={step.icon} />
                      </svg>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-blue-400/60 text-sm font-bold">Paso {step.number}</span>
                        <div className="h-px flex-1 bg-gradient-to-r from-blue-500/20 to-transparent" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
                      <p className="text-slate text-base leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile step selector */}
          <div className="flex md:hidden justify-center gap-2 mt-6">
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => { setActiveStep(i); setIsAutoPlaying(false); }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === activeStep ? 'bg-blue-500 w-8' : 'bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>

        <p className="text-center text-slate/50 text-xs mt-6">
          Haz clic en cada paso para ver el detalle
        </p>
      </div>

      <div className="section-divider max-w-4xl mx-auto mt-16" />
    </section>
  );
}
