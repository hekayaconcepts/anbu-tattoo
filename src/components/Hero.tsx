'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check(); window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section style={{ position: 'relative', height: '100vh', minHeight: '700px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      {/* Background image */}
      <Image src="/studio-interior.jpg" alt="Anbu Tattoo Studio" fill priority style={{ objectFit: 'cover', zIndex: 0 }} />
      {/* Dark overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.6) 50%, rgba(10,10,10,0.85) 100%)', zIndex: 1 }} />

      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 24px', maxWidth: '900px' }}>
        <p style={{ color: '#C8A97E', fontSize: '14px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '24px', fontFamily: 'Inter, sans-serif' }}>
          Toronto's Premier Tattoo Studio
        </p>
        <h1 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(56px, 12vw, 120px)', color: '#FFFFFF', letterSpacing: '12px', lineHeight: '1', marginBottom: '24px' }}>
          ANBU TATTOO
        </h1>
        <p style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(20px, 3vw, 32px)', color: '#B0B0B0', fontStyle: 'italic', marginBottom: '12px' }}>
          Custom Tattoo Art in Toronto
        </p>
        <p style={{ color: '#B0B0B0', fontSize: '16px', maxWidth: '500px', margin: '0 auto 40px', lineHeight: '1.6' }}>
          Every piece is uniquely designed to tell your story. Book your consultation today.
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/booking" style={{ color: '#0A0A0A', backgroundColor: '#C8A97E', padding: '16px 40px', borderRadius: '4px', textDecoration: 'none', fontSize: '16px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', display: 'inline-block', transition: 'all 0.3s' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#D4B896'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#C8A97E'; e.currentTarget.style.transform = 'translateY(0)'; }}>
            Book Now
          </Link>
          <Link href="/portfolio" style={{ color: '#C8A97E', backgroundColor: 'transparent', padding: '16px 40px', borderRadius: '4px', textDecoration: 'none', fontSize: '16px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', border: '2px solid #C8A97E', display: 'inline-block', transition: 'all 0.3s' }}>
            View Portfolio
          </Link>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <span style={{ color: '#B0B0B0', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{ width: '2px', height: '40px', background: 'linear-gradient(to bottom, #C8A97E, transparent)', animation: 'scrollBounce 2s ease-in-out infinite' }} />
      </div>
    </section>
  );
}
