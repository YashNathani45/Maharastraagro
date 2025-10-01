import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request) {
  try {
    // Initialize Resend inside the handler to avoid build-time errors
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { success: false, message: 'Email service not configured. Missing RESEND_API_KEY.' },
        { status: 500 }
      );
    }
    const resend = new Resend(apiKey);

    const { name, phone, address, existingBusiness, turnover, areaInterested } = await request.json();

    // Validate required fields
    if (!name || !phone || !address || !existingBusiness || !turnover || !areaInterested) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Maharashtra Agro <onboarding@resend.dev>',
      to: ['yashnathani455@gmail.com'],
      subject: `New Dealer Application - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #339d9e; border-bottom: 2px solid #339d9e; padding-bottom: 10px;">
            New Dealer Application Received
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Applicant Details:</h3>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555; width: 150px;">Full Name:</td>
                <td style="padding: 8px 0; color: #333;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone Number:</td>
                <td style="padding: 8px 0; color: #333;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Address:</td>
                <td style="padding: 8px 0; color: #333;">${address}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Existing Business:</td>
                <td style="padding: 8px 0; color: #333;">${existingBusiness}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Annual Turnover:</td>
                <td style="padding: 8px 0; color: #333;">${turnover}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Area Interested:</td>
                <td style="padding: 8px 0; color: #333;">${areaInterested}</td>
              </tr>
            </table>
          </div>
          
          <div style="background-color: #e8f5e8; padding: 15px; border-radius: 8px; border-left: 4px solid #4caf50;">
            <p style="margin: 0; color: #2e7d32;">
              <strong>Application submitted on:</strong> ${new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })}
            </p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #fff3cd; border-radius: 8px; border-left: 4px solid #ffc107;">
            <p style="margin: 0; color: #856404;">
              <strong>Next Steps:</strong> Please review this application and contact the applicant within 2-3 business days.
            </p>
          </div>
        </div>
      `
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { success: false, message: 'Failed to send email. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully! Check your email for confirmation.'
    });

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to send application. Please try again.'
      },
      { status: 500 }
    );
  }
}
