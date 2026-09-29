import React, { useState, useEffect } from 'react'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact', cta: true },
]

function ThemeToggle({ theme, onChange, className = '' }) {
  return (
    <div className={`navbar__theme-toggle ${className}`} role="group" aria-label="Color theme">
      <button
        type="button"
        className={theme === 'light' ? 'selected' : ''}
        aria-pressed={theme === 'light'}
        onClick={() => onChange('light')}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
        </svg>
        <span>Light</span>
      </button>
      <button
        type="button"
        className={theme === 'dark' ? 'selected' : ''}
        aria-pressed={theme === 'dark'}
        onClick={() => onChange('dark')}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.2 15.3A8.5 8.5 0 0 1 8.7 3.8 8.5 8.5 0 1 0 20.2 15.3Z" />
        </svg>
        <span>Dark</span>
      </button>
    </div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [theme, setTheme] = useState(() => window.localStorage.getItem('portfolio-theme') || 'dark')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  // Add shadow/bg on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight active section via IntersectionObserver (fix for Projects)
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const handleScroll = () => {
      let current = '';
      let minDist = Number.POSITIVE_INFINITY;
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        // Section top should be at or above 80px from top (navbar height)
        const dist = Math.abs(rect.top - 80);
        if (rect.top <= 120 && dist < minDist) {
          minDist = dist;
          current = section.id;
        }
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    const closeOnEscape = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    if (window.location.hash !== href) {
      history.pushState(null, '', href)
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar__inner">

        {/* Logo */}
        <a href="#hero" className="navbar__logo" onClick={(e) => handleNavClick(e, '#hero')}>
          My Portfolio
        </a>

        {/* Desktop Links */}
        <ul className="navbar__links">
          {NAV_LINKS.map(({ label, href, cta }) => (
            <li key={href}>
              <a
                href={href}
                className={
                  `${cta ? 'navbar__cta' : ''} ${activeSection === href.replace('#', '') ? 'active' : ''}`
                }
                onClick={(e) => handleNavClick(e, href)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <ThemeToggle theme={theme} onChange={setTheme} className="navbar__theme-toggle--desktop" />

        {/* Hamburger */}
        <button
          type="button"
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-navigation" className={`navbar__mobile ${menuOpen ? 'open' : ''}`}>
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className={activeSection === href.replace('#', '') ? 'active' : ''}
            onClick={(e) => handleNavClick(e, href)}
          >
            {label}
          </a>
        ))}
        <ThemeToggle theme={theme} onChange={setTheme} className="navbar__theme-toggle--mobile" />
      </div>
    </nav>
  )
}
