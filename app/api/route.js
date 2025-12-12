import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "rachelsilencieux55@gmail.com",
      subject: `Message de ${name} — ${subject}`,
      html: `
        <p><b>À :</b> rachelsilencieux55@gmail.com</p>
        <p><b>De :</b> ${email}</p>
        <p><b>Objet :</b> ${subject}</p>

        <hr/>

        <p><b>Message :</b></p>
        <p>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });

  } catch (error) {
    console.error(error);

    return new Response(
      JSON.stringify({
        error: "Une erreur est survenue lors de l'envoi",
      }),
      { status: 500 }
    );
  }
}
