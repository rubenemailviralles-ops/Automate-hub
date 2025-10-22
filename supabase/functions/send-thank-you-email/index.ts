// Supabase Edge Function to send thank you emails

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

serve(async (req) => {
  try {
    const { type, record } = await req.json()
    
    // Determine email content based on type
    let subject = ''
    let htmlContent = ''
    
    if (type === 'contact') {
      subject = 'Thank You for Contacting Automate Hub!'
      htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #000000 0%, #0a0a0a 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .button { display: inline-block; background: #007bff; color: white; padding: 12px 30px; text-decoration: none; border-radius: 8px; margin-top: 20px; }
            .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Thank You for Reaching Out!</h1>
            </div>
            <div class="content">
              <p>Hi ${record.name},</p>
              
              <p>Thank you for contacting Automate Hub! We've received your message and we're excited to help you transform your business with AI automation.</p>
              
              <p><strong>What happens next?</strong></p>
              <ul>
                <li>Our team will review your message within the next 2 hours during business hours</li>
                <li>We'll reach out to you at <strong>${record.email}</strong> with a personalized response</li>
                <li>We'll discuss how we can help achieve your automation goals</li>
              </ul>
              
              <p>In the meantime, feel free to explore our services or book a free consultation:</p>
              
              <a href="https://rubenemailviralles-ops.github.io/Automate-hub/book-consultation" class="button">Book Free Consultation</a>
              
              <p style="margin-top: 30px;">Looking forward to working with you!</p>
              
              <p><strong>The Automate Hub Team</strong></p>
            </div>
            <div class="footer">
              <p>© ${new Date().getFullYear()} Automate Hub. All rights reserved.</p>
              <p>San Francisco, CA | hello@automatehub.com</p>
            </div>
          </div>
        </body>
        </html>
      `
    } else if (type === 'consultation') {
      subject = 'Your Consultation is Booked - Automate Hub'
      htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #000000 0%, #0a0a0a 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .highlight { background: #e3f2fd; padding: 15px; border-left: 4px solid #007bff; margin: 20px 0; }
            .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎉 Your Consultation is Booked!</h1>
            </div>
            <div class="content">
              <p>Hi ${record.full_name || record.name},</p>
              
              <p>Congratulations! Your free AI automation consultation with Automate Hub has been successfully booked.</p>
              
              <div class="highlight">
                <p style="margin: 0;"><strong>📅 What to Expect:</strong></p>
                <ul style="margin: 10px 0 0 0;">
                  <li>We'll contact you within 24 hours to confirm your appointment time</li>
                  <li>30-minute personalized consultation</li>
                  <li>Custom automation recommendations for your business</li>
                  <li>Clear next steps and timeline</li>
                  <li>No pressure, just helpful guidance</li>
                </ul>
              </div>
              
              <p><strong>We'll reach out to you at:</strong></p>
              <p>📧 Email: ${record.email}<br>
              ${record.phone ? `📱 Phone: ${record.phone}` : ''}</p>
              
              ${record.area_of_service || record.service ? `<p><strong>Service of Interest:</strong> ${record.area_of_service || record.service}</p>` : ''}
              
              <p style="margin-top: 30px;">We're excited to help you automate and scale your business!</p>
              
              <p><strong>The Automate Hub Team</strong></p>
            </div>
            <div class="footer">
              <p>© ${new Date().getFullYear()} Automate Hub. All rights reserved.</p>
              <p>San Francisco, CA | hello@automatehub.com | +27 82 644 2575</p>
            </div>
          </div>
        </body>
        </html>
      `
    }

    // Send email using Resend API
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Automate Hub <noreply@automatehub.com>',
        to: [record.email],
        subject: subject,
        html: htmlContent,
      }),
    })

    const data = await response.json()

    return new Response(
      JSON.stringify({ success: true, data }),
      { headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { headers: { 'Content-Type': 'application/json' }, status: 500 }
    )
  }
})

