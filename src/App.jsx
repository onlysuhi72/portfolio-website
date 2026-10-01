import React, { useEffect, useLayoutEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Resume from './sections/Resume'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import CursorTrail from './components/CursorTrail'
import ScrollProgress from './components/ScrollProgress'
import ContinuousBackground from './components/ContinuousBackground'
import SectionTransition from './components/SectionTransition'

const loadingTitles = [
  { firstLine: 'Code. Design.', secondLine: 'Create.' },
  { firstLine: 'Ideas into', secondLine: 'interfaces.' },
  { firstLine: 'Build. Learn.', secondLine: 'Repeat.' },
  { firstLine: 'Crafting', secondLine: 'the web.' },
  { firstLine: 'Think. Build.', secondLine: 'Launch.' },
]

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isHeroReady, setIsHeroReady] = useState(false)
  const [isGone, setIsGone] = useState(false)
  const [progress, setProgress] = useState(0)
  const [loadingTitle] = useState(
    () => loadingTitles[Math.floor(Math.random() * loadingTitles.length)],
  )

  useLayoutEffect(() => {
    window.history.scrollRestoration = 'manual'
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  useLayoutEffect(() => {
    const root = document.documentElement
    root.classList.toggle('is-loading', !isHeroReady)
    return () => root.classList.remove('is-loading')
  }, [isHeroReady])

  // Animate the counter 0 → 100
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const duration = reduced ? 100 : 3500
    const start = performance.now()
    let raf = 0
    let holdTimeout = 0

    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1)
      setProgress(Math.round((1 - Math.pow(1 - t, 3)) * 100))
      if (t < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        holdTimeout = window.setTimeout(() => setIsLoading(false), reduced ? 0 : 350)
      }
    }

    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      window.clearTimeout(holdTimeout)
    }
  }, [])

  // Start the hero while the curtain is still opening, then remove the overlay
  useEffect(() => {
    if (isLoading) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const heroTimeout = window.setTimeout(() => setIsHeroReady(true), reduced ? 0 : 700)
    const goneTimeout = window.setTimeout(() => setIsGone(true), reduced ? 0 : 1300)
    return () => {
      window.clearTimeout(heroTimeout)
      window.clearTimeout(goneTimeout)
    }
  }, [isLoading])

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('[class~="opacity-0"]')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {!isGone && (
        <div
          className={`ld-root ${isLoading ? '' : 'ld-exit'}`}
          role="status"
          aria-label="Preparing portfolio"
          aria-live="polite"
          aria-hidden={!isLoading}
        >
          {/* Curtain panels */}
          <div className="ld-panel ld-panel-top bg-bg" />
          <div className="ld-panel ld-panel-bottom bg-bg" />

          {/* Content */}
          <div className="ld-content grid place-items-center">
            <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(var(--ld-line)_1px,transparent_1px),linear-gradient(90deg,var(--ld-line)_1px,transparent_1px)] [background-size:60px_60px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,black_30%,transparent_100%)]" aria-hidden="true" />
            <div className="ld-scan" aria-hidden="true" />
            <div className="pointer-events-none absolute right-[10%] top-[20%] h-[400px] w-[400px] animate-loading-orb-pulse rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--accent)_var(--ld-orb),transparent)_0%,transparent_70%)]" aria-hidden="true" />
            <div className="ld-ring" aria-hidden="true" />

            {/* Corner labels */}
            <span className="ld-corner left-6 top-6">JUAN PAOLO PERALTA</span>
            <span className="ld-corner right-6 top-6">MY PORTFOLIO © 2026</span>
            <span className="ld-corner bottom-6 right-6">{['Loading projects...', 'Compiling components...', 'Polishing pixels...', 'Almost there...', 'Ready ✓'][Math.min(Math.floor(progress / 25), 4)]}</span>

            {/* Big counter */}
            <div className="pointer-events-none absolute bottom-2 left-6 select-none font-display text-[clamp(5rem,16vw,12rem)] font-extrabold leading-none tabular-nums text-transparent [letter-spacing:-0.05em] [-webkit-text-stroke:1px_var(--ld-stroke)]" aria-hidden="true">
              {String(progress).padStart(3, '0')}
              <span className="text-accent [-webkit-text-stroke:0] text-[0.25em] align-top">%</span>
            </div>

            {/* Title + progress bar */}
            <div className="relative z-[1] w-[min(22rem,86vw)] text-center">
              <h1 className="font-display text-[2.6rem] font-extrabold leading-none text-primary">
                <span className="ld-line"><span style={{ animationDelay: '150ms' }}>{loadingTitle.firstLine}</span></span>
                <span className="ld-line text-accent"><span style={{ animationDelay: '350ms' }}>{loadingTitle.secondLine}</span></span>
              </h1>
              <div className="mt-6 h-0.5 overflow-hidden bg-border" aria-hidden="true">
                <span
                  className="block h-full bg-accent shadow-[0_0_12px_color-mix(in_srgb,var(--accent)_70%,transparent)]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Accent seam that flashes when the curtain splits */}
          <div className="ld-seam" aria-hidden="true" />
        </div>
      )}
      <CustomCursor />
      <CursorTrail />
      <ScrollProgress />
      <ContinuousBackground />
      <Navbar />
      <a className="fixed left-3 top-3 z-[1100] -translate-y-[150%] bg-accent px-4 py-2.5 text-[#0a0a0a] transition-transform focus:translate-y-0" href="#main-content">Skip to content</a>
      <main id="main-content" className="relative z-10">
        <Hero isReady={isHeroReady} />

        {/* Transition Bridge 1: Hero → About */}
        <SectionTransition
          watermarkNumber="01"
          watermarkLabel="ABOUT ME"
          tickerItems={[
            'CREATIVE DEVELOPER',
            'FULL-STACK ARCHITECTURE',
            'CLEAN & RESPONSIVE UI',
            'ROBUST BACKEND LOGIC',
            'DATABASE SYSTEM DESIGN'
          ]}
        />

        <About />

        {/* Transition Bridge 2: About → Skills */}
        <SectionTransition
          watermarkNumber="02"
          watermarkLabel="TECHNICAL SKILLS"
          reverse={true}
          tickerItems={[
            'REACT & JAVASCRIPT',
            'PHP & MYSQL',
            'TAILWIND CSS & UI/UX',
            'UNITY & PYTHON',
            'CLOUD & SUPABASE'
          ]}
        />

        <Skills />

        {/* Transition Bridge 3: Skills → Projects */}
        <SectionTransition
          watermarkNumber="03"
          watermarkLabel="SELECTED WORKS"
          tickerItems={[
            'ADLAON OPTICAL SYSTEM',
            'HOMEZY RENTAL PLATFORM',
            'SWIFTEATS MOBILE DESIGN',
            'BULSU E-HANDBOOK',
            'CLASH CIRCUIT GAMING'
          ]}
        />

        <Projects />

        {/* Transition Bridge 4: Projects → Resume */}
        <SectionTransition
          watermarkNumber="04"
          watermarkLabel="JOURNEY & EXPERIENCE"
          reverse={true}
          tickerItems={[
            'BSIT 4TH YEAR',
            'ASICS TECH SUMMIT',
            'NETWORKING CERTIFIED',
            'COLLABORATIVE BUILDER',
            'LIFELONG LEARNER'
          ]}
        />

        <Resume />

        {/* Transition Bridge 5: Resume → Contact */}
        <SectionTransition
          watermarkNumber="05"
          watermarkLabel="GET IN TOUCH"
          tickerItems={[
            'OPEN FOR OPPORTUNITIES',
            'INTERNSHIP INQUIRIES',
            'FREELANCE PROJECTS',
            'LET’S BUILD TOGETHER'
          ]}
        />

        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
