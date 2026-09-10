import React from 'react'
import AdlaonImg from '../images/Adlaon.png'
import HomezyImg from '../images/Homezy.png'
import ClashCircuitImg from '../images/ClashCircuit.png'
import OneDataImg from '../images/OneData.png'
import './Projects.css'

const PROJECTS = [
  {
    id: '01',
    tag: '  ',
    emoji: '🛒',
    title: 'Adlaon Optical',
    desc: 'A web-based management system for an optical clinic, combining a customer-facing interface with backend workflows for products, appointments, orders, and eye care services.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'PHP'],
    github: 'https://github.com/juanpaolo',
    demo: '#',
    layout: 'featured',
  },
  {
    id: '02',
    tag: '3rd Year',
    emoji: '✅',
    title: 'Homezy',
    desc: 'A web-based management system for short-term rentals and experiences, with front-end booking flows and backend functionality for listings, reservations, users, and platform operations.',
    stack: ['Node.js', 'React', 'JavaScript'],
    github: 'https://github.com/paoloperalta246/homezy.git',
    demo: 'https://homezy-beta.vercel.app/',
    layout: 'secondary',
  },
  {
    id: '03',
    tag: '3rd Year',
    emoji: '🌿',
    title: 'OneData',
    desc: 'A web application designed for managing users, files, and organizational data. I worked across its data-focused functionality and front-end interface, including authentication, file uploads, audit logs, dashboards, and role-based access controls.',
    stack: ['JavaScript', 'TypeScript', 'HTML', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/ainthens/one-data.git',
    demo: 'https://onedata-baliwag.com/',
    layout: 'secondary',
  },
  {
    id: '04',
    tag: '3rd Year',
    emoji: '🌿',
    title: 'Clash Circuit',
    desc: 'A modern website for a 2D Unity top-down mobile game. This site provides comprehensive information about the game, including its description, story, characters, factions, game modes, features, screenshots, and developer details. The website also allows visitors to easily download and install the mobile game on their devices.',
    stack: ['React', 'JavaScript', 'CSS', 'Vite'],
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

/** External link icon */
const LinkIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

function ProjectCard({ project }) {
  const layoutClass =
    project.layout === 'featured' ? 'project-card--featured' :
      project.layout === 'secondary' ? 'project-card--secondary' :
        'project-card--full'

  return (
    <article className={`project-card ${layoutClass} reveal`}>
      {/* Image / preview placeholder */}
      <div className="project-card__image">
        <div className="project-card__image-inner">
          {/* Show AdlaonImg for project 01, HomezyImg for 02, OneDataImg above emoji for 03 */}
          {project.id === '01' ? (
            <img src={AdlaonImg} alt="ShopEase Preview" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem' }} />
          ) : project.id === '02' ? (
            <img src={HomezyImg} alt="TaskFlow Preview" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem' }} />
          ) : project.id === '03' ? (
            <img src={OneDataImg} alt="OneData Preview" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem' }} />
          ) : project.id === '04' ? (
            <img src={ClashCircuitImg} alt="Clash Circuit Preview" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem' }} />
          ) : (
            project.emoji
          )}
        </div>
      </div>

      {/* Body */}
      <div className="project-card__body">
        <div className="project-card__meta">
          <span className="project-card__num">Project {project.id}</span>
          <span className={`project-card__tag${['2nd Year', '3rd Year'].includes(project.tag) ? ' project-card__tag--blue' : ''}`}>{project.tag}</span>
        </div>

        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.desc}</p>

        {/* Tech stack */}
        <div className="project-card__stack">
          {project.stack.map((tech) => (
            <span key={tech} className="project-card__chip">{tech}</span>
          ))}
        </div>

        {/* Links */}
        {project.id !== '01' && (
          <div className="project-card__actions">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
            >
              <GitHubIcon /> GitHub
            </a>
            <a
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
            </a>
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
