import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Faltan campos" }), { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const to = process.env.CONTACT_TO_EMAIL;
    if (!to) {
      return new Response(JSON.stringify({ error: "CONTACT_TO_EMAIL no configurado" }), {
        status: 500,
      });
    }

    const subject = `Contacto F&F: ${name}`;

    await resend.emails.send({
      from: "F&F Dev Solutions <onboarding@resend.dev>",
      to,
      replyTo: email,
      subject,
      text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
    });

    return Response.json({ ok: true });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Error enviando email" }), { status: 500 });
  }
}
