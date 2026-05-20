import { NextResponse } from "next/server";
import { Resend } from "resend";
import fs from "fs";
import path from "path";

const resendApiKey = process.env.RESEND_API_KEY;
const clientEmail = process.env.CLIENT_EMAIL;

const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, configuration, source, consent } = body;

    // Basic validation
    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: "Name, phone, and email are required fields." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();

    // 1. Send Email (if API key and Client Email are configured)
    if (resend && clientEmail) {
      const emailHtml = `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #FAF7F2; padding: 40px; border: 1px solid #EAEAEA;">
          <h2 style="color: #1A1A1A; font-weight: 300; letter-spacing: 1px; margin-bottom: 30px; text-transform: uppercase; font-size: 18px; border-bottom: 1px solid #C9A96E; padding-bottom: 15px;">New Everett Enquiry</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(0,0,0,0.05); color: #8A8A8A; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; width: 35%;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(0,0,0,0.05); color: #1A1A1A; font-size: 15px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(0,0,0,0.05); color: #8A8A8A; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Phone Number</td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(0,0,0,0.05); color: #1A1A1A; font-size: 15px;"><a href="tel:${phone}" style="color: #C9A96E; text-decoration: none;">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(0,0,0,0.05); color: #8A8A8A; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Email Address</td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(0,0,0,0.05); color: #1A1A1A; font-size: 15px;"><a href="mailto:${email}" style="color: #C9A96E; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(0,0,0,0.05); color: #8A8A8A; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Configuration</td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(0,0,0,0.05); color: #1A1A1A; font-size: 15px;">${configuration || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(0,0,0,0.05); color: #8A8A8A; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Source</td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(0,0,0,0.05); color: #1A1A1A; font-size: 15px;">${source || 'Website Form'}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #8A8A8A; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Timestamp</td>
              <td style="padding: 12px 0; color: #1A1A1A; font-size: 15px;">${new Date(timestamp).toLocaleString()}</td>
            </tr>
          </table>
          
          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(0,0,0,0.05); text-align: center; color: #8A8A8A; font-size: 11px; letter-spacing: 1px; text-transform: uppercase;">
            The Everett • Lullanagar, Pune
          </div>
        </div>
      `;

      try {
        await resend.emails.send({
          from: "The Everett <info@tribeca-theeverett-lullanagar.com>", // Typically you'd use a verified domain here like leads@theeverett.in
          to: clientEmail,
          subject: "New Everett Enquiry",
          html: emailHtml,
        });
      } catch (emailError) {
        console.error("Resend Email Error:", emailError);
        // Continue to log the lead even if email fails
      }
    } else {
      console.warn("RESEND_API_KEY or CLIENT_EMAIL not set. Skipping email dispatch.");
    }

    // 2. Log to CSV
    try {
      const csvFilePath = path.join(process.cwd(), "leads.csv");
      const fileExists = fs.existsSync(csvFilePath);
      
      // Escape CSV fields
      const escapeCsv = (str: string) => {
        if (!str) return '""';
        const escaped = str.toString().replace(/"/g, '""');
        return `"${escaped}"`;
      };

      const csvLine = [
        escapeCsv(timestamp),
        escapeCsv(name),
        escapeCsv(phone),
        escapeCsv(email),
        escapeCsv(configuration),
        escapeCsv(source),
        escapeCsv(consent ? "Yes" : "No")
      ].join(",") + "\n";

      if (!fileExists) {
        const header = "Timestamp,Name,Phone,Email,Configuration,Source,Consent\n";
        fs.writeFileSync(csvFilePath, header + csvLine, "utf8");
      } else {
        fs.appendFileSync(csvFilePath, csvLine, "utf8");
      }
    } catch (csvError) {
      console.error("CSV Logging Error:", csvError);
      // Ensure we don't fail the request if logging fails, though it's good to know.
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your enquiry." },
      { status: 500 }
    );
  }
}
