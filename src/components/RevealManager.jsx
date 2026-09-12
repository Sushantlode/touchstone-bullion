import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function RevealManager() {
  const { pathname } = useLocation()

  useEffect(() => {
    const items = [...document.querySelectorAll('[data-reveal]')]
    items.forEach((el, i) => {
      el.style.setProperty('--reveal-delay', `${Math.min(i, 8) * 70}ms`)
    })

    if (!('IntersectionObserver' in window)) {
      items.forEach(i => i.classList.add('is-visible'))
      return
    }

    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible')
          obs.unobserve(e.target)
        }
      }),
      { threshold: 0.08, rootMargin: '0px 0px -4% 0px' }
    )

    items.forEach(i => obs.observe(i))
    return () => obs.disconnect()
  }, [pathname])

  return null
}
