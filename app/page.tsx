export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-gradient-to-b from-white/5 to-transparent">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm text-white/60">Soluciones a medida</p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Desarrollo web y automatización
            <span className="text-white/70"> para negocios e industrias</span>
          </h1>

          <p className="mt-4 max-w-2xl text-white/70">
            Sitios rápidos, sistemas internos, integraciones, paneles y herramientas para
            ahorrar tiempo (y dolores de cabeza).
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contacto"
              className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black hover:opacity-90"
            >
              Pedir presupuesto
            </a>
            <a
              href="#servicios"
              className="rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-white/90 hover:border-white/40"
            >
              Ver servicios
            </a>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-2xl font-bold">Servicios</h2>
          <p className="mt-2 text-white/70">
            Lo que hacemos (sin humo).
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Landing + SEO básico", "Sitios rápidos, claros y listos para vender."],
              ["Sistemas internos", "Gestión, formularios, reportes, usuarios, roles."],
              ["Automatización", "Scripts, integraciones, procesos repetitivos afuera."],
              ["Paneles / Dashboards", "KPIs simples para decidir con datos."],
              ["Mantenimiento", "Actualizaciones, mejoras, backups, monitoreo."],
              ["Soporte técnico", "Diagnóstico y solución (sin vueltas)."],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-xl border border-white/10 p-5">
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* PROYECTOS */}
      <section id="proyectos">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-2xl font-bold">Proyectos</h2>
          <p className="mt-2 text-white/70">
            Trabajo real o demos bien hechas. Lo importante: se puede ver.
          </p>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {[
              {
                title: "Landing profesional (este sitio)",
                desc: "Base sólida: Next.js + Tailwind, responsive, deploy continuo en Vercel.",
                tags: ["Next.js", "Tailwind", "Vercel"],
                href: "https://ff-dev-solutions-web.vercel.app/",
              },
              {
                title: "Automatización / Scripts",
                desc: "Procesos repetitivos fuera: tareas, reportes, integraciones simples.",
                tags: ["Node", "Python", "APIs"],
                href: "#contacto",
              },
            ].map((p) => (
              <a
                key={p.title}
                href={p.href}
                className="group rounded-xl border border-white/10 p-5 transition hover:border-white/30"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold group-hover:text-white">{p.title}</h3>
                    <p className="mt-2 text-sm text-white/70">{p.desc}</p>
                  </div>
                  <span className="text-white/40 group-hover:text-white/70">↗</span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>


      {/* PROCESO */}
      <section id="proceso" className="bg-white/5">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-2xl font-bold">Proceso</h2>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {[
              ["1) Alcance", "Definimos qué sí y qué no. Sin alcance = desastre seguro."],
              ["2) Entrega rápida", "Primero algo usable. Después refinamos."],
              ["3) Mejora continua", "Iteramos con feedback real, no opiniones sueltas."],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-xl border border-white/10 p-5">
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-2xl font-bold">Contacto</h2>
          <p className="mt-2 text-white/70">
            Si querés que esto avance, hacelo fácil: mandá un mensaje con qué necesitás y para cuándo.
          </p>

          <div className="mt-6 rounded-xl border border-white/10 p-5">
            <p className="text-sm text-white/70">
              📩 Email: <span className="text-white">ffsolutions@gmail.com</span><br />
              📱 WhatsApp: <span className="text-white">+54 9 3804443293</span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
