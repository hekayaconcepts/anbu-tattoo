import Link from 'next/link'
import Image from 'next/image'

const featuredWorks = [
  { id: 1, title: 'Floral Sleeve', category: 'Custom Design', img: '/tattoo-floral.jpg' },
  { id: 2, title: 'Skull with Cap', category: 'Custom Design', img: '/tattoo-skull.jpg' },
  { id: 3, title: 'Studio Interior', category: 'Studio', img: '/studio-interior.jpg' },
  { id: 4, title: 'Artwork Wall', category: 'Studio', img: '/studio-artwork.jpg' },
  { id: 5, title: 'Studio Session', category: 'Studio', img: '/studio-interior-2.jpg' },
  { id: 6, title: 'Storefront', category: 'Studio', img: '/storefront.jpg' },
]

export default function FeaturedWork() {
  return (
    <section style={{ padding: '60px 16px', backgroundColor: '#0A0A0A' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <p style={{ color: '#C8A97E', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '12px' }}>Our Work</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 5vw, 40px)', color: '#FFFFFF', marginBottom: '12px' }}>Featured Tattoos</h2>
          <p style={{ color: '#B0B0B0', fontSize: '14px' }}>A selection of our recent custom pieces</p>
        </div>

        {/* Mobile: single column. Desktop: 3-column grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {featuredWorks.map((work) => (
            <Link key={work.id} href="/portfolio" style={{ textDecoration: 'none' }}>
              <div style={{ aspectRatio: '1', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
                <Image src={work.img} alt={work.title} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 12px 12px', background: 'linear-gradient(to top, rgba(10,10,10,0.9), transparent)' }}>
                  <span style={{ color: '#C8A97E', fontSize: '13px', fontWeight: 600 }}>{work.title}</span>
                  <br /><span style={{ color: '#B0B0B0', fontSize: '10px' }}>{work.category}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <Link href="/portfolio" style={{ color: '#C8A97E', textDecoration: 'none', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', borderBottom: '1px solid #C8A97E', paddingBottom: '4px' }}>See Full Portfolio →</Link>
        </div>
      </div>

      {/* Responsive: single column on mobile via CSS */}
      <style>{`
        @media (max-width: 768px) {
          section > div > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1023px) {
          section > div > div:nth-child(2) {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}
