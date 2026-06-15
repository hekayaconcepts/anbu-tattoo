import Link from 'next/link'
import Image from 'next/image'

const studioImages = [
  { src: '/studio-interior.jpg', alt: 'Anbu Tattoo Studio Interior' },
  { src: '/tattoo-floral.jpg', alt: 'Floral Tattoo' },
  { src: '/tattoo-skull.jpg', alt: 'Skull Tattoo' },
  { src: '/studio-artwork.jpg', alt: 'Studio Artwork' },
]

export default function Hero() {
  return (
    <>
      {/* Mobile: Single column with one main image */}
      <div className="md:hidden" style={{ paddingTop: '60px' }}>
        {/* Main image */}
        <div style={{ position: 'relative', width: '100%', height: '50vh', minHeight: '300px', overflow: 'hidden' }}>
          <Image src="/studio-interior.jpg" alt="Anbu Tattoo Studio" fill priority style={{ objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.8) 100%)' }} />
          <div style={{ position: 'absolute', bottom: '32px', left: '16px', right: '16px' }}>
            <p style={{ color: '#C8A97E', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '8px' }}>Toronto's Premier Tattoo Studio</p>
            <h1 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '48px', color: '#FFFFFF', letterSpacing: '6px', lineHeight: '1', marginBottom: '8px' }}>ANBU TATTOO</h1>
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', color: '#B0B0B0', fontStyle: 'italic', marginBottom: '20px' }}>Custom Tattoo Art</p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <Link href="/booking" style={{ color: '#0A0A0A', backgroundColor: '#C8A97E', padding: '12px 24px', borderRadius: '4px', textDecoration: 'none', fontSize: '13px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', flex: 1, textAlign: 'center' }}>Book Now</Link>
              <Link href="/portfolio" style={{ color: '#C8A97E', padding: '12px 24px', borderRadius: '4px', textDecoration: 'none', fontSize: '13px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', border: '1px solid #C8A97E', flex: 1, textAlign: 'center' }}>Portfolio</Link>
            </div>
          </div>
        </div>

        {/* Thumbnail strip */}
        <div style={{ display: 'flex', gap: '8px', padding: '16px', overflowX: 'auto' }}>
          {studioImages.map((img, i) => (
            <Link key={i} href="/portfolio" style={{ flexShrink: 0, width: '80px', height: '80px', borderRadius: '6px', overflow: 'hidden', position: 'relative' }}>
              <Image src={img.src} alt={img.alt} fill style={{ objectFit: 'cover' }} sizes="80px" />
            </Link>
          ))}
        </div>
      </div>

      {/* Desktop: Full hero with background */}
      <section className="hidden md:flex" style={{
        position: 'relative', height: '100vh', minHeight: '700px', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
      }}>
        <Image src="/studio-interior.jpg" alt="Anbu Tattoo Studio" fill priority style={{ objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.6) 50%, rgba(10,10,10,0.85) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 40px', maxWidth: '800px' }}>
          <p style={{ color: '#C8A97E', fontSize: '13px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '20px' }}>Toronto's Premier Tattoo Studio</p>
          <h1 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(64px, 10vw, 110px)', color: '#FFFFFF', letterSpacing: '10px', lineHeight: '1', marginBottom: '20px' }}>ANBU TATTOO</h1>
          <p style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(20px, 3vw, 28px)', color: '#B0B0B0', fontStyle: 'italic', marginBottom: '12px' }}>Custom Tattoo Art in Toronto</p>
          <p style={{ color: '#B0B0B0', fontSize: '15px', maxWidth: '480px', margin: '0 auto 36px', lineHeight: '1.6' }}>Every piece is uniquely designed to tell your story. Book your consultation today.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <Link href="/booking" style={{ color: '#0A0A0A', backgroundColor: '#C8A97E', padding: '14px 36px', borderRadius: '4px', textDecoration: 'none', fontSize: '14px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>Book Now</Link>
            <Link href="/portfolio" style={{ color: '#C8A97E', padding: '14px 36px', borderRadius: '4px', textDecoration: 'none', fontSize: '14px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', border: '2px solid #C8A97E' }}>View Portfolio</Link>
          </div>
        </div>
      </section>
    </>
  )
}
