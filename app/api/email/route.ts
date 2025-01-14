import { NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

if (!process.env.SENDGRID_API_KEY) {
  throw new Error('SENDGRID_API_KEY is not set in environment variables')
}
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const VERIFIED_SENDER = 'josh@trycareful.ai' // Replace with your verified sender

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { to, from, subject, patentNumber, claimNumber } = body

    const msg = {
      to,
      from: {
        email: VERIFIED_SENDER, // Must be your verified sender
        name: 'Careful AI'
      },
      replyTo: from, // User's email goes here
      subject,
      text: `New patent analysis request:\nPatent: ${patentNumber}\nClaim: ${claimNumber}\nFrom: ${from}`,
      html: `
        <h2>New Patent Analysis Request</h2>
        <p><strong>Patent Number:</strong> ${patentNumber}</p>
        <p><strong>Claim Number:</strong> ${claimNumber}</p>
        <p><strong>From:</strong> ${from}</p>
      `,
    }

    await sgMail.send(msg)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email sending error:', error)
    // Log the full error details for debugging
    if (error.response) {
      console.error(error.response.body)
    }
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}