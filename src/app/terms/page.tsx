import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Terms() {
  return (
    <>
      <Header />
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '80px 20px', color: '#E0E0E0' }}>
        <h1 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '48px', color: '#C8A97E', letterSpacing: '3px', marginBottom: '24px' }}>Terms of Service</h1>
        <p style={{ fontSize: '14px', color: '#999', marginBottom: '32px' }}>Last updated: June 15, 2026</p>
        
        <div style={{ fontSize: '15px', lineHeight: 1.8 }}>
          <h2 style={{ color: '#C8A97E', fontSize: '20px' }}>1. Age & Consent</h2>
          <p>You must be 18+ with valid government ID to receive a tattoo in Ontario. No exceptions. By booking, you confirm you are of legal age.</p>

          <h2 style={{ color: '#C8A97E', marginTop: '24px', fontSize: '20px' }}>2. Bookings & Deposits</h2>
          <p>Consultations are free. A non-refundable deposit (typically $100) is required to book tattoo time, applied to final cost. Reschedule 48+ hours in advance or deposit is forfeited.</p>

          <h2 style={{ color: '#C8A97E', marginTop: '24px', fontSize: '20px' }}>3. Health & Safety</h2>
          <p>We follow Toronto Public Health infection prevention standards. You must disclose medical conditions, allergies, and medications. We reserve the right to refuse service for health/safety reasons.</p>

          <h2 style={{ color: '#C8A97E', marginTop: '24px', fontSize: '20px' }}>4. Artwork Ownership</h2>
          <p>Custom designs remain the intellectual property of Anbu Tattoo until paid in full. You receive a license to display the tattoo on your body. No reproduction without written permission.</p>

          <h2 style={{ color: '#C8A97E', marginTop: '24px', fontSize: '20px' }}>5. Liability</h2>
          <p>Tattooing carries inherent risks. Aftercare instructions must be followed. We are not liable for improper aftercare, allergic reactions, or dissatisfaction with approved designs.</p>

          <h2 style={{ color: '#C8A97E', marginTop: '24px', fontSize: '20px' }}>6. Governing Law</h2>
          <p>These terms are governed by the laws of Ontario and Canada. Disputes will be resolved in Toronto courts.</p>

          <h2 style={{ color: '#C8A97E', marginTop: '24px', fontSize: '20px' }}>7. Contact</h2>
          <p>Anbu Tattoo, Toronto, ON<br/>Email: hello@anbutattoo.ca</p>
        </div>
      </main>
      <Footer />
    </>
  )
}
