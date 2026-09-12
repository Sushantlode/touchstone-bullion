import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import BrandMark from './BrandMark.jsx'

const nav = [
  ['Home', '/'],
  ['About', '/about'],
  ['Gold Trading', '/gold-trading'],
  ['Our Business', '/business'],
  ['Global Network', '/global-network'],
  ['Compliance', '/compliance'],
  ['Partners', '/partners'],
  ['Contact', '/contact'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [phase, setPhase] = useState('idle')
  const { pathname } = useLocation()

  useEffect(() => {
    let stopTimer
    let doneTimer
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const onScroll = () => {
      if (reduce || window.scrollY <= 0) {
        setPhase('idle')
        return
      }
      setPhase('ball')
      setOpen(false)
      clearTimeout(stopTimer)
      clearTimeout(doneTimer)
      stopTimer = window.setTimeout(() => {
        setPhase('reform')
        doneTimer = window.setTimeout(() => setPhase('idle'), 480)
      }, 180)
    }

    addEventListener('scroll', onScroll, { passive: true })
    return () => {
      removeEventListener('scroll', onScroll)
      clearTimeout(stopTimer)
      clearTimeout(doneTimer)
    }
  }, [])

  useEffect(() => {
    setOpen(false)
    setPhase('idle')
  }, [pathname])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1120) setOpen(false)
    }
    addEventListener('resize', onResize)
    return () => removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    return () => document.body.classList.remove('nav-open')
  }, [open])

  return (
    <>
      <div className={`nav-fx is-${phase}`} aria-hidden="true">
        <span className="nav-fx__line" />
        <span className="nav-fx__ball" />
        <span className="nav-fx__orb" />
        <span className="nav-fx__orb" />
        <span className="nav-fx__orb" />
        <span className="nav-fx__orb" />
        <span className="nav-fx__orb" />
      </div>
      <header className={`site-header ${phase !== 'idle' ? 'site-header--tucked' : ''} ${open ? 'site-header--menu' : ''}`}>
        <div className="header-inner">
          <BrandMark compact />
          <nav className="desktop-nav" aria-label="Primary navigation">
            {nav.map(([l, p], i) => (
              <React.Fragment key={p}>
                {i > 0 && <span className="desktop-nav__rule" aria-hidden="true" />}
              <NavLink to={p} end={p === '/'} className={({ isActive }) => (isActive ? 'nav-active' : '')}>
                {l}
              </NavLink>
              </React.Fragment>
            ))}
          </nav>
          <div className="header-actions">
            <button
              className={`menu-toggle ${open ? 'menu-toggle--open' : ''}`}
              onClick={() => setOpen(v => !v)}
              aria-label="Toggle navigation"
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              <span /><span />
            </button>
          </div>
        </div>
        <nav id="mobile-nav" className={`mobile-nav ${open ? 'mobile-nav--open' : ''}`} aria-label="Mobile navigation">
          <div className="mobile-nav__panel">
            {nav.map(([l, p], i) => (
              <NavLink key={p} to={p} style={{ '--i': i }} onClick={() => setOpen(false)}>
                {l}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>
    </>
  )
}
