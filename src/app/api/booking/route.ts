import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { put } from '@vercel/blob'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string || 'Not provided'
    const date = formData.get('date') as string || 'Not provided'
    const description = formData.get('description') as string
    const file = formData.get('file') as File | null

    let fileUrl = ''
    if (file && file.size > 0) {
      const blob = await put(`bookings/${Date.now()}-${file.name}`, file, { 
        access: 'public',
        addRandomSuffix: true 
      })
      fileUrl = blob.url
    }

    const token = process.env.RESEND_API_KEY ?? ''
    if (!token) {
      console.error('Missing RESEND_API_KEY')
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 })
    }

    const resend = new Resend(token)

    await resend.emails.send({
      from: 'Anbu Tattoo <onboarding@resend.dev>',
      to: 'hekayaconcepts@gmail.com',
      subject: `New Booking: ${name}`,
      text: `NEW BOOKING REQUEST\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nPreferred Date: ${date}\n\nDescription:\n${description}\n\n${fileUrl ? `Reference Image: ${fileUrl}` : 'No image attached'}\n\n---\nSent from anbu-tattoo.vercel.app`
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Booking error:', error)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
