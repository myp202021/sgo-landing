import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SGO — Protege tus contratos con evidencia digital",
  description: "Plataforma de gestión documental y comunicaciones con respaldo legal. Reduce riesgos y fortalece la administración de tus contratos.",
};

export default function LandingV2() {
  return (
    <div className="min-h-screen" style={{ background: "#203038" }}>
      {/* Navbar simple */}
      <nav className="fixed top-0 left-0 right-0 z-50" style={{ background: "rgba(32,48,56,0.9)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <Image src="/images/sgo-logo-blanco.png" alt="SGO.CL" width={140} height={35} className="h-8 w-auto" />
          <a href="tel:+56226848887" className="text-white/60 text-sm hover:text-white transition-colors flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            +56 2 268 48 887
          </a>
        </div>
      </nav>

      {/* Hero: texto + formulario */}
      <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
        {/* Background image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/magnific__create-a-composition-with-a-team-of-construction-w__52336.png')", opacity: 0.15 }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(32,48,56,0.95) 0%, rgba(40,80,104,0.85) 50%, rgba(32,48,56,0.95) 100%)" }} />
        </div>

        {/* Glow */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full blur-[120px] pointer-events-none" style={{ background: "rgba(48,152,168,0.1)" }} />

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Texto */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 text-sm font-medium" style={{ background: "rgba(48,152,168,0.1)", border: "1px solid rgba(48,152,168,0.2)", color: "#3098A8" }}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                +400 proyectos conectados
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.08] mb-6 tracking-tight text-white">
                Blinda la gesti&oacute;n de tus contratos{" "}
                <span style={{ color: "#3098A8" }}>desde el primer d&iacute;a.</span>
              </h1>

              <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-lg">
                Evita p&eacute;rdidas de informaci&oacute;n, reduce riesgos legales y mant&eacute;n todas las comunicaciones respaldadas en una plataforma digital con plena trazabilidad y validez jur&iacute;dica.
              </p>

              <p className="text-sm text-white/40 leading-relaxed max-w-lg">
                Somos una plataforma de gesti&oacute;n documental y comunicaciones con respaldo legal que protege a las organizaciones, reduce riesgos y fortalece la administraci&oacute;n de sus contratos.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-6 mt-10">
                <div className="flex items-center gap-2 text-sm text-white/50">
                  <svg className="w-5 h-5" style={{ color: "#3098A8" }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  Firma electr&oacute;nica avanzada
                </div>
                <div className="flex items-center gap-2 text-sm text-white/50">
                  <svg className="w-5 h-5" style={{ color: "#3098A8" }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  Trazabilidad completa
                </div>
                <div className="flex items-center gap-2 text-sm text-white/50">
                  <svg className="w-5 h-5" style={{ color: "#3098A8" }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  Respaldo jur&iacute;dico
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div className="rounded-2xl p-8 relative" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(12px)" }}>
              <h2 className="text-xl font-bold text-white mb-2">Solicita una demo</h2>
              <p className="text-sm text-white/50 mb-6">Un especialista te contactar&aacute; en menos de 24 horas.</p>

              <form action="https://formsubmit.co/contacto@sgo.cl" method="POST">
                <input type="hidden" name="_subject" value="Nueva solicitud demo — SGO Landing v2" />
                <input type="hidden" name="_cc" value="contacto@mulleryperez.cl" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="https://sgo-landing-pi.vercel.app/v2?enviado=true" />

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-white/50 mb-1 uppercase tracking-wider">Nombre *</label>
                    <input type="text" name="nombre" required placeholder="Tu nombre completo" className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none transition-all focus:ring-2" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white/50 mb-1 uppercase tracking-wider">Correo *</label>
                    <input type="email" name="email" required placeholder="tu@empresa.com" className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none transition-all" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }} />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-white/50 mb-1 uppercase tracking-wider">Tel&eacute;fono *</label>
                      <input type="tel" name="telefono" required placeholder="+56 9..." className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-white/50 mb-1 uppercase tracking-wider">Empresa *</label>
                      <input type="text" name="empresa" required placeholder="Tu empresa" className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white/50 mb-1 uppercase tracking-wider">N&deg; de colaboradores</label>
                    <select name="colaboradores" className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                      <option value="">Selecciona</option>
                      <option value="1-50">1 a 50</option>
                      <option value="51-200">51 a 200</option>
                      <option value="201-500">201 a 500</option>
                      <option value="500+">M&aacute;s de 500</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full py-4 rounded-xl text-white font-bold text-base transition-all hover:opacity-90" style={{ background: "#3098A8", boxShadow: "0 8px 24px rgba(48,152,168,0.3)" }}>
                    Solicitar demo gratuita &rarr;
                  </button>
                </div>
              </form>

              <p className="text-[10px] text-white/20 mt-4 text-center">Tus datos est&aacute;n protegidos. No compartimos informaci&oacute;n con terceros.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer mínimo */}
      <footer className="py-8 text-center text-xs text-white/20" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <p>SGO.CL — Sistema Gesti&oacute;n de Obras &middot; Sucre 2680, &Ntilde;u&ntilde;oa, Santiago &middot; contacto@sgo.cl &middot; +56 2 268 48 887</p>
      </footer>
    </div>
  );
}
