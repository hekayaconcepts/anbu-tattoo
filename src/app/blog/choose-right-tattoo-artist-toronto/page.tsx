'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function BlogPost() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px' }}>
        <article style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 20px', color: '#E0E0E0' }}>
          <p style={{ color: '#C8A97E', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Education · June 10, 2026 · 6 min read</p>
          <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px, 5vw, 48px)', color: '#FFFFFF', marginBottom: '32px', lineHeight: '1.2' }}>How to Choose the Right Tattoo Artist in Toronto</h1>
          
          <div style={{ fontSize: '16px', lineHeight: 1.8 }}>
            <p style={{ marginBottom: '20px' }}>Toronto has over 300 licensed tattoo shops. That is a lot of options. Finding the right artist can feel overwhelming, but it does not have to be. Here is how we tell our clients to approach it, from checking portfolios to asking the right questions during a consultation.</p>

            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '28px', color: '#FFFFFF', margin: '32px 0 16px' }}>Start with your style, not the shop</h2>
            <p style={{ marginBottom: '16px' }}>Before you search for an artist, figure out what style you want. Fine line, blackwork, realism, Japanese, neo-traditional, minimalist. Each style requires different skills. An artist who excels at bold Japanese sleeves might not be the best choice for a delicate fine line piece.</p>
            <p style={{ marginBottom: '20px' }}>Think about the size and placement too. A large back piece needs someone experienced with flow and composition. A small wrist tattoo needs someone with a steady hand. Once you know your style, search for artists who specialize in it. Instagram is the best tool. Search hashtags like #torontotattoo or #torontofinelinetattoo. Look through an artist's last 50 posts, not just their highlights.</p>

            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '28px', color: '#FFFFFF', margin: '32px 0 16px' }}>Research like a pro</h2>
            <p style={{ marginBottom: '16px' }}>A strong portfolio matters more than follower count. Look for consistency. Every piece should be high quality, not just the top 3. If an artist has one amazing tattoo and 20 mediocre ones, that is a red flag.</p>
            <p style={{ marginBottom: '16px' }}>Ask to see healed photos. Fresh tattoos always look sharp. The real test is how they look after 6 months. Any confident artist will have healed work to show you.</p>
            <p style={{ marginBottom: '20px' }}>Check Toronto Public Health inspection records. Every licensed studio in Toronto is inspected regularly. You can request inspection records to make sure the shop meets health standards. We are a licensed studio and we are proud of our inspection history.</p>

            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '28px', color: '#FFFFFF', margin: '32px 0 16px' }}>The consultation test</h2>
            <p style={{ marginBottom: '16px' }}>A good consultation tells you everything. Come meet the artist in person. A professional will listen to your ideas, offer honest feedback on sizing and placement, and never rush you.</p>
            <p style={{ marginBottom: '16px' }}>Here are 5 questions to ask. Do you draw custom designs or work from flash only? Can I see healed examples in my chosen style? What is your touch-up policy? How do you handle sizing and placement? What is the deposit and cancellation policy?</p>
            <p style={{ marginBottom: '20px' }}>Most artists offer one free touch-up within a certain period. We do. If an artist charges for every small adjustment, that is a concern.</p>

            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '28px', color: '#FFFFFF', margin: '32px 0 16px' }}>Red flags we see in Toronto</h2>
            <p style={{ marginBottom: '16px' }}>We have been part of this community long enough to know the warning signs. No portfolio or only photos from other artists. Pressure to pay a large deposit before any design work. Dirty or cluttered station photos. If their workspace looks unclean on Instagram, it will not be cleaner in person.</p>
            <p style={{ marginBottom: '20px' }}>An artist who dismisses your input before they have even started drawing is not someone you want working on your skin. Trust your gut.</p>

            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '28px', color: '#FFFFFF', margin: '32px 0 16px' }}>Price vs value in the city</h2>
            <p style={{ marginBottom: '16px' }}>Quality tattooing is not cheap, and cheap tattooing is not quality. In Toronto, most reputable artists charge between $150 and $300 per hour. Large custom pieces are often quoted as a flat rate.</p>
            <p style={{ marginBottom: '20px' }}>Be wary of artists charging significantly below market rate. A $80 tattoo might seem like a good deal until you pay $200 to fix it or cover it up. We have seen this happen more times than we can count. You are paying for years of experience, a sterile environment, and an artist who will be there for touch-ups.</p>

            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '28px', color: '#FFFFFF', margin: '32px 0 16px' }}>Why location and vibe matter</h2>
            <p style={{ marginBottom: '16px' }}>You will be spending hours in the studio, sometimes across multiple sessions. The environment matters. A clean, calm space makes the experience better. A chaotic, noisy shop adds stress to an already intense process.</p>
            <p style={{ marginBottom: '20px' }}>We are located in the Queen West area. Our studio is private, not a busy walk-in shop with 10 stations. When you book with us, you get the full space to yourself. No background noise from other clients, no feeling rushed. Just you, your artist, and the work.</p>

            <div style={{ backgroundColor: 'rgba(200,169,126,0.05)', border: '1px solid rgba(200,169,126,0.15)', borderRadius: '8px', padding: '24px', marginTop: '32px' }}>
              <h3 style={{ fontFamily: 'var(--font-bebas)', fontSize: '22px', color: '#C8A97E', letterSpacing: '2px', marginBottom: '16px' }}>Your mental checklist</h3>
              <p style={{ marginBottom: '8px' }}>I know what style I want</p>
              <p style={{ marginBottom: '8px' }}>I have reviewed the artist's portfolio for consistency</p>
              <p style={{ marginBottom: '8px' }}>I have seen healed photos, not just fresh ones</p>
              <p style={{ marginBottom: '8px' }}>I have checked the studio's Toronto Public Health licence</p>
              <p style={{ marginBottom: '8px' }}>I have asked about custom vs flash work</p>
              <p style={{ marginBottom: '8px' }}>I have discussed sizing, placement, and pricing</p>
              <p style={{ marginBottom: '0' }}>I feel comfortable and heard during the consultation</p>
            </div>

            <div style={{ textAlign: 'center', marginTop: '32px' }}>
              <a href="/contact" style={{ color: '#C8A97E', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', borderBottom: '1px solid #C8A97E', paddingBottom: '4px' }}>Come meet us for a free consultation →</a>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
