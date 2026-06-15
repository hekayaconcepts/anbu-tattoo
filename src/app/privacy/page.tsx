import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Privacy() {
  return (
    <>
      <Header />
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '80px 20px', color: '#E0E0E0' }}>
        <h1 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '48px', color: '#C8A97E', letterSpacing: '3px', marginBottom: '24px' }}>Privacy Policy</h1>
        <p style={{ fontSize: '14px', color: '#999', marginBottom: '32px' }}>Last updated: June 15, 2026</p>
        
        <div style={{ fontSize: '15px', lineHeight: 1.8 }}>
          <p>Anbu Tattoo ("we", "us") operates anbu-tattoo.vercel.app from Toronto, Ontario, Canada. We respect your privacy and comply with Canada's Personal Information Protection and Electronic Documents Act (PIPEDA), Quebec Law 25, and the EU General Data Protection Regulation (GDPR) where applicable.</p>
          
          <h2 style={{ color: '#C8A97E', marginTop: '32px', fontSize: '20px' }}>1. Information We Collect</h2>
          <p>We only collect information you provide via our booking/contact forms: name, email, phone number, and tattoo ideas. We do not use cookies for tracking. Server logs (IP address, browser) are kept for 30 days for security.</p>

          <h2 style={{ color: '#C8A97E', marginTop: '24px', fontSize: '20px' }}>2. How We Use It</h2>
          <p>To schedule consultations, respond to inquiries, and comply with Ontario health regulations requiring client records. Legal basis: consent and contractual necessity. We never sell data.</p>

          <h2 style={{ color: '#C8A97E', marginTop: '24px', fontSize: '20px' }}>3. Storage & Security</h2>
          <p>Data is stored securely via Supabase (USA servers with GDPR-compliant DPA). We retain booking records for 7 years as required by Toronto Public Health. You can request deletion after legal retention period ends.</p>

          <h2 style={{ color: '#C8A97E', marginTop: '24px', fontSize: '20px' }}>4. Your Rights</h2>
          <p>Under PIPEDA and GDPR you have the right to access, correct, delete, or port your data, and withdraw consent. Quebec residents have additional rights under Law 25. Contact us to exercise rights.</p>

          <h2 style={{ color: '#C8A97E', marginTop: '24px', fontSize: '20px' }}>5. CASL Compliance</h2>
          <p>We only send emails you request (booking confirmations). No marketing emails without express consent. Unsubscribe anytime.</p>

          <h2 style={{ color: '#C8A97E', marginTop: '24px', fontSize: '20px' }}>6. Contact</h2>
          <p>Privacy Officer: Anbu Tattoo, Toronto, ON<br/>Email: privacy@anbutattoo.ca<br/>Phone: +1 416-533-0000</p>

          <p style={{ marginTop: '32px', fontSize: '13px', color: '#999' }}>This policy is provided for informational purposes and does not constitute legal advice. Consult a lawyer for your specific needs.</p>
        </div>
      </main>
      <Footer />
    </>
  )
}
