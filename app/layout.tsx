import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SGO — Libro de Obras Digital Chile | Sistema Gestion de Obras",
  description:
    "SGO es el software lider en Chile para gestion de obras de construccion y obras publicas. Libro de Obras Digital, Libro de Comunicaciones Electronico y Gestor Documental. +700 obras conectadas. Cumplimiento normativo MOP.",
  alternates: { canonical: "https://sgo-landing.vercel.app" },
  openGraph: {
    title: "SGO — Libro de Obras Digital Chile",
    description:
      "Software de gestion para construccion y obras publicas. Libro de Obras Digital obligatorio MOP. +700 obras conectadas.",
    url: "https://sgo-landing.vercel.app",
    siteName: "SGO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SGO — Libro de Obras Digital Chile | Sistema Gestion de Obras",
    description:
      "Software lider en Chile para gestion de obras. Libro de Obras Digital obligatorio MOP. +700 obras conectadas.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
