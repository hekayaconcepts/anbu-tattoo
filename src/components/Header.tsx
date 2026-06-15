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
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(200,169,126,0.1)' : 'none',
      }}>
        {/* Logo — compact */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          <Image src="/logo.png" alt="Anbu Tattoo" width={36} height={36} priority />
          <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '20px', color: '#C8A97E', letterSpacing: '4px', whiteSpace: 'nowrap' }}>
            ANBU
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex" style={{ alignItems: 'center', gap: '28px' }}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '13px', fontWeight: 400, letterSpacing: '1px', textTransform: 'uppercase' }}>
              {link.label}
            </Link>
          ))}
          <Link href="/booking" style={{ color: '#0A0A0A', backgroundColor: '#C8A97E', padding: '10px 24px', borderRadius: '4px', textDecoration: 'none', fontSize: '13px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>
            Book Now
          </Link>
        </nav>

        {/* Mobile Hamburger — always visible, right side */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', flexDirection: 'column', gap: '5px', padding: '8px',
          flexShrink: 0,
        }}>
          <span style={{ width: '24px', height: '2px', backgroundColor: '#C8A97E', display: 'block', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
          <span style={{ width: '24px', height: '2px', backgroundColor: '#C8A97E', display: 'block', opacity: menuOpen ? 0 : 1 }} />
          <span style={{ width: '24px', height: '2px', backgroundColor: '#C8A97E', display: 'block', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="md:hidden" style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(10,10,10,0.98)', backdropFilter: 'blur(20px)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '28px', zIndex: 40,
        }}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{
              color: '#FFFFFF', textDecoration: 'none', fontSize: '22px', fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '3px',
            }}>{link.label}</Link>
          ))}
          <Link href="/booking" onClick={() => setMenuOpen(false)} style={{
            color: '#0A0A0A', backgroundColor: '#C8A97E', padding: '14px 32px', borderRadius: '4px',
            textDecoration: 'none', fontSize: '16px', fontWeight: 600, fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '2px', marginTop: '12px',
          }}>Book Now</Link>
        </div>
      )}
    </>
  )
}
