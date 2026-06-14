'use client';

import { useState, useEffect } from 'react';

const services = [
  { icon: '✒️', name: 'Custom Tattoo Design', description: 'Original designs created uniquely for you. Collaborative process from concept to completion.', price: 'From $200' },
  { icon: '🎨', name: 'Cover-up Work', description: 'Transform old or unwanted tattoos into beautiful new pieces with expert cover-up techniques.', price: 'From $250' },
  { icon: '✨', name: 'Touch-up & Refresh', description: 'Restore faded tattoos and enhance existing work to look fresh and vibrant again.', price: 'From $100' },
  { icon: '💬', name: 'Consultation', description: 'Discuss your ideas, get sizing advice, and plan your perfect tattoo with no obligation.', price: 'Free' },
];

export default function ServicesPreview() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section style={{ padding: isMobile ? '60px 20px' : '100px 40px', backgroundColor: '#0A0A0A' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <p style={{ color: '#C8A97E', fontSize: '13px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '12px' }}>What We Offer</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(32px, 5vw, 48px)', color: '#FFFFFF', marginBottom: '16px' }}>Our Services</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', gap: '20px' }}>
          {services.map((service, i) => (
            <div
              key={i}
              style={{
                backgroundColor: '#1A1A1A',
                border: '1px solid rgba(200,169,126,0.1)',
                borderRadius: '8px',
                padding: isMobile ? '32px 24px' : '40px 28px',
                textAlign: 'center',
                transition: 'all 0.3s',
              }}
            >
              <div style={{ fontSize: '36px', marginBottom: '16px' }}>{service.icon}</div>
              <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#C8A97E', fontSize: '20px', letterSpacing: '2px', marginBottom: '12px' }}>{service.name}</h3>
              <p style={{ color: '#B0B0B0', fontSize: '14px', lineHeight: '1.6', marginBottom: '16px' }}>{service.description}</p>
              <span style={{ color: '#C8A97E', fontSize: '16px', fontWeight: 600 }}>{service.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
