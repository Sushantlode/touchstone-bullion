import { useEffect } from 'react'

export default function PointerParallax() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const onMove = (e) => {
      const x = ((e.clientX / window.innerWidth) - 0.5) * 32
      const y = ((e.clientY / window.innerHeight) - 0.5) * 20
      document.documentElement.style.setProperty('--mx', `${x.toFixed(2)}px`)
      document.documentElement.style.setProperty('--my', `${y.toFixed(2)}px`)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])
  return null
}
