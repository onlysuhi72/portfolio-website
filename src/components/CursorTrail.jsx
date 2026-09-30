import React, { useEffect, useRef } from 'react'

const LIFE = 450 // how long (ms) each trail point stays visible
const MAX_WIDTH = 8 // thickness of the trail head

export default function CursorTrail() {
    const canvasRef = useRef(null)

    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let points = []
        let rafId = 0
        let lastTouch = 0
        let needsStart = true

        const resize = () => {
            const dpr = window.devicePixelRatio || 1
            canvas.style.width = `${window.innerWidth}px`
            canvas.style.height = `${window.innerHeight}px`
            canvas.width = window.innerWidth * dpr
            canvas.height = window.innerHeight * dpr
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
        }

        const add = (x, y) => {
            points.push({ x, y, t: performance.now(), start: needsStart })
            needsStart = false
        }

        // Desktop (ignores the fake mouse events browsers send after a tap)
        const onMouseMove = (e) => {
            if (performance.now() - lastTouch < 600) return
            add(e.clientX, e.clientY)
        }
        const onMouseLeave = () => { needsStart = true }

        // Mobile
        const onTouchStart = (e) => {
            lastTouch = performance.now()
            needsStart = true
            const t = e.touches[0]
            add(t.clientX, t.clientY)
        }
        const onTouchMove = (e) => {
            lastTouch = performance.now()
            const t = e.touches[0]
            add(t.clientX, t.clientY)
        }
        const onTouchEnd = () => {
            lastTouch = performance.now()
            needsStart = true
        }

        const draw = (now) => {
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
            points = points.filter((p) => now - p.t < LIFE)
            ctx.lineCap = 'round'
            ctx.lineJoin = 'round'
            const accent =
                getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#b8ff57'

            for (let i = 1; i < points.length; i++) {
                const p = points[i]
                if (p.start) continue
                const prev = points[i - 1]
                const life = 1 - (now - p.t) / LIFE

                ctx.beginPath()
                ctx.moveTo(prev.x, prev.y)
                ctx.lineTo(p.x, p.y)
                ctx.globalAlpha = life * 0.9
                ctx.strokeStyle = accent
                ctx.lineWidth = life * MAX_WIDTH
                ctx.shadowColor = accent
                ctx.shadowBlur = 14
                ctx.stroke()
            }
            rafId = requestAnimationFrame(draw)
        }

        resize()
        rafId = requestAnimationFrame(draw)

        window.addEventListener('resize', resize)
        window.addEventListener('mousemove', onMouseMove, { passive: true })
        document.addEventListener('mouseleave', onMouseLeave)
        window.addEventListener('touchstart', onTouchStart, { passive: true })
        window.addEventListener('touchmove', onTouchMove, { passive: true })
        window.addEventListener('touchend', onTouchEnd, { passive: true })
        window.addEventListener('touchcancel', onTouchEnd, { passive: true })

        return () => {
            cancelAnimationFrame(rafId)
            window.removeEventListener('resize', resize)
            window.removeEventListener('mousemove', onMouseMove)
            document.removeEventListener('mouseleave', onMouseLeave)
            window.removeEventListener('touchstart', onTouchStart)
            window.removeEventListener('touchmove', onTouchMove)
            window.removeEventListener('touchend', onTouchEnd)
            window.removeEventListener('touchcancel', onTouchEnd)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none fixed inset-0 z-[9990]"
            aria-hidden="true"
        />
    )
}