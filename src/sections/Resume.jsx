import React from 'react'
import './Resume.css'

const EDUCATION = [
  {
    role: 'Bachelor of Science in Information Technology',
    org: 'Bulacan State University - Bustos Campus',
    period: '2023 – Present · 4th Year',
    desc: 'Coursework in web development using HTML, CSS, JavaScript, PHP, and SQL, with hands-on projects using React, Tailwind CSS, Vite, and deployment workflows.',
  },
  {
    role: 'Senior High School — ICT',
    org: 'Carlos F. Gonzales High School',
    period: '2022 – 2023',
    desc: 'Completed Java programming coursework covering variables, loops, conditional statements, and other fundamental programming concepts.',
  },
]

const CERTIFICATIONS = [
  {
    role: '3rd ASICS Summit: Tools of Tomorrow - Empowering Potential Through Tech',
    org: 'ASICS Summit',
    period: 'March 2025',
    desc: 'Seminar focused on technology tools and their potential to empower learners and future professionals.',
  },
  {
    role: '2nd ASICS Summit: Reimagine Tomorrow - Decoding the Future Through AI',
    org: 'ASICS Summit',
    period: 'March 2024',
    desc: 'Seminar exploring artificial intelligence and its role in shaping the future.',
  },
  {
    role: '1st ASICS Summit: InnoVision - IT Insights for Tomorrow',
    org: 'ASICS Summit',
    period: 'March 2023',
    desc: 'Seminar covering emerging information technology insights and innovations.',
  },
  {
    role: 'Getting Started with Cisco Packet Tracer',
    org: 'Cisco Networking Academy',
    period: '',
    desc: 'Introductory training on network simulation and the fundamentals of using Cisco Packet Tracer.',
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
            <p className="resume__download-title">My Resume</p>
            <p className="resume__download-sub">Juan Paolo I. Peralta · 2026</p>

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

            {/* Career snapshot */}
            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)', textAlign: 'left' }}>              
              <div style={{ display: 'grid', gap: '0.85rem' }}>
                <div>
                  <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Based in</p>
                  <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>Bulacan, Philippines</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Current focus</p>
                  <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>Web development and system building</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Open to</p>
                  <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>Internships and entry-level opportunities</p>
                </div>
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

            {/* Certifications and seminars */}
            <div className="resume__block reveal reveal-delay-2">
              <p className="resume__block-title">Seminars / Training</p>
              {CERTIFICATIONS.map((item) => (
                <TimelineItem key={item.role} {...item} />
              ))}
            </div>

            {/* Experience */}
            <div className="resume__block reveal reveal-delay-3">
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
