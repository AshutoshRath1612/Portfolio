import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, email, phone, organization, services, message } =
      await request.json();

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.EMAIL_FROM || "ashutoshrath1612@gmail.com",
      subject: `New message from ${name}`,
      html: `
  <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; line-height: 1.6;">
    <h2 style="color: #2c3e50;">📩 New Inquiry</h2>
    
    <p>
      Hey Ashutosh,<br><br>
      I'm <strong>${name}</strong>, and I just visited your portfolio. I wanted to get in touch to discuss something exciting.
      ${organization ? ` I represent <strong>${organization}</strong>.` : ""} 
      ${services ? ` I'm interested in the following services: <strong>${services}</strong>.` : ""}
    </p>

    <p>
      Here’s my message:<br>
      "${message}"
    </p>

    <p>
      You can reach me at <a href="mailto:${email}" style="color: #3498db;">${email}</a>
      ${phone ? ` or call me at <a href="tel:${phone}" style="color: #3498db;">${phone}</a>` : ""}.
    </p>

    <hr style="margin-top: 30px; border: none; border-top: 1px solid #eee;" />

    <p style="font-size: 0.9em; color: #888;">
      Sent via your portfolio contact form · © ${new Date().getFullYear()} Ashutosh Rath
    </p>
  </div>
`,
    });

    if (error) {
      console.error("Email failed:", error);
      return NextResponse.json(
        { success: false, error: "Email delivery failed." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json(
      { success: false, error: "Server error. Try again later." },
      { status: 500 }
    );
  }
}
