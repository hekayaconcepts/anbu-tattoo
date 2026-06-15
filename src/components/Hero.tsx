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
      {/* Mobile Hero — starts below the 56px fixed header */}
      <div style={{ paddingTop: '8px' }}>
        {/* Main image */}
        <div style={{ position: 'relative', width: '100%', height: '50vh', minHeight: '280px', overflow: 'hidden' }}>
          <Image src="/studio-interior.jpg" alt="Anbu Tattoo Studio" fill priority style={{ objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.85) 100%)' }} />
          <div style={{ position: 'absolute', bottom: '24px', left: '16px', right: '16px' }}>
            <p style={{ color: '#C8A97E', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '6px' }}>Toronto's Premier Tattoo Studio</p>
            <h1 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '44px', color: '#FFFFFF', letterSpacing: '5px', lineHeight: '1', marginBottom: '6px' }}>ANBU TATTOO</h1>
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '16px', color: '#B0B0B0', fontStyle: 'italic', marginBottom: '16px' }}>Custom Tattoo Art</p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <Link href="/booking" style={{ color: '#0A0A0A', backgroundColor: '#C8A97E', padding: '12px 20px', borderRadius: '4px', textDecoration: 'none', fontSize: '12px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', flex: 1, textAlign: 'center' }}>Book Now</Link>
              <Link href="/portfolio" style={{ color: '#C8A97E', padding: '12px 20px', borderRadius: '4px', textDecoration: 'none', fontSize: '12px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', border: '1px solid #C8A97E', flex: 1, textAlign: 'center' }}>Portfolio</Link>
            </div>
          </div>
        </div>

        {/* Thumbnail strip */}
        <div style={{ display: 'flex', gap: '8px', padding: '12px 16px', overflowX: 'auto' }}>
          {studioImages.map((img, i) => (
            <Link key={i} href="/portfolio" style={{ flexShrink: 0, width: '72px', height: '72px', borderRadius: '6px', overflow: 'hidden', position: 'relative' }}>
              <Image src={img.src} alt={img.alt} fill style={{ objectFit: 'cover' }} sizes="72px" />
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
