import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SGO vs Libro de Obras en Papel: 5 Ventajas Clave — SGO",
  description:
    "Comparacion directa entre el libro de obras fisico y el digital con SGO: ahorro de tiempo, proteccion legal, accesibilidad, trazabilidad y cumplimiento normativo.",
};

export default function SGOvsPapel() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-slate/60 mb-8">
        <Link href="/" className="hover:text-amber transition-colors">Inicio</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-amber transition-colors">Blog</Link>
        <span>/</span>
        <span className="text-amber">SGO vs Papel</span>
      </div>

      <span className="inline-block bg-amber/20 text-amber text-xs font-semibold px-3 py-1 rounded-full border border-amber/20 mb-4">
        Comparativa
      </span>
      <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
        SGO vs Libro de Obras en Papel: 5 Ventajas Clave
      </h1>
      <p className="text-slate text-sm mb-10">5 mayo 2026 · 10 min de lectura</p>

      {/* Hero image */}
      <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/magnific__create-a-composicion-using-img2-as-reference-but-s__52460.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
      </div>

      <div className="prose prose-invert max-w-none space-y-6 text-off-white/85 text-[15px] leading-relaxed">
        <p>
          Si trabajas en obras publicas en Chile, conoces bien el libro de obras. Ese cuaderno — a veces empastado, a veces anillado — que lleva el registro de todo lo que pasa en la obra. Las anotaciones del inspector, las respuestas del contratista, las observaciones, las instrucciones.
        </p>
        <p>
          El problema es que ese libro fisico tiene limitaciones serias. Y en un mundo donde el MOP ya exige la version digital, seguir con papel no solo es ineficiente — es un riesgo legal y operativo.
        </p>
        <p>
          En este articulo comparamos el libro de obras en papel con SGO, la plataforma digital lider en Chile con mas de 700 obras conectadas. Estas son las 5 ventajas clave.
        </p>

        <h2 className="text-2xl font-bold text-off-white mt-10 mb-4">1. Proteccion legal real vs. papel vulnerable</h2>
        <p>
          <strong>Con papel:</strong> el libro fisico puede perderse, danarse, mojarse o simplemente ser ilegible. En caso de una disputa contractual, la ausencia de un registro claro debilita tu posicion. Las firmas manuscritas pueden ser cuestionadas y no hay forma de verificar con certeza cuando se realizo cada anotacion.
        </p>
        <p>
          <strong>Con SGO:</strong> cada anotacion lleva firma electronica avanzada (Ley 19.799) y una marca de tiempo inalterable. El registro es inmutable — nadie puede modificar, eliminar o antedatar una entrada. En caso de controversia, tienes un respaldo documental irrefutable.
        </p>
        <p>
          Esta diferencia es critica. En obras publicas, los conflictos contractuales son frecuentes y el libro de obras es la evidencia principal. Un libro digital con trazabilidad completa es una ventaja legal que el papel simplemente no puede ofrecer.
        </p>

        <h2 className="text-2xl font-bold text-off-white mt-10 mb-4">2. Acceso 24/7 desde cualquier lugar vs. un solo libro en obra</h2>
        <p>
          <strong>Con papel:</strong> el libro fisico esta en la obra. Si necesitas consultar una anotacion de hace tres meses, tienes que ir fisicamente a buscarlo. Si la obra esta en regiones remotas, esto puede significar horas de viaje. Y si alguien ya se llevo el libro para firmar algo, tienes que esperar.
        </p>
        <p>
          <strong>Con SGO:</strong> accedes a toda la informacion desde tu computador, tablet o celular. Desde la oficina, desde terreno, desde cualquier lugar con internet. Las 24 horas del dia, los 7 dias de la semana. Puedes consultar el historial completo de cualquier obra en segundos.
        </p>
        <p>
          Para equipos que manejan multiples obras simultaneamente, esta accesibilidad es transformadora. Ya no dependes de la ubicacion fisica del libro — toda la informacion esta a un clic de distancia.
        </p>

        <h2 className="text-2xl font-bold text-off-white mt-10 mb-4">3. Firmas en segundos vs. semanas esperando</h2>
        <p>
          <strong>Con papel:</strong> una observacion del inspector fiscal requiere que el contratista vaya a la obra, lea la anotacion, redacte su respuesta, la firme y espere a que el inspector regrese para tomar conocimiento. Este ciclo puede tardar dias o semanas, especialmente si los actores no coinciden en terreno.
        </p>
        <p>
          <strong>Con SGO:</strong> el inspector registra su observacion y el contratista recibe una notificacion inmediata. Puede leer, responder y firmar digitalmente desde cualquier dispositivo. El ciclo completo puede completarse en minutos en lugar de semanas.
        </p>
        <p>
          Esta aceleracion del flujo de comunicacion tiene un impacto directo en los plazos de obra. Menos demoras en firmas significa menos atrasos, menos conflictos y mejor cumplimiento de los compromisos contractuales.
        </p>

        <h2 className="text-2xl font-bold text-off-white mt-10 mb-4">4. Trazabilidad completa vs. registros incompletos</h2>
        <p>
          <strong>Con papel:</strong> es comun que falten paginas, que las fechas no coincidan, que una anotacion no tenga firma o que simplemente no se encuentre el registro de un evento importante. El libro fisico depende de la disciplina de las personas y no tiene mecanismos automaticos de verificacion.
        </p>
        <p>
          <strong>Con SGO:</strong> el sistema registra automaticamente quien hizo que, cuando y sobre que documento. No se puede saltar un paso, antedatar una entrada o modificar un registro existente. El historial de auditoria es completo e inmutable.
        </p>
        <p>
          Esta trazabilidad es especialmente valiosa durante auditorias del MOP. Cuando un auditor solicita el historial de una obra, con SGO puedes entregarlo en minutos — completo, ordenado y verificable. Con papel, ese mismo proceso puede tomar semanas de busqueda y organizacion.
        </p>

        <h2 className="text-2xl font-bold text-off-white mt-10 mb-4">5. Cumplimiento normativo garantizado vs. riesgo constante</h2>
        <p>
          <strong>Con papel:</strong> cumplir con todos los requisitos del MOP depende del cuidado manual de cada persona involucrada. Un olvido, una firma faltante, una fecha mal escrita — cualquier descuido puede generar un incumplimiento normativo con consecuencias reales: multas, observaciones en la evaluacion contractual y dificultades en futuras licitaciones.
        </p>
        <p>
          <strong>Con SGO:</strong> el sistema esta disenado para cumplir automaticamente con todos los requisitos del MOP. Las firmas son obligatorias para avanzar, las marcas de tiempo son automaticas, los roles estan predefinidos. El cumplimiento no depende de la memoria o la disciplina de nadie — esta integrado en el flujo de trabajo.
        </p>
        <p>
          Para empresas que participan regularmente en licitaciones publicas, este cumplimiento automatizado es una ventaja competitiva. Demuestra profesionalismo, transparencia y compromiso con las normas del MOP.
        </p>

        <h2 className="text-2xl font-bold text-off-white mt-10 mb-4">Tabla comparativa: papel vs. SGO</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 pr-4 text-off-white font-bold">Caracteristica</th>
                <th className="text-left py-3 pr-4 text-slate">Libro en Papel</th>
                <th className="text-left py-3 text-amber">SGO Digital</th>
              </tr>
            </thead>
            <tbody className="text-slate">
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4 text-off-white/80">Validez legal</td>
                <td className="py-3 pr-4">Vulnerable a perdida</td>
                <td className="py-3 text-amber/80">Firma electronica + timestamp</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4 text-off-white/80">Accesibilidad</td>
                <td className="py-3 pr-4">Solo en obra</td>
                <td className="py-3 text-amber/80">24/7 multi-dispositivo</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4 text-off-white/80">Tiempo de firma</td>
                <td className="py-3 pr-4">Dias o semanas</td>
                <td className="py-3 text-amber/80">Segundos</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4 text-off-white/80">Trazabilidad</td>
                <td className="py-3 pr-4">Manual, incompleta</td>
                <td className="py-3 text-amber/80">Automatica, inmutable</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4 text-off-white/80">Cumplimiento MOP</td>
                <td className="py-3 pr-4">Depende de las personas</td>
                <td className="py-3 text-amber/80">Integrado en el sistema</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 text-off-white/80">Costo operativo</td>
                <td className="py-3 pr-4">Impresion + almacenamiento</td>
                <td className="py-3 text-amber/80">Digital, sin papel</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-off-white mt-10 mb-4">Conclusion</h2>
        <p>
          La transicion del libro de obras en papel al formato digital no es solo una mejora tecnologica — es una necesidad legal, operativa y competitiva. El MOP ya exige el formato digital, y las empresas que se anticipan ganan en eficiencia, proteccion legal y reputacion.
        </p>
        <p>
          SGO, con mas de 700 obras conectadas y cumplimiento normativo completo, es la herramienta que constructoras, consultoras e inspectores fiscales eligen en Chile. Si todavia operas con papel, el momento de dar el paso es ahora.
        </p>
      </div>

      {/* CTA */}
      <div className="glass-card rounded-2xl p-8 mt-12 text-center">
        <h3 className="text-xl font-bold mb-3">Deja el papel atras</h3>
        <p className="text-slate text-sm mb-6 max-w-md mx-auto">
          Descubre como SGO simplifica tu gestion de obras. Demo gratuita.
        </p>
        <a
          href="https://beta.sgo.cl"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block cta-glow text-white font-bold px-8 py-3 rounded-full"
        >
          Solicitar Demo
        </a>
      </div>

      {/* Related */}
      <div className="mt-16">
        <h3 className="text-lg font-bold mb-6">Articulos relacionados</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/blog/libro-obras-digital-guia-2026" className="glass-card glass-card-hover rounded-xl p-5 block group">
            <span className="text-xs text-amber">Guia</span>
            <h4 className="font-bold text-sm mt-1 group-hover:text-amber transition-colors">Libro de Obras Digital: Guia Completa 2026</h4>
          </Link>
          <Link href="/blog/normativa-mop-libro-obras" className="glass-card glass-card-hover rounded-xl p-5 block group">
            <span className="text-xs text-amber">Normativa</span>
            <h4 className="font-bold text-sm mt-1 group-hover:text-amber transition-colors">Normativa MOP para Libro de Obras: Lo que Debes Saber</h4>
          </Link>
        </div>
      </div>
    </article>
  );
}
