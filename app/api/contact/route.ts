import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("CONTACT BODY:", body);

    const { name, email, message } = body;

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
    return Response.json({ ok: false }, { status: 500 });
  }
}
