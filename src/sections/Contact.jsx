import React, { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const CONTACT_LINKS = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.166 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.12 2.51.35 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.41-.01 2.74 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z" /></svg>
    ), label: 'GitHub', href: 'https://github.com/onlysuhi72'
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F3" xmlns="http://www.w3.org/2000/svg"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.405 24 24 23.408 24 22.674V1.326C24 .592 23.405 0 22.675 0" /></svg>
    ), label: 'Facebook', href: 'https://facebook.com/paoloperalta246'
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#0A66C2" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 11.001-4.124 2.062 2.062 0 01-.001 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" /></svg>
    ), label: 'LinkedIn', href: 'https://www.linkedin.com/in/juan-paolo-peralta-8b3900435'
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'success' | 'error'
  const [loading, setLoading] = useState(false)
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById('contact')
      if (!el) return
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setOffsetY((window.innerHeight - rect.top) * 0.08)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      name: form.name,
      email: form.email,
      subject: form.subject,
      message: form.message,
    }, PUBLIC_KEY)
      .then(() => {
        setLoading(false)
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      })
      .catch((err) => {
        console.error(err)
        setLoading(false)
        setStatus('error')
      })
  }

  const SendIcon = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  )

  return (
    <section className="relative bg-transparent py-[clamp(4rem,8vw,7rem)] overflow-hidden" id="contact">
      {/* Background Watermark */}
      <div
        className="watermark-text left-[-1rem] top-1/4 text-[clamp(10rem,20vw,20rem)] opacity-[0.03]"
        style={{ transform: `translateY(${offsetY}px)` }}
        aria-hidden="true"
      >
        CONNECT
      </div>

      <div className="mx-auto w-[min(90%,1100px)] relative z-10">
        <p className="relative mb-5 flex items-center gap-3 pl-6 font-body text-[0.72rem] font-medium uppercase tracking-[0.18em] text-accent opacity-0 translate-y-8 transition-[opacity,transform] duration-[700ms] ease-portfolio-out [&.visible]:translate-y-0 [&.visible]:opacity-100 before:absolute before:left-0 before:top-1/2 before:h-0.5 before:w-4 before:-translate-y-1/2 before:bg-accent">Contact</p>
        <h2 className="mb-[clamp(2rem,4vw,3.5rem)] font-display text-[clamp(2rem,5vw,3.25rem)] font-extrabold leading-[1.08] text-primary [letter-spacing:-0.03em] opacity-0 translate-y-8 transition-[opacity,transform] duration-[700ms] ease-portfolio-out delay-[100ms] [&.visible]:translate-y-0 [&.visible]:opacity-100">
          Let's <span className="text-accent">connect</span>
        </h2>

        <div className="grid grid-cols-[1fr_1.3fr] items-start gap-[clamp(3rem,6vw,6rem)] max-[768px]:grid-cols-1">

          {/* Left: info */}
          <div className="opacity-0 translate-y-8 transition-[opacity,transform] duration-[700ms] ease-portfolio-out [&.visible]:translate-y-0 [&.visible]:opacity-100">
            <p className="mb-10 max-w-[340px] text-base leading-[1.75] text-secondary [&_strong]:font-medium [&_strong]:text-primary">
              I'm currently open to internships, freelance projects, and
              entry-level opportunities. If you have something in mind, let's talk!
            </p>

            <div className="mb-10 flex flex-col gap-3.5">
              <p className="mb-1 text-[0.72rem] uppercase tracking-[0.12em] text-muted">Email me at</p>
              <a href="mailto:paoloperalta246@gmail.com" className="glass-card mb-4 flex items-center gap-3.5 rounded-xl p-3 text-[0.9rem] text-primary group">
                <span className="glass-pill flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-base group-hover:border-accent group-hover:text-accent transition-colors">📧</span>
                paoloperalta246@gmail.com
              </a>
              <p className="mb-1 text-[0.72rem] uppercase tracking-[0.12em] text-muted">You can also find me on</p>
              <div className="flex flex-col gap-2.5">
                {CONTACT_LINKS.map(({ icon, label, href }) => (
                  href ? (
                    <a key={label} href={href} className="glass-button flex items-center gap-3.5 rounded-xl p-3 text-[0.9rem] text-secondary hover:text-accent" target="_blank" rel="noopener noreferrer">
                      <span className="glass-pill flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-base">{icon}</span>
                      <span className="font-medium">{label}</span>
                    </a>
                  ) : (
                    <div key={label} className="glass-card flex cursor-default items-center gap-3.5 rounded-xl p-3 text-[0.9rem] text-secondary">
                      <span className="glass-pill flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-base">{icon}</span>
                      <span className="font-medium">{label}</span>
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="glass-card rounded-2xl p-[clamp(1.5rem,4vw,2.5rem)] shadow-2xl opacity-0 translate-y-8 transition-[opacity,transform] duration-[700ms] ease-portfolio-out delay-[200ms] [&.visible]:translate-y-0 [&.visible]:opacity-100 relative overflow-hidden before:absolute before:top-0 before:left-0 before:h-[2px] before:w-full before:bg-gradient-to-r before:from-transparent before:via-accent before:to-transparent">
            <form className="flex flex-col gap-[1.2rem]" onSubmit={handleSubmit}>

              <div className="grid grid-cols-2 gap-4 max-[768px]:grid-cols-1">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.78rem] font-medium tracking-[0.05em] text-secondary" htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="glass-input w-full rounded-xl px-4 py-3 font-body text-[0.9rem] text-primary placeholder:text-muted focus:outline-none"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.78rem] font-medium tracking-[0.05em] text-secondary" htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    className="glass-input w-full rounded-xl px-4 py-3 font-body text-[0.9rem] text-primary placeholder:text-muted focus:outline-none"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[0.78rem] font-medium tracking-[0.05em] text-secondary" htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Internship opportunity / Project inquiry / etc."
                  className="glass-input w-full rounded-xl px-4 py-3 font-body text-[0.9rem] text-primary placeholder:text-muted focus:outline-none"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[0.78rem] font-medium tracking-[0.05em] text-secondary" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me what you have in mind..."
                  className="glass-input min-h-[140px] w-full resize-none rounded-xl px-4 py-3 font-body text-[0.9rem] text-primary placeholder:text-muted focus:outline-none"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="relative flex h-[3.2rem] w-full items-center justify-center gap-1.5 rounded-xl bg-accent font-body text-[0.98rem] font-semibold text-[#0a0a0a] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(184,255,87,0.25)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 after:absolute after:inset-0 after:bg-white after:opacity-0 after:transition-opacity hover:after:opacity-[0.08]"
                disabled={loading}
              >
                {loading ? 'Sending...' : (
                  <span className="flex items-center gap-1.5">
                    <SendIcon />
                    Send Message
                  </span>
                )}
              </button>

              {status === 'success' && (
                <p className="glass-card mt-3 flex items-center gap-2.5 rounded-xl border-l-4 border-l-accent px-4 py-3 text-left text-[0.85rem] leading-6 text-accent" role="status">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full border border-accent text-[0.7rem] font-bold" aria-hidden="true">✓</span>
                  <span><strong className="font-medium text-primary">Thanks for reaching out.</strong> I'll get back to you soon.</span>
                </p>
              )}
              {status === 'error' && (
                <p className="glass-card mt-3 rounded-xl border border-[rgba(255,87,87,0.4)] px-4 py-3 text-[0.85rem] leading-6 text-red">
                  ❌ Something went wrong. Please try again.
                </p>
              )}

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
