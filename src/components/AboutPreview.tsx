export default function AboutPreview() {
  return (
    <section style={{ padding: '100px 40px', backgroundColor: '#1A1A1A' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }} className="about-grid">
        {/* Image */}
        <div style={{ position: 'relative' }}>
          <div style={{
            aspectRatio: '3/4',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #2a1a0e 0%, #1a2a3e 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '16px',
          }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', border: '2px solid rgba(200,169,126,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '36px' }}>
              👤
            </div>
            <span style={{ color: '#C8A97E', fontSize: '16px', fontWeight: 600 }}>The Artist</span>
            <span style={{ color: '#B0B0B0', fontSize: '13px' }}>Photo coming soon</span>
          </div>
          {/* Decorative frame */}
          <div style={{ position: 'absolute', top: '-16px', left: '-16px', right: '16px', bottom: '16px', border: '1px solid rgba(200,169,126,0.15)', borderRadius: '8px', pointerEvents: 'none' }} />
        </div>

        {/* Text */}
        <div>
          <p style={{ color: '#C8A97E', fontSize: '13px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '12px' }}>
            About the Artist
          </p>
          <h2 className="font-playfair" style={{ fontSize: 'clamp(32px, 4vw, 44px)', color: '#FFFFFF', marginBottom: '24px', lineHeight: '1.2' }}>
            Crafting Unique Stories on Skin
          </h2>
          <p style={{ color: '#B0B0B0', fontSize: '16px', lineHeight: '1.8', marginBottom: '20px' }}>
            With years of experience in custom tattoo artistry, we specialize in creating one-of-a-kind designs that reflect your personal journey. Every piece is carefully crafted with attention to detail and artistic excellence.
          </p>
          <p style={{ color: '#B0B0B0', fontSize: '16px', lineHeight: '1.8', marginBottom: '32px' }}>
            From delicate minimalist pieces to bold traditional styles, we work closely with each client to bring their vision to life in ink.
          </p>
          <a
            href="/about"
            style={{
              color: '#C8A97E',
              textDecoration: 'none',
              fontSize: '14px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              borderBottom: '1px solid #C8A97E',
              paddingBottom: '4px',
            }}
          >
            Learn More →
          </a>
        </div>
      </div>

      
    </section>
  );
}
