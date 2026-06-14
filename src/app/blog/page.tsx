import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    slug: 'tattoo-aftercare-complete-guide',
    title: 'Tattoo Aftercare: Complete Guide for New Tattoos',
    excerpt: 'Getting a new tattoo is exciting — but proper aftercare is what keeps it looking vibrant for years. Here\'s everything you need to know about healing your new ink, from the first 24 hours to long-term care.',
    date: 'June 14, 2026',
    category: 'Aftercare',
    readTime: '5 min read',
    content: `## Why Aftercare Matters\n\nA tattoo is essentially an open wound. How you treat it during the healing process directly affects how it looks for the rest of your life. Poor aftercare can lead to fading, infection, scarring, and uneven color.\n\n## The First 24 Hours\n\n**Leave the bandage on** for at least 2-4 hours (or as instructed by your artist). When you remove it, wash your hands thoroughly before touching the tattoo.\n\n**Gently wash** with lukewarm water and unscented antibacterial soap. Use your fingertips — never a washcloth or sponge. Pat dry with a clean paper towel.\n\n**Apply a thin layer** of the aftercare ointment recommended by your artist. Don't over-apply — a little goes a long way.\n\n## Week 1: The Healing Process\n\n- Wash 2-3 times daily with unscented soap\n- Apply thin layers of aftercare ointment after each wash\n- Expect peeling and flaking — this is **normal**\n- Do NOT pick, scratch, or peel flaking skin\n- Avoid submerging the tattoo in water\n- Wear loose, breathable clothing over the tattoo\n\n## Week 2-3: The Itchy Phase\n\nThis is when most people make mistakes. Your tattoo will itch intensely as it heals.\n\n- Resist the urge to scratch\n- Keep the area moisturized with fragrance-free lotion\n- Light slapping can help relieve itching\n- Continue avoiding direct sunlight\n\n## Week 4+: Settling In\n\nBy now, the surface should be fully healed. However, deeper layers are still settling.\n\n- Switch from ointment to fragrance-free daily moisturizer\n- Apply SPF 30+ sunscreen whenever exposed to sun\n- Continue moisturizing daily\n- Touch-ups are normal — most tattoos need one after initial healing\n\n## Long-Term Care\n\n- Always use sunscreen on tattoos (UV rays cause fading)\n- Keep skin moisturized\n- Stay hydrated\n- Schedule touch-ups as needed`,
  },
  {
    id: 2,
    slug: 'choose-right-tattoo-artist-toronto',
    title: 'How to Choose the Right Tattoo Artist in Toronto',
    excerpt: 'Toronto has hundreds of talented tattoo artists. Here\'s how to find the one whose style, professionalism, and approach matches your vision — from researching portfolios to asking the right questions.',
    date: 'June 10, 2026',
    category: 'Guide',
    readTime: '6 min read',
    content: `## Start With Style, Not Location\n\nThe biggest mistake people make is choosing the closest artist. Your tattoo is permanent — travel across the city to find the right match.\n\n**Major tattoo styles to consider:**\n\n- **Traditional/American Bold** — Thick lines, limited color palette\n- **Neo-Traditional** — Traditional foundations with more detail\n- **Japanese** — Flowing compositions, rich imagery\n- **Blackwork/Dotwork** — Entirely black ink, geometric designs\n- **Realism** — Photographic quality portraits\n- **Minimalist** — Fine lines, simple designs\n\n## Research Like Your Tattoo Depends On It\n\n**Instagram is your best tool.** Look for:\n\n- Consistent quality across their portfolio\n- Clean, crisp lines in their work\n- Healed photos (not just fresh tattoos)\n- The specific style you want\n\n**Red flags to watch for:**\n\n- No portfolio or only photos from other artists\n- Inconsistent style quality\n- No visible shop photos\n- Unwillingness to discuss your design ideas\n\n## Visit the Studio First\n\n- **Cleanliness** — The studio should be spotless\n- **Licensing** — Toronto studios must be licensed\n- **Sterilization** — Autoclaves, single-use needles\n- **Professionalism** — How they treat you as a client\n\n## Understand Pricing\n\n- Most Toronto artists charge $150-$300+ per hour\n- Deposits are typically $100-$200 (non-refundable)\n- Be wary of artists charging significantly below market rate`,
  },
  {
    id: 3,
    slug: 'custom-vs-flash-tattoo',
    title: 'Custom vs Flash Tattoo: What\'s the Difference?',
    excerpt: 'Not sure whether to go with a custom design or pick from flash? Here\'s a breakdown of both approaches — including when each makes sense and why many of the best tattoos fall somewhere in between.',
    date: 'June 6, 2026',
    category: 'Education',
    readTime: '4 min read',
    content: `## What Is a Flash Tattoo?\n\nFlash tattoos are pre-designed artworks that artists display on their walls or social media. They're essentially a menu of available designs — you pick one, and the artist tattoos it.\n\n**Pros of flash tattoos:**\n- Lower cost (less design time)\n- Faster process — no design phase\n- You can see exactly what you're getting\n- Great for smaller, filler pieces\n\n**Cons of flash tattoos:**\n- Less personal — someone else may have the same design\n- Limited to what's available\n- May not match your exact vision\n\n## What Is a Custom Tattoo?\n\nA custom tattoo is designed from scratch specifically for you. You bring ideas and references; the artist creates an original design.\n\n**Pros of custom tattoos:**\n- Completely unique — one of a kind\n- Perfectly matched to your vision\n- More meaningful and personal\n- Artist can optimize for your body placement\n\n**Cons of custom tattoos:**\n- Higher cost\n- Longer process\n- Requires more trust in the artist\n\n## The Hybrid Approach\n\nMany of the best tattoos fall somewhere in between:\n\n- **Modified flash** — You love a flash design but want it customized\n- **Artist's interpretation** — You bring a concept, artist designs from scratch\n- **Collaborative evolution** — You start with an idea, artist develops it further\n\n## My Recommendation\n\nFor meaningful, visible, or large pieces — go custom. For smaller pieces or your first tattoo — flash designs offer great value.`,
  },
]

export default function Blog() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px' }}>
        {/* Page Header */}
        <section style={{ padding: '80px 40px', textAlign: 'center', backgroundColor: '#0A0A0A' }}>
          <p style={{ color: '#C8A97E', fontSize: '13px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '12px' }}>Blog</p>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(36px, 6vw, 56px)', color: '#FFFFFF', marginBottom: '16px' }}>Tattoo Tips & Insights</h1>
          <p style={{ color: '#B0B0B0', fontSize: '16px', maxWidth: '500px', margin: '0 auto' }}>Expert advice, aftercare guides, and industry insights</p>
        </section>

        {/* Blog Posts */}
        <section style={{ padding: '60px 40px', backgroundColor: '#1A1A1A' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {blogPosts.map((post) => (
              <article key={post.id} style={{ backgroundColor: '#0A0A0A', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(200,169,126,0.1)', transition: 'border-color 0.3s' }}>
                <div style={{ padding: '40px' }}>
                  {/* Meta */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px', flexWrap: 'wrap' }}>
                    <span style={{ color: '#C8A97E', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', border: '1px solid rgba(200,169,126,0.3)', padding: '4px 12px', borderRadius: '4px' }}>{post.category}</span>
                    <span style={{ color: '#B0B0B0', fontSize: '13px' }}>{post.date}</span>
                    <span style={{ color: '#B0B0B0', fontSize: '13px' }}>· {post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(24px, 3vw, 32px)', color: '#FFFFFF', marginBottom: '16px', lineHeight: '1.3' }}>
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p style={{ color: '#B0B0B0', fontSize: '16px', lineHeight: '1.7', marginBottom: '20px' }}>
                    {post.excerpt}
                  </p>

                  {/* Read More Link */}
                  <Link
                    href={`/blog/${post.slug}`}
                    style={{ color: '#C8A97E', textDecoration: 'none', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', borderBottom: '1px solid #C8A97E', paddingBottom: '4px', display: 'inline-block' }}
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
