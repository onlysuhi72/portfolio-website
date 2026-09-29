import React from 'react'
import resumePdf from '../components/JuanPaoloPeralta-Resume.pdf'

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
    period: '2021 – 2023',
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
    period: 'Feb 2023',
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
    <div className="group relative flex gap-5 pb-7 last:pb-0 before:absolute before:bottom-0 before:left-[9px] before:top-5 before:w-px before:bg-border last:before:hidden">
      <div className="mt-[3px] h-[18px] w-[18px] shrink-0 rounded-full border-2 border-border bg-surface-2 transition-colors duration-150 group-hover:border-accent group-hover:bg-[rgba(184,255,87,0.15)]" />
      <div>
        <p className="mb-0.5 font-display text-[0.97rem] font-bold text-primary">{role}</p>
        <p className="mb-0.5 text-[0.83rem] text-accent">{org}</p>
        <p className="mb-2 text-[0.75rem] tracking-[0.04em] text-muted">{period}</p>
        <p className="text-[0.84rem] leading-[1.7] text-secondary">{desc}</p>
      </div>
    </div>
  )
}

export default function Resume() {
  return (
    <section className="bg-bg py-[clamp(5rem,10vw,9rem)] odd:bg-bg even:bg-bg-2" id="resume">
      <div className="mx-auto w-[min(90%,1100px)]">

        <p className="relative mb-5 flex items-center gap-3 pl-6 font-body text-[0.72rem] font-medium uppercase tracking-[0.18em] text-accent opacity-0 translate-y-8 transition-[opacity,transform] duration-[700ms] ease-portfolio-out [&.visible]:translate-y-0 [&.visible]:opacity-100 before:absolute before:left-0 before:top-1/2 before:h-0.5 before:w-4 before:-translate-y-1/2 before:bg-accent">Resume</p>
        <h2 className="mb-[clamp(2rem,4vw,3.5rem)] font-display text-[clamp(2rem,5vw,3.25rem)] font-extrabold leading-[1.08] text-primary [letter-spacing:-0.03em] opacity-0 translate-y-8 transition-[opacity,transform] duration-[700ms] ease-portfolio-out delay-[100ms] [&.visible]:translate-y-0 [&.visible]:opacity-100">
          My <span className="text-accent">Journey</span>
        </h2>

        <div className="grid grid-cols-[1fr_1.4fr] items-start gap-[clamp(3rem,6vw,6rem)] max-[768px]:grid-cols-1">

          {/* Left — download card */}
          <div className="sticky top-24 rounded-lg border border-border bg-surface p-8 text-center opacity-0 translate-y-8 transition-[opacity,transform] duration-[700ms] ease-portfolio-out [&.visible]:translate-y-0 [&.visible]:opacity-100 max-[768px]:static">
            <div className="relative mx-auto mb-6 flex h-[88px] w-[72px] items-center justify-center rounded-md border border-border bg-bg-3 text-[2rem] after:absolute after:right-0 after:top-0 after:h-5 after:w-5 after:rounded-[0_12px_0_12px] after:border-b after:border-l after:border-border after:bg-surface">📄</div>
            <p className="mb-1 font-display text-[1.1rem] font-extrabold text-primary">My Resume</p>
            <p className="mb-7 text-[0.82rem] text-muted">Juan Paolo I. Peralta · 2026</p>

            <button
              className="relative flex w-full items-center justify-center gap-2 rounded-sm bg-accent px-7 py-[1.1rem] font-body text-[0.9rem] font-semibold text-[#0a0a0a] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-accent-glow after:absolute after:inset-0 after:bg-white after:opacity-0 after:transition-opacity hover:after:opacity-[0.08]"
              onClick={() => {
                window.open(resumePdf, '_blank');
              }}
            >
              <DownloadIcon />
              Download Resume
            </button>

            {/* Career snapshot */}
            <div className="mt-8 border-t border-border pt-6 text-left">
              <div className="grid gap-3.5">
                <div>
                  <p className="mb-1 text-[0.72rem] text-muted">Based in</p>
                  <p className="text-[0.84rem] text-secondary">Bulacan, Philippines</p>
                </div>
                <div>
                  <p className="mb-1 text-[0.72rem] text-muted">Current focus</p>
                  <p className="text-[0.84rem] text-secondary">Web development and system building</p>
                </div>
                <div>
                  <p className="mb-1 text-[0.72rem] text-muted">Open to</p>
                  <p className="text-[0.84rem] text-secondary">Internships and entry-level opportunities</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — timeline */}
          <div>
            {/* Education */}
            <div className="mb-12 opacity-0 translate-y-8 transition-[opacity,transform] duration-[700ms] ease-portfolio-out delay-[100ms] [&.visible]:translate-y-0 [&.visible]:opacity-100">
              <p className="mb-5 flex items-center gap-3 font-display text-[0.72rem] font-bold uppercase tracking-[0.15em] text-accent after:h-px after:flex-1 after:bg-border">Education</p>
              {EDUCATION.map((item) => (
                <TimelineItem key={item.role} {...item} />
              ))}
            </div>

            {/* Certifications and seminars */}
            <div className="mb-12 opacity-0 translate-y-8 transition-[opacity,transform] duration-[700ms] ease-portfolio-out delay-[200ms] [&.visible]:translate-y-0 [&.visible]:opacity-100">
              <p className="mb-5 flex items-center gap-3 font-display text-[0.72rem] font-bold uppercase tracking-[0.15em] text-accent after:h-px after:flex-1 after:bg-border">Seminars / Training</p>
              {CERTIFICATIONS.map((item) => (
                <TimelineItem key={item.role} {...item} />
              ))}
            </div>

            {/* Experience */}
            <div className="mb-12 opacity-0 translate-y-8 transition-[opacity,transform] duration-[700ms] ease-portfolio-out delay-[300ms] [&.visible]:translate-y-0 [&.visible]:opacity-100">
              <p className="mb-5 flex items-center gap-3 font-display text-[0.72rem] font-bold uppercase tracking-[0.15em] text-accent after:h-px after:flex-1 after:bg-border">Experience</p>
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
