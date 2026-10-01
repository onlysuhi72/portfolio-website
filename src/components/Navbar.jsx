import React, { useState, useEffect } from 'react'
import { flushSync } from 'react-dom'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

function ThemeToggle({ theme, onChange, className = '' }) {
  return (
    <div className={`inline-flex items-center gap-0.5 rounded-full border border-border bg-surface/60 p-1 shadow-sm backdrop-blur-xl ${className}`} role="group" aria-label="Color theme">
      <button
        type="button"
        className={`inline-flex min-h-[28px] items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium leading-none transition-all duration-200 ${theme === 'light' ? 'bg-surface shadow-sm text-primary' : 'text-secondary hover:text-primary'}`}
        aria-pressed={theme === 'light'}
        onClick={(event) => onChange('light', event)}
      >
        <svg className="h-3.5 w-3.5 fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.6]" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
        </svg>
        <span>Light</span>
      </button>
      <button
        type="button"
        className={`inline-flex min-h-[28px] items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium leading-none transition-all duration-200 ${theme === 'dark' ? 'bg-surface shadow-sm text-primary' : 'text-secondary hover:text-primary'}`}
        aria-pressed={theme === 'dark'}
        onClick={(event) => onChange('dark', event)}
      >
        <svg className="h-3.5 w-3.5 fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.6]" viewBox="0 0 24 24" aria-hidden="true">
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
  const [navigation, setNavigation] = useState(null)
  const [theme, setTheme] = useState(() => window.localStorage.getItem('portfolio-theme') || 'dark')

  const changeTheme = (nextTheme, event) => {
    const root = document.documentElement
    const updateTheme = () => {
      root.dataset.theme = nextTheme
      setTheme(nextTheme)
    }

    if (!document.startViewTransition || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      updateTheme()
      return
    }

    root.style.setProperty('--theme-x', `${event.clientX}px`)
    root.style.setProperty('--theme-y', `${event.clientY}px`)
    const transition = document.startViewTransition(() => flushSync(updateTheme))
    const clearOrigin = () => {
      root.style.removeProperty('--theme-x')
      root.style.removeProperty('--theme-y')
    }
    transition.finished.then(clearOrigin, clearOrigin)
  }

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
    if (!navigation) return

    document.body.style.overflow = 'hidden'
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const holdDuration = reduceMotion ? 0 : 1200
    const fadeDuration = reduceMotion ? 0 : 750

    if (navigation.phase === 'enter') {
      const timeout = window.setTimeout(() => {
        document.querySelector(navigation.href)?.scrollIntoView({ behavior: 'instant' })
        if (window.location.hash !== navigation.href) {
          history.pushState(null, '', navigation.href)
        }
        setNavigation({ ...navigation, phase: 'leave' })
      }, holdDuration)
      return () => {
        window.clearTimeout(timeout)
        document.body.style.overflow = menuOpen ? 'hidden' : ''
      }
    }

    let animationFrame = 0
    const timeout = window.setTimeout(() => {
      const section = document.querySelector(navigation.href)
      let animatedElements = []
      if (section) {
        animatedElements = section.querySelectorAll('[class~="opacity-0"]')
        animatedElements.forEach((element) => element.classList.remove('visible'))
        animatedElements.forEach((element) => element.getBoundingClientRect())
      }
      animationFrame = window.requestAnimationFrame(() => {
        animatedElements.forEach((element) => element.classList.add('visible'))
        setNavigation(null)
      })
    }, fadeDuration)
    return () => {
      window.clearTimeout(timeout)
      window.cancelAnimationFrame(animationFrame)
      document.body.style.overflow = menuOpen ? 'hidden' : ''
    }
  }, [navigation, menuOpen])

  useEffect(() => {
    const closeOnEscape = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  // Lets other components (like the footer) start the same transition
  useEffect(() => {
    const onNavigate = (e) => {
      const { href, label } = e.detail || {}
      if (!href) return
      setMenuOpen(false)
      setNavigation({ href, label: label || 'Home', phase: 'enter' })
    }
    window.addEventListener('portfolio:navigate', onNavigate)
    return () => window.removeEventListener('portfolio:navigate', onNavigate)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const label = href === '#hero' ? 'Home' : NAV_LINKS.find((link) => link.href === href)?.label
    setNavigation({ href, label, phase: 'enter' })
  }

  return (
    <>
      <nav className={`fixed inset-x-0 top-0 z-[900] py-4 transition-[background,padding,border-color,box-shadow] duration-[400ms] ease-portfolio ${scrolled && !menuOpen ? 'border-b border-border bg-surface/75 py-3 shadow-lg backdrop-blur-2xl [box-shadow:var(--glass-shadow),var(--glass-inner-bevel)]' : 'bg-transparent'}`}>
        <div className="mx-auto flex w-[min(90%,1100px)] items-center justify-between">

          {/* Logo */}
          <a href="#hero" className="flex items-center gap-1.5 font-display text-[1.1rem] font-extrabold text-primary transition-colors hover:text-accent" onClick={(e) => handleNavClick(e, '#hero')}>
            My Portfolio
          </a>

          {/* Desktop Links */}
          <ul className="flex items-center gap-8 max-[768px]:hidden">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`relative text-[0.85rem] font-normal tracking-[0.04em] transition-colors after:absolute after:bottom-[-3px] after:left-0 after:h-px after:bg-accent after:transition-[width] after:duration-300 hover:text-primary ${activeSection === href.replace('#', '') ? 'text-accent after:w-full font-medium' : 'text-secondary after:w-0 hover:after:w-full'}`}
                  onClick={(e) => handleNavClick(e, href)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <ThemeToggle theme={theme} onChange={changeTheme} className="max-[768px]:hidden" />

          {/* Hamburger */}
          <button
            type="button"
            className="relative z-[1001] hidden h-11 w-11 flex-col items-center justify-center p-0 max-[768px]:flex"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className={`absolute h-0.5 w-6 origin-center bg-primary transition-transform duration-300 ${menuOpen ? 'rotate-45' : '-translate-y-[7px]'}`} /><span className={`absolute h-0.5 w-6 bg-primary transition-all duration-300 ${menuOpen ? 'scale-x-0 opacity-0' : ''}`} /><span className={`absolute h-0.5 w-6 origin-center bg-primary transition-transform duration-300 ${menuOpen ? '-rotate-45' : 'translate-y-[7px]'}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
        <div id="mobile-navigation" className={`fixed inset-0 z-[800] flex min-h-[100dvh] flex-col items-center justify-center gap-8 overflow-y-auto bg-bg/95 backdrop-blur-3xl px-6 pb-12 pt-28 transition-[opacity,transform,visibility] duration-[400ms] ease-portfolio-out max-[768px]:justify-start ${menuOpen ? 'visible pointer-events-auto translate-x-0 opacity-100' : 'invisible pointer-events-none translate-x-full opacity-0'}`}>
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`shrink-0 font-display text-[clamp(1.8rem,6vw,3rem)] font-extrabold leading-[1.1] text-secondary transition-colors hover:text-accent ${activeSection === href.replace('#', '') ? 'text-accent' : ''}`}
              onClick={(e) => handleNavClick(e, href)}
            >
              {label}
            </a>
          ))}
        <ThemeToggle theme={theme} onChange={changeTheme} className="mt-2 hidden max-[768px]:inline-flex" />
      </div>
      {navigation && (
        <div
          className={`nv-root ${navigation.phase === 'leave' ? 'nv-leave' : ''}`}
          aria-live="polite"
          aria-label={`Navigating to ${navigation.label}`}
        >
          {/* Curtain panels */}
          <div className="nv-panel nv-panel-accent" aria-hidden="true" />
          <div className="nv-panel nv-panel-main bg-bg" aria-hidden="true" />

          {/* Content */}
          <div className="nv-content grid place-items-center">
            

            {/* Big outlined section number */}
            <div
              className="nv-fade pointer-events-none absolute right-[-1rem] top-1/2 -translate-y-1/2 select-none font-display text-[clamp(12rem,32vw,30rem)] font-extrabold leading-none text-transparent [letter-spacing:-0.05em] [-webkit-text-stroke:1px_var(--ld-stroke)]"
              style={{ animationDelay: '550ms' }}
              aria-hidden="true"
            >
              {String(NAV_LINKS.findIndex((link) => link.href === navigation.href) + 1).padStart(2, '0')}
            </div>

            <div className="relative z-[1] px-6 text-center">
              <p
                className="nv-fade mb-4 flex items-center justify-center gap-3 font-body text-[0.7rem] font-medium uppercase tracking-[0.18em] text-accent"
                style={{ animationDelay: '550ms' }}
              >
                <span className="h-px w-8 bg-accent/60" aria-hidden="true" />
                Going to
                <span className="h-px w-8 bg-accent/60" aria-hidden="true" />
              </p>
              <h2 className="font-display text-[clamp(2.8rem,10vw,6rem)] font-extrabold leading-none text-primary">
                <span className="nv-line">
                  <span style={{ animationDelay: '650ms' }}>{navigation.label}</span>
                </span>
              </h2>
              <div
                className="nv-fade mx-auto mt-7 h-0.5 w-40 overflow-hidden bg-border"
                style={{ animationDelay: '750ms' }}
                aria-hidden="true"
              >
                <span
                  className="nv-bar block h-full w-full"
                  style={{ animationDelay: '850ms', animationFillMode: 'backwards' }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
