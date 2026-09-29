
import React from 'react'
import PaoloBlackImg from '../images/Paolo-Black.png'
import PaoloWhiteImg from '../images/Paolo-White.png'

export default function About() {
  return (
    <section className="relative bg-bg py-[clamp(5rem,10vw,9rem)] odd:bg-bg even:bg-bg-2" id="about">
      <div className="mx-auto w-[min(90%,1100px)]">
        <div className="grid grid-cols-[0.9fr_1.1fr] items-center gap-[clamp(3rem,6vw,6rem)] max-[768px]:grid-cols-1">

          {/* Left column — avatar */}
          <div className="relative mx-auto w-full max-w-[320px] min-[769px]:max-w-none opacity-0 translate-y-8 transition-[opacity,transform] duration-[700ms] ease-portfolio-out [&.visible]:translate-y-0 [&.visible]:opacity-100 before:absolute before:left-[10%] before:top-[10%] before:-z-10 before:h-[80%] before:w-[80%] before:bg-[radial-gradient(circle,var(--accent)_0%,transparent_70%)] before:opacity-[0.15] before:blur-[60px]">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-border bg-surface shadow-[0_20px_60px_-20px_rgba(0,0,0,0.4)] before:absolute before:-inset-0.5 before:-z-10 before:rounded-[inherit] before:bg-[linear-gradient(135deg,var(--accent),transparent_40%,transparent_60%,var(--accent))] before:bg-[length:200%_200%] before:opacity-60 before:animate-gradient-shift">
              <img
                src={PaoloBlackImg}
                alt="Juan Paolo I. Peralta"
                className="about-portrait-dark h-full w-full rounded-[1.2rem] object-cover transition-transform duration-500 hover:scale-[1.04]"
              />
              <img
                src={PaoloWhiteImg}
                alt="Juan Paolo I. Peralta"
                className="about-portrait-light h-full w-full rounded-[1.2rem] object-cover transition-transform duration-500 hover:scale-[1.04]"
              />
              {/* Floating badge in lower right */}
              <div className="absolute bottom-2 right-2 z-[2] flex items-center gap-3 rounded-md border border-border bg-surface-2 px-4 py-3 shadow-[0_12px_30px_-8px_rgba(0,0,0,0.5)] backdrop-blur-xl max-[768px]:px-4 max-[768px]:py-3.5">
                <span className="font-display text-[2rem] font-extrabold leading-none text-accent">3+</span>
                <span className="text-xs font-medium leading-[1.35] text-secondary">Years learning<br />and improving</span>
              </div>
            </div>
          </div>

          {/* Right column — text */}
          <div className="[&>p:not(.section-label)]:mb-5 [&>p:not(.section-label)]:text-[0.97rem] [&>p:not(.section-label)]:leading-[1.85] [&>p:not(.section-label)]:text-secondary [&>p:not(.section-label)>strong]:font-semibold [&>p:not(.section-label)>strong]:text-primary">
            <p className="section-label relative mb-5 flex items-center gap-3 pl-6 font-body text-[0.72rem] font-medium uppercase tracking-[0.18em] text-accent opacity-0 translate-y-8 transition-[opacity,transform] duration-[700ms] ease-portfolio-out [&.visible]:translate-y-0 [&.visible]:opacity-100 before:absolute before:left-0 before:top-1/2 before:h-0.5 before:w-4 before:-translate-y-1/2 before:bg-accent">About Me</p>
            <h2 className="font-display text-[clamp(2rem,5vw,3.25rem)] font-extrabold leading-[1.08] text-primary [letter-spacing:-0.03em] opacity-0 translate-y-8 transition-[opacity,transform] duration-[700ms] ease-portfolio-out delay-[100ms] [&.visible]:translate-y-0 [&.visible]:opacity-100">
              Building things<br />for the <span className="text-accent">web</span>
            </h2>
            <br></br>
            <p className="opacity-0 translate-y-8 transition-[opacity,transform] duration-[700ms] ease-portfolio-out delay-[200ms] [&.visible]:translate-y-0 [&.visible]:opacity-100">
              Hi, I'm Juan Paolo I. Peralta, a student developer passionate about
              building digital experiences that are functional and visually engaging.
            </p>

            <p className="opacity-0 translate-y-8 transition-[opacity,transform] duration-[700ms] ease-portfolio-out delay-[300ms] [&.visible]:translate-y-0 [&.visible]:opacity-100">
              I am a fourth-year BSIT student at Bulacan State University - Bustos Campus.
              I started with Java and web development using HTML, CSS, JavaScript, PHP, and SQL.
              I later learned 2D and 3D game development with Unity and C#, along with Python,
              Django, and tools like Vercel, Hostinger, and Supabase.
            </p>

            <p className="opacity-0 translate-y-8 transition-[opacity,transform] duration-[700ms] ease-portfolio-out delay-[400ms] [&.visible]:translate-y-0 [&.visible]:opacity-100">
              My projects focuses on backend and database work, including data management,
              authentication, and system functionality. I've also contributed to creating clear,
              responsive, and user-friendly interfaces.
            </p>

          </div>

        </div>
      </div>
    </section>
  )
}
