'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const featuredWorks = [
  { id: 1, title: 'Floral Sleeve', category: 'Custom Design', img: '/tattoo-floral.jpg' },
  { id: 2, title: 'Skull with Cap', category: 'Custom Design', img: '/tattoo-skull.jpg' },
  { id: 3, title: 'Studio Interior', category: 'Studio', img: '/studio-interior.jpg' },
  { id: 4, title: 'Artwork Wall', category: 'Studio', img: '/studio-artwork.jpg' },
  { id: 5, title: 'Studio Session', category: 'Studio', img: '/studio-interior-2.jpg' },
  { id: 6, title: 'Storefront', category: 'Studio', img: '/storefront.jpg' },
];

export default function FeaturedWork() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check(); window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const nextSlide = () => setCurrentSlide((p) => (p + 1) % featuredWorks.length);
  const prevSlide = () => setCurrentSlide((p) => (p - 1 + featuredWorks.length) % featuredWorks.length);

  // Desktop/tablet: 3-column grid
  if (!isMobile) {
    return (
      <section style={{ padding: '100px 40px', backgroundColor: '#0A0A0A' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <p style={{ color: '#C8A97E', fontSize: '13px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '12px' }}>Our Work</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(32px, 5vw, 48px)', color: '#FFFFFF', marginBottom: '16px' }}>Featured Tattoos</h2>
            <p style={{ color: '#B0B0B0', fontSize: '16px', maxWidth: '500px', margin: '0 auto' }}>A selection of our recent custom pieces</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {featuredWorks.map((work) => (
              <Link key={work.id} href="/portfolio" style={{ textDecoration: 'none' }}>
                <div style={{ aspectRatio: '1', borderRadius: '8px', overflow: 'hidden', position: 'relative', cursor: 'pointer', transition: 'transform 0.3s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}>
                  <Image src={work.img} alt={work.title} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 50vw, 33vw" />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px 16px 12px', background: 'linear-gradient(to top, rgba(10,10,10,0.9), transparent)' }}>
                    <span style={{ color: '#C8A97E', fontSize: '14px', fontWeight: 600 }}>{work.title}</span>
                    <br /><span style={{ color: '#B0B0B0', fontSize: '11px' }}>{work.category}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link href="/portfolio" style={{ color: '#C8A97E', textDecoration: 'none', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', borderBottom: '1px solid #C8A97E', paddingBottom: '4px' }}>See Full Portfolio →</Link>
          </div>
        </div>
      </section>
    );
  }

  // Mobile: single-column carousel with explicit image sizing
  const work = featuredWorks[currentSlide];
  return (
    <section style={{ padding: '60px 16px', backgroundColor: '#0A0A0A' }}>
      <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <p style={{ color: '#C8A97E', fontSize: '13px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '12px' }}>Our Work</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', color: '#FFFFFF', marginBottom: '8px' }}>Featured Tattoos</h2>
          <p style={{ color: '#B0B0B0', fontSize: '14px' }}>Swipe to browse our work</p>
        </div>

        <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden' }}>
          <div style={{ display: 'flex', transform: `translateX(-${currentSlide * 100}%)`, transition: 'transform 0.4s ease' }}>
            {featuredWorks.map((w) => (
              <div key={w.id} style={{ minWidth: '100%', flexShrink: 0 }}>
                <div style={{ position: 'relative', width: '100%', paddingBottom: '100%' }}>
                  <Image src={w.img} alt={w.title} fill style={{ objectFit: 'cover' }} sizes="100vw" priority={w.id === 1} />
                </div>
                <div style={{ padding: '16px 0 8px' }}>
                  <span style={{ color: '#C8A97E', fontSize: '18px', fontWeight: 600 }}>{w.title}</span>
                  <br /><span style={{ color: '#B0B0B0', fontSize: '13px' }}>{w.category}</span>
                </div>
              </div>
            ))}
          </div>
          <button onClick={prevSlide} style={{ position: 'absolute', left: '8px', top: '40%', transform: 'translateY(-50%)', background: 'rgba(10,10,10,0.7)', border: '1px solid #C8A97E', color: '#C8A97E', width: '36px', height: '36px', borderRadius: '50%', cursor: 'pointer', fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>‹</button>
          <button onClick={nextSlide} style={{ position: 'absolute', right: '8px', top: '40%', transform: 'translateY(-50%)', background: 'rgba(10,10,10,0.7)', border: '1px solid #C8A97E', color: '#C8A97E', width: '36px', height: '36px', borderRadius: '50%', cursor: 'pointer', fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>›</button>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '16px' }}>
          {featuredWorks.map((_, idx) => (
            <button key={idx} onClick={() => setCurrentSlide(idx)} style={{ width: '8px', height: '8px', borderRadius: '50%', border: 'none', backgroundColor: idx === currentSlide ? '#C8A97E' : 'rgba(200,169,126,0.3)', cursor: 'pointer', padding: 0 }} />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <Link href="/portfolio" style={{ color: '#C8A97E', textDecoration: 'none', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', borderBottom: '1px solid #C8A97E', paddingBottom: '4px' }}>See Full Portfolio →</Link>
        </div>
      </div>
    </section>
  );
}
