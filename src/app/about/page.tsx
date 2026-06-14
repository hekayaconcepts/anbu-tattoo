import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px' }}>
        <section style={{ padding: '80px 40px', textAlign: 'center', backgroundColor: '#0A0A0A' }}>
          <p style={{ color: '#C8A97E', fontSize: '13px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '12px' }}>About Us</p>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(36px, 6vw, 56px)', color: '#FFFFFF', marginBottom: '16px' }}>The Artist & The Studio</h1>
        </section>

        <section style={{ padding: '80px 40px', backgroundColor: '#1A1A1A' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '60px', alignItems: 'start' }} className="about-bio-grid">
            <div style={{ borderRadius: '8px', overflow: 'hidden', aspectRatio: '3/4', position: 'relative' }}>
              <Image src="/studio-interior-2.jpg" alt="Anbu Tattoo Studio" fill style={{ objectFit: 'cover' }} />
            </div>
            <div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '36px', color: '#FFFFFF', marginBottom: '24px' }}>Bringing Visions to Life</h2>
              <p style={{ color: '#B0B0B0', fontSize: '16px', lineHeight: '1.8', marginBottom: '20px' }}>
                With over a decade of experience in the tattoo industry, our artist has developed a distinctive style that blends traditional techniques with modern artistry. Every piece is approached with passion, precision, and a deep respect for the craft.
              </p>
              <p style={{ color: '#B0B0B0', fontSize: '16px', lineHeight: '1.8', marginBottom: '20px' }}>
                Specializing in custom designs, cover-ups, and large-scale pieces, we work closely with each client to ensure their tattoo is a true reflection of their vision.
              </p>
              <p style={{ color: '#B0B0B0', fontSize: '16px', lineHeight: '1.8', marginBottom: '32px' }}>
                Our studio in Toronto is designed to provide a comfortable, professional, and hygienic environment for every tattoo experience.
              </p>
              <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
                <div><span style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#C8A97E', fontSize: '36px', letterSpacing: '2px' }}>10+</span><p style={{ color: '#B0B0B0', fontSize: '14px' }}>Years Experience</p></div>
                <div><span style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#C8A97E', fontSize: '36px', letterSpacing: '2px' }}>1000+</span><p style={{ color: '#B0B0B0', fontSize: '14px' }}>Tattoos Completed</p></div>
                <div><span style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#C8A97E', fontSize: '36px', letterSpacing: '2px' }}>5⭐</span><p style={{ color: '#B0B0B0', fontSize: '14px' }}>Average Rating</p></div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ padding: '80px 40px', backgroundColor: '#0A0A0A' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '36px', color: '#FFFFFF', textAlign: 'center', marginBottom: '50px' }}>The Studio</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }} className="studio-grid">
              {['/studio-interior.jpg', '/studio-artwork.jpg', '/studio-interior-2.jpg', '/tattoo-floral.jpg', '/tattoo-skull.jpg', '/storefront.jpg'].map((src, i) => (
                <div key={i} style={{ aspectRatio: '4/3', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
                  <Image src={src} alt={`Studio photo ${i + 1}`} fill style={{ objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
