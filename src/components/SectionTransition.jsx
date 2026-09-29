import React, { useEffect, useRef, useState } from 'react'

/**
 * SectionTransition
 * Frosted glass digital sign ticker ribbon that smoothly scrolls horizontally
 * between sections with infinite seamless loop and ambient parallax watermarks.
 */
export default function SectionTransition({
  watermarkNumber,
  watermarkLabel,
  tickerItems = [],
  reverse = false,
}) {
  const bridgeRef = useRef(null)
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    let animationFrameId
    const handleScroll = () => {
      if (!bridgeRef.current) return
      const rect = bridgeRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress = (windowHeight - rect.top) / (windowHeight + rect.height)
        setOffsetY((progress - 0.5) * 40)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  if (!tickerItems || tickerItems.length === 0) {
    return null
  }

  return (
    <div
      ref={bridgeRef}
      className="relative z-20 my-[-1.5rem] overflow-hidden py-6 select-none pointer-events-none"
      aria-hidden="true"
    >
      {/* Background Large Typographic Parallax Watermark */}
      {watermarkLabel && (
        <div
          className="watermark-text left-1/2 -translate-x-1/2 text-[clamp(6rem,14vw,13rem)] opacity-[0.035] whitespace-nowrap"
          style={{
            transform: `translate(-50%, ${offsetY * 0.8}px)`,
          }}
        >
          {watermarkNumber && <span className="text-accent opacity-30 mr-4">{watermarkNumber}</span>}
          {watermarkLabel}
        </div>
      )}

      {/* Infinite Horizontal Digital Ticker Ribbon */}
      <div className="ticker-container relative py-3.5 border-y border-white/5 bg-surface/40 backdrop-blur-xl shadow-lg [box-shadow:var(--glass-inner-bevel)]">
        {/* Soft edge blur masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-bg via-bg/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-bg via-bg/80 to-transparent z-10" />

        {/* Scrolling track: doubled arrays ensure seamless infinite animation */}
        <div className={reverse ? 'animate-ticker-right' : 'animate-ticker-left'}>
          {/* First set */}
          <div className="flex items-center gap-8 shrink-0 pr-8">
            {tickerItems.map((item, index) => (
              <div key={`set1-${index}`} className="flex items-center gap-6 shrink-0">
                <span className="font-display text-[0.82rem] font-bold uppercase tracking-[0.24em] text-secondary flex items-center gap-3">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                  {item}
                </span>
                <span className="text-accent/30 font-display text-xs">✦</span>
              </div>
            ))}
          </div>

          {/* Duplicate set for 100% continuous infinite loop */}
          <div className="flex items-center gap-8 shrink-0 pr-8">
            {tickerItems.map((item, index) => (
              <div key={`set2-${index}`} className="flex items-center gap-6 shrink-0">
                <span className="font-display text-[0.82rem] font-bold uppercase tracking-[0.24em] text-secondary flex items-center gap-3">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                  {item}
                </span>
                <span className="text-accent/30 font-display text-xs">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
