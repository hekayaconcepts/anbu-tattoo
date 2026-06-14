import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0A0A0A', borderTop: '1px solid rgba(200,169,126,0.15)', padding: '60px 40px 30px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }} className="footer-grid">
        {/* Logo + Tagline */}
        <div>
          <span className="font-bebas" style={{ fontSize: '28px', color: '#C8A97E', letterSpacing: '5px' }}>
            ANBU TATTOO
          </span>
          <p style={{ color: '#B0B0B0', fontSize: '14px', marginTop: '12px', lineHeight: '1.6' }}>
            Custom tattoo art in Toronto. Every piece tells a story.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bebas" style={{ color: '#C8A97E', fontSize: '18px', letterSpacing: '2px', marginBottom: '16px' }}>
            Quick Links
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {['Home', 'Portfolio', 'About', 'Services', 'Blog', 'Contact'].map((label) => (
              <Link key={label} href={label === 'Home' ? '/' : `/${label.toLowerCase().replace(' ', '-')}`} style={{ color: '#B0B0B0', textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s' }}>
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bebas" style={{ color: '#C8A97E', fontSize: '18px', letterSpacing: '2px', marginBottom: '16px' }}>
            Contact
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', color: '#B0B0B0', fontSize: '14px' }}>
            <span>📞 +1 (416) 533-0941</span>
            <span>📍 Toronto, ON, Canada</span>
            <span>🕐 Mon–Sat: 11AM–7PM</span>
            <span>🕐 Sun: Closed</span>
          </div>
        </div>

        {/* Social Icons */}
        <div>
          <h4 className="font-bebas" style={{ color: '#C8A97E', fontSize: '18px', letterSpacing: '2px', marginBottom: '16px' }}>
            Follow Us
          </h4>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href="https://www.instagram.com/anbu.ink" target="_blank" rel="noopener noreferrer" style={{ width: '44px', height: '44px', borderRadius: '50%', border: '1px solid #C8A97E', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C8A97E', textDecoration: 'none', fontSize: '18px', transition: 'all 0.3s' }}>
              📷
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ maxWidth: '1200px', margin: '40px auto 0', paddingTop: '24px', borderTop: '1px solid rgba(200,169,126,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <span style={{ color: '#B0B0B0', fontSize: '13px' }}>
          © {new Date().getFullYear()} Anbu Tattoo. All rights reserved.
        </span>
        <div style={{ display: 'flex', gap: '24px' }}>
          <Link href="/privacy" style={{ color: '#B0B0B0', fontSize: '13px', textDecoration: 'none' }}>Privacy Policy</Link>
          <Link href="/terms" style={{ color: '#B0B0B0', fontSize: '13px', textDecoration: 'none' }}>Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
