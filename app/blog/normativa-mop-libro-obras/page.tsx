import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Normativa MOP para Libro de Obras: Lo que Debes Saber — SGO",
  description:
    "Requisitos completos del Ministerio de Obras Publicas de Chile para el Libro de Obras Digital, sanciones por incumplimiento, plazos y como cumplir con la normativa.",
};

export default function NormativaMOP() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-slate/60 mb-8">
        <Link href="/" className="hover:text-amber transition-colors">Inicio</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-amber transition-colors">Blog</Link>
        <span>/</span>
        <span className="text-amber">Normativa MOP</span>
      </div>

      <span className="inline-block bg-amber/20 text-amber text-xs font-semibold px-3 py-1 rounded-full border border-amber/20 mb-4">
        Normativa
      </span>
      <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
        Normativa MOP para Libro de Obras: Lo que Debes Saber
      </h1>
      <p className="text-slate text-sm mb-10">8 mayo 2026 · 14 min de lectura</p>

      {/* Hero image */}
      <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/magnific_create-a-composition-with_2963236854.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
      </div>

      <div className="prose prose-invert max-w-none space-y-6 text-off-white/85 text-[15px] leading-relaxed">
        <h2 className="text-2xl font-bold text-off-white mt-10 mb-4">El marco legal del Libro de Obras en Chile</h2>
        <p>
          El Libro de Obras es un instrumento fundamental en la ejecucion de obras publicas en Chile. Regulado por el Ministerio de Obras Publicas (MOP), este documento oficial registra toda la actividad contractual entre los actores de una obra: la empresa constructora, la consultora y la inspeccion fiscal.
        </p>
        <p>
          Historicamente, el libro de obras fue un cuaderno fisico que se mantenia en la obra y era firmado por los representantes de cada parte. Sin embargo, los problemas asociados a este formato — perdida, deterioro, ilegibilidad, demoras en firmas — llevaron al MOP a impulsar la digitalizacion obligatoria.
        </p>
        <p>
          La normativa actual establece que las empresas que ejecutan obras publicas deben utilizar un sistema digital que cumpla con requisitos especificos de seguridad, trazabilidad y firma electronica. El incumplimiento puede resultar en sanciones administrativas y dificultades para participar en futuras licitaciones.
        </p>

        <h2 className="text-2xl font-bold text-off-white mt-10 mb-4">Requisitos del MOP para el Libro de Obras Digital</h2>
        <p>
          El Ministerio de Obras Publicas ha definido un conjunto de requisitos que todo sistema de Libro de Obras Digital debe cumplir:
        </p>

        <h3 className="text-xl font-bold text-off-white mt-8 mb-3">1. Firma electronica avanzada</h3>
        <p>
          El sistema debe utilizar firma electronica avanzada conforme a la Ley 19.799 sobre documentos electronicos y firma electronica. Esto garantiza la identidad del firmante, la integridad del documento y su no repudio. Cada anotacion en el libro de obras debe estar firmada digitalmente por el responsable.
        </p>

        <h3 className="text-xl font-bold text-off-white mt-8 mb-3">2. Marcas de tiempo certificadas</h3>
        <p>
          Cada registro debe incluir una marca de tiempo (timestamp) que certifique el momento exacto en que se realizo la anotacion. Estas marcas deben ser inalterables y verificables, proporcionando certeza sobre la secuencia cronologica de los eventos documentados.
        </p>

        <h3 className="text-xl font-bold text-off-white mt-8 mb-3">3. Trazabilidad completa</h3>
        <p>
          El sistema debe mantener un registro de auditoria (audit trail) que documente todas las acciones realizadas: quien ingreso una anotacion, quien la firmo, cuando se modifico un documento, quien accedio a la informacion. Esta trazabilidad es fundamental para auditorias y resoluciones de controversias.
        </p>

        <h3 className="text-xl font-bold text-off-white mt-8 mb-3">4. Control de acceso basado en roles</h3>
        <p>
          El sistema debe implementar un esquema de permisos que distinga entre los diferentes actores de la obra: constructora, consultora e inspeccion fiscal. Cada perfil debe tener acceso solo a las funcionalidades que le corresponden, evitando modificaciones no autorizadas.
        </p>

        <h3 className="text-xl font-bold text-off-white mt-8 mb-3">5. Almacenamiento seguro</h3>
        <p>
          Los datos deben almacenarse de forma segura, con encriptacion, respaldos automaticos y redundancia. El sistema debe garantizar la disponibilidad de la informacion durante y despues de la ejecucion de la obra, cumpliendo con los plazos de retencion exigidos por el MOP.
        </p>

        <h3 className="text-xl font-bold text-off-white mt-8 mb-3">6. Exportacion para auditoria</h3>
        <p>
          El sistema debe permitir la exportacion de todos los registros en formatos estandar para facilitar auditorias externas. Los documentos exportados deben mantener la validez de las firmas electronicas y marcas de tiempo.
        </p>

        <h2 className="text-2xl font-bold text-off-white mt-10 mb-4">Sanciones por incumplimiento</h2>
        <p>
          El incumplimiento de la normativa del MOP respecto al Libro de Obras puede acarrear consecuencias significativas:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Multas economicas:</strong> el MOP puede aplicar multas a las empresas que no cumplan con los requisitos del libro de obras digital.</li>
          <li><strong>Observaciones en la evaluacion del contrato:</strong> las deficiencias en el libro de obras se reflejan en la evaluacion del cumplimiento contractual.</li>
          <li><strong>Dificultades en licitaciones futuras:</strong> un historial de incumplimiento puede perjudicar a la empresa en futuras adjudicaciones de contratos publicos.</li>
          <li><strong>Problemas en resoluciones de controversias:</strong> sin un libro de obras completo y trazable, la empresa pierde respaldo documental ante disputas contractuales.</li>
          <li><strong>Retrasos administrativos:</strong> la falta de un registro digital adecuado genera demoras en la aprobacion de estados de pago y recepciones de obra.</li>
        </ul>

        <h2 className="text-2xl font-bold text-off-white mt-10 mb-4">Diferencias entre el libro fisico y el digital segun la normativa</h2>
        <p>
          La normativa del MOP reconoce la equivalencia legal entre el libro fisico y el digital, pero establece ventajas claras del formato electronico:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>El libro digital tiene la misma validez legal que el fisico, respaldada por la Ley 19.799.</li>
          <li>La firma electronica avanzada reemplaza la firma manuscrita con mayor seguridad.</li>
          <li>Las marcas de tiempo del sistema digital son mas confiables que las fechas escritas a mano.</li>
          <li>La trazabilidad digital supera ampliamente la del formato papel.</li>
          <li>El acceso remoto permite consultar el libro desde cualquier ubicacion, sin depender del libro fisico en obra.</li>
        </ul>

        <h2 className="text-2xl font-bold text-off-white mt-10 mb-4">Como cumplir con la normativa usando SGO</h2>
        <p>
          SGO fue disenado especificamente para cumplir con todos los requisitos del MOP. Con mas de 700 obras conectadas, SGO es la plataforma de referencia en Chile para la gestion digital de obras publicas.
        </p>
        <p>
          Al utilizar SGO, las empresas constructoras, consultoras e inspectores fiscales tienen la certeza de que cada anotacion, comunicacion y documento cumple con los estandares normativos. El soporte tecnico de SGO esta disponible para resolver cualquier consulta relacionada con la implementacion y el cumplimiento.
        </p>
        <p>
          Para empresas que aun operan con libros fisicos, la transicion a SGO es un proceso guiado que minimiza riesgos y garantiza continuidad operativa. El equipo de SGO acompana la migracion de principio a fin.
        </p>

        <h2 className="text-2xl font-bold text-off-white mt-10 mb-4">Proximos cambios normativos</h2>
        <p>
          El MOP continua avanzando en la digitalizacion de sus procesos. Se espera que en los proximos anos se amplien los requisitos digitales a mas etapas del ciclo de vida de las obras publicas, incluyendo la recepcion de obra, los estados de pago y la gestion de garantias.
        </p>
        <p>
          Las empresas que ya operan con un sistema digital robusto como SGO estaran mejor preparadas para adaptarse a estos cambios regulatorios sin necesidad de reestructuraciones significativas.
        </p>
      </div>

      {/* CTA */}
      <div className="glass-card rounded-2xl p-8 mt-12 text-center">
        <h3 className="text-xl font-bold mb-3">Cumple con la normativa MOP sin complicaciones</h3>
        <p className="text-slate text-sm mb-6 max-w-md mx-auto">
          SGO garantiza cumplimiento normativo completo. Solicita una demo y ve como funciona.
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
          <Link href="/blog/sgo-vs-papel-ventajas" className="glass-card glass-card-hover rounded-xl p-5 block group">
            <span className="text-xs text-amber">Comparativa</span>
            <h4 className="font-bold text-sm mt-1 group-hover:text-amber transition-colors">SGO vs Libro de Obras en Papel: 5 Ventajas Clave</h4>
          </Link>
        </div>
      </div>
    </article>
  );
}
