import { useEffect, useRef } from 'react'

/**
 * GlobalInteractions
 * 
 * Manages 3D tilt, specular spotlight reflections, and magnetic button attraction
 * across the site using the native cursor:
 * 1. Feeds dynamic 3D tilt angles (--tilt-x, --tilt-y, --tilt-z) to .glass-card and article elements.
 * 2. Feeds dynamic specular spotlight coordinates (--mouse-x, --mouse-y) to hovered cards.
 * 3. Applies magnetic attraction physics (--mag-x, --mag-y) to buttons, links, and badges.
 * 4. Gracefully resets transforms on mouse leave / window blur.
 * 5. Returns null — does not render custom cursor dots, rings, or trails.
 */
export default function GlobalInteractions() {
  const activeCardRef = useRef(null)
  const activeBtnRef = useRef(null)

  useEffect(() => {
    // Disable on touch / mobile devices where hover physics are not applicable
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      return
    }

    const resetCard = (card) => {
      if (!card) return
      card.classList.add('is-resetting')
      card.style.setProperty('--tilt-x', '0deg')
      card.style.setProperty('--tilt-y', '0deg')
      card.style.setProperty('--tilt-z', '0px')
      setTimeout(() => {
        card.classList.remove('is-resetting')
      }, 500)
    }

    const resetBtn = (btn) => {
      if (!btn) return
      btn.style.setProperty('--mag-x', '0px')
      btn.style.setProperty('--mag-y', '0px')
    }

    const onMouseMove = (e) => {
      const target = e.target
      if (!target) return

      // --- 1. 3D Card Tilt & Specular Spotlight Engine ---
      const card = target.closest('.glass-card, article')
      if (card) {
        if (activeCardRef.current && activeCardRef.current !== card) {
          resetCard(activeCardRef.current)
        }
        activeCardRef.current = card
        card.classList.remove('is-resetting')

        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2

        // Normalized relative to center: -1.0 to +1.0
        const normX = (x - centerX) / (centerX || 1)
        const normY = (y - centerY) / (centerY || 1)

        // Tilt angle: Upper-right hover (normX > 0, normY < 0) tilts upper-right towards cursor
        const maxTilt = 10 // Max angle in degrees
        const tiltX = (normX * maxTilt).toFixed(2)
        const tiltY = (-normY * maxTilt).toFixed(2)

        card.style.setProperty('--mouse-x', `${x}px`)
        card.style.setProperty('--mouse-y', `${y}px`)
        card.style.setProperty('--tilt-x', `${tiltX}deg`)
        card.style.setProperty('--tilt-y', `${tiltY}deg`)
        card.style.setProperty('--tilt-z', '8px')
      } else if (activeCardRef.current) {
        resetCard(activeCardRef.current)
        activeCardRef.current = null
      }

      // --- 2. Magnetic Button / CTA Attraction Physics ---
      const btn = target.closest('button, a, .glass-button, .btn-accent-magnetic, .glass-pill, .magnetic')
      if (btn) {
        if (activeBtnRef.current && activeBtnRef.current !== btn) {
          resetBtn(activeBtnRef.current)
        }
        activeBtnRef.current = btn

        const rect = btn.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const deltaX = ((e.clientX - centerX) * 0.2).toFixed(2)
        const deltaY = ((e.clientY - centerY) * 0.2).toFixed(2)

        btn.style.setProperty('--mag-x', `${deltaX}px`)
        btn.style.setProperty('--mag-y', `${deltaY}px`)
      } else if (activeBtnRef.current) {
        resetBtn(activeBtnRef.current)
        activeBtnRef.current = null
      }
    }

    const onMouseLeaveWindow = () => {
      if (activeCardRef.current) {
        resetCard(activeCardRef.current)
        activeCardRef.current = null
      }
      if (activeBtnRef.current) {
        resetBtn(activeBtnRef.current)
        activeBtnRef.current = null
      }
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    document.addEventListener('mouseleave', onMouseLeaveWindow)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeaveWindow)
    }
  }, [])

  return null
}
