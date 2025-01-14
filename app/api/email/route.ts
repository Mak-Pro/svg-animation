import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

// if (!process.env.SENDGRID_API_KEY) {
//   throw new Error("SENDGRID_API_KEY is not set in environment variables");
// }
sgMail.setApiKey("SG.777");

const VERIFIED_SENDER = "josh@trycareful.ai";

interface EmailRequestBody {
  to: string;
  from: string;
  subject: string;
  patentNumber: string;
  claimNumber: string;
}

export async function POST(request: Request): Promise<Response> {
  try {
    const body: EmailRequestBody = await request.json();

    const { to, from, subject, patentNumber, claimNumber } = body;

    const msg = {
      to,
      from: {
        email: VERIFIED_SENDER,
        name: "Careful AI",
      },
      replyTo: from,
      subject,
      text: `New patent analysis request:\nPatent: ${patentNumber}\nClaim: ${claimNumber}\nFrom: ${from}`,
      html: `
        <h2>New Patent Analysis Request</h2>
        <p><strong>Patent Number:</strong> ${patentNumber}</p>
        <p><strong>Claim Number:</strong> ${claimNumber}</p>
        <p><strong>From:</strong> ${from}</p>
      `,
    };

    await sgMail.send(msg);
    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("Email sending error:", error);
    if (
      typeof error === "object" &&
      error !== null &&
      "response" in error &&
      typeof error.response === "object" &&
      error.response !== null &&
      "body" in error.response
    ) {
      console.error((error.response as { body: unknown }).body);
    }

    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
