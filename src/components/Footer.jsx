import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto grid w-[min(90%,1100px)] grid-cols-[1fr_auto] items-start gap-x-12 gap-y-8 border-b border-border pb-10 pt-14 max-[560px]:grid-cols-1">

        <div>
          <h2 className="mb-2 font-display text-[2.2rem] font-normal leading-tight text-primary [letter-spacing:-0.03em]">Juan Paolo I. Peralta</h2>
          <p className="text-[0.78rem] uppercase tracking-[0.12em] text-muted">4th Year BSIT Student &amp; Aspiring Web Developer</p>
        </div>

      </div>

      <div className="mx-auto flex w-[min(90%,1100px)] flex-wrap items-center justify-between gap-4 py-5 max-[560px]:flex-col max-[560px]:text-center">
        <p className="text-[0.75rem] text-muted">© {year} | All Rights Reserved</p>
        <button className="flex cursor-pointer items-center gap-1.5 rounded-sm border border-border px-3.5 py-2 text-[0.75rem] text-secondary transition-colors hover:border-accent hover:text-accent" onClick={scrollTop} aria-label="Back to top">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
          Back to top
        </button>
      </div>
    </footer>
  )
}