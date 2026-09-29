import React, { useEffect, useState } from 'react'

/** Thin acid-green line at the top that grows as you scroll */
export default function ScrollProgress() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setWidth(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return <div className="fixed left-0 top-0 z-[1000] h-0.5 origin-left bg-accent shadow-[0_0_8px_var(--accent)] transition-[width] duration-[50ms] ease-linear" style={{ width: `${width}%` }} />
}
