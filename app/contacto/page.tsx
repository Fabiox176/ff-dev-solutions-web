export default function ContactoPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
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
              href="mailto:tuemail@dominio.com?subject=Consulta%20F%26F%20Dev%20Solutions"
            >
              Escribir por email
            </a>

            <a
              className="rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-white/90 hover:border-white/40"
              href="/#contacto"
            >
              Volver a la home
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
