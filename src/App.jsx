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
import ScrollProgress from './components/ScrollProgress'

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

  useEffect(() => {
    const delay = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 100 : 3500
    const timeout = window.setTimeout(() => setIsLoading(false), delay)
    return () => window.clearTimeout(timeout)
  }, [])

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
      <div
        className={`fixed inset-0 z-[2000] grid place-items-center overflow-hidden bg-bg transition-[opacity,visibility] duration-[450ms] ease-portfolio-out ${isLoading ? 'visible opacity-100 [transition:opacity_450ms_cubic-bezier(0.16,1,0.3,1),visibility_0s]' : 'invisible pointer-events-none opacity-0 [transition:opacity_450ms_cubic-bezier(0.16,1,0.3,1),visibility_0s_linear_450ms]'}`}
        onTransitionEnd={(event) => {
          if (event.target === event.currentTarget && event.propertyName === 'opacity' && !isLoading) {
            setIsHeroReady(true)
          }
        }}
        role="status"
        aria-label="Preparing portfolio"
        aria-live="polite"
        aria-hidden={!isLoading}
      >
        <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:60px_60px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,black_30%,transparent_100%)]" aria-hidden="true" />
        <div className="pointer-events-none absolute right-[-2rem] top-1/2 -translate-y-1/2 select-none font-display text-[clamp(14rem,28vw,28rem)] font-extrabold leading-none text-transparent [letter-spacing:-0.05em] [-webkit-text-stroke:1px_rgba(255,255,255,0.04)]" aria-hidden="true">01</div>
        <div className="pointer-events-none absolute right-[10%] top-[20%] h-[400px] w-[400px] animate-loading-orb-pulse rounded-full bg-[radial-gradient(circle,rgba(184,255,87,0.08)_0%,transparent_70%)]" aria-hidden="true" />
        <div className="relative z-[1] w-[min(20rem,86vw)] text-center">
          <h1 className="mt-4 font-display text-[2.6rem] font-extrabold leading-none text-primary">
            {loadingTitle.firstLine}<br />
            <span className="text-accent">{loadingTitle.secondLine}</span>
          </h1>
          <div className="mt-6 h-0.5 overflow-hidden bg-border" aria-hidden="true">
            <span className="block h-full w-[34%] animate-loading-progress bg-accent" />
          </div>
          <p className="mt-2.5 text-[0.68rem] uppercase tracking-[0.12em] text-muted">Loading projects...</p>
        </div>
      </div>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <a className="fixed left-3 top-3 z-[1100] -translate-y-[150%] bg-accent px-4 py-2.5 text-[#0a0a0a] transition-transform focus:translate-y-0" href="#main-content">Skip to content</a>
      <main id="main-content">
        <Hero isReady={isHeroReady} />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
