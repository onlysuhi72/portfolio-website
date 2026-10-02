import React, { useEffect, useRef, useState } from 'react'
import ScrambleText from '../components/ScrambleText'

export default function Hero({ isReady }) {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-transparent pt-20 pb-[clamp(5rem,10vw,9rem)]" id="hero">
      {/* Background decoration */}
      <div className="pointer-events-none absolute right-[-2rem] top-1/2 -translate-y-1/2 select-none font-display text-[clamp(14rem,28vw,28rem)] font-extrabold leading-none text-transparent [letter-spacing:-0.05em] [-webkit-text-stroke:1px_rgba(255,255,255,0.04)]" aria-hidden="true">01</div>
      <div className="pointer-events-none absolute right-[10%] top-[20%] h-[400px] w-[400px] animate-orb-pulse rounded-full bg-[radial-gradient(circle,var(--hero-glow)_0%,transparent_70%)] max-[600px]:right-[-2rem] max-[600px]:top-[10%] max-[600px]:h-[240px] max-[600px]:w-[240px]" aria-hidden="true" />

      <div className="mx-auto w-[min(90%,1100px)] relative z-[2] max-w-[780px] max-[600px]:text-center">

        {/* Name */}
        <br></br><br></br>
        <h1 aria-label="Juan Paolo I. Peralta" className={`nm-name mb-2 font-display text-[clamp(3rem,9vw,6.5rem)] font-extrabold leading-none text-primary [letter-spacing:-0.04em] ${isReady ? 'animate-fade-up [animation-delay:400ms]' : 'opacity-0'}`}>
          <span className="max-[600px]:block"><ScrambleText text="Juan Paolo" /></span>{' '}
          <span className="text-accent max-[600px]:block"><ScrambleText text="I. Peralta" start={11} /></span>
        </h1>

        {/* Role */}
        <p className={`mb-6 font-display text-[clamp(1.1rem,3vw,1.6rem)] font-semibold text-secondary ${isReady ? 'animate-fade-up [animation-delay:550ms]' : 'opacity-0'}`}>Aspiring Web Developer</p>

        {/* Description */}
        <p className={`mb-10 max-w-[480px] max-[600px]:mx-auto text-base leading-[1.75] text-secondary ${isReady ? 'animate-fade-up [animation-delay:700ms]' : 'opacity-0'}`}>
          I build full web experiences across backend systems,<br className="hidden max-[600px]:block" /> databases,
          and clean, responsive front-end interfaces.
        </p>

        {/* CTAs */}
        <div className={`flex flex-wrap items-center gap-4 max-[600px]:justify-center ${isReady ? 'animate-fade-up [animation-delay:850ms]' : 'opacity-0'}`}>
          <button className="relative inline-flex items-center gap-2 rounded-sm bg-accent px-7 py-3 max-[600px]:px-5 font-body text-[0.9rem] font-semibold tracking-[0.02em] text-[#0a0a0a] transition-all duration-300 ease-portfolio [transform:translate(var(--mag-x,0px),var(--mag-y,0px))] hover:[transform:translate(var(--mag-x,0px),calc(var(--mag-y,0px)-2px))] hover:shadow-accent-glow after:absolute after:inset-0 after:bg-white after:opacity-0 after:transition-opacity hover:after:opacity-[0.08] active:after:opacity-[0.16]" onClick={() => scrollTo('#projects')}>
            View Projects
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <button className="glass-button relative inline-flex items-center gap-2 rounded-sm px-7 py-3 max-[600px]:px-5 font-body text-[0.9rem] font-medium tracking-[0.02em] text-primary" onClick={() => scrollTo('#contact')}>
            Contact Me
          </button>
        </div>
      </div>

      {/* Scroll hint removed */}
    </section>
  )
} 