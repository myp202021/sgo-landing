"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Es obligatorio el Libro de Obras Digital en Chile?",
    a: "Si. El Ministerio de Obras Publicas (MOP) de Chile exige el uso del Libro de Obras Digital para las empresas constructoras que ejecutan obras publicas. SGO cumple con todos los requisitos normativos establecidos, incluyendo firma electronica avanzada, marcas de tiempo y trazabilidad completa.",
  },
  {
    q: "Que perfiles pueden usar SGO?",
    a: "SGO esta disenado para tres perfiles principales: empresas constructoras que ejecutan obras publicas y privadas, consultoras que supervisan y asesoran proyectos de construccion, e inspectores fiscales del MOP (IFO) que requieren trazabilidad y control documental. Cada perfil tiene su vista y permisos especificos.",
  },
  {
    q: "SGO tiene firma electronica?",
    a: "Si. SGO utiliza firma electronica avanzada que cumple con la Ley 19.799 de Chile. Cada anotacion, comunicacion y documento queda firmado digitalmente con validez legal equivalente a la firma manuscrita.",
  },
  {
    q: "Se puede usar desde terreno?",
    a: "Si. SGO es una plataforma web responsive que funciona desde cualquier dispositivo con conexion a internet: computador, tablet o celular. Ideal para registrar anotaciones directamente desde la obra, disponible 24/7.",
  },
  {
    q: "Cuanto toma implementar SGO en una obra?",
    a: "La implementacion es rapida: se configura la obra en la plataforma, se asignan los roles (constructora, consultora, IFO) y cada usuario accede desde su navegador. El equipo de soporte de SGO acompana todo el proceso. En la mayoria de los casos, la obra queda operativa en menos de una semana.",
  },
  {
    q: "Como se garantiza la trazabilidad?",
    a: "Cada accion en SGO genera un registro inmutable con fecha, hora, autor y contenido. Las marcas de tiempo son inalterables y el sistema mantiene un historial completo de todas las modificaciones. Es equivalente a un sistema de cadena de bloques aplicado a la gestion de obras.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 md:py-20 bg-navy-light relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber/3 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <span className="text-amber text-sm font-semibold uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-slate max-w-2xl mx-auto">
            Todo lo que necesitas saber sobre SGO y el Libro de Obras Digital.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="glass-card rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-amber/3 transition-colors"
                >
                  <span className="text-[15px] font-bold text-off-white pr-4">
                    {f.q}
                  </span>
                  <svg
                    className={`w-5 h-5 text-amber flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </button>
                <div className={`faq-content ${isOpen ? "open" : ""}`}>
                  <div>
                    <p className="px-6 pb-5 text-slate text-sm leading-relaxed">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
