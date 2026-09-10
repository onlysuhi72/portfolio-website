import React, { useState } from 'react'
import './Contact.css'
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
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'success' | 'error'
  const [loading, setLoading] = useState(false)

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
    <section className="contact section" id="contact">
      <div className="container">

        <p className="section-label reveal">Contact</p>
        <h2 className="section-title reveal reveal-delay-1" style={{ marginBottom: 'clamp(2rem, 4vw, 3.5rem)' }}>
          Let's <span>connect</span>
        </h2>

        <div className="contact__inner">

          {/* Left: info */}
          <div className="contact__info reveal">
            <p className="contact__tagline">
              I'm currently open to <strong>internships, freelance projects,</strong> and
              <strong> entry-level opportunities</strong>. If you have something in mind, let's talk!
            </p>

            <div className="contact__links">
              <p className="contact__socials-label">Email me at</p>
              <div className="contact__link-item" style={{ marginBottom: '1rem', cursor: 'default', color: 'inherit', textDecoration: 'none' }}>
                <span className="contact__link-icon">📧</span>
                paoloperalta246@gmail.com
              </div>
              <p className="contact__socials-label">You can also find me on</p>
              {CONTACT_LINKS.map(({ icon, label, href }) => (
                href ? (
                  <a key={label} href={href} className="contact__link-item" target="_blank" rel="noopener noreferrer">
                    <span className="contact__link-icon">{icon}</span>
                    {label}
                  </a>
                ) : (
                  <div key={label} className="contact__link-item" style={{ cursor: 'default', color: 'inherit', textDecoration: 'none' }}>
                    <span className="contact__link-icon">{icon}</span>
                    {label}
                  </div>
                )
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="contact__form-wrapper reveal reveal-delay-2">
            <form className="contact__form" onSubmit={handleSubmit} noValidate>

              <div className="form__row">
                <div className="form__group">
                  <label className="form__label" htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="form__input"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form__group">
                  <label className="form__label" htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    className="form__input"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form__group">
                <label className="form__label" htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Internship opportunity / Project inquiry / etc."
                  className="form__input"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form__group">
                <label className="form__label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me what you have in mind..."
                  className="form__textarea"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4em', width: '100%', height: '3.2rem', fontSize: '0.98rem' }}
              >
                {loading ? 'Sending...' : (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4em' }}>
                    <SendIcon />
                    Send Message
                  </span>
                )}
              </button>

              {status === 'success' && (
                <p className="form__status form__status--success" role="status">
                  <span className="form__status-mark" aria-hidden="true">✓</span>
                  <span><strong>Thanks for reaching out.</strong> I'll get back to you soon.</span>
                </p>
              )}
              {status === 'error' && (
                <p className="form__status form__status--error">
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
