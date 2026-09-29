import React, { useEffect, useState } from 'react'

/**
 * Continuous ambient lighting and dynamic background that smoothly morphs
 * based on the user's scroll position, adding depth behind the frosted glass panels.
 */
export default function ContinuousBackground() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sections = ['hero', 'about', 'skills', 'projects', 'resume', 'contact']
          const scrollY = window.scrollY + window.innerHeight * 0.35

          for (let i = sections.length - 1; i >= 0; i--) {
            const el = document.getElementById(sections[i])
            if (el && el.offsetTop <= scrollY) {
              setActiveSection(sections[i])
              break
            }
          }

          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getOrbPositions = () => {
    switch (activeSection) {
      case 'about':
        return {
          orb1: { x: '15vw', y: '25vh', size: '520px', color: 'rgba(126, 182, 176, 0.2)' },
          orb2: { x: '70vw', y: '60vh', size: '480px', color: 'rgba(87, 184, 255, 0.16)' },
          orb3: { x: '45vw', y: '85vh', size: '360px', color: 'rgba(184, 255, 87, 0.1)' },
        }
      case 'skills':
        return {
          orb1: { x: '75vw', y: '20vh', size: '500px', color: 'rgba(87, 184, 255, 0.18)' },
          orb2: { x: '20vw', y: '50vh', size: '540px', color: 'rgba(162, 89, 255, 0.15)' },
          orb3: { x: '60vw', y: '80vh', size: '400px', color: 'rgba(126, 182, 176, 0.15)' },
        }
      case 'projects':
        return {
          orb1: { x: '25vw', y: '30vh', size: '580px', color: 'rgba(126, 182, 176, 0.22)' },
          orb2: { x: '80vw', y: '45vh', size: '520px', color: 'rgba(87, 184, 255, 0.18)' },
          orb3: { x: '10vw', y: '75vh', size: '450px', color: 'rgba(184, 255, 87, 0.12)' },
        }
      case 'resume':
        return {
          orb1: { x: '65vw', y: '25vh', size: '480px', color: 'rgba(87, 184, 255, 0.18)' },
          orb2: { x: '15vw', y: '65vh', size: '520px', color: 'rgba(126, 182, 176, 0.18)' },
          orb3: { x: '85vw', y: '80vh', size: '380px', color: 'rgba(255, 184, 87, 0.12)' },
        }
      case 'contact':
        return {
          orb1: { x: '50vw', y: '35vh', size: '600px', color: 'rgba(126, 182, 176, 0.25)' },
          orb2: { x: '20vw', y: '70vh', size: '460px', color: 'rgba(87, 184, 255, 0.18)' },
          orb3: { x: '80vw', y: '60vh', size: '420px', color: 'rgba(162, 89, 255, 0.14)' },
        }
      default: // hero
        return {
          orb1: { x: '70vw', y: '25vh', size: '500px', color: 'rgba(184, 255, 87, 0.14)' },
          orb2: { x: '15vw', y: '65vh', size: '460px', color: 'rgba(126, 182, 176, 0.18)' },
          orb3: { x: '50vw', y: '40vh', size: '350px', color: 'rgba(87, 184, 255, 0.12)' },
        }
    }
  }

  const { orb1, orb2, orb3 } = getOrbPositions()

  return (
    <div className="ambient-canvas pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div
        className="ambient-orb"
        style={{
          width: orb1.size,
          height: orb1.size,
          transform: `translate3d(${orb1.x}, ${orb1.y}, 0)`,
          background: `radial-gradient(circle, ${orb1.color} 0%, transparent 70%)`,
        }}
      />
      <div
        className="ambient-orb"
        style={{
          width: orb2.size,
          height: orb2.size,
          transform: `translate3d(${orb2.x}, ${orb2.y}, 0)`,
          background: `radial-gradient(circle, ${orb2.color} 0%, transparent 70%)`,
        }}
      />
      <div
        className="ambient-orb"
        style={{
          width: orb3.size,
          height: orb3.size,
          transform: `translate3d(${orb3.x}, ${orb3.y}, 0)`,
          background: `radial-gradient(circle, ${orb3.color} 0%, transparent 70%)`,
        }}
      />
    </div>
  )
}
