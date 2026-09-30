import React, { useEffect, useRef, useState } from 'react'

/**
 * CustomCursor & Global 3D Interactive Tilt System
 * 
 * 1. Tracks cursor position with smooth physics trailing.
 * 2. Directly calculates 3D tilt coordinates on all .glass-card, article, and interactive cards:
 *    Hovering on upper-right -> tilts upper-right towards cursor in 3D perspective.
 * 3. Feeds dynamic specular spotlight coordinates (--mouse-x, --mouse-y) to hovered cards.
 * 4. Applies magnetic attraction physics (--mag-x, --mag-y) to buttons, links, and badges.
 * 5. Provides contextual cursor lenses (CLICK, VIEW, EXPLORE, TYPE) with elastic click feedback.
 */
export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const labelRef = useRef(null)

  const [hoverState, setHoverState] = useState(null) // null | 'link' | 'card' | 'image' | 'input' | 'pill'
  const [hoverLabel, setHoverLabel] = useState('')
  const [clicking, setClicking] = useState(false)
  const [isTouch, setIsTouch] = useState(false)

  const activeCardRef = useRef(null)
  const activeBtnRef = useRef(null)

  useEffect(() => {
    // Disable on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true)
      return
    }

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2 

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
      mouseX = e.clientX
      mouseY = e.clientY

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`
      }

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

      // --- 3. Dynamic Cursor State & Contextual Badge Lenses ---
      if (target.closest('a, button, [role="button"], .glass-button, .btn-accent-magnetic')) {
        const isExternal = target.closest('a[target="_blank"]')
        setHoverState('link')
        setHoverLabel(isExternal ? 'OPEN ↗' : 'CLICK')
      } else if (target.closest('input, textarea, select')) {
        setHoverState('input')
        setHoverLabel('TYPE')
      } else if (target.closest('img, .about-portrait-dark, .about-portrait-light, [class*="aspect-video"]')) {
        setHoverState('image')
        setHoverLabel('VIEW')
      } else if (target.closest('.glass-pill, [class*="rounded-full"]')) {
        setHoverState('pill')
        setHoverLabel('')
      } else if (target.closest('.glass-card, article')) {
        setHoverState('card')
        setHoverLabel('EXPLORE')
      } else {
        setHoverState(null)
        setHoverLabel('')
      }
    }

    const onMouseDown = () => setClicking(true)
    const onMouseUp = () => setClicking(false)

    const onMouseLeaveWindow = () => {
      if (activeCardRef.current) {
        resetCard(activeCardRef.current)
        activeCardRef.current = null
      }
      if (activeBtnRef.current) {
        resetBtn(activeBtnRef.current)
        activeBtnRef.current = null
      }
      setHoverState(null)
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)
    document.addEventListener('mouseleave', onMouseLeaveWindow)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
      document.removeEventListener('mouseleave', onMouseLeaveWindow)
    }
  }, [])

  if (isTouch) return null

  const getRingStyles = () => {
    if (clicking) {
      return 'h-7 w-7 border-accent bg-accent/30 scale-90 shadow-[0_0_20px_var(--accent)]'
    }
    switch (hoverState) {
      case 'link':
        return 'h-14 w-14 border-accent bg-accent/20 scale-105 shadow-[0_0_24px_var(--accent)] backdrop-blur-[3px]'
      case 'image':
        return 'h-20 w-20 border-accent/90 bg-accent/15 scale-110 backdrop-blur-[4px] shadow-[0_0_30px_var(--accent)]'
      case 'card':
        return 'h-16 w-16 border-accent/60 bg-white/5 backdrop-blur-[2px] shadow-[0_0_18px_var(--accent-glow)]'
      case 'pill':
        return 'h-10 w-10 border-accent/80 bg-accent/10 shadow-[0_0_14px_var(--accent-glow)]'
      case 'input':
        return 'h-8 w-1.5 border-accent bg-accent rounded-sm shadow-[0_0_10px_var(--accent)]'
      default:
        return 'h-8 w-8 border-accent/40 bg-transparent'
    }
  }

  const getDotStyles = () => {
    if (clicking) return 'scale-150 bg-accent shadow-[0_0_12px_var(--accent)]'
    if (hoverState === 'link' || hoverState === 'image' || hoverState === 'card' || hoverState === 'input') {
      return 'opacity-0 scale-50'
    }
    if (hoverState === 'pill') {
      return 'scale-125 bg-accent shadow-[0_0_8px_var(--accent)]'
    }
    return 'scale-100 bg-accent'
  }

  return (
    <>
      {/* Precision Center Dot */}
      <div
        ref={dotRef}
        className={`fixed left-0 top-0 z-[9999] h-1.5 w-1.5 pointer-events-none rounded-full transition-[opacity,transform,background-color] duration-150 ease-out max-[768px]:hidden will-change-transform ${getDotStyles()}`}
        aria-hidden="true"
      />

      {/* Reactive Trailing Aura Ring with Contextual Badge */}
      <div
        ref={ringRef}
        className={`fixed left-0 top-0 z-[9998] pointer-events-none rounded-full border flex items-center justify-center transition-[width,height,background-color,border-color,box-shadow,border-radius] duration-200 ease-out max-[768px]:hidden will-change-transform ${getRingStyles()}`}
        aria-hidden="true"
      >
        {hoverLabel && hoverState !== 'input' && !clicking && (
          <span
            ref={labelRef}
            className="select-none font-display text-[0.62rem] font-bold tracking-[0.14em] text-primary transition-opacity duration-150 animate-fade-in"
          >
            {hoverLabel}
          </span>
        )}
      </div>
    </>
  )
}
