import { Resend } from "resend"
import { NextRequest, NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const { pocName, pocEmail, clinicName, token } = await req.json()

    if (!pocName || !pocEmail || !clinicName || !token) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const onboardingUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/onboarding/${token}`

    const { data, error } = await resend.emails.send({
      from: "Integrated Allergy <onboarding@resend.dev>",
      to: pocEmail,
      subject: `Your Compass Onboarding Link — ${clinicName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f8f9fa; margin: 0; padding: 40px 20px;">
            <div style="max-width: 560px; margin: 0 auto; background: white; border-radius: 12px; border: 1px solid #e9ecef; overflow: hidden;">
              
              <!-- Header -->
              <div style="background: #0B3C5D; padding: 24px 32px;">
                <div style="color: white; font-size: 18px; font-weight: 600;">Integrated Allergy</div>
                <div style="color: rgba(255,255,255,0.6); font-size: 12px; margin-top: 2px;">Compass EHR — Practice Onboarding</div>
              </div>

              <!-- Body -->
              <div style="padding: 32px;">
                <p style="font-size: 15px; color: #212529; margin: 0 0 16px;">Hi ${pocName},</p>
                
                <p style="font-size: 14px; color: #6c757d; line-height: 1.6; margin: 0 0 16px;">
                  You've been invited to complete the onboarding process for <strong style="color: #212529;">${clinicName}</strong> into the Compass EHR platform by Integrated Allergy.
                </p>

                <p style="font-size: 14px; color: #6c757d; line-height: 1.6; margin: 0 0 24px;">
                  Click the button below to access your secure onboarding portal. You'll be asked to create an account and fill out 9 sections covering your practice details, providers, scheduling, billing, and more.
                </p>

                <!-- CTA Button -->
                <div style="text-align: center; margin: 32px 0;">
                  <a href="${onboardingUrl}" style="background: #0B3C5D; color: white; text-decoration: none; padding: 12px 32px; border-radius: 8px; font-size: 14px; font-weight: 600; display: inline-block;">
                    Begin Onboarding →
                  </a>
                </div>

                <p style="font-size: 12px; color: #6c757d; line-height: 1.6; margin: 0 0 8px;">
                  Or copy and paste this link into your browser:
                </p>
                <p style="font-size: 11px; color: #0056b3; word-break: break-all; margin: 0 0 24px;">
                  ${onboardingUrl}
                </p>

                <hr style="border: none; border-top: 1px solid #e9ecef; margin: 24px 0;" />

                <p style="font-size: 12px; color: #6c757d; line-height: 1.6; margin: 0;">
                  This link is unique to your clinic and should not be shared. If you have any questions, contact your Integrated Allergy representative.
                </p>
              </div>

              <!-- Footer -->
              <div style="background: #f8f9fa; padding: 16px 32px; border-top: 1px solid #e9ecef;">
                <p style="font-size: 11px; color: #6c757d; margin: 0; text-align: center;">
                  Integrated Allergy · Compass EHR Onboarding Portal
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    if (error) {
      return NextResponse.json({ error }, { status: 400 })
    }

    return NextResponse.json({ success: true, data })
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    )
  }
}