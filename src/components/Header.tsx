'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Prevent horizontal overflow globally */}
      <style>{`
        html, body { overflow-x: hidden; max-width: 100%; }
        * { box-sizing: border-box; }
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-only { display: none !important; }
        }
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .mobile-only { display: flex !important; }
        }
      `}</style>

      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999,
        height: '52px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 16px',
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'rgba(10,10,10,0.95)' : 'rgba(10,10,10,0.6)',
        backdropFilter: 'blur(8px)',
        borderBottom: scrolled ? '1px solid rgba(200,169,126,0.1)' : '1px solid rgba(255,255,255,0.05)',
      }}>
        {/* Logo — LEFT (standard pattern) */}
        <Link href="/" style={{
          textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px',
          flexShrink: 0,
        }}>
          <Image src="/logo.png" alt="Anbu Tattoo" width={32} height={32} priority />
          <span style={{
            fontFamily: 'Bebas Neue, sans-serif', fontSize: '20px', color: '#C8A97E',
            letterSpacing: '5px', whiteSpace: 'nowrap',
          }}>ANBU</span>
        </Link>

        {/* Desktop Nav — RIGHT */}
        <nav className="desktop-nav" style={{ alignItems: 'center', gap: '24px', display: 'none' }}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} style={{
              color: '#FFFFFF', textDecoration: 'none', fontSize: '12px',
              fontWeight: 500, letterSpacing: '1px', textTransform: 'uppercase',
            }}>{link.label}</Link>
          ))}
          <Link href="/booking" style={{
            color: '#0A0A0A', backgroundColor: '#C8A97E', padding: '8px 20px',
            borderRadius: '4px', textDecoration: 'none', fontSize: '12px',
            fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase',
          }}>Book Now</Link>
        </nav>

        {/* Hamburger — RIGHT (standard pattern, mobile only) */}
        <button className="mobile-only" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" style={{
          background: 'none', border: 'none', cursor: 'pointer',
          display: 'none', flexDirection: 'column', gap: '5px', padding: '8px',
          width: '40px', height: '40px', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{
            width: '22px', height: '2px', backgroundColor: '#C8A97E', display: 'block',
            transition: 'all 0.3s',
            transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'rotate(0deg)',
          }} />
          <span style={{
            width: '22px', height: '2px', backgroundColor: '#C8A97E', display: 'block',
            opacity: menuOpen ? 0 : 1, transition: 'opacity 0.3s',
          }} />
          <span style={{
            width: '22px', height: '2px', backgroundColor: '#C8A97E', display: 'block',
            transition: 'all 0.3s',
            transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'rotate(0deg)',
          }} />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(10,10,10,0.98)', backdropFilter: 'blur(20px)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '24px', zIndex: 9998,
        }}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{
              color: '#FFFFFF', textDecoration: 'none', fontSize: '24px',
              fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '4px',
            }}>{link.label}</Link>
          ))}
          <Link href="/booking" onClick={() => setMenuOpen(false)} style={{
            color: '#0A0A0A', backgroundColor: '#C8A97E', padding: '14px 36px',
            borderRadius: '4px', textDecoration: 'none', fontSize: '18px',
            fontWeight: 600, fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '3px', marginTop: '16px',
          }}>Book Now</Link>
        </div>
      )>

      {/* Spacer to push content below fixed header */}
      <div style={{ height: '52px', flexShrink: 0 }} />
    </>
  )
}
