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
              <span style={{ color: '#C8A97E', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', border: '1px solid rgba(200,169,126,0.3)', padding: '4px 12px', borderRadius: '4px' }}>Aftercare</span>
              <span style={{ color: '#B0B0B0', fontSize: '13px' }}>June 14, 2026</span>
              <span style={{ color: '#B0B0B0', fontSize: '13px' }}>· 5 min read</span>
            </div>

            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(32px, 5vw, 48px)', color: '#FFFFFF', marginBottom: '32px', lineHeight: '1.2' }}>
              Tattoo Aftercare: Complete Guide for New Tattoos
            </h1>

            <div style={{ color: '#B0B0B0', fontSize: '16px', lineHeight: '1.8' }}>
              <p style={{ marginBottom: '24px' }}>Getting a new tattoo is exciting — but proper aftercare is what keeps it looking vibrant for years. Here's everything you need to know about healing your new ink, from the first 24 hours to long-term care.</p>

              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', color: '#FFFFFF', margin: '32px 0 16px' }}>Why Aftercare Matters</h2>
              <p style={{ marginBottom: '24px' }}>A tattoo is essentially an open wound. How you treat it during the healing process directly affects how it looks for the rest of your life. Poor aftercare can lead to fading, infection, scarring, and uneven color.</p>

              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', color: '#FFFFFF', margin: '32px 0 16px' }}>The First 24 Hours</h2>
              <p style={{ marginBottom: '16px' }}><strong style={{ color: '#FFFFFF' }}>Leave the bandage on</strong> for at least 2-4 hours. When you remove it, wash your hands thoroughly before touching the tattoo.</p>
              <p style={{ marginBottom: '24px' }}><strong style={{ color: '#FFFFFF' }}>Gently wash</strong> with lukewarm water and unscented antibacterial soap. Use your fingertips — never a washcloth. Pat dry with a clean paper towel.</p>

              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', color: '#FFFFFF', margin: '32px 0 16px' }}>Week 1: The Healing Process</h2>
              <ul style={{ marginBottom: '24px', paddingLeft: '20px' }}>
                <li style={{ marginBottom: '8px' }}>Wash 2-3 times daily with unscented soap</li>
                <li style={{ marginBottom: '8px' }}>Apply thin layers of aftercare ointment after each wash</li>
                <li style={{ marginBottom: '8px' }}>Expect peeling and flaking — this is normal</li>
                <li style={{ marginBottom: '8px' }}>Do NOT pick, scratch, or peel flaking skin</li>
                <li style={{ marginBottom: '8px' }}>Avoid submerging the tattoo in water</li>
              </ul>

              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', color: '#FFFFFF', margin: '32px 0 16px' }}>Long-Term Care</h2>
              <p style={{ marginBottom: '24px' }}>Always use sunscreen on your tattoos (UV rays cause fading). Keep skin moisturized. Stay hydrated. Touch-ups are normal — most tattoos need one after initial healing.</p>

              <div style={{ borderTop: '1px solid rgba(200,169,126,0.2)', paddingTop: '24px', marginTop: '40px' }}>
                <p style={{ color: '#B0B0B0', fontSize: '14px' }}>Have questions about your new tattoo? <a href="mailto:anbu.ink@email.com" style={{ color: '#C8A97E' }}>Contact us</a> or <Link href="/booking" style={{ color: '#C8A97E' }}>book a consultation</Link>.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
