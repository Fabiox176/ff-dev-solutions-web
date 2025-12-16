import { Resend } from "resend";

// 1. Tipado para el Rate Limiting
type RateEntry = { count: number; resetAt: number };
const rate = new Map<string, RateEntry>();

// 2. Función para obtener la IP del solicitante
function getIp(req: Request) {
  // Vercel / proxies
  const xf = req.headers.get("x-forwarded-for");
  if (xf) return xf.split(",")[0].trim();
  return "unknown";
}

export async function POST(req: Request) {
  // 3. Lógica de Rate Limiting
  const ip = getIp(req);
  const now = Date.now();
  const windowMs = 60_000; // 1 minuto
  const limit = 3; // 3 envíos por minuto por IP

  const entry = rate.get(ip);

  if (!entry || now > entry.resetAt) {
    rate.set(ip, { count: 1, resetAt: now + windowMs });
  } else {
    entry.count += 1;
    rate.set(ip, entry);
    if (entry.count > limit) {
      return Response.json(
        { ok: false, error: "Demasiados envíos. Esperá un minuto y probá de nuevo." },
        { status: 429 } // HTTP 429: Too Many Requests
      );
    }
  }

  try {
    const body = await req.json();
    console.log("CONTACT BODY:", body);

    // 4. Desestructuración incluyendo el campo Honeypot
    const { name, email, message, company } = body;

    // 5. Verificación de Honeypot
    // Si el campo 'company' viene completo, es un bot.
    if (company && String(company).trim().length > 0) {
      // Respondemos OK a propósito para no “entrenar” al bot y que siga pensando que el envío fue exitoso.
      console.log(`HONEYPOT ACTIVADO para IP: ${ip}. Formulario descartado.`);
      return Response.json({ ok: true });
    }

    // 6. Validación básica (opcional, pero buena práctica)
    if (!name || !email || !message) {
      return Response.json({ ok: false, error: "Faltan campos obligatorios." }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY!);

    const result = await resend.emails.send({
      from: "F&F Dev Solutions <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL!,
      subject: `Contacto F&F: ${name}`,
      replyTo: email,
      text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
    });

    console.log("RESEND RESULT:", result);

    return Response.json({ ok: true });
  } catch (err) {
    console.error("CONTACT ERROR:", err);
    // En caso de error de parsing del body o Resend
    return Response.json({ ok: false }, { status: 500 });
  }
}