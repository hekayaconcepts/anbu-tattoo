'use client';

import Link from 'next/link';

export default function InstagramFeed() {
  const posts = Array.from({ length: 9 }, (_, i) => i + 1);
  const gradients = [
    'linear-gradient(135deg, #2a1a0e 0%, #3e2d1a 100%)',
    'linear-gradient(135deg, #1a0f1e 0%, #2d1a3e 100%)',
    'linear-gradient(135deg, #0f1a1e 0%, #1a2d3e 100%)',
    'linear-gradient(135deg, #1e0f0f 0%, #3e1a1a 100%)',
    'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
    'linear-gradient(135deg, #1e1a0f 0%, #3e2d1a 100%)',
    'linear-gradient(135deg, #0f1a0f 0%, #1a3e1a 100%)',
    'linear-gradient(135deg, #1a0f0f 0%, #3e1a2d 100%)',
    'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 100%)',
  ];

  return (
    <section style={{ padding: '100px 40px', backgroundColor: '#0A0A0A' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <p style={{ color: '#C8A97E', fontSize: '13px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '12px' }}>@anbu.ink</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(32px, 5vw, 48px)', color: '#FFFFFF', marginBottom: '16px' }}>Follow Our Work</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px' }}>
          {posts.map((_, i) => (
            <a key={i} href="https://www.instagram.com/anbu.ink" target="_blank" rel="noopener noreferrer" style={{
              aspectRatio: '1', position: 'relative', overflow: 'hidden',
              background: gradients[i % gradients.length],
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              textDecoration: 'none', transition: 'opacity 0.3s',
            }} onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.7'; }}
               onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}>
              <div style={{ fontSize: '32px', opacity: 0.4 }}>📷</div>
              <div style={{
                position: 'absolute', inset: 0,
                backgroundColor: 'rgba(10,10,10,0.7)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                opacity: 0, transition: 'opacity 0.3s',
                pointerEvents: 'none',
              }}>
                <span style={{ color: '#C8A97E', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase' }}>View</span>
              </div>
            </a>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href="https://www.instagram.com/anbu.ink" target="_blank" rel="noopener noreferrer"
            style={{ color: '#C8A97E', textDecoration: 'none', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', borderBottom: '1px solid #C8A97E', paddingBottom: '4px' }}>
            Follow @anbu.ink →
          </a>
        </div>
      </div>
    </section>
  );
}
