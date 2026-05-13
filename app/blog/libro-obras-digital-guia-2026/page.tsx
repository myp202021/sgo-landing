import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Libro de Obras Digital: Guia Completa 2026 — SGO",
  description:
    "Guia completa sobre el Libro de Obras Digital (LOD) en Chile: que es, por que es obligatorio segun el MOP, como funciona, beneficios y como implementarlo con SGO.",
};

export default function LibroObrasGuia() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-slate/60 mb-8">
        <Link href="/" className="hover:text-amber transition-colors">Inicio</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-amber transition-colors">Blog</Link>
        <span>/</span>
        <span className="text-amber">Libro de Obras Digital</span>
      </div>

      <span className="inline-block bg-amber/20 text-amber text-xs font-semibold px-3 py-1 rounded-full border border-amber/20 mb-4">
        Guia
      </span>
      <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
        Libro de Obras Digital: Guia Completa 2026
      </h1>
      <p className="text-slate text-sm mb-10">10 mayo 2026 · 12 min de lectura</p>

      {/* Hero image */}
      <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/magnific_create-a-composition-with_2963212490.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
      </div>

      <div className="prose prose-invert max-w-none space-y-6 text-off-white/85 text-[15px] leading-relaxed">
        <h2 className="text-2xl font-bold text-off-white mt-10 mb-4">Que es el Libro de Obras Digital (LOD)?</h2>
        <p>
          El Libro de Obras Digital, conocido como LOD, es la version electronica del tradicional libro de obras fisico utilizado en proyectos de construccion en Chile. Se trata de un registro oficial donde se documentan todas las anotaciones, observaciones, instrucciones y comunicaciones relevantes durante la ejecucion de una obra.
        </p>
        <p>
          A diferencia del libro en papel, el LOD permite registrar informacion en tiempo real, con firma electronica avanzada, marcas de tiempo inalterables y trazabilidad completa. Cada entrada queda asociada a un autor, fecha y hora exacta, creando un historial inmutable que tiene plena validez legal.
        </p>
        <p>
          El LOD es el corazon de la gestion contractual entre los tres actores principales de una obra publica: la empresa constructora, la consultora y la inspeccion fiscal del Ministerio de Obras Publicas (MOP).
        </p>

        <h2 className="text-2xl font-bold text-off-white mt-10 mb-4">Por que es obligatorio en Chile?</h2>
        <p>
          El Ministerio de Obras Publicas de Chile ha establecido la obligatoriedad del Libro de Obras Digital para todas las empresas constructoras que ejecutan obras publicas. Esta normativa busca garantizar la transparencia, trazabilidad y eficiencia en la gestion de proyectos de infraestructura.
        </p>
        <p>
          La exigencia responde a problemas historicos con los libros fisicos: perdida de documentos, ilegibilidad, falta de respaldo legal y demoras en el flujo de informacion entre los actores de la obra. Con el LOD, cada registro queda almacenado de forma segura y accesible para todas las partes autorizadas.
        </p>
        <p>
          Las empresas que no cumplan con esta normativa se exponen a sanciones, multas y complicaciones en la adjudicacion de futuros contratos con el Estado. Por eso, contar con un software como SGO que cumpla todos los requisitos del MOP no es opcional — es una necesidad operativa y legal.
        </p>

        <h2 className="text-2xl font-bold text-off-white mt-10 mb-4">Como funciona el Libro de Obras Digital?</h2>
        <p>
          El funcionamiento del LOD se basa en un flujo de trabajo digital que reemplaza completamente al libro fisico. Estos son los elementos clave:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Registro diario de anotaciones:</strong> cada dia se documentan los avances, observaciones del inspector fiscal, instrucciones al contratista y cualquier incidencia relevante.</li>
          <li><strong>Firma electronica avanzada:</strong> cada entrada se firma digitalmente, cumpliendo con la Ley 19.799 de Chile sobre documentos electronicos y firma electronica.</li>
          <li><strong>Marcas de tiempo:</strong> cada registro incluye una marca de tiempo inalterable que certifica el momento exacto en que se realizo la anotacion.</li>
          <li><strong>Trazabilidad completa:</strong> el sistema mantiene un historial de todas las acciones, incluyendo quien hizo que, cuando y sobre que documento.</li>
          <li><strong>Notificaciones en tiempo real:</strong> cuando se registra una observacion o instruccion, las partes involucradas reciben notificaciones inmediatas.</li>
          <li><strong>Acceso multi-dispositivo:</strong> se puede acceder desde computador, tablet o celular, ideal para registrar informacion directamente desde terreno.</li>
        </ul>

        <h2 className="text-2xl font-bold text-off-white mt-10 mb-4">Beneficios del LOD frente al libro en papel</h2>
        <p>
          La transicion del libro fisico al digital trae beneficios tangibles para todos los actores de la obra:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Eliminacion de papeles:</strong> no mas libros que se pierden, se mojan o se deterioran. Todo queda en la nube.</li>
          <li><strong>Reduccion de tiempos:</strong> las firmas que antes tomaban semanas ahora se completan en segundos con firma electronica.</li>
          <li><strong>Proteccion legal:</strong> cada registro tiene validez legal equivalente al documento fisico, pero con mayor trazabilidad.</li>
          <li><strong>Visibilidad en tiempo real:</strong> la inspeccion fiscal puede ver el estado de la obra sin necesidad de visitas presenciales constantes.</li>
          <li><strong>Auditoria simplificada:</strong> ante cualquier auditoria del MOP, toda la informacion esta organizada y accesible en un solo lugar.</li>
          <li><strong>Ahorro de costos:</strong> se eliminan gastos de impresion, despacho y almacenamiento fisico de documentos.</li>
        </ul>

        <h2 className="text-2xl font-bold text-off-white mt-10 mb-4">Como SGO implementa el Libro de Obras Digital</h2>
        <p>
          SGO es la plataforma lider en Chile para la gestion digital de obras. Con mas de 700 obras conectadas, SGO implementa el LOD cumpliendo todos los requisitos del MOP. El proceso es simple:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Registro de la obra:</strong> se da de alta el proyecto con sus datos contractuales, plazos y actores.</li>
          <li><strong>Configuracion de perfiles:</strong> se asignan roles y permisos para constructora, consultora e IFO.</li>
          <li><strong>Uso diario:</strong> cada actor registra anotaciones, responde observaciones y firma documentos desde su dispositivo.</li>
          <li><strong>Seguimiento:</strong> dashboard en tiempo real con alertas, plazos y reportes exportables.</li>
        </ol>
        <p>
          Ademas del LOD, SGO incluye el Libro de Comunicaciones Electronico (LCE), el Libro de Consultoria Digital y un Gestor Documental completo, todo integrado en una sola plataforma.
        </p>

        <h2 className="text-2xl font-bold text-off-white mt-10 mb-4">Requisitos tecnicos del LOD segun el MOP</h2>
        <p>
          Para cumplir con la normativa del MOP, un sistema de Libro de Obras Digital debe contar con:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Firma electronica avanzada conforme a la Ley 19.799</li>
          <li>Marcas de tiempo certificadas e inalterables</li>
          <li>Almacenamiento seguro con respaldo en la nube</li>
          <li>Control de acceso basado en roles</li>
          <li>Trazabilidad de todas las acciones realizadas</li>
          <li>Capacidad de exportacion de registros para auditoria</li>
          <li>Disponibilidad 24/7 desde multiples dispositivos</li>
        </ul>
        <p>
          SGO cumple con cada uno de estos requisitos, lo que lo convierte en la opcion preferida de constructoras, consultoras e inspectores fiscales en Chile.
        </p>

        <h2 className="text-2xl font-bold text-off-white mt-10 mb-4">Preguntas frecuentes sobre el LOD</h2>
        <p>
          <strong>Puedo usar el LOD para obras privadas?</strong> Si. Aunque la obligatoriedad aplica a obras publicas, muchas empresas privadas adoptan el LOD para profesionalizar su gestion de obra y contar con respaldo legal.
        </p>
        <p>
          <strong>Que pasa si pierdo acceso a internet en terreno?</strong> SGO permite trabajar con conexion intermitente. Las anotaciones se sincronizan automaticamente cuando se restablece la conexion.
        </p>
        <p>
          <strong>Cuanto cuesta implementar SGO?</strong> El costo depende del tamano y cantidad de obras. Contacta al equipo de SGO para una cotizacion personalizada.
        </p>
      </div>

      {/* CTA */}
      <div className="glass-card rounded-2xl p-8 mt-12 text-center">
        <h3 className="text-xl font-bold mb-3">Listo para digitalizar tu Libro de Obras?</h3>
        <p className="text-slate text-sm mb-6 max-w-md mx-auto">
          Mas de 700 obras ya confian en SGO. Solicita una demostracion gratuita.
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
          <Link href="/blog/normativa-mop-libro-obras" className="glass-card glass-card-hover rounded-xl p-5 block group">
            <span className="text-xs text-amber">Normativa</span>
            <h4 className="font-bold text-sm mt-1 group-hover:text-amber transition-colors">Normativa MOP para Libro de Obras: Lo que Debes Saber</h4>
          </Link>
          <Link href="/blog/sgo-vs-papel-ventajas" className="glass-card glass-card-hover rounded-xl p-5 block group">
            <span className="text-xs text-amber">Comparativa</span>
            <h4 className="font-bold text-sm mt-1 group-hover:text-amber transition-colors">SGO vs Libro de Obras en Papel: 5 Ventajas Clave</h4>
          </Link>
        </div>
      </div>
    </article>
  );
}
