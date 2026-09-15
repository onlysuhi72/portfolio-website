import React from 'react'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="container footer__top">

        <div className="footer__brand">
          <h2 className="footer__name">Juan Paolo I. Peralta</h2>
          <p className="footer__tagline">4th Year BSIT Student &amp; Aspiring Web Developer</p>
        </div>

      </div>

      <div className="container footer__bottom">
        <p className="footer__copy">© {year} | All Rights Reserved</p>
        <button className="footer__back" onClick={scrollTop} aria-label="Back to top">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
          Back to top
        </button>
      </div>
    </footer>
  )
}