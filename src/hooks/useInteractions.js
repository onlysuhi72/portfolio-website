import { useCallback, useRef } from "react"

/**
 * useTilt — attaches a 3D tilt + specular spotlight effect (same as
 * glass-card) to any element via mouse events.
 * Returns { ref, onMouseMove, onMouseLeave } to spread onto the element.
 *
 * @param {{ maxTilt?: number, maxLift?: number }} options
 */
export function useTilt({ maxTilt = 10, maxLift = 8 } = {}) {
  const ref = useRef(null)
  const rafId = useRef(null)

  const onMouseMove = useCallback((e) => {
    if (rafId.current) cancelAnimationFrame(rafId.current)
    rafId.current = requestAnimationFrame(() => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const cx = rect.width / 2
      const cy = rect.height / 2
      const tiltX = ((x - cx) / cx) * maxTilt
      const tiltY = -((y - cy) / cy) * maxTilt
      el.style.setProperty("--tilt-x", tiltX + "deg")
      el.style.setProperty("--tilt-y", tiltY + "deg")
      el.style.setProperty("--tilt-z", maxLift + "px")
      el.style.setProperty("--mouse-x", x + "px")
      el.style.setProperty("--mouse-y", y + "px")
      el.classList.remove("is-resetting")
    })
  }, [maxTilt, maxLift])

  const onMouseLeave = useCallback(() => {
    if (rafId.current) cancelAnimationFrame(rafId.current)
    const el = ref.current
    if (!el) return
    el.classList.add("is-resetting")
    el.style.setProperty("--tilt-x", "0deg")
    el.style.setProperty("--tilt-y", "0deg")
    el.style.setProperty("--tilt-z", "0px")
    el.style.setProperty("--mouse-x", "-500px")
    el.style.setProperty("--mouse-y", "-500px")
  }, [])

  return { ref, onMouseMove, onMouseLeave }
}

/**
 * useMagnetic — gentle magnetic pull toward the cursor.
 * Uses --mag-x / --mag-y CSS vars consumed by glass-pill, glass-button,
 * and btn-accent-magnetic.
 *
 * @param {{ strength?: number }} options
 */
export function useMagnetic({ strength = 0.35 } = {}) {
  const ref = useRef(null)
  const rafId = useRef(null)

  const onMouseMove = useCallback((e) => {
    if (rafId.current) cancelAnimationFrame(rafId.current)
    rafId.current = requestAnimationFrame(() => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const dx = e.clientX - (rect.left + rect.width / 2)
      const dy = e.clientY - (rect.top + rect.height / 2)
      el.style.setProperty("--mag-x", (dx * strength) + "px")
      el.style.setProperty("--mag-y", (dy * strength) + "px")
    })
  }, [strength])

  const onMouseLeave = useCallback(() => {
    if (rafId.current) cancelAnimationFrame(rafId.current)
    const el = ref.current
    if (!el) return
    el.style.setProperty("--mag-x", "0px")
    el.style.setProperty("--mag-y", "0px")
  }, [])

  return { ref, onMouseMove, onMouseLeave }
}
