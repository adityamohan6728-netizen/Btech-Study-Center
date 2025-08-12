import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, contactNumber, collegeName, semester, section } = await request.json();

    if (!name || !email || !contactNumber || !collegeName || !semester) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    // You can customize the 'to' email address where you want to receive the submissions
    // For example, to: 'your-admin-email@example.com'
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev', // This must be a verified domain or a Resend.dev email
      to: 'adityamohan.cse@gmail.com', // Replace with your actual email to receive submissions
      subject: 'New B.Tech Student Onboarding Submission',
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact Number:</strong> ${contactNumber}</p>
        <p><strong>College Name:</strong> ${collegeName}</p>
        <p><strong>Semester:</strong> ${semester}</p>
        <p><strong>Section:</strong> ${section || 'N/A'}</p>
      `,
    });

    return NextResponse.json({ message: "Email sent successfully", data }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Failed to send email", error }, { status: 500 });
  }
}
