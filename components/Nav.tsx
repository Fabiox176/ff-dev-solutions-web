"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const linkClass = (active: boolean) =>
  `hover:text-white transition ${
    active ? "text-white font-semibold" : "text-white/70"
  }`;

export default function Nav() {
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isContacto = pathname === "/contacto";

  return (
    <nav className="flex gap-6 text-sm">
      <a href="/#servicios" className={linkClass(isHome)}>
        Servicios
      </a>
      <a href="/#proyectos" className={linkClass(isHome)}>
        Proyectos
      </a>
      <a href="/#proceso" className={linkClass(isHome)}>
        Proceso
      </a>

      <Link href="/contacto" className={linkClass(isContacto)}>
        Contacto
      </Link>
    </nav>
  );
}
