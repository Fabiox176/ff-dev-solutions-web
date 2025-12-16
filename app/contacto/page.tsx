import ContactForm from "@/components/ContactForm";

export default function ContactoPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      <h1 className="text-3xl font-bold">Contacto</h1>
      <p className="mt-2 max-w-2xl text-white/70">
        Contame qué necesitás, para cuándo y si tenés referencias. Si está claro, sale rápido.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <ContactForm />

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
              href="/"
            >
              Volver a la home
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
