import React from 'react'
import AdlaonImg from '../images/Adlaon.png'
import HomezyImg from '../images/Homezy.png'
import SwiftEatsImg from '../images/SwiftEats.png'
import BulSUEHandbookImg from '../images/BulSU-E-Handbook.jpg'
import ClashCircuitImg from '../images/ClashCircuit.png'
import OneDataImg from '../images/OneData.png'

const PROJECTS = [
  {
    id: '01',
    emoji: '🛒',
    title: 'Adlaon Optical',
    category: 'Web Development',
    desc: 'A web-based management system for an optical clinic. It combines a customer-facing interface with backend workflows. These workflows support products, appointments, orders, and eye care services.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
    date: '2025',
    team: 'Collaborative project',
    role: 'Backend and database developer',
    contributions: ['Backend workflows', 'Database design', 'Authentication', 'UI implementation'],
    github: 'https://github.com/ainthens/adlaon-optical-e-commerce-system',
    demo: '',
    showPlaceholders: true,
    layout: 'featured',
  },
  {
    id: '02',
    emoji: '✅',
    title: 'Homezy',
    category: 'Web Development',
    desc: 'A web-based management system for short-term rentals and experiences, with front-end booking flows and backend functionality for listings, reservations, users, and platform operations.',
    stack: ['Node.js', 'React', 'JavaScript'],
    date: '2025',
    team: 'Individual project',
    role: 'Full-stack developer',
    contributions: ['UI implementation', 'Backend functionality', 'Authentication', 'Deployment'],
    github: 'https://github.com/paoloperalta246/homezy.git',
    demo: 'https://homezy-beta.vercel.app/',
    layout: 'secondary',
  },
  {
    id: '03',
    emoji: '🍔',
    title: 'SwiftEats',
    category: 'UI/UX Design',
    desc: 'A food delivery platform where customers can browse, customize, order, and track meals. Delivery riders can manage their assigned deliveries through dedicated features. Administrators can monitor orders, users, analytics, and platform settings.',
    stack: ['Figma', 'UI/UX Design', 'Wireframing', 'Prototyping'],
    date: '2025',
    team: 'Individual project',
    role: 'UI/UX designer and prototyping',
    contributions: ['User flows', 'Wireframes', 'Interface design', 'Interactive prototype'],
    github: '',
    demo: '',
    figma: 'https://www.figma.com/design/AMXRsAaTsV54mdpxuy1z0c/Specialization-1-%7C-Final-Project?node-id=0-1&t=3ZiBS5rxpS0el3uM-1',
    layout: 'secondary',
  },
  {
    id: '04',
    title: 'BulSU E-Handbook',
    category: 'Android App',
    desc: 'An Android-based digital student handbook for Bulacan State University – Bustos Campus. It provides students with offline access to university policies, student regulations, campus information, academic guidelines, directories, and other essential resources.',
    stack: ['Java', 'Android Studio', 'Android SDK'],
    team: 'Collaborative project',
    role: 'Android Developer',
    contributions: ['UI Design', 'Android Development', 'Feature Implementation'],
    github: 'https://github.com/Robb730/bulsu-handbook',
    layout: 'secondary',
  },
  {
    id: '05',
    emoji: '🌿',
    title: 'OneData',
    category: 'Web Development',
    desc: 'A web application designed for managing users, files, and organizational data. I worked across its data-focused functionality and database, including authentication, file uploads, audit logs, dashboards, and role-based access controls.',
    stack: ['React', 'JavaScript', 'Tailwind CSS', 'Vite'],
    date: '2026',
    team: 'Collaborative project',
    role: 'Back-end developer',
    contributions: ['Authentication', 'File management', 'Database workflows', 'Role-based access control'],
    github: 'https://github.com/Robb730/onedata',
    demo: 'https://onedata-baliwag.com/',
    layout: 'secondary',
  },
  {
    id: '06',
    emoji: '🌿',
    title: 'Clash Circuit',
    category: 'Web Development',
    desc: 'A modern website for a 2D Unity top-down mobile game. It features the game\'s story, characters, factions, game modes, screenshots, and developer details. Visitors can also download and install the mobile game.',
    stack: ['React', 'JavaScript', 'CSS', 'Vite'],
    date: '2026',
    team: 'Collaborative project',
    role: 'Full-stack developer',
    contributions: ['Backend functionality', 'Responsive design', 'Content structure', 'Deployment'],
    github: 'https://github.com/paoloperalta246/clash-circuit-website.git',
    demo: 'https://clash-circuit-website.vercel.app/',
    layout: 'secondary',
  },
]

/** GitHub icon SVG */
const GitHubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
)

const FigmaIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#f24e1e" d="M8 2h4v6H8a3 3 0 1 1 0-6Z" />
    <path fill="#ff7262" d="M8 8h4v6H8a3 3 0 1 1 0-6Z" />
    <path fill="#a259ff" d="M8 14h4v5a3 3 0 1 1-4-2.6V14Z" />
    <path fill="#1abcfe" d="M12 2h4a3 3 0 1 1 0 6h-4V2Z" />
    <path fill="#0acf83" d="M12 8h4a3 3 0 1 1 0 6h-4V8Z" />
  </svg>
)

function ProjectCard({ project }) {
  const isFull = project.layout !== 'featured' && project.layout !== 'secondary'
  const isFeatured = project.layout === 'featured'

  return (
    <article className={`group relative mx-auto flex w-full max-w-[900px] flex-col overflow-hidden rounded-lg border border-border bg-surface transition-[border-color,transform] duration-300 ease-portfolio-out hover:-translate-y-1.5 hover:border-border-hover opacity-0 translate-y-8 transition-[opacity,transform,border-color] duration-[700ms] ease-portfolio-out [&.visible]:translate-y-0 [&.visible]:opacity-100 ${project.revealed ? 'visible' : ''} ${isFull ? 'col-span-12 flex-row max-[900px]:flex-col' : 'col-span-6 max-[900px]:col-span-12'}`}>
      <div className={`relative aspect-video shrink-0 overflow-hidden bg-bg-3 after:absolute after:inset-0 after:bg-[linear-gradient(135deg,rgba(184,255,87,0.08),transparent)] after:opacity-0 after:transition-opacity after:duration-300 group-hover:after:opacity-100 ${isFull ? 'w-[340px] aspect-auto max-[900px]:w-full max-[900px]:aspect-video' : ''}`}>
        <div className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:32px_32px] text-6xl transition-transform duration-500 ease-portfolio-out group-hover:scale-105">
          {project.id === '01' ? (
            <img src={AdlaonImg} alt="Adlaon Optical project preview" loading="lazy" className="h-full w-full rounded-2xl object-cover" />
          ) : project.id === '02' ? (
            <img src={HomezyImg} alt="Homezy project preview" loading="lazy" className="h-full w-full rounded-2xl object-cover" />
          ) : project.id === '03' ? (
            <img src={SwiftEatsImg} alt="SwiftEats mobile app prototype preview" loading="lazy" className="h-full w-full rounded-2xl object-cover" />
          ) : project.id === '04' ? (
            <img src={BulSUEHandbookImg} alt="BulSU E-Handbook project preview" loading="lazy" className="h-full w-full rounded-2xl object-cover" />
          ) : project.id === '05' ? (
            <img src={OneDataImg} alt="OneData project preview" loading="lazy" className="h-full w-full rounded-2xl object-cover" />
          ) : project.id === '06' ? (
            <img src={ClashCircuitImg} alt="Clash Circuit project preview" loading="lazy" className="h-full w-full rounded-2xl object-cover" />
          ) : (
            project.emoji
          )}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center justify-between">
          <span className="font-display text-[0.7rem] font-bold tracking-[0.1em] text-muted">Project {project.id}</span>
          {project.date && <span className={`rounded-full border px-2.5 py-1 text-[0.7rem] font-medium uppercase tracking-[0.08em] ${project.date === '2025' || project.date === '2026' ? 'border-[#3498db33] bg-[rgba(52,152,219,0.10)] text-[#3498db]' : 'border-[rgba(184,255,87,0.2)] bg-[rgba(184,255,87,0.08)] text-accent'}`}>
            {project.date}
          </span>}
        </div>

        <h3 className="mb-2 font-display text-xl font-extrabold leading-tight text-primary [letter-spacing:-0.02em]">{project.title}</h3>
        <p className={`mb-5 flex-1 text-[0.85rem] leading-[1.7] text-secondary ${isFeatured ? 'flex-none' : ''}`}>{project.desc}</p>

        {(project.role || project.team || project.contributions) && <div className="mb-5 grid gap-1 border-y border-border py-3.5 text-[0.76rem] leading-[1.5] text-secondary [&_strong]:inline-block [&_strong]:min-w-[6.8rem] [&_strong]:font-medium [&_strong]:text-accent">
          {project.role && <p><strong>Role</strong> {project.role}</p>}
          {project.team && <p><strong>Type</strong> {project.team}</p>}
          {project.contributions && <p><strong>Contributions</strong> {project.contributions.join(' · ')}</p>}
        </div>}

        {/* Tech stack */}
        <div className="mb-5 flex flex-wrap gap-1.5">
          {(project.stack ?? []).map((tech) => (
            <span key={tech} className="rounded-sm border border-border bg-bg-3 px-2.5 py-1 text-[0.72rem] text-muted">{tech}</span>
          ))}
        </div>

        {/* Links */}
        {(project.github || project.demo || project.figma || project.showPlaceholders) && (
          <div className="flex flex-wrap gap-3 [&_.btn]:leading-[inherit] [&_button:disabled]:cursor-not-allowed [&_button:disabled]:opacity-[0.55]">
            {project.github && <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-sm border border-border px-3.5 py-2 text-[0.8rem] font-medium leading-[inherit] text-secondary transition-all duration-150 hover:border-accent hover:text-accent"
            >
              <GitHubIcon /> GitHub
            </a>}
            {project.showPlaceholders && !project.github && (
              <button type="button" className="inline-flex items-center gap-1.5 rounded-sm border border-border px-3.5 py-2 text-[0.8rem] font-medium leading-[inherit] text-secondary opacity-[0.55]" disabled>
                <GitHubIcon /> GitHub
              </button>
            )}
            {project.demo && <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-1 rounded-sm bg-accent px-3 py-1.5 text-[0.85rem] font-semibold text-[#0a0a0a] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-accent-glow after:absolute after:inset-0 after:bg-white after:opacity-0 after:transition-opacity hover:after:opacity-[0.08]"
            >
              Live Demo
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>}
            {project.figma && <a
              href={project.figma}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-sm border border-border px-3.5 py-2 text-[0.8rem] font-medium leading-[inherit] text-secondary transition-all duration-150 hover:border-accent hover:text-accent"
            >
              <FigmaIcon /> Figma
            </a>}
            {project.showPlaceholders && !project.demo && (
              <button
                type="button"
                className="relative inline-flex items-center gap-1 rounded-sm bg-accent px-3 py-1.5 text-[0.85rem] font-semibold text-[#0a0a0a] opacity-[0.55] after:absolute after:inset-0 after:bg-white after:opacity-0 after:transition-opacity"
                disabled
              >
                Live Demo
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </button>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

export default function Projects() {
  const [search, setSearch] = React.useState('')
  const [category, setCategory] = React.useState('All types')
  const [hasInteracted, setHasInteracted] = React.useState(false)
  const categories = ['All types', ...new Set(PROJECTS.map((project) => project.category))]
  const filteredProjects = PROJECTS.filter((project) => {
    const searchText = [
      project.title,
      project.desc,
      project.category,
      project.role,
      project.team,
      ...(project.stack ?? []),
      ...(project.contributions ?? []),
    ].join(' ').toLowerCase()
    return searchText.includes(search.trim().toLowerCase()) &&
      (category === 'All types' || project.category === category)
  })

  return (
    <section className="bg-bg py-[clamp(5rem,10vw,9rem)] odd:bg-bg even:bg-bg-2" id="projects">
      <div className="mx-auto w-[min(94%,1280px)]">

        <div className="mb-[clamp(2.5rem,5vw,4rem)] flex flex-wrap items-end justify-between gap-6 max-[480px]:flex-col max-[480px]:items-start">
          <div>
            <p className="relative mb-5 flex items-center gap-3 pl-6 font-body text-[0.72rem] font-medium uppercase tracking-[0.18em] text-accent opacity-0 translate-y-8 transition-[opacity,transform] duration-[700ms] ease-portfolio-out [&.visible]:translate-y-0 [&.visible]:opacity-100 before:absolute before:left-0 before:top-1/2 before:h-0.5 before:w-4 before:-translate-y-1/2 before:bg-accent">Projects</p>
            <h2 className="font-display text-[clamp(2rem,5vw,3.25rem)] font-extrabold leading-[1.08] text-primary [letter-spacing:-0.03em] opacity-0 translate-y-8 transition-[opacity,transform] duration-[700ms] ease-portfolio-out delay-[100ms] [&.visible]:translate-y-0 [&.visible]:opacity-100">
              Things I've <span className="text-accent">built</span>
            </h2>
          </div>
          <div className="flex flex-1 flex-wrap items-center justify-center gap-3 max-[480px]:w-full max-[480px]:justify-start">
            <label className="relative min-w-[min(100%,15rem)] flex-1 max-w-[20rem] max-[480px]:max-w-none">
              <span className="sr-only">Search projects</span>
              <svg className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-4-4" />
              </svg>
              <input
                type="search"
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value)
                  setHasInteracted(true)
                }}
                placeholder="Search projects or tech..."
                className="w-full rounded-sm border border-border bg-surface py-2.5 pl-10 pr-3 text-sm text-primary placeholder:text-muted focus:border-accent focus:outline-none"
              />
            </label>
            <label>
              <span className="sr-only">Filter projects by type</span>
              <select
                value={category}
                onChange={(event) => {
                  setCategory(event.target.value)
                  setHasInteracted(true)
                }}
                className="min-h-10 rounded-sm border border-border bg-surface px-3 py-2 text-sm text-secondary focus:border-accent focus:outline-none"
              >
                {categories.map((option) => <option key={option} value={option}>{option}</option>)}
              </select>
            </label>
            <p className="whitespace-nowrap font-display text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-muted">
              {filteredProjects.length === PROJECTS.length ? `${PROJECTS.length} projects` : `${filteredProjects.length} of ${PROJECTS.length} projects`}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-5">
          {filteredProjects.length > 0 ? filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={{ ...project, revealed: hasInteracted }} />
          )) : (
            <div className="col-span-12 py-12 text-center">
              <p className="font-display text-lg font-bold text-primary">No projects found</p>
              <p className="mt-2 text-sm text-muted">Try another search or project type.</p>
              <button
                type="button"
                onClick={() => {
                  setSearch('')
                  setCategory('All types')
                  setHasInteracted(true)
                }}
                className="mt-4 rounded-sm border border-border px-3.5 py-2 text-sm text-secondary transition-colors hover:border-accent hover:text-accent"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  )
}
