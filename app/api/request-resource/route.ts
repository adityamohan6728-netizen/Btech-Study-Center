import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, contact, resourceName, resourceType, description } = await request.json();

    if (!name || !email || !contact || !resourceName || !resourceType) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: 'resource-request@resend.dev', // This must be a verified domain or a Resend.dev email
      to: 'adityamohan.cse@gmail.com', // Replace with your actual email to receive submissions
      subject: `New Resource Request: ${resourceName} (${resourceType})`,
      html: `
        <p><strong>Requester Name:</strong> ${name}</p>
        <p><strong>Requester Email:</strong> ${email}</p>
        <p><strong>Contact Number:</strong> ${contact}</p>
        <p><strong>Resource Name:</strong> ${resourceName}</p>
        <p><strong>Resource Type:</strong> ${resourceType}</p>
        <p><strong>Description:</strong> ${description || 'N/A'}</p>
      `,
    });

    return NextResponse.json({ message: "Resource request sent successfully", data }, { status: 200 });
  } catch (error) {
    console.error("Error sending resource request email:", error);
    return NextResponse.json({ message: "Failed to send resource request", error }, { status: 500 });
  }
}
