import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import ScrollToTop from './ScrollToTop.jsx'
import RevealManager from './RevealManager.jsx'
import PointerParallax from './PointerParallax.jsx'

export default function SiteLayout() {
  const { pathname } = useLocation()
  return (
    <>
      <ScrollToTop />
      <RevealManager />
      <PointerParallax />
      <Header />
      <main key={pathname} className="page-shell">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
