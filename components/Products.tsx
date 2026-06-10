"use client";

import { useEffect, useRef, useState } from "react";

const products = [
  {
    name: "Libro de Obras Digital (LOD)",
    tag: "Obligatorio MOP",
    desc: "Registro digital de anotaciones, observaciones e instrucciones de obra. Firma electronica avanzada y trazabilidad completa segun normativa MOP.",
    icon: "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z",
    featured: true,
  },
  {
    name: "Libro de Comunicaciones (LCE)",
    tag: "Comunicaciones formales",
    desc: "Canal trazable para oficios, cartas y resoluciones entre mandante, contratista e inspeccion fiscal. Notificaciones en tiempo real.",
    icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
    featured: false,
  },
  {
    name: "Libro de Consultoria Digital",
    tag: "Trazabilidad contratos",
    desc: "Gestion integral de consultoria en obras publicas. Control de hitos, entregables y observaciones con flujo de aprobacion digital.",
    icon: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605",
    featured: false,
  },
  {
    name: "Firma Electronica Avanzada",
    tag: "Validez juridica",
    desc: "Cumplimiento con la Ley 19.799 de Chile. Autenticidad e integridad en todas las comunicaciones y documentos.",
    icon: "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z",
    featured: false,
  },
  {
    name: "Carpeta Digital",
    tag: "Gestion documental",
    desc: "Centralizacion de todos los documentos con versionamiento automatico y acceso controlado por rol.",
    icon: "M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z",
    featured: false,
  },
];

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
    <section id="servicios" ref={ref} className="section-gradient py-20 md:py-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-teal text-sm font-semibold uppercase tracking-wider">
            Plataforma
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Control y respaldo legal en un ecosistema
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Toda la informacion centralizada, trazable y protegida.
          </p>
        </div>

        {/* Featured product */}
        {products.filter(p => p.featured).map((p, i) => (
          <div
            key={p.name}
            className={`mb-8 p-8 md:p-10 rounded-2xl relative overflow-hidden transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{
              background: "linear-gradient(135deg, rgba(48,152,168,0.12) 0%, rgba(32,48,56,0.6) 100%)",
              border: "1px solid rgba(48,152,168,0.2)",
            }}
          >
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-teal/8 rounded-full blur-[80px] pointer-events-none" />
            <div className="flex flex-col md:flex-row md:items-center gap-6 relative z-10">
              <div className="flex-shrink-0 w-14 h-14 bg-teal/15 rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={p.icon} />
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-xl md:text-2xl font-bold text-white">{p.name}</h3>
                  <span className="text-xs font-bold text-teal bg-teal/10 border border-teal/20 rounded-full px-3 py-1 uppercase tracking-wider">
                    {p.tag}
                  </span>
                </div>
                <p className="text-steel text-base leading-relaxed max-w-2xl">{p.desc}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Other products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {products.filter(p => !p.featured).map((p, i) => (
            <div
              key={p.name}
              className={`card-dark rounded-2xl p-7 transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-3">
                <div className="flex-shrink-0 w-11 h-11 bg-teal/10 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={p.icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-off-white">{p.name}</h3>
                  <span className="inline-block text-xs font-semibold text-teal/80 mt-0.5">
                    {p.tag}
                  </span>
                </div>
              </div>
              <p className="text-steel text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
