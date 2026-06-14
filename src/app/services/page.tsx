'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const faqs = [
  { q: 'How much does a tattoo cost?', a: 'Tattoo pricing varies based on size, complexity, and placement. Small pieces start at $200. We provide quotes during your free consultation.' },
  { q: 'Do I need an appointment?', a: 'Yes, we work by appointment only. Book a free consultation to discuss your design, then we schedule your tattoo session.' },
  { q: 'Is it safe?', a: 'Absolutely. We use single-use needles, sterilized equipment, and follow all health and safety regulations. Your safety is our priority.' },
  { q: 'How should I prepare?', a: 'Get a good night sleep, eat a full meal, stay hydrated, and avoid alcohol 24 hours before your appointment. Wear comfortable clothing.' },
  { q: 'What about aftercare?', a: 'We provide detailed aftercare instructions after your session. Keep the tattoo clean, moisturized, and out of direct sunlight during healing.' },
  { q: 'Can I bring my own design?', a: 'Yes! We love working with client ideas. We can refine your concept or create something entirely new based on your inspiration.' },
];

export default function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px' }}>
        <section style={{ padding: '80px 40px', textAlign: 'center', backgroundColor: '#0A0A0A' }}>
          <p style={{ color: '#C8A97E', fontSize: '13px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '12px' }}>
            Our Services
          </p>
          <h1 className="font-playfair" style={{ fontSize: 'clamp(36px, 6vw, 56px)', color: '#FFFFFF', marginBottom: '16px' }}>
            What We Offer
          </h1>
        </section>

        {/* Services */}
        <section style={{ padding: '80px 40px', backgroundColor: '#1A1A1A' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 className="font-playfair" style={{ fontSize: '32px', color: '#FFFFFF', textAlign: 'center', marginBottom: '50px' }}>
              Tattoo Styles & Services
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="svc-grid">
              {[
                { icon: '✒️', name: 'Custom Design', desc: 'Original artwork created specifically for you. From concept to completion.', price: 'From $200' },
                { icon: '🎨', name: 'Cover-up', desc: 'Transform unwanted tattoos with expert cover-up techniques.', price: 'From $250' },
                { icon: '✨', name: 'Touch-up', desc: 'Refresh and restore faded tattoos to their original vibrancy.', price: 'From $100' },
                { icon: '🗾', name: 'Japanese Style', desc: 'Traditional and neo-Japanese tattoo art with bold lines and rich imagery.', price: 'From $300' },
                { icon: '🔤', name: 'Lettering', desc: 'Custom script, calligraphy, and typography tattoos.', price: 'From $150' },
                { icon: '💬', name: 'Consultation', desc: 'Free consultation to discuss your ideas and plan your tattoo.', price: 'Free' },
              ].map((s, i) => (
                <div key={i} style={{ backgroundColor: '#0A0A0A', border: '1px solid rgba(200,169,126,0.1)', borderRadius: '8px', padding: '36px 28px', textAlign: 'center' }}>
                  <div style={{ fontSize: '36px', marginBottom: '16px' }}>{s.icon}</div>
                  <h3 className="font-bebas" style={{ color: '#C8A97E', fontSize: '20px', letterSpacing: '2px', marginBottom: '12px' }}>{s.name}</h3>
                  <p style={{ color: '#B0B0B0', fontSize: '14px', lineHeight: '1.6', marginBottom: '16px' }}>{s.desc}</p>
                  <span style={{ color: '#C8A97E', fontSize: '16px', fontWeight: 600 }}>{s.price}</span>
                </div>
              ))}
            </div>
            
          </div>
        </section>

        {/* Booking Process */}
        <section style={{ padding: '80px 40px', backgroundColor: '#0A0A0A' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 className="font-playfair" style={{ fontSize: '32px', color: '#FFFFFF', textAlign: 'center', marginBottom: '50px' }}>
              Booking Process
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }} className="process-grid">
              {[
                { step: '01', title: 'Consultation', desc: 'Discuss your ideas and get a quote' },
                { step: '02', title: 'Design', desc: 'We create your custom design' },
                { step: '03', title: 'Deposit', desc: 'Secure your appointment with $100 deposit' },
                { step: '04', title: 'Tattoo Day', desc: 'Get inked in our professional studio' },
              ].map((p, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <span className="font-bebas" style={{ color: '#C8A97E', fontSize: '48px', letterSpacing: '2px', opacity: 0.3 }}>{p.step}</span>
                  <h3 style={{ color: '#FFFFFF', fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>{p.title}</h3>
                  <p style={{ color: '#B0B0B0', fontSize: '14px' }}>{p.desc}</p>
                </div>
              ))}
            </div>
            
          </div>
        </section>

        {/* Aftercare */}
        <section style={{ padding: '80px 40px', backgroundColor: '#1A1A1A' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="font-playfair" style={{ fontSize: '32px', color: '#FFFFFF', textAlign: 'center', marginBottom: '40px' }}>
              Aftercare Instructions
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="aftercare-grid">
              {[
                { icon: '🧼', title: 'Keep it Clean', desc: 'Wash gently with unscented soap 2-3 times daily' },
                { icon: '💧', title: 'Moisturize', desc: 'Apply thin layer of recommended ointment' },
                { icon: '☀️', title: 'Avoid Sun', desc: 'Keep tattoo out of direct sunlight during healing' },
                { icon: '🚫', title: 'No Picking', desc: 'Let scabs fall off naturally — don\'t pick or scratch' },
              ].map((a, i) => (
                <div key={i} style={{ backgroundColor: '#0A0A0A', padding: '24px', borderRadius: '8px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '28px' }}>{a.icon}</span>
                  <div>
                    <h4 style={{ color: '#C8A97E', fontSize: '16px', fontWeight: 600, marginBottom: '4px' }}>{a.title}</h4>
                    <p style={{ color: '#B0B0B0', fontSize: '14px' }}>{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: '80px 40px', backgroundColor: '#0A0A0A' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="font-playfair" style={{ fontSize: '32px', color: '#FFFFFF', textAlign: 'center', marginBottom: '50px' }}>
              Frequently Asked Questions
            </h2>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: '1px solid rgba(200,169,126,0.1)', marginBottom: '16px' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    backgroundColor: 'transparent',
                    border: 'none',
                    padding: '16px 0',
                    color: '#FFFFFF',
                    fontSize: '16px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  {faq.q}
                  <span style={{ color: '#C8A97E', fontSize: '20px' }}>{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <p style={{ color: '#B0B0B0', fontSize: '14px', lineHeight: '1.6', paddingBottom: '16px', paddingRight: '40px' }}>
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
