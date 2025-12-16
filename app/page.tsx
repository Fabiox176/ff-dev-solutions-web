export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-gradient-to-b from-white/5 to-transparent">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm text-white/60">Soluciones a medida</p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Desarrollo web y automatización
            <span className="text-white/70"> para negocios reales</span>
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

      {/* CONTACTO (NUEVO CONTENIDO) */}
      <section id="contacto">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h1 className="text-3xl font-bold">Contacto</h1>
          <p className="mt-2 max-w-2xl text-white/70">
            Contame qué necesitás, para cuándo y si tenés referencias. Si está claro, sale rápido.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {/* Formulario (sin backend) */}
            <form
              className="rounded-xl border border-white/10 p-5"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Listo. Ahora conectamos esto a email o a un backend.");
              }}
            >
              <div className="grid gap-4">
                <label className="grid gap-2">
                  <span className="text-sm text-white/70">Nombre</span>
                  <input
                    className="rounded-lg border border-white/10 bg-black/40 px-3 py-2 outline-none focus:border-white/30"
                    placeholder="Tu nombre"
                    required
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm text-white/70">Email</span>
                  <input
                    type="email"
                    className="rounded-lg border border-white/10 bg-black/40 px-3 py-2 outline-none focus:border-white/30"
                    placeholder="tunombre@email.com"
                    required
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm text-white/70">Qué necesitás</span>
                  <textarea
                    className="min-h-[120px] rounded-lg border border-white/10 bg-black/40 px-3 py-2 outline-none focus:border-white/30"
                    placeholder="Ej: landing + formulario + WhatsApp. Para tal fecha. Referencias: ..."
                    required
                  />
                </label>

                <button
                  className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black hover:opacity-90"
                  type="submit"
                >
                  Enviar (demo)
                </button>

                <p className="text-xs text-white/50">
                  Esto es una demo: el siguiente paso es conectarlo a Email/WhatsApp o un backend.
                </p>
              </div>
            </form>

            {/* CTA */}
            <div className="rounded-xl border border-white/10 p-5">
              <h2 className="text-xl font-semibold">Atajo</h2>
              <p className="mt-2 text-sm text-white/70">
                Si querés ir directo, mandá un mensaje con:
                <br />• Qué querés
                <br />• Para cuándo
                <br />• Presupuesto aproximado (si tenés)
              </p>

              <div className="mt-6 grid gap-3">
                <a
                  className="rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-white/90 hover:border-white/40"
                  // Nota: Reemplaza "tuemail@dominio.com" por el email real de contacto
                  href="mailto:tuemail@dominio.com?subject=Consulta%20F%26F%20Dev%20Solutions" 
                >
                  Escribir por email
                </a>

                {/* Este botón puede ser opcional si el usuario siempre quiere enviar al Home */}
                {/* <a
                  className="rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-white/90 hover:border-white/40"
                  href="/#contacto"
                >
                  Volver a la home
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}