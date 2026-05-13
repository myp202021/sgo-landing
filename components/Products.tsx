"use client";

import { useEffect, useRef, useState } from "react";

const products = [
  {
    name: "Libro de Obras Digital (LOD)",
    tag: "Obligatorio MOP",
    desc: "Registro digital de todas las anotaciones, observaciones e instrucciones de obra. Firma electronica avanzada, marcas de tiempo y trazabilidad completa. Cumple con la normativa del Ministerio de Obras Publicas.",
    icon: "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z",
    color: "amber",
  },
  {
    name: "Libro de Comunicaciones Electronico (LCE)",
    tag: "Consultoras / IFO",
    desc: "Canal formal y trazable para todas las comunicaciones entre mandante, contratista e inspeccion fiscal. Oficios, cartas y resoluciones con firma electronica. Notificaciones en tiempo real y registro auditable.",
    icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
    color: "cyan-blue",
  },
  {
    name: "Libro de Consultoria Digital",
    tag: "Trazabilidad contratos",
    desc: "Gestion integral del proceso de consultoria en obras publicas. Control de hitos, entregables y observaciones con flujo de aprobacion digital. Trazabilidad completa de contratos advisory.",
    icon: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605",
    color: "cyan-blue",
  },
  {
    name: "Gestor Documental",
    tag: "Concesiones y construccion",
    desc: "Administracion centralizada de todos los documentos de obra: planos, especificaciones tecnicas, informes y certificados. Versionamiento automatico y acceso controlado por rol. Ideal para concesiones.",
    icon: "M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z",
    color: "amber-light",
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; glow: string }> = {
  amber: {
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    border: "border-blue-500/20",
    glow: "rgba(249, 115, 22, 0.04)",
  },
  "cyan-blue": {
    bg: "bg-cyan-blue/10",
    text: "text-cyan-blue",
    border: "border-cyan-blue/20",
    glow: "rgba(56, 189, 248, 0.04)",
  },
  "amber-light": {
    bg: "bg-blue-500-light/10",
    text: "text-blue-400-light",
    border: "border-blue-500-light/20",
    glow: "rgba(251, 191, 36, 0.04)",
  },
};

export default function Products() {
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
    <section id="productos" ref={ref} className="py-16 md:py-20 bg-navy-light relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/3 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
            Plataforma
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Cuatro herramientas, una sola plataforma
          </h2>
          <p className="text-slate max-w-2xl mx-auto">
            Todo lo que necesitas para la gestion digital de obras publicas y privadas en Chile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {products.map((p, i) => {
            const c = colorMap[p.color];
            return (
              <div
                key={p.name}
                className={`glass-card glass-card-hover rounded-2xl p-7 transition-all duration-700 relative overflow-hidden ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Glow */}
                <div
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl pointer-events-none"
                  style={{ background: c.glow }}
                />

                <div className="flex items-start gap-4 mb-4">
                  <div className={`flex-shrink-0 w-12 h-12 ${c.bg} rounded-xl flex items-center justify-center`}>
                    <svg
                      className={`w-6 h-6 ${c.text}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d={p.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-off-white">{p.name}</h3>
                    <span className={`inline-block text-xs font-semibold ${c.text} ${c.bg} ${c.border} border rounded-full px-3 py-0.5 mt-1`}>
                      {p.tag}
                    </span>
                  </div>
                </div>
                <p className="text-slate text-sm leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="section-divider max-w-4xl mx-auto mt-20" />
    </section>
  );
}
