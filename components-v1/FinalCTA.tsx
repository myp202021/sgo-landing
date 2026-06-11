"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function FinalCTA() {
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
    <section
      id="contacto"
      ref={ref}
      className="py-20 md:py-28 relative overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/magnific__create-a-composition-with-a-miner-boss-with-white-__52334.png"
          alt=""
          fill
          className="object-cover opacity-[0.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy-deep/95 to-navy-deep" />
      </div>

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal/4 rounded-full blur-[150px] pointer-events-none" />

      <div
        className={`max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10 text-center transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Protege hoy la gestion{" "}
          <span className="text-teal">de tus contratos.</span>
        </h2>
        <p className="text-white text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Implementa una plataforma que fortalece la trazabilidad, reduce
          riesgos y entrega respaldo juridico a cada comunicacion.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="https://beta.sgo.cl"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto cta-primary text-xl px-16 py-5 rounded-xl"
          >
            Solicitar Demo
          </a>
          <a
            href="tel:+56226848887"
            className="w-full sm:w-auto cta-outline text-xl px-16 py-5 rounded-xl flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +56 2 268 48 887
          </a>
        </div>

        {/* Contact info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-white/30 uppercase text-xs tracking-wider mb-2 font-semibold">
              Oficina
            </div>
            <div className="text-white/90 text-sm">Sucre 2680, Nunoa, Santiago</div>
          </div>
          <div className="text-center">
            <div className="text-white/30 uppercase text-xs tracking-wider mb-2 font-semibold">
              Soporte tecnico
            </div>
            <div className="text-white/90 text-sm">+56 2 292 98 180</div>
            <div className="text-white/90 text-sm">soporte@sgo.cl</div>
          </div>
          <div className="text-center">
            <div className="text-white/30 uppercase text-xs tracking-wider mb-2 font-semibold">
              Correo
            </div>
            <a
              href="mailto:contacto@sgo.cl"
              className="text-teal hover:text-teal-light transition-colors text-sm"
            >
              contacto@sgo.cl
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
