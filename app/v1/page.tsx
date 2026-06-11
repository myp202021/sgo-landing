import Navbar from "../../components-v1/Navbar";
import Hero from "../../components-v1/Hero";
import PainPoints from "../../components-v1/PainPoints";
import Products from "../../components-v1/Products";
import ProcessFlow3D from "../../components-v1/ProcessFlow3D";
import UserProfiles from "../../components-v1/UserProfiles";
import SocialProof from "../../components-v1/SocialProof";
import Testimonials from "../../components-v1/Testimonials";
import FinalCTA from "../../components-v1/FinalCTA";
import Footer from "../../components-v1/Footer";

export default function SGOV1Page() {
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
            url: "https://beta.sgo.cl",
            provider: {
              "@type": "Organization",
              name: "SGO",
              url: "https://beta.sgo.cl",
              telephone: "+56 2 268 48 887",
              email: "contacto@sgo.cl",
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
      {/* Blog y FAQ ocultos por ahora segun PDF */}
      <FinalCTA />
      <Footer />
    </>
  );
}
