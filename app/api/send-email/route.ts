import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, company, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: "brukteshome21@gmail.com",
      subject: `New Contact Message from ${name}`,
      text: `Phone: ${phone}\nCompany: ${company}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error: any) {
    console.error("Email error:", error);
    return NextResponse.json({ success: false, message: error.message || "Email sending failed" }, { status: 500 });
  }
}
