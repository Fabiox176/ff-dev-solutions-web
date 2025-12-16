import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import Nav from "@/components/Nav";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ff-dev-solutions-web.vercel.app"),
  title: {
    default: "F&F Dev Solutions",
    template: "%s | F&F Dev Solutions",
  },
  description: "Desarrollo web, automatización e integraciones para negocios reales.",
  openGraph: {
    title: "F&F Dev Solutions",
    description: "Desarrollo web, automatización e integraciones para negocios reales.",
    url: "https://ff-dev-solutions-web.vercel.app",
    siteName: "F&F Dev Solutions",
    locale: "es_AR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
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
            <Nav />
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