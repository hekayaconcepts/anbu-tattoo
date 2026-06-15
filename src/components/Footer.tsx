import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0A0A0A', borderTop: '1px solid rgba(200,169,126,0.1)', padding: '48px 16px 24px', color: '#B0B0B0' }}>
      <div className="footer-grid" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div>
          <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '32px', letterSpacing: '6px', color: '#C8A97E', marginBottom: '12px', lineHeight: 1.1 }}>ANBU<br/>TATTOO</h3>
          <p style={{ fontSize: '15px', lineHeight: 1.6, maxWidth: '280px' }}>Custom tattoo art in Toronto. Every piece tells a story.</p>
        </div>
        <div>
          <h4 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '20px', letterSpacing: '2px', color: '#C8A97E', marginBottom: '12px' }}>Quick Links</h4>
          <div className="quick-links">
            <Link href="/">Home</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <h4 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '20px', letterSpacing: '2px', color: '#C8A97E', marginBottom: '12px' }}>Contact</h4>
          <p style={{ fontSize: '14px', marginBottom: '8px' }}>📞 +1 416-533-0000</p>
          <p style={{ fontSize: '14px', marginBottom: '8px' }}>📍 Toronto, ON, Canada</p>
          <p style={{ fontSize: '14px', marginBottom: '4px' }}>🕒 Mon-Sat: 11AM - 7PM</p>
          <p style={{ fontSize: '14px' }}>🕒 Sun: Closed</p>
        </div>
      </div>
      <div style={{ maxWidth: '1200px', margin: '40px auto 0', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: '#808080' }}>
        <div>© 2026 Anbu Tattoo. All rights reserved.</div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>
      </div>
      <style>{`
        .footer-grid { display: grid; grid-template-columns: 1fr; gap: 36px; }
        .quick-links { display: flex; flex-wrap: wrap; gap: 12px 24px; }
        .quick-links a { color: #B0B0B0; font-size: 14px; text-decoration: none; }
        .quick-links a:hover { color: #C8A97E; }
        @media (min-width: 768px) {
          .footer-grid { grid-template-columns: 1.5fr 1fr 1fr; gap: 48px; }
          .quick-links { display: block; }
          .quick-links a { display: block; margin-bottom: 8px; }
        }
      `}</style>
    </footer>
  )
}
