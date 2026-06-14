'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        padding: '16px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(200,169,126,0.1)' : 'none',
      }}
    >
      <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Image src="/logo.png" alt="Anbu Tattoo" width={44} height={44} priority />
        <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '28px', color: '#C8A97E', letterSpacing: '6px', fontWeight: 400 }}>
          ANBU TATTOO
        </span>
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex" style={{ alignItems: 'center', gap: '36px' }}>
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '14px', fontWeight: 400, letterSpacing: '1px', textTransform: 'uppercase', transition: 'color 0.3s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#C8A97E')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#FFFFFF')}>
            {link.label}
          </Link>
        ))}
        <Link href="/booking" style={{ color: '#0A0A0A', backgroundColor: '#C8A97E', padding: '12px 28px', borderRadius: '4px', textDecoration: 'none', fontSize: '14px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', transition: 'background-color 0.3s' }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#D4B896')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#C8A97E')}>
          Book Now
        </Link>
      </nav>

      {/* Mobile Hamburger */}
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '6px', padding: '4px' }}>
        <span style={{ width: '28px', height: '2px', backgroundColor: '#C8A97E', display: 'block', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
        <span style={{ width: '28px', height: '2px', backgroundColor: '#C8A97E', display: 'block', opacity: menuOpen ? 0 : 1 }} />
        <span style={{ width: '28px', height: '2px', backgroundColor: '#C8A97E', display: 'block', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
      </button>

      {menuOpen && (
        <div className="md:hidden" style={{ position: 'fixed', top: 0, right: 0, width: '100%', height: '100vh', backgroundColor: 'rgba(10,10,10,0.98)', backdropFilter: 'blur(20px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '32px', zIndex: 40 }}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '24px', fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '3px' }}>{link.label}</Link>
          ))}
          <Link href="/booking" onClick={() => setMenuOpen(false)} style={{ color: '#0A0A0A', backgroundColor: '#C8A97E', padding: '14px 36px', borderRadius: '4px', textDecoration: 'none', fontSize: '18px', fontWeight: 600, fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '2px', marginTop: '16px' }}>Book Now</Link>
        </div>
      )}
    </header>
  );
}
