"use client";

import { useEffect, useRef, useState } from "react";

const articles = [
  {
    slug: "libro-obras-digital-guia-2026",
    image: "/images/magnific_create-a-composition-with_2963212490.png",
    category: "Guia",
    title: "Libro de Obras Digital: Guia Completa 2026",
    excerpt:
      "Todo lo que necesitas saber sobre el LOD: que es, por que es obligatorio, como funciona y como SGO lo implementa para tu empresa.",
  },
  {
    slug: "normativa-mop-libro-obras",
    image: "/images/magnific_create-a-composition-with_2963236854.png",
    category: "Normativa",
    title: "Normativa MOP para Libro de Obras: Lo que Debes Saber",
    excerpt:
      "Requisitos completos del Ministerio de Obras Publicas, sanciones por incumplimiento y como pasar de papel a digital sin riesgos.",
  },
  {
    slug: "sgo-vs-papel-ventajas",
    image: "/images/magnific__create-a-composicion-using-img2-as-reference-but-s__52460.png",
    category: "Comparativa",
    title: "SGO vs Libro de Obras en Papel: 5 Ventajas Clave",
    excerpt:
      "Comparacion directa entre el libro fisico y el digital: ahorro de tiempo, proteccion legal, accesibilidad y mas.",
  },
];

export default function BlogPreview() {
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
    <section id="blog" ref={ref} className="py-16 md:py-20 bg-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-amber text-sm font-semibold uppercase tracking-wider">
            Recursos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-5">
            Noticias y Guias para la Construccion
          </h2>
          <p className="text-slate max-w-2xl mx-auto">
            Informacion actualizada sobre normativa MOP, gestion de obras y digitalizacion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {articles.map((a, i) => (
            <a
              key={i}
              href={`/blog/${a.slug}`}
              className={`glass-card glass-card-hover rounded-2xl overflow-hidden group transition-all duration-700 block ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Thumbnail */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${a.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-transparent" />
                <span className="absolute top-4 left-4 bg-amber/20 text-amber text-xs font-semibold px-3 py-1 rounded-full border border-amber/20">
                  {a.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold mb-3 text-off-white group-hover:text-amber transition-colors leading-snug">
                  {a.title}
                </h3>
                <p className="text-slate text-sm leading-relaxed mb-4">{a.excerpt}</p>
                <span className="text-amber text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Leer mas
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 border border-amber/30 hover:border-amber/60 text-amber font-medium text-sm px-6 py-3 rounded-full transition-all hover:bg-amber/5"
          >
            Ver todos los articulos
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
