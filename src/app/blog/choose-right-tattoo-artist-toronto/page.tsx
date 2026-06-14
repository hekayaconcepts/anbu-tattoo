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
              <span style={{ color: '#C8A97E', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', border: '1px solid rgba(200,169,126,0.3)', padding: '4px 12px', borderRadius: '4px' }}>Guide</span>
              <span style={{ color: '#B0B0B0', fontSize: '13px' }}>June 10, 2026</span>
              <span style={{ color: '#B0B0B0', fontSize: '13px' }}>· 6 min read</span>
            </div>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(32px, 5vw, 48px)', color: '#FFFFFF', marginBottom: '32px', lineHeight: '1.2' }}>
              How to Choose the Right Tattoo Artist in Toronto
            </h1>
            <div style={{ color: '#B0B0B0', fontSize: '16px', lineHeight: '1.8' }}>
              <p style={{ marginBottom: '24px' }}>Toronto has hundreds of talented tattoo artists. Here's how to find the one whose style, professionalism, and approach matches your vision.</p>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', color: '#FFFFFF', margin: '32px 0 16px' }}>Start With Style, Not Location</h2>
              <p style={{ marginBottom: '24px' }}>The biggest mistake people make is choosing the closest artist. Your tattoo is permanent — travel across the city to find the right match. Major styles include Traditional, Neo-Traditional, Japanese, Blackwork, Realism, Watercolor, and Minimalist.</p>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', color: '#FFFFFF', margin: '32px 0 16px' }}>Research Like Your Tattoo Depends On It</h2>
              <p style={{ marginBottom: '16px' }}>Instagram is your best tool. Look for consistent quality, clean lines, and healed photos. Red flags: no portfolio, inconsistent quality, no shop photos.</p>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', color: '#FFFFFF', margin: '32px 0 16px' }}>Visit the Studio First</h2>
              <p style={{ marginBottom: '16px' }}>Check cleanliness, licensing, sterilization, and atmosphere. You should feel comfortable and welcomed.</p>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', color: '#FFFFFF', margin: '32px 0 16px' }}>Understand Pricing</h2>
              <p style={{ marginBottom: '24px' }}>Most Toronto artists charge $150-$300+ per hour. Deposits are typically $100-$200. Be wary of artists charging significantly below market rate.</p>
              <div style={{ borderTop: '1px solid rgba(200,169,126,0.2)', paddingTop: '24px', marginTop: '40px' }}>
                <p style={{ color: '#B0B0B0', fontSize: '14px' }}>Ready to book? <Link href="/booking" style={{ color: '#C8A97E' }}>Schedule a consultation</Link> with Anbu Tattoo Studio.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
