import React from 'react'
import AdlaonImg from '../images/Adlaon.png'
import HomezyImg from '../images/Homezy.png'
import SwiftEatsImg from '../images/SwiftEats.png'
import ClashCircuitImg from '../images/ClashCircuit.png'
import OneDataImg from '../images/OneData.png'
import './Projects.css'

const PROJECTS = [
  {
    id: '01',
    emoji: '🛒',
    title: 'Adlaon Optical',
    desc: 'A web-based management system for an optical clinic. It combines a customer-facing interface with backend workflows. These workflows support products, appointments, orders, and eye care services.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
    date: '2025',
    team: 'Collaborative project',
    role: 'Backend and database developer',
    contributions: ['Backend workflows', 'Database design', 'Authentication', 'UI implementation'],
    github: '',
    demo: '',
    showPlaceholders: true,
    layout: 'featured',
  },
  {
    id: '02',
    emoji: '✅',
    title: 'Homezy',
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
    emoji: '🌿',
    title: 'OneData',
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
    id: '05',
    emoji: '🌿',
    title: 'Clash Circuit',
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
  const layoutClass =
    project.layout === 'featured' ? 'project-card--featured' :
      project.layout === 'secondary' ? 'project-card--secondary' :
        'project-card--full'

  return (
    <article className={`project-card ${layoutClass} reveal`}>
      <div className="project-card__image">
        <div className="project-card__image-inner">
          {project.id === '01' ? (
            <img src={AdlaonImg} alt="Adlaon Optical project preview" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem' }} />
          ) : project.id === '02' ? (
            <img src={HomezyImg} alt="Homezy project preview" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem' }} />
          ) : project.id === '03' ? (
            <img src={SwiftEatsImg} alt="SwiftEats mobile app prototype preview" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem' }} />
          ) : project.id === '04' ? (
            <img src={OneDataImg} alt="OneData project preview" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem' }} />
          ) : project.id === '05' ? (
            <img src={ClashCircuitImg} alt="Clash Circuit project preview" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem' }} />
          ) : (
            project.emoji
          )}
        </div>
      </div>

      {/* Body */}
      <div className="project-card__body">
        <div className="project-card__meta">
          <span className="project-card__num">Project {project.id}</span>
          <span className={`project-card__tag${project.date === '2025' || project.date === '2026' ? ' project-card__tag--blue' : ''}`}>
            {project.date}
          </span>
        </div>

        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.desc}</p>

        <div className="project-card__details">
          <p><strong>Role</strong> {project.role}</p>
          <p><strong>Type</strong> {project.team}</p>
          <p><strong>Contributions</strong> {project.contributions.join(' · ')}</p>
        </div>

        {/* Tech stack */}
        <div className="project-card__stack">
          {project.stack.map((tech) => (
            <span key={tech} className="project-card__chip">{tech}</span>
          ))}
        </div>

        {/* Links */}
        {(project.github || project.demo || project.figma || project.showPlaceholders) && (
          <div className="project-card__actions">
            {project.github && <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
            >
              <GitHubIcon /> GitHub
            </a>}
            {project.showPlaceholders && !project.github && (
              <button type="button" className="project-card__link" disabled>
                <GitHubIcon /> GitHub
              </button>
            )}
            {project.demo && <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.28em', fontSize: '0.85rem', fontWeight: 600, padding: '0.38rem 0.8rem' }}
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
              className="project-card__link"
            >
              <FigmaIcon /> Figma
            </a>}
            {project.showPlaceholders && !project.demo && (
              <button
                type="button"
                className="btn btn-primary"
                disabled
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.28em', fontSize: '0.85rem', fontWeight: 600, padding: '0.38rem 0.8rem' }}
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
  return (
    <section className="projects section" id="projects">
      <div className="container">

        <div className="projects__header">
          <div className="projects__header-text">
            <p className="section-label reveal">Projects</p>
            <h2 className="section-title reveal reveal-delay-1">
              Things I've <span>built</span>
            </h2>
          </div>
          <p className="projects__count reveal reveal-delay-2">
            {PROJECTS.length} projects
          </p>
        </div>

        <div className="projects__grid">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  )
}
