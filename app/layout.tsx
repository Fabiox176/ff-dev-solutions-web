import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";


const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "F&F Dev Solutions",
  description: "Desarrollo web, automatización y soluciones a medida.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${inter.className} min-h-screen bg-black text-white`}>
        <header className="border-b border-white/10">
          <div className="mx-auto flex max-w-6xl items-center justify-between p-6">
            <Link href="/" className="font-semibold hover:opacity-90">
              F&F Dev Solutions
              </Link>
            <nav className="flex gap-6 text-sm text-white/70">
              <a className="hover:text-white" href="#servicios">Servicios</a>
              <a className="hover:text-white" href="#proyectos">Proyectos</a>
              <a className="hover:text-white" href="#proceso">Proceso</a>
              <a className="hover:text-white" href="/contacto">Contacto</a>
            </nav>
          </div>
        </header>

        {children}

        <footer className="border-t border-white/10">
          <div className="mx-auto max-w-6xl p-6 text-sm text-white/60">
            © {new Date().getFullYear()} F&F Dev Solutions — Hecho con Next.js
          </div>
        </footer>
      </body>
    </html>
  );
}
