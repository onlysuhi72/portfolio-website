import React, { useEffect, useRef, useState } from 'react'

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#$%&*<>/?'
const randomGlyph = () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)]

export default function ScrambleText({ text, start = 0 }) {
    const wrapRef = useRef(null)
    const hoverRef = useRef(-1) // index of the hovered word, -1 = none
    const [shown, setShown] = useState(text)
    const [widths, setWidths] = useState(null)

    // Measure each letter once, so scrambling never changes the layout
    useEffect(() => {
        let cancelled = false
        document.fonts.ready.then(() => {
            if (cancelled || !wrapRef.current) return
            const map = {}
            wrapRef.current.querySelectorAll('[data-i]').forEach((el) => {
                const size = parseFloat(getComputedStyle(el).fontSize)
                map[el.dataset.i] = el.offsetWidth / size
            })
            setWidths(map)
        })
        return () => { cancelled = true }
    }, [])

    // Scramble loop
    useEffect(() => {
        if (!widths || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

        const letters = text.split('')
        const scramblable = letters.map((_, i) => i).filter((i) => /[A-Za-z]/.test(letters[i]))
        const wordOf = []
        let wi = 0
        letters.forEach((ch) => { wordOf.push(wi); if (ch === ' ') wi++ })

        let raf = 0
        let last = 0
        let previous = text
        let nextBurst = performance.now() + 3500
        let burstEnd = 0
        let burstIdx = []

        const tick = (now) => {
            if (now - last > 55) {
                last = now

                // Idle: a few random letters flicker every few seconds
                if (now >= nextBurst) {
                    burstIdx = [...scramblable].sort(() => Math.random() - 0.5).slice(0, 3)
                    burstEnd = now + 420
                    nextBurst = now + 3000 + Math.random() * 4000
                }

                const out = letters.map((ch, i) => {
                    if (!scramblable.includes(i)) return ch
                    if (wordOf[i] === hoverRef.current && Math.random() < 0.6) return randomGlyph()
                    if (now < burstEnd && burstIdx.includes(i)) return randomGlyph()
                    return ch
                })

                const next = out.join('')
                if (next !== previous) {
                    previous = next
                    setShown(next)
                }
            }
            raf = requestAnimationFrame(tick)
        }

        raf = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(raf)
    }, [widths, text])

    let offset = 0
    return (
        <span ref={wrapRef} aria-hidden="true">
            {text.split(' ').map((word, w, arr) => {
                const base = offset
                offset += word.length + 1
                return (
                    <React.Fragment key={w}>
                        <span
                            className="nm-w inline-block whitespace-nowrap"
                            onPointerEnter={() => { hoverRef.current = w }}
                            onPointerLeave={() => { hoverRef.current = -1 }}
                        >
                            {word.split('').map((_, i) => {
                                const idx = base + i
                                return (
                                    <span
                                        key={i}
                                        data-i={idx}
                                        className="nm-l"
                                        style={{
                                            '--i': start + idx,
                                            ...(widths ? { width: `${widths[idx]}em` } : {}),
                                        }}
                                    >
                                        {shown[idx]}
                                    </span>
                                )
                            })}
                        </span>
                        {w < arr.length - 1 && ' '}
                    </React.Fragment>
                )
            })}
        </span>
    )
}