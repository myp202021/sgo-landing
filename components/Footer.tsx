import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 section-navy py-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Image
            src="/images/sgo-logo-blanco.png"
            alt="SGO.CL"
            width={120}
            height={30}
            className="h-7 w-auto opacity-60"
          />

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/30">
            <span>Sucre 2680, Nunoa, Santiago</span>
            <a href="mailto:contacto@sgo.cl" className="hover:text-white/50 transition-colors">
              contacto@sgo.cl
            </a>
            <a href="tel:+56226848887" className="hover:text-white/50 transition-colors">
              +56 2 268 48 887
            </a>
          </div>
        </div>

        <div className="text-center mt-6 text-[11px] text-white/20">
          Desarrollado por{" "}
          <a
            href="https://www.mulleryperez.cl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/25 hover:text-white/40 transition-colors"
          >
            Muller y Perez
          </a>
        </div>
      </div>
    </footer>
  );
}
