import React from 'react'
import './Skills.css'

const SKILLS = [
  {
    icon: '🌐',
    title: 'HTML5',
    desc: 'Semantic markup, accessibility, and modern HTML structure.',
    levelLabel: 'Comfortable',
  },
  {
    icon: '🎨',
    title: 'CSS3',
    desc: 'Flexbox, grid, animations, and custom property designs.',
    levelLabel: 'Comfortable',
  },
  {
    icon: '⚡',
    title: 'JavaScript',
    desc: 'ES6+, DOM manipulation, fetch API, and core programming concepts.',
    levelLabel: 'Working knowledge',
  },
  {
    icon: '🗄️',
    title: 'SQL',
    desc: 'Database design, queries, joins, and data manipulation.',
    levelLabel: 'Comfortable',
  },
  {
    icon: '⚛️',
    title: 'React',
    desc: 'Functional components, hooks, and component design.',
    levelLabel: 'Working knowledge',
  },
  {
    icon: '📱',
    title: 'Responsive Design',
    desc: 'Mobile-first layouts, media queries, and adaptive UI patterns.',
    levelLabel: 'Comfortable',
  },
  {
    icon: '🖌️',
    title: 'UI / UX Basics',
    desc: 'Design principles, typography, and Figma basics & fundamentals.',
    levelLabel: 'Working knowledge',
  },
  {
    icon: '🔧',
    title: 'Git & GitHub',
    desc: 'Version control, branching, commits, and project collaboration.',
    levelLabel: 'Currently learning',
  },
]

const ALSO_LEARNING = ['Tailwind CSS', 'Node.js', 'Figma', 'TypeScript', 'Firebase']

/**
 * SkillCard — individual card with an animated visual familiarity bar.
 */
function SkillCard({ icon, title, desc, levelLabel, delay }) {
  return (
    <div className="skill-card reveal" style={{ transitionDelay: `${delay}ms` }}>
      <span className="skill-card__icon">{icon}</span>
      <p className="skill-card__title">{title}</p>
      <p className="skill-card__desc">{desc}</p>

      <div className="skill-card__level">
        <span>{levelLabel}</span>
      </div>
    </div>
  )
}

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

        <div className="skills__grid">
          {SKILLS.map((skill, i) => (
            <SkillCard key={skill.title} {...skill} delay={i * 60} />
          ))}
        </div>

        {/* Current learning goals */}
        <div className="skills__also reveal">
          <p className="skills__also-label">Currently learning</p>
          <div className="skills__tags">
            {ALSO_LEARNING.map((tag) => (
              <span key={tag} className="skills__tag">{tag}</span>
            ))}
          </div>
          <p className="skills__learning-goal">My short-term goal is to strengthen my TypeScript and Node.js skills while building and deploying more complete full-stack applications.</p>
        </div>

      </div>
    </section>
  )
}
