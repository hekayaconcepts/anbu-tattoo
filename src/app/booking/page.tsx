'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', date: '', description: '', file: null as File | null,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px' }}>
        <section style={{ padding: '80px 40px', textAlign: 'center', backgroundColor: '#0A0A0A' }}>
          <p style={{ color: '#C8A97E', fontSize: '13px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '12px' }}>
            Book Now
          </p>
          <h1 className="font-playfair" style={{ fontSize: 'clamp(36px, 6vw, 56px)', color: '#FFFFFF', marginBottom: '16px' }}>
            Book Your Consultation
          </h1>
          <p style={{ color: '#B0B0B0', fontSize: '16px', maxWidth: '500px', margin: '0 auto' }}>
            Fill out the form below and we'll get back to you within 24 hours
          </p>
        </section>

        <section style={{ padding: '80px 40px', backgroundColor: '#1A1A1A' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '60px' }} className="booking-grid">
            {/* Form */}
            <div>
              {submitted ? (
                <div style={{ backgroundColor: '#0A0A0A', padding: '60px 40px', borderRadius: '8px', textAlign: 'center', border: '1px solid rgba(200,169,126,0.2)' }}>
                  <div style={{ fontSize: '48px', marginBottom: '20px' }}>✅</div>
                  <h2 className="font-playfair" style={{ color: '#FFFFFF', fontSize: '28px', marginBottom: '16px' }}>Booking Request Sent!</h2>
                  <p style={{ color: '#B0B0B0', fontSize: '16px' }}>We'll get back to you within 24 hours to confirm your appointment.</p>
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
                      <label style={{ color: '#C8A97E', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        required={field.required}
                        value={formData[field.key as keyof typeof formData] as string}
                        onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '14px 16px',
                          backgroundColor: '#0A0A0A',
                          border: '1px solid rgba(200,169,126,0.2)',
                          borderRadius: '4px',
                          color: '#FFFFFF',
                          fontSize: '16px',
                          outline: 'none',
                          fontFamily: 'Inter, sans-serif',
                        }}
                      />
                    </div>
                  ))}

                  <div>
                    <label style={{ color: '#C8A97E', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                      Tattoo Description *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Describe your tattoo idea, size, placement, style preferences..."
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        backgroundColor: '#0A0A0A',
                        border: '1px solid rgba(200,169,126,0.2)',
                        borderRadius: '4px',
                        color: '#FFFFFF',
                        fontSize: '16px',
                        outline: 'none',
                        fontFamily: 'Inter, sans-serif',
                        resize: 'vertical',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ color: '#C8A97E', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                      Reference Images (optional)
                    </label>
                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/webp,.pdf"
                      onChange={(e) => setFormData({ ...formData, file: e.target.files?.[0] || null })}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        backgroundColor: '#0A0A0A',
                        border: '1px solid rgba(200,169,126,0.2)',
                        borderRadius: '4px',
                        color: '#B0B0B0',
                        fontSize: '14px',
                      }}
                    />
                    <p style={{ color: '#B0B0B0', fontSize: '12px', marginTop: '6px' }}>JPG, PNG, or PDF. Max 5MB.</p>
                  </div>

                  <button
                    type="submit"
                    style={{
                      color: '#0A0A0A',
                      backgroundColor: '#C8A97E',
                      padding: '16px 40px',
                      borderRadius: '4px',
                      border: 'none',
                      fontSize: '16px',
                      fontWeight: 600,
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s',
                      marginTop: '10px',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#D4B896')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#C8A97E')}
                  >
                    Submit Booking Request
                  </button>
                </form>
              )}
            </div>

            {/* Info Sidebar */}
            <div>
              <div style={{ backgroundColor: '#0A0A0A', padding: '36px', borderRadius: '8px', border: '1px solid rgba(200,169,126,0.1)', marginBottom: '24px' }}>
                <h3 className="font-bebas" style={{ color: '#C8A97E', fontSize: '22px', letterSpacing: '2px', marginBottom: '20px' }}>
                  Booking Info
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    { icon: '💬', title: 'Consultation Required', desc: 'A consultation is required before all tattoo bookings.' },
                    { icon: '💰', title: 'Deposit', desc: 'A non-refundable deposit of $100 is required to secure your appointment.' },
                    { icon: '📅', title: 'Rescheduling', desc: 'Please give 48 hours notice for rescheduling.' },
                    { icon: '🚫', title: 'Cancellation', desc: 'Cancellations within 24 hours forfeit the deposit.' },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '20px' }}>{item.icon}</span>
                      <div>
                        <h4 style={{ color: '#FFFFFF', fontSize: '14px', fontWeight: 600, marginBottom: '2px' }}>{item.title}</h4>
                        <p style={{ color: '#B0B0B0', fontSize: '13px', lineHeight: '1.5' }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ backgroundColor: '#0A0A0A', padding: '36px', borderRadius: '8px', border: '1px solid rgba(200,169,126,0.1)' }}>
                <h3 className="font-bebas" style={{ color: '#C8A97E', fontSize: '22px', letterSpacing: '2px', marginBottom: '20px' }}>
                  Contact Us
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: '#B0B0B0', fontSize: '14px' }}>
                  <span>📞 +1 (416) 533-0941</span>
                  <a href="https://www.instagram.com/anbu.ink" target="_blank" rel="noopener noreferrer" style={{ color: '#C8A97E', textDecoration: 'none' }}>📷 @anbu.ink</a>
                  <span>📍 Toronto, ON, Canada</span>
                  <span>🕐 Mon–Sat: 11AM–7PM</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
