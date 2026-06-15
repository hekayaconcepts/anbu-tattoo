'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', date: '', description: '', file: null as File | null,
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const data = new FormData()
      data.append('name', formData.name)
      data.append('email', formData.email)
      data.append('phone', formData.phone)
      data.append('date', formData.date)
      data.append('description', formData.description)
      if (formData.file) {
        data.append('file', formData.file)
      }

      const res = await fetch('/api/booking', {
        method: 'POST',
        body: data,
      })

      if (!res.ok) throw new Error('Failed')

      setSubmitted(true)
    } catch (err) {
      setError('Something went wrong. Please email us directly at hekayaconcepts@gmail.com')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px' }}>
        <section style={{ padding: '80px 20px', textAlign: 'center', backgroundColor: '#0A0A0A' }}>
          <p style={{ color: '#C8A97E', fontSize: '13px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '12px' }}>Book Now</p>
          <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(36px, 6vw, 56px)', color: '#FFFFFF', marginBottom: '16px' }}>Book Your Consultation</h1>
          <p style={{ color: '#B0B0B0', fontSize: '16px', maxWidth: '500px', margin: '0 auto' }}>Fill out the form below and we will get back to you within 24 hours</p>
        </section>

        <section style={{ padding: '60px 20px', backgroundColor: '#1A1A1A' }}>
          <div className="booking-grid" style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gap: '40px' }}>
            <div>
              {submitted ? (
                <div style={{ backgroundColor: '#0A0A0A', padding: '60px 30px', borderRadius: '8px', textAlign: 'center', border: '1px solid rgba(200,169,126,0.2)' }}>
                  <div style={{ fontSize: '48px', marginBottom: '20px' }}>✅</div>
                  <h2 style={{ fontFamily: 'var(--font-playfair)', color: '#FFFFFF', fontSize: '28px', marginBottom: '16px' }}>Booking Request Sent!</h2>
                  <p style={{ color: '#B0B0B0', fontSize: '16px' }}>We have received your request and will get back to you at {formData.email} within 24 hours.</p>
                  {formData.file && <p style={{ color: '#C8A97E', fontSize: '14px', marginTop: '12px' }}>Reference file: {formData.file.name}</p>}
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {[
                    { label: 'Full Name *', type: 'text', key: 'name', required: true },
                    { label: 'Email *', type: 'email', key: 'email', required: true },
                    { label: 'Phone', type: 'tel', key: 'phone', required: false },
                    { label: 'Preferred Date', type: 'date', key: 'date', required: false },
                  ].map((field) => (
                    <div key={field.key}>
                      <label style={{ color: '#C8A97E', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>{field.label}</label>
                      <input
                        type={field.type}
                        required={field.required}
                        value={formData[field.key as keyof typeof formData] as string}
                        onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                        style={{
                          width: '100%', padding: '14px 16px', backgroundColor: '#0A0A0A',
                          border: '1px solid rgba(200,169,126,0.2)', borderRadius: '4px',
                          color: '#FFFFFF', fontSize: '16px', outline: 'none', fontFamily: 'Inter, sans-serif',
                        }}
                      />
                    </div>
                  ))}

                  <div>
                    <label style={{ color: '#C8A97E', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Tattoo Description *</label>
                    <textarea
                      required rows={5} value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Describe your tattoo idea, size, placement, style preferences..."
                      style={{
                        width: '100%', padding: '14px 16px', backgroundColor: '#0A0A0A',
                        border: '1px solid rgba(200,169,126,0.2)', borderRadius: '4px',
                        color: '#FFFFFF', fontSize: '16px', outline: 'none', fontFamily: 'Inter, sans-serif', resize: 'vertical',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ color: '#C8A97E', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Reference Images (optional)</label>
                    <input
                      type="file" accept="image/jpeg,image/png,image/webp,.pdf"
                      onChange={(e) => setFormData({ ...formData, file: e.target.files?.[0] || null })}
                      style={{
                        width: '100%', padding: '14px 16px', backgroundColor: '#0A0A0A',
                        border: '1px solid rgba(200,169,126,0.2)', borderRadius: '4px',
                        color: '#B0B0B0', fontSize: '14px',
                      }}
                    />
                    {formData.file && <p style={{ color: '#C8A97E', fontSize: '12px', marginTop: '6px' }}>✓ {formData.file.name} ({Math.round(formData.file.size / 1024)}KB)</p>}
                    <p style={{ color: '#B0B0B0', fontSize: '12px', marginTop: '4px' }}>JPG, PNG, or PDF. Max 5MB.</p>
                  </div>

                  {error && <p style={{ color: '#E74C3C', fontSize: '14px' }}>{error}</p>}

                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      color: '#0A0A0A', backgroundColor: loading ? '#888' : '#C8A97E',
                      padding: '16px 40px', borderRadius: '4px', border: 'none',
                      fontSize: '16px', fontWeight: 600, letterSpacing: '2px',
                      textTransform: 'uppercase', cursor: loading ? 'not-allowed' : 'pointer',
                      marginTop: '10px',
                    }}
                  >
                    {loading ? 'Sending...' : 'Submit Booking Request'}
                  </button>
                </form>
              )}
            </div>

            <div>
              <div style={{ backgroundColor: '#0A0A0A', padding: '32px', borderRadius: '8px', border: '1px solid rgba(200,169,126,0.1)' }}>
                <h3 style={{ fontFamily: 'var(--font-bebas)', color: '#C8A97E', fontSize: '22px', letterSpacing: '2px', marginBottom: '20px' }}>Booking Info</h3>
                <p style={{ color: '#B0B0B0', fontSize: '14px', marginBottom: '12px' }}>💬 Consultation required before all bookings</p>
                <p style={{ color: '#B0B0B0', fontSize: '14px', marginBottom: '12px' }}>💰 $100 non-refundable deposit</p>
                <p style={{ color: '#B0B0B0', fontSize: '14px' }}>📅 48 hours notice for rescheduling</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <style>{`
        .booking-grid { grid-template-columns: 1fr; }
        @media (min-width: 1024px) {
          .booking-grid { grid-template-columns: 1.2fr 0.8fr; gap: 60px; }
        }
      `}</style>
    </>
  )
}
