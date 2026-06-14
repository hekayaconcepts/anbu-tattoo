import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

const portfolioItems = [
  { id: 1, title: 'Floral Sleeve', category: 'Custom Design', img: '/tattoo-floral.jpg' },
  { id: 2, title: 'Skull with Cap', category: 'Custom Design', img: '/tattoo-skull.jpg' },
  { id: 3, title: 'Studio Interior', category: 'Studio', img: '/studio-interior.jpg' },
  { id: 4, title: 'Floral Detail', category: 'Custom Design', img: '/tattoo-floral.jpg' },
  { id: 5, title: 'Artwork Wall', category: 'Studio', img: '/studio-artwork.jpg' },
  { id: 6, title: 'Studio Session', category: 'Studio', img: '/studio-interior-2.jpg' },
];

export default function Portfolio() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px' }}>
        <section style={{ padding: '80px 40px', textAlign: 'center', backgroundColor: '#0A0A0A' }}>
          <p style={{ color: '#C8A97E', fontSize: '13px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '12px' }}>Our Portfolio</p>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(36px, 6vw, 56px)', color: '#FFFFFF', marginBottom: '16px' }}>Tattoo Gallery</h1>
          <p style={{ color: '#B0B0B0', fontSize: '16px', maxWidth: '500px', margin: '0 auto' }}>Browse our collection of custom tattoo work</p>
        </section>

        <section style={{ padding: '60px 40px', backgroundColor: '#0A0A0A' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }} className="portfolio-grid">
            {portfolioItems.map((item) => (
              <div key={item.id} style={{ aspectRatio: '1', borderRadius: '8px', overflow: 'hidden', position: 'relative', cursor: 'pointer' }}>
                <Image src={item.img} alt={item.title} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 16px 12px', background: 'linear-gradient(to top, rgba(10,10,10,0.9), transparent)' }}>
                  <span style={{ color: '#C8A97E', fontSize: '14px', fontWeight: 600 }}>{item.title}</span>
                  <br /><span style={{ color: '#B0B0B0', fontSize: '11px' }}>{item.category}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
