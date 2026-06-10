"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const pains = [
  {
    icon: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z",
    title: "Riesgo de multas",
    desc: "Incumplimientos normativos que se traducen en sanciones y retrasos costosos.",
  },
  {
    icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
    title: "Acuerdos sin respaldo",
    desc: "Decisiones criticas que no quedan registradas y son dificiles de demostrar.",
  },
  {
    icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
    title: "Informacion dispersa",
    desc: "Documentos en correos, WhatsApp y carpetas sin trazabilidad ni control de versiones.",
  },
  {
    icon: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Conflictos sin evidencia",
    desc: "Disputas contractuales donde no existe registro formal de lo acordado.",
  },
];

export default function PainPoints() {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <div
            className={`relative rounded-2xl overflow-hidden aspect-[4/3] transition-all duration-700 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <Image
              src="/images/magnific__crea-una-composicin-con-un-ingeniero-con-casco-bla__52329.png"
              alt="Ingeniero revisando documentos de obra"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/60 to-transparent" />
          </div>

          {/* Right: Content */}
          <div>
            <span className="text-teal text-sm font-semibold uppercase tracking-wider">
              El problema
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-10 leading-tight">
              Que ocurre cuando las comunicaciones{" "}
              <span className="text-teal">no tienen respaldo?</span>
            </h2>

            <div className="space-y-5">
              {pains.map((p, i) => (
                <div
                  key={p.title}
                  className={`flex gap-4 p-4 rounded-xl card-dark transition-all duration-500 ${
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${200 + i * 120}ms` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-red-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d={p.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-off-white mb-1">{p.title}</h3>
                    <p className="text-steel text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
