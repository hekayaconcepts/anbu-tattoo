'use client'

import { useState } from 'react'
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
  },
  {
    id: 2,
    slug: 'choose-right-tattoo-artist-toronto',
    title: 'How to Choose the Right Tattoo Artist in Toronto',
    excerpt: 'Toronto has hundreds of talented tattoo artists. Here\'s how to find the one whose style, professionalism, and approach matches your vision — from researching portfolios to asking the right questions.',
    date: 'June 10, 2026',
    category: 'Guide',
    readTime: '6 min read',
  },
  {
    id: 3,
    slug: 'custom-vs-flash-tattoo',
    title: 'Custom vs Flash Tattoo: What\'s the Difference?',
    excerpt: 'Not sure whether to go with a custom design or pick from flash? Here\'s a breakdown of both approaches — including when each makes sense and why many of the best tattoos fall somewhere in between.',
    date: 'June 6, 2026',
    category: 'Education',
    readTime: '4 min read',
  },
]

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<number | null>(null)

  const activePost = selectedPost !== null ? blogPosts.find(p => p.id === selectedPost) : null

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
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {!activePost ? (
              /* Listing */
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {blogPosts.map((post) => (
                  <article key={post.id} style={{ backgroundColor: '#0A0A0A', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(200,169,126,0.1)' }}>
                    <div style={{ padding: '32px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px', flexWrap: 'wrap' }}>
                        <span style={{ color: '#C8A97E', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', border: '1px solid rgba(200,169,126,0.3)', padding: '4px 12px', borderRadius: '4px' }}>{post.category}</span>
                        <span style={{ color: '#B0B0B0', fontSize: '13px' }}>{post.date}</span>
                        <span style={{ color: '#B0B0B0', fontSize: '13px' }}>· {post.readTime}</span>
                      </div>
                      <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(22px, 3vw, 28px)', color: '#FFFFFF', marginBottom: '12px', lineHeight: '1.3' }}>{post.title}</h2>
                      <p style={{ color: '#B0B0B0', fontSize: '15px', lineHeight: '1.7', marginBottom: '20px' }}>{post.excerpt}</p>
                      <button onClick={() => setSelectedPost(post.id)} style={{ background: 'none', border: 'none', color: '#C8A97E', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', cursor: 'pointer', padding: 0, borderBottom: '1px solid #C8A97E', paddingBottom: '4px' }}>
                        Read More →
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              /* Full Post */
              <div style={{ backgroundColor: '#0A0A0A', borderRadius: '8px', padding: '40px', border: '1px solid rgba(200,169,126,0.1)' }}>
                <button onClick={() => setSelectedPost(null)} style={{ background: 'none', border: 'none', color: '#C8A97E', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', cursor: 'pointer', padding: 0, marginBottom: '24px' }}>
                  ← Back to Blog
                </button>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px', flexWrap: 'wrap' }}>
                  <span style={{ color: '#C8A97E', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', border: '1px solid rgba(200,169,126,0.3)', padding: '4px 12px', borderRadius: '4px' }}>{activePost.category}</span>
                  <span style={{ color: '#B0B0B0', fontSize: '13px' }}>{activePost.date}</span>
                  <span style={{ color: '#B0B0B0', fontSize: '13px' }}>· {activePost.readTime}</span>
                </div>
                <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4vw, 40px)', color: '#FFFFFF', marginBottom: '24px', lineHeight: '1.2' }}>{activePost.title}</h1>
                <div style={{ color: '#B0B0B0', fontSize: '16px', lineHeight: '1.8' }}>
                  <p style={{ marginBottom: '20px' }}>{activePost.excerpt}</p>
                  <p style={{ marginBottom: '20px' }}>This is a full blog post. The complete content would be loaded here with proper formatting, headings, lists, and all the information a reader needs.</p>
                  <p style={{ marginBottom: '20px' }}>For now, this is a placeholder. The actual content from the previous version would be rendered here with all the detailed information.</p>
                  <div style={{ borderTop: '1px solid rgba(200,169,126,0.2)', paddingTop: '24px', marginTop: '32px' }}>
                    <p style={{ fontSize: '14px' }}>Have questions? <a href="/booking" style={{ color: '#C8A97E' }}>Book a consultation</a> with Anbu Tattoo Studio.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
