import React from 'react'
import './Hero.css'

export default function Hero() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero section" id="hero">
      {/* Background decoration */}
      <div className="hero__grid-bg" aria-hidden="true" />
      <div className="hero__bg-number" aria-hidden="true">01</div>
      <div className="hero__orb" aria-hidden="true" />

      <div className="container hero__content">

        {/* Name */}
        <h1 className="hero__title">
          Juan Paolo I.
          <span className="hero__title-accent">Peralta</span>
        </h1>

        {/* Role */}
        <p className="hero__subtitle">Aspiring Web Developer</p>

        {/* Description */}
        <p className="hero__description">
          I build <strong>full web experiences</strong> across backend systems, databases,
          and clean, responsive front-end interfaces.
        </p>

        {/* CTAs */}
        <div className="hero__actions">
          <button className="btn btn-primary" onClick={() => scrollTo('#projects')}>
            View Projects
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <button className="btn btn-outline" onClick={() => scrollTo('#contact')}>
            Contact Me
          </button>
        </div>
      </div>

      {/* Scroll hint removed */}
    </section>
  )
}
