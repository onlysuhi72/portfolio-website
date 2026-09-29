import React, { useEffect, useState } from 'react'
import PaoloBlackImg from '../images/Paolo-Black.png'
import PaoloWhiteImg from '../images/Paolo-White.png'

export default function About() {
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById('about')
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
    <section className="relative bg-transparent py-[clamp(4rem,8vw,7rem)] overflow-hidden" id="about">
      {/* Background Watermark */}
      <div
        className="watermark-text left-[-2rem] top-1/3 text-[clamp(10rem,20vw,20rem)] opacity-[0.03]"
        style={{ transform: `translateY(${offsetY}px)` }}
        aria-hidden="true"
      >
        ABOUT
      </div>

      <div className="mx-auto w-[min(90%,1100px)] relative z-10">
        <div className="grid grid-cols-[0.9fr_1.1fr] items-center gap-[clamp(3rem,6vw,6rem)] max-[768px]:grid-cols-1">

          {/* Left column — avatar with overlapping glass elements */}
          <div className="relative mx-auto w-full max-w-[340px] min-[769px]:max-w-none opacity-0 translate-y-8 transition-[opacity,transform] duration-[700ms] ease-portfolio-out [&.visible]:translate-y-0 [&.visible]:opacity-100 before:absolute before:left-[10%] before:top-[10%] before:-z-10 before:h-[80%] before:w-[80%] before:bg-[radial-gradient(circle,var(--accent)_0%,transparent_70%)] before:opacity-[0.25] before:blur-[60px]">

            {/* Top floating mini pill */}
            <div className="glass-pill absolute -top-4 -left-3 z-[3] flex items-center gap-2 rounded-full px-3.5 py-1.5 shadow-lg">
              <span className="text-xs">⚡</span>
              <span className="font-display text-[0.72rem] font-bold text-accent">Full-Stack Passion</span>
            </div>

            <div className="glass-card relative aspect-[4/5] w-full overflow-hidden rounded-2xl p-1.5 shadow-2xl before:absolute before:-inset-0.5 before:-z-10 before:rounded-[inherit] before:bg-[linear-gradient(135deg,var(--accent),transparent_40%,transparent_60%,var(--accent))] before:bg-[length:200%_200%] before:opacity-40 before:animate-gradient-shift">
              <img
                src={PaoloBlackImg}
                alt="Juan Paolo I. Peralta"
                className="about-portrait-dark h-full w-full rounded-xl object-cover transition-transform duration-700 hover:scale-[1.05]"
              />
              <img
                src={PaoloWhiteImg}
                alt="Juan Paolo I. Peralta"
                className="about-portrait-light h-full w-full rounded-xl object-cover transition-transform duration-700 hover:scale-[1.05]"
              />

              {/* Floating badge in lower right */}
              <div className="glass-card absolute bottom-3 right-3 z-[2] flex items-center gap-3 rounded-xl px-4 py-3 shadow-xl transition-transform duration-300 hover:scale-105">
                <span className="font-display text-[2rem] font-extrabold leading-none text-accent">3+</span>
                <span className="text-xs font-medium leading-[1.35] text-secondary">Years learning<br />and improving</span>
              </div>
            </div>

            {/* Bottom floating code tag */}
            <div className="glass-pill absolute -bottom-3 -left-2 z-[3] rounded-md px-3 py-1 font-mono text-[0.72rem] text-muted shadow-md">
              &lt;passionate developer /&gt;
            </div>
          </div>

          {/* Right column — text */}
          <div className="[&>p:not(.section-label)]:mb-5 [&>p:not(.section-label)]:text-[0.97rem] [&>p:not(.section-label)]:leading-[1.85] [&>p:not(.section-label)]:text-secondary [&>p:not(.section-label)>strong]:font-semibold [&>p:not(.section-label)>strong]:text-primary">
            <p className="section-label relative mb-5 flex items-center gap-3 pl-6 font-body text-[0.72rem] font-medium uppercase tracking-[0.18em] text-accent opacity-0 translate-y-8 transition-[opacity,transform] duration-[700ms] ease-portfolio-out [&.visible]:translate-y-0 [&.visible]:opacity-100 before:absolute before:left-0 before:top-1/2 before:h-0.5 before:w-4 before:-translate-y-1/2 before:bg-accent">About Me</p>
            <h2 className="font-display text-[clamp(2rem,5vw,3.25rem)] font-extrabold leading-[1.08] text-primary [letter-spacing:-0.03em] opacity-0 translate-y-8 transition-[opacity,transform] duration-[700ms] ease-portfolio-out delay-[100ms] [&.visible]:translate-y-0 [&.visible]:opacity-100">
              Building things<br />for the <span className="text-accent">web</span>
            </h2>
            <br />
            <p className="opacity-0 translate-y-8 transition-[opacity,transform] duration-[700ms] ease-portfolio-out delay-[200ms] [&.visible]:translate-y-0 [&.visible]:opacity-100">
              Hi, I'm Juan Paolo I. Peralta, a student developer passionate about
              building digital experiences that are functional and visually engaging.
            </p>

            <p className="opacity-0 translate-y-8 transition-[opacity,transform] duration-[700ms] ease-portfolio-out delay-[300ms] [&.visible]:translate-y-0 [&.visible]:opacity-100">
              I am a fourth-year BSIT student at Bulacan State University - Bustos Campus.
              I started with Java and web development using HTML, CSS, JavaScript, PHP, and SQL.
              I later learned 2D and 3D game development with Unity and C#, along with Python,
              Django, and modern cloud platforms like Vercel, Hostinger, and Supabase.
            </p>

            <p className="opacity-0 translate-y-8 transition-[opacity,transform] duration-[700ms] ease-portfolio-out delay-[400ms] [&.visible]:translate-y-0 [&.visible]:opacity-100">
              My projects focus on backend and database work, including data management,
              authentication, and system functionality, paired with clear,
              responsive, and user-friendly interfaces.
            </p>

            {/* Quick Highlights Pill Row */}
            <div className="mt-6 flex flex-wrap gap-2.5 opacity-0 translate-y-8 transition-[opacity,transform] duration-[700ms] ease-portfolio-out delay-[500ms] [&.visible]:translate-y-0 [&.visible]:opacity-100">
              <span className="glass-pill rounded-full px-3.5 py-1 text-xs text-secondary font-medium">🎓 BulSU BSIT</span>
              <span className="glass-pill rounded-full px-3.5 py-1 text-xs text-secondary font-medium">💻 Full-Stack Focus</span>
              <span className="glass-pill rounded-full px-3.5 py-1 text-xs text-secondary font-medium">📍 Bulacan, PH</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
