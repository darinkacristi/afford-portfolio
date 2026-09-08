import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// nodemailer abre una conexión TCP, así que esta ruta necesita el runtime de Node
export const runtime = "nodejs";

export async function POST(req: Request) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error("Faltan variables de entorno del SMTP");
    return NextResponse.json({ error: "config" }, { status: 500 });
  }

  let datos;
  try {
    datos = await req.json();
  } catch {
    return NextResponse.json({ error: "formato" }, { status: 400 });
  }

  const nombre = String(datos?.nombre ?? "").trim();
  const correo = String(datos?.correo ?? "").trim();
  const mensaje = String(datos?.mensaje ?? "").trim();
  const trampa = String(datos?.botcheck ?? "").trim();

  // Campo invisible: si viene lleno es un bot. Respondemos éxito para que no
  // reintente, pero no se envía nada.
  if (trampa) return NextResponse.json({ ok: true });

  if (!nombre || !mensaje || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(correo)) {
    return NextResponse.json({ error: "datos" }, { status: 400 });
  }
  if (mensaje.length > 5000 || nombre.length > 200) {
    return NextResponse.json({ error: "largo" }, { status: 400 });
  }

  const transporte = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT ?? 465),
    secure: Number(SMTP_PORT ?? 465) === 465, // 465 usa SSL directo; 587 sube a TLS después
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    await transporte.sendMail({
      // El remitente DEBE ser el buzón autenticado: Hostinger rechaza el envío
      // si intentas mandar a nombre de otra dirección.
      from: `"Portafolio Afford" <${SMTP_USER}>`,
      to: CONTACT_TO || SMTP_USER,
      // Así, al responder el correo, la respuesta le llega directo a quien escribió
      replyTo: `"${nombre}" <${correo}>`,
      subject: `Nuevo mensaje del portafolio — ${nombre}`,
      text: `Nombre: ${nombre}\nCorreo: ${correo}\n\n${mensaje}`,
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Error enviando el correo:", e);
    return NextResponse.json({ error: "envio" }, { status: 502 });
  }
}
