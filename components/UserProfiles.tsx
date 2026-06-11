"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const profiles = [
  {
    name: "Empresas constructoras",
    icon: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21",
  },
  {
    name: "Inmobiliarias",
    icon: "M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819",
  },
  {
    name: "Mandantes privados",
    icon: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z",
  },
  {
    name: "Empresas de ingenieria",
    icon: "M11.42 15.17l-5.1-5.1m0 0L3 12.61m3.32-2.54l1.41-1.41a2 2 0 012.83 0l5.1 5.1a2 2 0 010 2.83l-1.41 1.41m-3.54-3.54l5.1 5.1m0 0L21 17.39m-3.32 2.54l-1.41 1.41a2 2 0 01-2.83 0l-5.1-5.1a2 2 0 010-2.83l1.41-1.41",
  },
  {
    name: "Consultoras",
    icon: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5",
  },
  {
    name: "Operadores de infraestructura",
    icon: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418",
  },
  {
    name: "Concesionarias",
    icon: "M9 6.75V15m0-8.25a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 0v6m3-8.25a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3V15m0 0a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 0V18m3-10.5a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 0v3.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    name: "Equipos legales",
    icon: "M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z",
  },
];

export default function UserProfiles() {
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
    <section ref={ref} className="relative overflow-hidden">
      {/* Full-width image band */}
      <div className="relative h-[300px] md:h-[350px]">
        <Image
          src="/images/magnific_a-diverse-group-of-engine_Piq5SHb42C.png"
          alt="Equipo diverso de profesionales de construccion"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(26,40,48,0.4) 0%, rgba(32,48,56,0.7) 100%)" }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-5">
            <span className="text-teal text-sm font-semibold uppercase tracking-wider">
              Para quienes
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-white">
              Quienes deberian usar SGO?
            </h2>
            <p className="text-white max-w-xl mx-auto">
              Cualquier organización que necesite respaldar formalmente sus comunicaciones y proteger sus contratos.
            </p>
          </div>
        </div>
      </div>

      {/* Profiles grid overlapping the image */}
      <div className="section-navy py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 -mt-20 md:-mt-16 relative z-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {profiles.map((p, i) => (
              <div
                key={p.name}
                className={`group text-center py-6 px-4 rounded-xl transition-all duration-500 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{
                  transitionDelay: `${i * 80}ms`,
                  background: "rgba(32, 48, 56, 0.8)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-teal/10 group-hover:bg-teal/20 flex items-center justify-center transition-colors">
                  <svg
                    className="w-5 h-5 text-teal/80 group-hover:text-teal transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={p.icon} />
                  </svg>
                </div>
                <p className="text-white text-xs font-semibold">{p.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
