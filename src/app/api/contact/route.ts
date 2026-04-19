import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // 1. Create a "Transporter"
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Check if the user hasn't updated their password
    if (process.env.EMAIL_PASS === "your_gmail_app_password_here") {
      return NextResponse.json(
        { success: false, message: "Error: You must replace 'your_gmail_app_password_here' with a real App Password in .env.local" },
        { status: 400 }
      );
    }

    // 2. Define the email content
    const mailOptions = {
      from: process.env.EMAIL_USER, // The mail is sent FROM your account
      to: "rahulmohapatra2063@gmail.com", // The mail is sent TO your account
      replyTo: email, // If you click "Reply", it will go to the visitor's email
      subject: `Portfolio: Message from ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #e2e8f0; border-radius: 10px;">
          <h2 style="color: #6366f1;">New message from your Portfolio</h2>
          <p><strong>From:</strong> ${name} (${email})</p>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;">
          <p><strong>Message:</strong></p>
          <div style="background: #f8fafc; padding: 15px; border-radius: 8px; color: #334155;">
            ${message}
          </div>
        </div>
      `,
    };

    // 3. Actually send the mail
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Nodemailer Error:", error);
    return NextResponse.json(
      { success: false, message: "Server failed to send email" },
      { status: 500 }
    );
  }
}
