import React from 'react'
import ScrambleText from './ScrambleText'

export default function Footer() {
  const year = new Date().getFullYear()
  const scrollTop = () =>
    window.dispatchEvent(
      new CustomEvent('portfolio:navigate', { detail: { href: '#hero', label: 'Home' } }),
    )

  return (
    <footer className="border-t border-white/5 bg-surface/30 backdrop-blur-xl [box-shadow:var(--glass-inner-bevel)]">
      <div className="mx-auto grid w-[min(90%,1100px)] grid-cols-[1fr_auto] items-start gap-x-12 gap-y-8 border-b border-white/5 pb-10 pt-14 max-[560px]:grid-cols-1">

        <div>
          <h2 aria-label="Juan Paolo I. Peralta" className="nm-name mb-2 font-display text-[2.2rem] font-extrabold leading-tight text-primary [letter-spacing:-0.03em]">
            <ScrambleText text="Juan Paolo I. Peralta" />
          </h2>
          <p className="text-[0.78rem] uppercase tracking-[0.12em] text-muted">4th Year BSIT Student &amp; Aspiring Web Developer</p>
        </div>

      </div>

      <div className="mx-auto flex w-[min(90%,1100px)] flex-wrap items-center justify-between gap-4 py-5 max-[560px]:flex-col max-[560px]:text-center">
        <p className="text-[0.75rem] text-muted">© {year} | All Rights Reserved</p>
        <button className="glass-button flex cursor-pointer items-center gap-1.5 rounded-full px-4 py-2 text-[0.75rem] text-secondary hover:text-accent" onClick={scrollTop} aria-label="Back to top">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
          Back to top
        </button>
      </div>
    </footer>
  )
}