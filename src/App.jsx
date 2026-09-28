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

    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div
        className={`loading-screen${isLoading ? '' : ' loading-screen--hidden'}`}
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
        <div className="loading-screen__grid-bg" aria-hidden="true" />
        <div className="loading-screen__bg-number" aria-hidden="true">01</div>
        <div className="loading-screen__orb" aria-hidden="true" />
        <div className="loading-screen__content">
          <h1 className="loading-screen__name">
            {loadingTitle.firstLine}<br />
            <span>{loadingTitle.secondLine}</span>
          </h1>
          <div className="loading-screen__track" aria-hidden="true">
            <span />
          </div>
          <p className="loading-screen__label">Loading projects...</p>
        </div>
      </div>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <a className="skip-link" href="#main-content">Skip to content</a>
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
