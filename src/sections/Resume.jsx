import React from 'react'
import './Resume.css'

const EDUCATION = [
  {
    role: 'Bachelor of Science in Information Technology',
    org: 'Bulacan State University - Bustos Campus',
    period: '2023 – Present',
    desc: 'In my first year, I continued learning Java fundamentals. During my second year, I focused on web development using HTML, CSS, JavaScript, PHP, and SQL, with project work across backend functionality and database management. In my third year, I advanced to web development with deployment, utilizing React, Tailwind CSS, Vite, and JavaScript for both front-end and full web experiences.',
  },
  {
    role: 'Senior High School — ICT',
    org: 'Carlos F. Gonzales High School',
    period: '2022 – 2023',
    desc: 'The main programming language was Java, where I learned the basics and fundamentals such as variables, loops, if/else statements, and more.',
  },
]

const EXPERIENCE = [
  {
    role: 'No professional experience yet',
    org: '',
    period: '',
    desc: 'Currently focused on my studies and building my skills as a web developer.'
  }
]

const HIGHLIGHTS = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'React',
  'GitHub',
  'Tailwind CSS',
  'Node.js',
  'Figma',
  'Firebase',
]

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
)

function TimelineItem({ role, org, period, desc }) {
  return (
    <div className="resume__item">
      <div className="resume__dot" />
      <div className="resume__item-body">
        <p className="resume__item-role">{role}</p>
        <p className="resume__item-org">{org}</p>
        <p className="resume__item-period">{period}</p>
        <p className="resume__item-desc">{desc}</p>
      </div>
    </div>
  )
}

export default function Resume() {
  return (
    <section className="resume section" id="resume">
      <div className="container">

        <p className="section-label reveal">Resume</p>
        <h2 className="section-title reveal reveal-delay-1" style={{ marginBottom: 'clamp(2rem, 4vw, 3.5rem)' }}>
          My <span>Journey</span>
        </h2>

        <div className="resume__inner">

          {/* Left — download card */}
          <div className="resume__download-card reveal">
            <div className="resume__doc-icon">📄</div>
            <p className="resume__download-title">Curriculum Vitae</p>
            <p className="resume__download-sub">Juan Paolo Peralta · 2026</p>

            {/* Replace href with your actual resume PDF path, e.g. "/resume.pdf" */}
            <button
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '0.5rem', paddingTop: '1.1rem', paddingBottom: '1.1rem' }}
              onClick={() => {
                window.open('/resume.pdf', '_blank');
              }}
            >
              <DownloadIcon />
              Download Resume
            </button>

            {/* Skill highlights */}
            <div style={{ marginTop: '2rem', textAlign: 'left' }}>
              <p style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                Key Skills
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {HIGHLIGHTS.map((s) => (
                  <span
                    key={s}
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-secondary)',
                      background: 'var(--bg-3)',
                      border: '1px solid var(--border)',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '4px',
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — timeline */}
          <div className="resume__timeline-col">
            {/* Education */}
            <div className="resume__block reveal reveal-delay-1">
              <p className="resume__block-title">Education</p>
              {EDUCATION.map((item) => (
                <TimelineItem key={item.role} {...item} />
              ))}
            </div>

            {/* Experience */}
            <div className="resume__block reveal reveal-delay-2">
              <p className="resume__block-title">Experience</p>
              {EXPERIENCE.map((item) => (
                <TimelineItem key={item.role} {...item} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
