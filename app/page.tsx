import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PainPoints from "../components/PainPoints";
import Products from "../components/Products";
import ProcessFlow3D from "../components/ProcessFlow3D";
import UserProfiles from "../components/UserProfiles";
import SocialProof from "../components/SocialProof";
import Testimonials from "../components/Testimonials";
import BlogPreview from "../components/BlogPreview";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

export default function SGOPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "SGO — Sistema de Gestion de Obras",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description:
              "Software de gestion integral para obras de construccion y obras publicas en Chile. Incluye Libro de Obras Digital (LOD), Libro de Comunicaciones Electronico (LCE), Libro de Consultoria Digital y Gestor Documental.",
            url: "https://beta.sgo.cl",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "CLP",
              description: "Contactar para cotizacion personalizada",
            },
            provider: {
              "@type": "Organization",
              name: "SGO",
              url: "https://beta.sgo.cl",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Sucre 2680",
                addressLocality: "Nunoa",
                addressRegion: "Santiago",
                addressCountry: "CL",
              },
              telephone: "+56 2 268 48 887",
              email: "contacto@sgo.cl",
            },
            knowsAbout: [
              "Libro de Obras Digital Chile",
              "Software gestion obras publicas",
              "Libro de Comunicaciones Electronico",
              "Gestion documental construccion",
              "Ministerio de Obras Publicas Chile",
              "Inspeccion fiscal obras",
              "Trazabilidad obras construccion",
              "Consultoria digital obras",
              "Normativa MOP Chile",
              "Gestion de obras civiles",
              "Control de obras publicas",
              "Digitalizacion construccion Chile",
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Es obligatorio el Libro de Obras Digital en Chile?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Si. El Ministerio de Obras Publicas (MOP) de Chile exige el uso del Libro de Obras Digital para las empresas constructoras que ejecutan obras publicas. SGO cumple con todos los requisitos normativos establecidos por el MOP.",
                },
              },
              {
                "@type": "Question",
                name: "Que perfiles pueden usar SGO?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "SGO esta disenado para tres perfiles principales: empresas constructoras que ejecutan obras publicas y privadas, consultoras que supervisan y asesoran proyectos de construccion, e inspectores fiscales del MOP que requieren trazabilidad y control documental.",
                },
              },
              {
                "@type": "Question",
                name: "SGO tiene firma electronica?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Si. SGO utiliza firma electronica avanzada que cumple con la Ley 19.799 de Chile. Cada anotacion, comunicacion y documento queda firmado digitalmente con validez legal.",
                },
              },
              {
                "@type": "Question",
                name: "Se puede usar SGO desde terreno?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Si. SGO es una plataforma web responsive que funciona desde cualquier dispositivo con conexion a internet: computador, tablet o celular. Disponible 24/7.",
                },
              },
              {
                "@type": "Question",
                name: "Cuanto toma implementar SGO?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "La implementacion es rapida. Se configura la obra, se asignan roles y cada usuario accede desde su navegador. En la mayoria de los casos la obra queda operativa en menos de una semana.",
                },
              },
              {
                "@type": "Question",
                name: "Como se garantiza la trazabilidad en SGO?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Cada accion genera un registro inmutable con fecha, hora, autor y contenido. Las marcas de tiempo son inalterables y el sistema mantiene un historial completo de todas las modificaciones.",
                },
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "SGO",
            url: "https://beta.sgo.cl",
            logo: "https://sgo-landing.vercel.app/images/sgo-logo-full.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+56-2-268-48-887",
              contactType: "sales",
              email: "contacto@sgo.cl",
              areaServed: "CL",
              availableLanguage: "Spanish",
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "Sucre 2680",
              addressLocality: "Nunoa",
              addressRegion: "Santiago",
              addressCountry: "CL",
            },
          }),
        }}
      />

      <Navbar />
      <Hero />
      <PainPoints />
      <Products />
      <ProcessFlow3D />
      <UserProfiles />
      <SocialProof />
      <Testimonials />
      <BlogPreview />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
