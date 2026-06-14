'use client';

import Link from 'next/link';

export default function BookingCTA() {
  return (
    <section style={{ padding: '100px 40px', backgroundColor: '#1A1A1A', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative */}
      <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', borderRadius: '50%', border: '1px solid rgba(200,169,126,0.05)' }} />
      <div style={{ position: 'absolute', bottom: '-50px', left: '-50px', width: '200px', height: '200px', borderRadius: '50%', border: '1px solid rgba(200,169,126,0.08)' }} />

      <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <p style={{ color: '#C8A97E', fontSize: '13px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px' }}>
          Ready to Get Inked?
        </p>
        <h2 className="font-playfair" style={{ fontSize: 'clamp(36px, 5vw, 52px)', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.2' }}>
          Book Your Consultation
        </h2>
        <p style={{ color: '#B0B0B0', fontSize: '18px', lineHeight: '1.6', marginBottom: '40px', maxWidth: '500px', margin: '0 auto 40px' }}>
          Every great tattoo starts with a conversation. Let's discuss your vision and create something extraordinary together.
        </p>
        <Link
          href="/booking"
          style={{
            color: '#0A0A0A',
            backgroundColor: '#C8A97E',
            padding: '18px 48px',
            borderRadius: '4px',
            textDecoration: 'none',
            fontSize: '16px',
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            transition: 'all 0.3s',
            display: 'inline-block',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#D4B896'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#C8A97E'; e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          Book Now
        </Link>
      </div>
    </section>
  );
}
