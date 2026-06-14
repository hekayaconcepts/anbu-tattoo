'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px' }}>
        <section style={{ padding: '80px 40px', textAlign: 'center', backgroundColor: '#0A0A0A' }}>
          <p style={{ color: '#C8A97E', fontSize: '13px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '12px' }}>
            Contact
          </p>
          <h1 className="font-playfair" style={{ fontSize: 'clamp(36px, 6vw, 56px)', color: '#FFFFFF', marginBottom: '16px' }}>
            Get In Touch
          </h1>
        </section>

        <section style={{ padding: '80px 40px', backgroundColor: '#1A1A1A' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }} className="contact-grid">
            {/* Form */}
            <div>
              {submitted ? (
                <div style={{ backgroundColor: '#0A0A0A', padding: '60px 40px', borderRadius: '8px', textAlign: 'center', border: '1px solid rgba(200,169,126,0.2)' }}>
                  <div style={{ fontSize: '48px', marginBottom: '20px' }}>✅</div>
                  <h2 className="font-playfair" style={{ color: '#FFFFFF', fontSize: '28px', marginBottom: '16px' }}>Message Sent!</h2>
                  <p style={{ color: '#B0B0B0', fontSize: '16px' }}>We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div>
                    <label style={{ color: '#C8A97E', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Name *</label>
                    <input type="text" required style={{ width: '100%', padding: '14px 16px', backgroundColor: '#0A0A0A', border: '1px solid rgba(200,169,126,0.2)', borderRadius: '4px', color: '#FFFFFF', fontSize: '16px', outline: 'none', fontFamily: 'Inter, sans-serif' }} />
                  </div>
                  <div>
                    <label style={{ color: '#C8A97E', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Email *</label>
                    <input type="email" required style={{ width: '100%', padding: '14px 16px', backgroundColor: '#0A0A0A', border: '1px solid rgba(200,169,126,0.2)', borderRadius: '4px', color: '#FFFFFF', fontSize: '16px', outline: 'none', fontFamily: 'Inter, sans-serif' }} />
                  </div>
                  <div>
                    <label style={{ color: '#C8A97E', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Message *</label>
                    <textarea required rows={6} style={{ width: '100%', padding: '14px 16px', backgroundColor: '#0A0A0A', border: '1px solid rgba(200,169,126,0.2)', borderRadius: '4px', color: '#FFFFFF', fontSize: '16px', outline: 'none', fontFamily: 'Inter, sans-serif', resize: 'vertical' }} />
                  </div>
                  <button type="submit" style={{ color: '#0A0A0A', backgroundColor: '#C8A97E', padding: '16px 40px', borderRadius: '4px', border: 'none', fontSize: '16px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', cursor: 'pointer', marginTop: '10px' }}>Send Message</button>
                </form>
              )}
            </div>

            {/* Info + Map */}
            <div>
              <div style={{ marginBottom: '32px' }}>
                <h3 className="font-bebas" style={{ color: '#C8A97E', fontSize: '22px', letterSpacing: '2px', marginBottom: '20px' }}>
                  Studio Location
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '20px' }}>📍</span>
                    <div>
                      <h4 style={{ color: '#FFFFFF', fontSize: '14px', fontWeight: 600 }}>Address</h4>
                      <p style={{ color: '#B0B0B0', fontSize: '14px' }}>Toronto, ON, Canada</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '20px' }}>📞</span>
                    <div>
                      <h4 style={{ color: '#FFFFFF', fontSize: '14px', fontWeight: 600 }}>Phone</h4>
                      <p style={{ color: '#B0B0B0', fontSize: '14px' }}>+1 (416) 533-0941</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '20px' }}>📷</span>
                    <div>
                      <h4 style={{ color: '#FFFFFF', fontSize: '14px', fontWeight: 600 }}>Instagram</h4>
                      <a href="https://www.instagram.com/anbu.ink" target="_blank" rel="noopener noreferrer" style={{ color: '#C8A97E', fontSize: '14px', textDecoration: 'none' }}>@anbu.ink</a>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '20px' }}>🕐</span>
                    <div>
                      <h4 style={{ color: '#FFFFFF', fontSize: '14px', fontWeight: 600 }}>Hours</h4>
                      <p style={{ color: '#B0B0B0', fontSize: '14px' }}>Mon–Sat: 11AM–7PM</p>
                      <p style={{ color: '#B0B0B0', fontSize: '14px' }}>Sun: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Storefront photo */}
              <div style={{ aspectRatio: '16/9', borderRadius: '8px', overflow: 'hidden', position: 'relative', border: '1px solid rgba(200,169,126,0.15)' }}>
                <Image src="/storefront.jpg" alt="Anbu Tattoo Studio - Toronto" fill style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px', background: 'linear-gradient(to top, rgba(10,10,10,0.8), transparent)' }}>
                  <span style={{ color: '#C8A97E', fontSize: '13px', letterSpacing: '1px' }}>📍 Toronto, ON — Visit Our Studio</span>
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
