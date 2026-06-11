import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <Image
              src="/images/sgo-logo-blanco.png"
              alt="SGO.CL"
              width={120}
              height={30}
              className="h-7 w-auto opacity-60"
            />
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-white/50">
            <span>Sucre 2680, Nunoa, Santiago</span>
            <a href="mailto:contacto@sgo.cl" className="hover:text-blue-300 transition-colors">
              contacto@sgo.cl
            </a>
            <a href="tel:+56226848887" className="hover:text-blue-300 transition-colors">
              +56 2 268 48 887
            </a>
            <a
              href="https://beta.sgo.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-colors"
            >
              beta.sgo.cl
            </a>
            <a
              href="/v1/politica-de-privacidad"
              className="hover:text-blue-300 transition-colors"
            >
              Política de Privacidad
            </a>
          </div>
        </div>

        <div className="text-center mt-8 text-[11px] text-white/30">
          Desarrollado por{" "}
          <a
            href="https://www.mulleryperez.cl"
            className="text-white/40 hover:text-blue-300/40 transition-colors"
          >
            Muller y Perez
          </a>
        </div>
      </div>
    </footer>
  );
}
