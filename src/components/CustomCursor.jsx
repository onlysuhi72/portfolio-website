import React, { useEffect, useRef, useState } from 'react'

/**
 * CustomCursor — replaces the default OS cursor with a branded dot + ring.
 * Only renders on non-touch devices.
 */
export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [hovering, setHovering] = useState(false)
  const [clicking, setClicking] = useState(false)
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    // Disable on touch devices
    if ('ontouchstart' in window) {
      setIsTouch(true)
      return
    }

    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e
      if (dotRef.current) { dotRef.current.style.left = `${x}px`; dotRef.current.style.top = `${y}px` }
      if (ringRef.current) { ringRef.current.style.left = `${x}px`; ringRef.current.style.top = `${y}px` }
    }

    const handleEnter = () => setHovering(true)
    const handleLeave = () => setHovering(false)
    const handleDown = () => setClicking(true)
    const handleUp = () => setClicking(false)

    // Attach hover state to all interactive elements
    const interactives = document.querySelectorAll('a, button, [role="button"], input, textarea, .project-card')
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', handleEnter)
      el.addEventListener('mouseleave', handleLeave)
    })

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mousedown', handleDown)
    window.addEventListener('mouseup', handleUp)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mousedown', handleDown)
      window.removeEventListener('mouseup', handleUp)
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', handleEnter)
        el.removeEventListener('mouseleave', handleLeave)
      })
    }
  }, [])

  if (isTouch) return null

  return (
    <>
      <div ref={dotRef} className={`fixed left-0 top-0 z-[9999] h-1.5 w-1.5 pointer-events-none rounded-full bg-accent transition-[transform,opacity] duration-100 ease-portfolio -translate-x-1/2 -translate-y-1/2 max-[768px]:hidden ${clicking ? 'scale-[1.8]' : ''}`} />
      <div ref={ringRef} className={`fixed left-0 top-0 z-[9999] h-8 w-8 pointer-events-none rounded-full border border-[rgba(184,255,87,0.5)] transition-[transform,width,height,background,opacity,border-color] duration-300 ease-portfolio-out -translate-x-1/2 -translate-y-1/2 max-[768px]:hidden ${hovering ? 'h-12 w-12 border-accent bg-accent-glow' : ''}`} />
    </>
  )
}
