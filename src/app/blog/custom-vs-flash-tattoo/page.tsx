import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function BlogPost() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px' }}>
        <section style={{ padding: '60px 40px', backgroundColor: '#0A0A0A' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Link href="/blog" style={{ color: '#C8A97E', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none', marginBottom: '24px', display: 'inline-block' }}>← Back to Blog</Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px', flexWrap: 'wrap' }}>
              <span style={{ color: '#C8A97E', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', border: '1px solid rgba(200,169,126,0.3)', padding: '4px 12px', borderRadius: '4px' }}>Education</span>
              <span style={{ color: '#B0B0B0', fontSize: '13px' }}>June 6, 2026</span>
              <span style={{ color: '#B0B0B0', fontSize: '13px' }}>· 4 min read</span>
            </div>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(32px, 5vw, 48px)', color: '#FFFFFF', marginBottom: '32px', lineHeight: '1.2' }}>
              Custom vs Flash Tattoo: What's the Difference?
            </h1>
            <div style={{ color: '#B0B0B0', fontSize: '16px', lineHeight: '1.8' }}>
              <p style={{ marginBottom: '24px' }}>Not sure whether to go with a custom design or pick from flash? Here's a breakdown of both approaches.</p>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', color: '#FFFFFF', margin: '32px 0 16px' }}>What Is Flash?</h2>
              <p style={{ marginBottom: '16px' }}>Flash tattoos are pre-designed artworks. Pros: lower cost, faster, you see what you get. Cons: less personal, limited selection.</p>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', color: '#FFFFFF', margin: '32px 0 16px' }}>What Is Custom?</h2>
              <p style={{ marginBottom: '16px' }}>Custom tattoos are designed from scratch for you. Pros: unique, personal, optimized for your body. Cons: higher cost, longer process.</p>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', color: '#FFFFFF', margin: '32px 0 16px' }}>The Hybrid Approach</h2>
              <p style={{ marginBottom: '24px' }}>Many best tattoos fall in between: modified flash, artist's interpretation, or collaborative evolution.</p>
              <div style={{ borderTop: '1px solid rgba(200,169,126,0.2)', paddingTop: '24px', marginTop: '40px' }}>
                <p style={{ color: '#B0B0B0', fontSize: '14px' }}>Want a custom piece? <Link href="/booking" style={{ color: '#C8A97E' }}>Book a consultation</Link> to discuss your vision.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
