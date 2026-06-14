'use client';

import { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "Absolutely incredible work. The artist took my vague idea and turned it into something beyond what I imagined. The attention to detail is unmatched.",
    name: "Sarah K.",
    rating: 5,
    tattoo: "Custom floral sleeve",
  },
  {
    quote: "Best tattoo experience I've had. Professional, clean, and the result was exactly what I wanted. Already booked my next session!",
    name: "Marcus T.",
    rating: 5,
    tattoo: "Japanese-style back piece",
  },
  {
    quote: "Covered up a tattoo I hated for years. Now I have a beautiful piece I'm proud to show off. Couldn't be happier with the result.",
    name: "Jamie L.",
    rating: 5,
    tattoo: "Full cover-up design",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[active];

  return (
    <section style={{ padding: '100px 40px', backgroundColor: '#1A1A1A' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ color: '#C8A97E', fontSize: '13px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '12px' }}>
          Testimonials
        </p>
        <h2 className="font-playfair" style={{ fontSize: 'clamp(32px, 5vw, 48px)', color: '#FFFFFF', marginBottom: '60px' }}>
          What Our Clients Say
        </h2>

        <div style={{ position: 'relative', minHeight: '250px' }}>
          {/* Stars */}
          <div style={{ marginBottom: '24px' }}>
            {[...Array(t.rating)].map((_, i) => (
              <span key={i} style={{ color: '#C8A97E', fontSize: '24px', margin: '0 2px' }}>★</span>
            ))}
          </div>

          {/* Quote */}
          <p className="font-playfair" style={{
            fontSize: 'clamp(18px, 3vw, 24px)',
            color: '#FFFFFF',
            fontStyle: 'italic',
            lineHeight: '1.6',
            marginBottom: '24px',
            transition: 'opacity 0.5s',
          }}>
            "{t.quote}"
          </p>

          {/* Name */}
          <p style={{ color: '#C8A97E', fontSize: '16px', fontWeight: 600, marginBottom: '4px' }}>
            — {t.name}
          </p>
          <p style={{ color: '#B0B0B0', fontSize: '14px' }}>
            {t.tattoo}
          </p>
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '40px' }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                border: 'none',
                backgroundColor: i === active ? '#C8A97E' : 'rgba(200,169,126,0.3)',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
