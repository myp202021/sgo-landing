import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <Image
              src="/images/sgo-icon.png"
              alt="SGO"
              width={28}
              height={28}
              className="rounded brightness-0 invert"
            />
            <span className="font-bold text-white/60 text-sm">
              SGO — Sistema de Gestion de Obras
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-white/30">
            <span>Sucre 2680, Nunoa, Santiago</span>
            <a href="mailto:contacto@sgo.cl" className="hover:text-amber transition-colors">
              contacto@sgo.cl
            </a>
            <a href="tel:+56226848887" className="hover:text-amber transition-colors">
              +56 2 268 48 887
            </a>
            <a
              href="https://beta.sgo.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber transition-colors"
            >
              beta.sgo.cl
            </a>
          </div>
        </div>

        <div className="text-center mt-8 text-[11px] text-white/15">
          Desarrollado por{" "}
          <a
            href="https://www.mulleryperez.cl"
            className="text-white/25 hover:text-amber/40 transition-colors"
          >
            Muller y Perez
          </a>
        </div>
      </div>
    </footer>
  );
}
