import React from 'react'
import './Skills.css'

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
    <section className="skills section" id="skills">
      <div className="container">

        <div className="skills__header">
          <p className="section-label reveal">Skills</p>
          <h2 className="section-title reveal reveal-delay-1">
            My <span>Toolkit</span>
          </h2>
        </div>

        <div className="skills__list">
          {SKILL_GROUPS.map((group, gi) => (
            <div className="skills__group reveal" key={group.category} style={{ transitionDelay: `${gi * 80}ms` }}>
              <div className="skills__group-head">
                <span className="skills__group-number">{group.number}</span>
                <p className="skills__group-label">{group.category}</p>
              </div>
              <ul className="skills__items">
                {group.items.map((item) => (
                  <li className="skills__item" key={item.name}>
                    <span className="skills__item-name">{item.name}</span>
                    <span className="skills__item-note">{item.note}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="skills__also reveal">
          <p className="skills__also-label">Currently learning</p>
          <p className="skills__also-list">{ALSO_LEARNING.join(' · ')}</p>
          <p className="skills__learning-goal">
            My short-term goal is to strengthen my Python and Unity skills while building and deploying more complete full-stack applications.
          </p>
        </div>

      </div>
    </section>
  )
}