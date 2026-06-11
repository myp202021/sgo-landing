import type { Metadata } from "next";
import Navbar from "../../../components-v1/Navbar";
import Footer from "../../../components-v1/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidad — SGO.cl",
};

export default function PoliticaDePrivacidad() {
  return (
    <>
      <Navbar />
      <main className="bg-navy min-h-screen pt-28 pb-20 px-4">
        <div className="max-w-[800px] mx-auto text-white/90">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-10">
            POLÍTICA DE PRIVACIDAD - SGO.cl
          </h1>

          <p className="mb-8 leading-relaxed">
            En SGO.cl, RUT [RUT pendiente], protegemos sus datos personales
            según la Ley 19.628. Al completar nuestros formularios en medios
            digitales, usted acepta el tratamiento de su información bajo las
            siguientes condiciones:
          </p>

          <ul className="space-y-6 mb-10">
            <li>
              <strong className="text-white">Finalidad:</strong> Los datos
              (nombre, correo, cargo y empresa) se utilizarán exclusivamente
              para brindar la asesoría técnica solicitada y enviar información
              comercial sobre nuestros servicios.
            </li>
            <li>
              <strong className="text-white">Confidencialidad:</strong> No
              compartimos sus datos con terceros. La información es almacenada
              de forma segura y solo es accesible por nuestro equipo comercial.
            </li>
            <li>
              <strong className="text-white">Sus Derechos:</strong> Usted puede
              solicitar el acceso, rectificación o eliminación de sus datos en
              cualquier momento enviando un correo a{" "}
              <a
                href="mailto:contacto@sgo.cl"
                className="text-blue-300 hover:underline"
              >
                contacto@sgo.cl
              </a>
              .
            </li>
          </ul>

          <p className="text-sm text-white/50">
            Última actualización: Mayo de 2026
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
