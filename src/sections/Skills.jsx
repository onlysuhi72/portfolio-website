import React from 'react'

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
  return (
    <section className="bg-transparent py-[clamp(5rem,10vw,9rem)]" id="skills">
      <div className="mx-auto w-[min(90%,1100px)]">

        <div className="mb-[clamp(2.5rem,5vw,4rem)] max-w-[560px]">
          <p className="relative mb-5 flex items-center gap-3 pl-6 font-body text-[0.72rem] font-medium uppercase tracking-[0.18em] text-accent opacity-0 translate-y-8 transition-[opacity,transform] duration-[700ms] ease-portfolio-out [&.visible]:translate-y-0 [&.visible]:opacity-100 before:absolute before:left-0 before:top-1/2 before:h-0.5 before:w-4 before:-translate-y-1/2 before:bg-accent">Skills</p>
          <h2 className="font-display text-[clamp(2rem,5vw,3.25rem)] font-extrabold leading-[1.08] text-primary [letter-spacing:-0.03em] opacity-0 translate-y-8 transition-[opacity,transform] duration-[700ms] ease-portfolio-out delay-[100ms] [&.visible]:translate-y-0 [&.visible]:opacity-100">
            My <span className="text-accent">Toolkit</span>
          </h2>
        </div>

        <div className="grid grid-cols-3 border-l border-t border-border max-[800px]:grid-cols-1">
          {SKILL_GROUPS.map((group, gi) => (
            <div className="group relative border-b border-r border-border px-7 py-8 transition-colors duration-300 hover:bg-surface opacity-0 translate-y-8 transition-[opacity,transform,background-color] duration-[700ms] ease-portfolio-out [&.visible]:translate-y-0 [&.visible]:opacity-100" key={group.category} style={{ transitionDelay: `${gi * 80}ms` }}>
              <div className="mb-5 flex items-baseline gap-2.5">
                <span className="font-display text-xs font-semibold text-accent opacity-60">{group.number}</span>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">{group.category}</p>
              </div>
              <ul className="m-0 list-none p-0">
                {group.items.map((item) => (
                  <li className="group/item relative flex flex-col border-t border-dashed border-border py-[0.9rem] first:border-t-0 before:absolute before:left-[-1.75rem] before:top-1/2 before:h-0 before:w-[3px] before:-translate-y-1/2 before:bg-accent before:transition-[height] before:duration-150 hover:before:h-[60%]" key={item.name}>
                    <span className="font-display text-[1.05rem] font-bold text-primary transition-all duration-150 group-hover/item:translate-x-1 group-hover/item:text-accent">{item.name}</span>
                    <span className="mt-1 text-[0.8rem] text-secondary">{item.note}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-md border border-border bg-surface px-7 py-8 opacity-0 translate-y-8 transition-[opacity,transform] duration-[700ms] ease-portfolio-out [&.visible]:translate-y-0 [&.visible]:opacity-100">
          <p className="mb-2 text-[0.78rem] uppercase tracking-[0.1em] text-muted">Currently learning</p>
          <p className="font-display text-xl font-semibold text-primary">{ALSO_LEARNING.join(' · ')}</p>
          <p className="mt-4 max-w-[650px] text-[0.86rem] leading-[1.7] text-secondary">
            My short-term goal is to strengthen my Python and Unity skills while building and deploying more complete full-stack applications.
          </p>
        </div>

      </div>
    </section>
  )
}