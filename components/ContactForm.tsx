"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      message: String(form.get("message") || ""),
    };

    try {
      // INICIO de la sección modificada con lectura de texto y parseo condicional
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const text = await res.text();
      let data: any = null;

      if (text) {
        try {
          data = JSON.parse(text);
        } catch {
          // si no es JSON, no pasa nada
        }
      }

      // Si el status no es OK (4xx, 5xx) => error
      if (!res.ok) throw new Error("Bad response");

      // Si vino JSON y explícitamente dice ok:false => error
      if (data && data.ok === false) throw new Error("Server reported failure");

      setStatus("ok");
      e.currentTarget.reset();
      // FIN de la sección modificada

    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="rounded-xl border border-white/10 p-5" onSubmit={onSubmit}>
      <div className="grid gap-4">
        <label className="grid gap-2">
          <span className="text-sm text-white/70">Nombre</span>
          <input
            name="name"
            className="rounded-lg border border-white/10 bg-black/40 px-3 py-2 outline-none focus:border-white/30"
            placeholder="Tu nombre"
            required
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm text-white/70">Email</span>
          <input
            name="email"
            type="email"
            className="rounded-lg border border-white/10 bg-black/40 px-3 py-2 outline-none focus:border-white/30"
            placeholder="tunombre@email.com"
            required
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm text-white/70">Qué necesitás</span>
          <textarea
            name="message"
            className="min-h-[120px] rounded-lg border border-white/10 bg-black/40 px-3 py-2 outline-none focus:border-white/30"
            placeholder="Ej: landing + formulario + WhatsApp. Para tal fecha. Referencias: ..."
            required
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black hover:opacity-90 disabled:opacity-60"
        >
          {loading ? "Enviando..." : "Enviar"}
        </button>

        {status === "ok" && (
          <p className="text-sm text-white/80">Listo. Te respondo a la brevedad.</p>
        )}
        {status === "error" && (
          <p className="text-sm text-white/80">
            Falló el envío. Probá de nuevo o escribime por email.
          </p>
        )}
      </div>
    </form>
  );
}