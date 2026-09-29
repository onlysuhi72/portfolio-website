import React, { useEffect, useState } from 'react'

const SKILL_GROUPS = [
  {
    category: 'Core',
    number: '01',
    items: [
      { name: 'HTML5', note: 'Semantic markup, accessibility' },
      { name: 'CSS3', note: 'Flexbox, grid, animations' },
      { name: 'JavaScript', note: 'ES6+, DOM, fetch API' },
      { name: 'PHP', note: 'Server-side scripting, web development' },
    ],
  },
  {
    category: 'Framework & Tools',
    number: '02',
    items: [
      { name: 'React', note: 'Hooks, component design' },
      { name: 'Tailwind CSS', note: 'Utility-first styling' },
      { name: 'SQL', note: 'Queries, joins, schema design' },
      { name: 'Git & GitHub', note: 'Branching, collaboration' },
    ],
  },
  {
    category: 'Design',
    number: '03',
    items: [
      { name: 'UI / UX Basics', note: 'Typography, Figma fundamentals' },
      { name: 'Prototyping', note: 'Interactive mockups and user flows' },
      { name: 'Responsive Design', note: 'Mobile-first layouts' },
      { name: 'Visual Hierarchy', note: 'Spacing, contrast, composition' },
    ],
  },
]

const ALSO_LEARNING = ['Python', 'C#', 'Unity', 'Supabase', 'Vercel', 'Hostinger']

export default function Skills() {
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById('skills')
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
    <section className="relative bg-transparent py-[clamp(4rem,8vw,7rem)] overflow-hidden" id="skills">
      {/* Background Watermark */}
      <div
        className="watermark-text right-[-1rem] top-1/4 text-[clamp(10rem,20vw,20rem)] opacity-[0.03]"
        style={{ transform: `translateY(${offsetY}px)` }}
        aria-hidden="true"
      >
        TOOLKIT
      </div>

      <div className="mx-auto w-[min(90%,1100px)] relative z-10">

        <div className="mb-[clamp(2.5rem,5vw,4rem)] max-w-[560px]">
          <p className="relative mb-5 flex items-center gap-3 pl-6 font-body text-[0.72rem] font-medium uppercase tracking-[0.18em] text-accent opacity-0 translate-y-8 transition-[opacity,transform] duration-[700ms] ease-portfolio-out [&.visible]:translate-y-0 [&.visible]:opacity-100 before:absolute before:left-0 before:top-1/2 before:h-0.5 before:w-4 before:-translate-y-1/2 before:bg-accent">Skills</p>
          <h2 className="font-display text-[clamp(2rem,5vw,3.25rem)] font-extrabold leading-[1.08] text-primary [letter-spacing:-0.03em] opacity-0 translate-y-8 transition-[opacity,transform] duration-[700ms] ease-portfolio-out delay-[100ms] [&.visible]:translate-y-0 [&.visible]:opacity-100">
            My <span className="text-accent">Toolkit</span>
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-5 max-[800px]:grid-cols-1">
          {SKILL_GROUPS.map((group, gi) => (
            <div className="glass-card group relative rounded-2xl p-7 opacity-0 translate-y-8 transition-all duration-[700ms] ease-portfolio-out [&.visible]:translate-y-0 [&.visible]:opacity-100" key={group.category} style={{ transitionDelay: `${gi * 80}ms` }}>
              <div className="mb-5 flex items-baseline justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-2">
                  <span className="glass-pill px-2.5 py-0.5 rounded-full font-display text-[0.7rem] font-bold text-accent">{group.number}</span>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">{group.category}</p>
                </div>
                <span className="text-xs text-accent opacity-40 font-mono">✦</span>
              </div>
              <ul className="m-0 list-none p-0">
                {group.items.map((item) => (
                  <li className="group/item relative flex flex-col border-t border-white/5 py-[0.85rem] first:border-t-0 before:absolute before:left-[-1.75rem] before:top-1/2 before:h-0 before:w-[3px] before:-translate-y-1/2 before:bg-accent before:transition-[height] before:duration-200 hover:before:h-[70%]" key={item.name}>
                    <span className="font-display text-[1.05rem] font-bold text-primary transition-all duration-200 group-hover/item:translate-x-1.5 group-hover/item:text-accent">{item.name}</span>
                    <span className="mt-1 text-[0.8rem] text-secondary">{item.note}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="glass-card mt-10 rounded-2xl p-8 opacity-0 translate-y-8 transition-[opacity,transform] duration-[700ms] ease-portfolio-out [&.visible]:translate-y-0 [&.visible]:opacity-100 relative overflow-hidden before:absolute before:top-0 before:left-0 before:h-[2px] before:w-full before:bg-gradient-to-r before:from-transparent before:via-accent before:to-transparent">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
            <p className="text-[0.78rem] uppercase tracking-[0.12em] text-accent font-medium flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-accent animate-pulse" />
              Currently learning &amp; exploring
            </p>
            <span className="glass-pill rounded-full px-3 py-0.5 text-xs font-mono text-muted">Next-gen stack</span>
          </div>
          <p className="font-display text-xl font-bold text-primary tracking-wide">{ALSO_LEARNING.join(' · ')}</p>
          <p className="mt-4 max-w-[650px] text-[0.86rem] leading-[1.75] text-secondary">
            My short-term goal is to strengthen my Python and Unity skills while building and deploying more complete full-stack applications.
          </p>
        </div>

      </div>
    </section>
  )
}