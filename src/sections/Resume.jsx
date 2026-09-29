import React, { useEffect, useRef, useState } from 'react'
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

/**
 * TimelineItem
 * Dynamically reveals as the user scrolls down into view.
 */
function TimelineItem({ role, org, period, desc, index = 0 }) {
  const itemRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    if (itemRef.current) {
      observer.observe(itemRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={itemRef}
      className={`group relative flex gap-5 pb-8 last:pb-2 before:absolute before:bottom-0 before:left-[9px] before:top-5 before:w-px before:bg-gradient-to-b before:from-accent/60 before:to-border last:before:hidden transition-all duration-700 ease-portfolio-out ${isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-12 scale-[0.97]'
        }`}
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
    >
      <div
        className={`glass-pill mt-[3px] h-[18px] w-[18px] shrink-0 rounded-full transition-all duration-500 group-hover:scale-125 group-hover:border-accent group-hover:bg-accent/30 group-hover:shadow-[0_0_14px_var(--accent)] ${isVisible ? 'border-accent bg-accent/20 shadow-[0_0_10px_var(--accent-glow)]' : 'border-border'
          }`}
      />
      <div className="glass-card flex-1 rounded-xl p-5 transition-all duration-300 group-hover:border-accent/40 group-hover:shadow-[0_12px_32px_rgba(0,0,0,0.35)]">
        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
          <p className="font-display text-[1rem] font-bold text-primary group-hover:text-accent transition-colors duration-200">
            {role}
          </p>
          {period && (
            <span className="glass-pill rounded-full px-2.5 py-0.5 text-[0.72rem] font-mono tracking-[0.04em] text-accent/90">
              {period}
            </span>
          )}
        </div>
        {org && <p className="mb-2 text-[0.84rem] text-accent font-medium">{org}</p>}
        <p className="text-[0.85rem] leading-[1.75] text-secondary">{desc}</p>
      </div>
    </div>
  )
}

/**
 * TimelineSection
 * Header and container for each category that reveals progressively on scroll
 */
function TimelineCategory({ title, items }) {
  const catRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    if (catRef.current) {
      observer.observe(catRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={catRef} className="mb-14 last:mb-0">
      <p
        className={`mb-6 flex items-center gap-3 font-display text-[0.75rem] font-bold uppercase tracking-[0.16em] text-accent after:h-px after:flex-1 after:bg-gradient-to-r after:from-accent/50 after:to-border transition-all duration-700 ease-portfolio-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
      >
        {title}
      </p>
      <div className="flex flex-col">
        {items.map((item, idx) => (
          <TimelineItem key={item.role + idx} index={idx} {...item} />
        ))}
      </div>
    </div>
  )
}

export default function Resume() {
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById('resume')
      if (!el) return
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setOffsetY((window.innerHeight - rect.top) * 0.08)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative bg-transparent py-[clamp(4rem,8vw,7rem)]" id="resume">
      {/* Background Watermark */}
      <div
        className="watermark-text right-[-1rem] top-1/4 text-[clamp(10rem,20vw,20rem)] opacity-[0.03] pointer-events-none"
        style={{ transform: `translateY(${offsetY}px)` }}
        aria-hidden="true"
      >
        JOURNEY
      </div>

      <div className="mx-auto w-[min(90%,1100px)] relative z-10">

        <p className="relative mb-5 flex items-center gap-3 pl-6 font-body text-[0.72rem] font-medium uppercase tracking-[0.18em] text-accent opacity-0 translate-y-8 transition-[opacity,transform] duration-[700ms] ease-portfolio-out [&.visible]:translate-y-0 [&.visible]:opacity-100 before:absolute before:left-0 before:top-1/2 before:h-0.5 before:w-4 before:-translate-y-1/2 before:bg-accent">
          Resume &amp; Experience
        </p>
        <h2 className="mb-[clamp(2rem,4vw,3.5rem)] font-display text-[clamp(2rem,5vw,3.25rem)] font-extrabold leading-[1.08] text-primary [letter-spacing:-0.03em] opacity-0 translate-y-8 transition-[opacity,transform] duration-[700ms] ease-portfolio-out delay-[100ms] [&.visible]:translate-y-0 [&.visible]:opacity-100">
          My <span className="text-accent">Journey</span>
        </h2>

        {/* Two-column layout: Left sticky download card, Right scrollable timeline */}
        <div className="grid grid-cols-[1fr_1.45fr] items-start gap-[clamp(3rem,6vw,5.5rem)] max-[768px]:grid-cols-1 relative">

          {/* Left — sticky download card that stays fixed/scrolls alongside the timeline */}
          <div className="sticky top-28 z-20 opacity-0 transition-opacity duration-700 ease-portfolio-out [&.visible]:opacity-100 max-[768px]:static max-[768px]:top-0 w-full">
            <div className="glass-card rounded-2xl p-8 text-center shadow-2xl">
              <div className="glass-card relative mx-auto mb-6 flex h-[88px] w-[72px] items-center justify-center rounded-xl text-[2rem] shadow-inner after:absolute after:right-0 after:top-0 after:h-5 after:w-5 after:rounded-[0_12px_0_12px] after:border-b after:border-l after:border-white/10 after:bg-surface/80">
                📄
              </div>
              <p className="mb-1 font-display text-[1.15rem] font-extrabold text-primary">My Resume</p>
              <p className="mb-7 text-[0.82rem] text-muted">Juan Paolo I. Peralta · 2026</p>

              <button
                className="btn-accent-magnetic relative flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-7 py-[1.1rem] font-body text-[0.9rem] font-bold text-[#0a0a0a] shadow-lg shadow-accent/20"
                onClick={() => {
                  window.open(resumePdf, '_blank');
                }}
              >
                <DownloadIcon />
                Download Resume
              </button>

              {/* Career snapshot */}
              <div className="mt-8 border-t border-white/5 pt-6 text-left">
                <div className="grid gap-4">
                  <div>
                    <p className="mb-1 text-[0.72rem] uppercase tracking-wider text-muted font-medium">Based in</p>
                    <p className="text-[0.86rem] text-secondary font-medium">Bulacan, Philippines</p>
                  </div>
                  <div>
                    <p className="mb-1 text-[0.72rem] uppercase tracking-wider text-muted font-medium">Current focus</p>
                    <p className="text-[0.86rem] text-secondary font-medium">Web development &amp; full-stack systems</p>
                  </div>
                  <div>
                    <p className="mb-1 text-[0.72rem] uppercase tracking-wider text-muted font-medium">Open to</p>
                    <p className="text-[0.86rem] text-secondary font-medium">Internships &amp; entry-level roles</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — progressive scroll timeline */}
          <div className="relative z-10">
            <TimelineCategory title="Education" items={EDUCATION} />
            <TimelineCategory title="Seminars / Training" items={CERTIFICATIONS} />
            <TimelineCategory title="Experience" items={EXPERIENCE} />
          </div>

        </div>
      </div>
    </section>
  )
}
