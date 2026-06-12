import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, message, turnstileToken, honeypot, timestamp } = body;

    if (!firstName || !lastName || !message) {
      return Response.json({ error: "First name, last name, and message are required." }, { status: 400 });
    }

    if (firstName.length > 100 || lastName.length > 100 || message.length > 5000) {
      return Response.json({ error: "Input exceeds maximum length." }, { status: 400 });
    }

    if (honeypot) {
      return Response.json({ error: "Bot detected." }, { status: 400 });
    }

    if (timestamp) {
      const elapsed = Date.now() - Number(timestamp);
      if (elapsed < 3000) {
        return Response.json({ error: "Form submitted too quickly." }, { status: 400 });
      }
    }

    if (process.env.TURNSTILE_SECRET_KEY && turnstileToken) {
      const turnstileRes = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            secret: process.env.TURNSTILE_SECRET_KEY,
            response: turnstileToken,
          }),
        }
      );

      const turnstileData = await turnstileRes.json();

      if (!turnstileData.success) {
        return Response.json({ error: "CAPTCHA verification failed." }, { status: 400 });
      }
    }

    if (!resend) {
      return Response.json({ error: "Email service not configured." }, { status: 500 });
    }

    const { data, error } = await resend.emails.send({
      from: "Siklab Contact <contact@siklab.org.ph>",
      to: "secretariat@siklab.org.ph",
      replyTo: `${firstName} ${lastName} <${process.env.CONTACT_REPLY_TO ?? "noreply@siklab.org.ph"}>`,
      subject: `Contact form: ${firstName} ${lastName}`,
      text: `Name: ${firstName} ${lastName}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${firstName} ${lastName}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, "<br>")}</p>`,
    });

    if (error) {
      return Response.json({ error: "Failed to send email." }, { status: 500 });
    }

    return Response.json({ success: true, id: data?.id });
  } catch {
    return Response.json({ error: "Internal server error." }, { status: 500 });
  }
}
