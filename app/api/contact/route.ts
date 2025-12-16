import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json({ ok: false, error: "Faltan campos" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;

    if (!apiKey) {
      return Response.json({ ok: false, error: "RESEND_API_KEY no configurado" }, { status: 500 });
    }
    if (!to) {
      return Response.json({ ok: false, error: "CONTACT_TO_EMAIL no configurado" }, { status: 500 });
    }

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: "F&F Dev Solutions <onboarding@resend.dev>",
      to,
      subject: `Contacto F&F: ${name}`,
      replyTo: email,
      text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
    });

    if (error) {
      return Response.json({ ok: false, error: error.message }, { status: 500 });
    }

    return Response.json({ ok: true, id: data?.id });
  } catch (e) {
    return Response.json({ ok: false, error: "Error procesando el envío" }, { status: 500 });
  }
}
