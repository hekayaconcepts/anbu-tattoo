import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    slug: 'tattoo-aftercare-complete-guide',
    title: 'Tattoo Aftercare: Complete Guide for New Tattoos',
    excerpt: 'Getting a new tattoo is exciting. But proper aftercare is what keeps it looking vibrant for years. Here is everything you need to know about healing your new ink, from the first 24 hours to long-term care.',
    date: 'June 14, 2026',
    category: 'Aftercare',
    readTime: '5 min read',
  },
  {
    id: 2,
    slug: 'choose-right-tattoo-artist-toronto',
    title: 'How to Choose the Right Tattoo Artist in Toronto',
    excerpt: 'Toronto has over 300 licensed tattoo shops. Finding the right artist can feel overwhelming. Here is how to approach it, from checking portfolios to asking the right questions during a consultation.',
    date: 'June 10, 2026',
    category: 'Education',
    readTime: '6 min read',
  },
  {
    id: 3,
    slug: 'custom-vs-flash-tattoo',
    title: 'Custom vs Flash Tattoo: What\'s the Difference?',
    excerpt: 'Not sure whether to go with a custom design or pick from flash? Here is a breakdown of both approaches, including when each makes sense and why many of the best tattoos fall somewhere in between.',
    date: 'June 6, 2026',
    category: 'Education',
    readTime: '5 min read',
  },
]

export default function Blog() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px' }}>
        <section style={{ padding: '80px 20px', textAlign: 'center', backgroundColor: '#0A0A0A' }}>
          <p style={{ color: '#C8A97E', fontSize: '13px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '12px' }}>Blog</p>
          <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(36px, 6vw, 56px)', color: '#FFFFFF', marginBottom: '16px' }}>Tattoo Tips & Insights</h1>
          <p style={{ color: '#B0B0B0', fontSize: '16px', maxWidth: '500px', margin: '0 auto' }}>Expert advice, aftercare guides, and industry insights from our studio</p>
        </section>

        <section style={{ padding: '60px 20px', backgroundColor: '#1A1A1A' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {blogPosts.map((post) => (
              <article key={post.id} style={{ backgroundColor: '#0A0A0A', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(200,169,126,0.1)' }}>
                <div style={{ padding: '32px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px', flexWrap: 'wrap' }}>
                    <span style={{ color: '#C8A97E', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', border: '1px solid rgba(200,169,126,0.3)', padding: '4px 12px', borderRadius: '4px' }}>{post.category}</span>
                    <span style={{ color: '#B0B0B0', fontSize: '13px' }}>{post.date}</span>
                    <span style={{ color: '#B0B0B0', fontSize: '13px' }}>· {post.readTime}</span>
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(22px, 3vw, 28px)', color: '#FFFFFF', marginBottom: '12px', lineHeight: '1.3' }}>{post.title}</h2>
                  <p style={{ color: '#B0B0B0', fontSize: '15px', lineHeight: '1.7', marginBottom: '20px' }}>{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} style={{ color: '#C8A97E', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', borderBottom: '1px solid #C8A97E', paddingBottom: '4px', display: 'inline-block' }}>Read More →</Link>
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
