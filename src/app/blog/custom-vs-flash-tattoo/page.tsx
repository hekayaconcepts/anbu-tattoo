'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function BlogPost() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px' }}>
        <article style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 20px', color: '#E0E0E0' }}>
          <p style={{ color: '#C8A97E', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Education · June 6, 2026 · 5 min read</p>
          <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px, 5vw, 48px)', color: '#FFFFFF', marginBottom: '32px', lineHeight: '1.2' }}>Custom vs Flash Tattoo: What is the Difference?</h1>
          
          <div style={{ fontSize: '16px', lineHeight: 1.8 }}>
            <p style={{ marginBottom: '20px' }}>Not sure whether to go with a custom design or pick from flash? Here is a breakdown of both approaches, including when each makes sense and why many of the best tattoos fall somewhere in between.</p>

            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '28px', color: '#FFFFFF', margin: '32px 0 16px' }}>Flash explained</h2>
            <p style={{ marginBottom: '16px' }}>Flash tattoos are pre-designed artworks that artists display on their walls, in binders, or on social media. They are essentially a menu of available designs. You pick one, and the artist tattoos it, often with small modifications like size or colour adjustments.</p>
            <p style={{ marginBottom: '20px' }}>Flash has a long history in tattoo culture. Walk-in shops in Toronto and across North America have used flash sheets for decades. They are great for clients who want something simple, fast, and affordable. If you walk into a shop on Queen West without an idea, the flash wall is where you start. The advantage is that you can see exactly what you are getting. The design has been tattooed before, so the artist knows how it heals and ages.</p>

            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '28px', color: '#FFFFFF', margin: '32px 0 16px' }}>Custom explained</h2>
            <p style={{ marginBottom: '16px' }}>A custom tattoo is designed from scratch specifically for you. You bring ideas, references, and concepts. The artist creates an original design based on your input. It is a collaborative process that results in a truly unique piece.</p>
            <p style={{ marginBottom: '20px' }}>We draw 3 to 4 custom pieces a week at our studio. Each one starts with a conversation. Sometimes a client comes with a clear vision. Other times they bring a mood board and trust us to interpret it. Either way, the design is made for one person and one body. Custom work takes time. A simple design might take a few hours to draw. A full sleeve can take weeks of back and forth. But the result is something no one else will ever have.</p>

            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '28px', color: '#FFFFFF', margin: '32px 0 16px' }}>Pros and cons</h2>
            <p style={{ marginBottom: '16px' }}>Flash tattoos are faster and cheaper. You can walk in, pick a design, and be done in a session. The artist already knows the design, so there is no design fee. For smaller pieces, flash is often the practical choice. The downside is that flash is not unique. Someone else may have the same tattoo. The design may not fit your body perfectly, since it was not created with your specific placement in mind.</p>
            <p style={{ marginBottom: '20px' }}>Custom tattoos are the opposite. They are completely unique, designed to flow with your body, and deeply personal. But they cost more because you are paying for the artist's design time, and the process takes longer. There is no wrong answer. Some of our clients collect flash tattoos like stickers. Others save up for one large custom piece. Most people end up with a mix of both.</p>

            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '28px', color: '#FFFFFF', margin: '32px 0 16px' }}>Cost and healing</h2>
            <p style={{ marginBottom: '16px' }}>Healing is the same regardless of whether your tattoo is flash or custom. The aftercare process does not change. Follow the same steps, avoid the same things, and your tattoo will heal well.</p>
            <p style={{ marginBottom: '20px' }}>The cost difference comes down to design time. Flash designs are already drawn, so you pay for the tattooing only. Custom designs include the drawing time, which can range from a few hours to several days depending on complexity. In Toronto, custom work typically starts around $200 for small pieces and goes up from there.</p>

            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '28px', color: '#FFFFFF', margin: '32px 0 16px' }}>How to decide</h2>
            <p style={{ marginBottom: '16px' }}>Ask yourself three questions. Is this tattoo deeply personal, or do I just like the design? If it has strong meaning, custom is worth the investment. If you simply think a design is cool, flash is perfectly fine. What is my budget? Flash is more affordable upfront. Custom work costs more but gives you something one of a kind. How much time do I want to invest? Flash can be done in one session. Custom requires at least one consultation plus the tattoo session, sometimes more.</p>

            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '28px', color: '#FFFFFF', margin: '32px 0 16px' }}>The best of both: custom flash</h2>
            <p style={{ marginBottom: '16px' }}>There is a middle ground that we love. We take a flash design and customize it for the client. Maybe we change the size, add elements, or adjust the composition to fit a specific placement. You get the speed of flash with a personal touch. This is a great option if you see a flash design you like but want it tweaked. We do this often, and it gives clients the best of both worlds.</p>

            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '28px', color: '#FFFFFF', margin: '32px 0 16px' }}>Real examples from our studio</h2>
            <p style={{ marginBottom: '16px' }}>Last month, a client came in and pointed to a rose flash design on our wall. She loved the petals but wanted thorns wrapping around her wrist. We adapted the design in 20 minutes, and the final piece looked like it was made just for her. Because it was.</p>
            <p style={{ marginBottom: '20px' }}>Another client spent three months working with us on a full chest piece inspired by his grandmother's garden. We sketched, revised, and re-sketched until every detail was right. That tattoo could never be flash. It is his story, drawn in ink. Both clients left happy. Both tattoos healed beautifully. The difference was not quality. It was the journey.</p>

            <div style={{ backgroundColor: 'rgba(200,169,126,0.05)', border: '1px solid rgba(200,169,126,0.15)', borderRadius: '8px', padding: '24px', marginTop: '32px', textAlign: 'center' }}>
              <p style={{ color: '#C8A97E', fontSize: '16px', marginBottom: '12px' }}>Not sure which route to take?</p>
              <a href="/contact" style={{ color: '#C8A97E', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', borderBottom: '1px solid #C8A97E', paddingBottom: '4px' }}>Book a free design chat →</a>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
