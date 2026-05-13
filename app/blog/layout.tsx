import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-navy min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
