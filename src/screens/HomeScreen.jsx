import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Ticker from '../components/Ticker.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CTA from '../components/CTA.jsx'
import { whyItems, homeFocus, companyName } from '../utils/content.js'
import { images } from '../utils/images.js'

export default function HomeScreen() {
  return (
    <>
      <section className="hero">
        <video
          className="hero-media"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={images.homeVideo} type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="hero-grid" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="eyebrow eyebrow--light">Dubai · Precious Metals · Global Trade</div>
            <h1>Your trusted partner in <em>global gold</em> &amp; bullion trading.</h1>
            <p>
              {companyName} is a precious metals trading company focused on the sourcing, trading and supply of physical gold, gold bullion and gold doré through professional, transparent and internationally aligned business practices.
            </p>
            <div className="hero-actions">
              <Link className="btn btn--gold" to="/business">Explore Our Business</Link>
              <Link className="btn btn--glass" to="/contact">Contact Our Trading Desk</Link>
            </div>
          </div>
          <div className="hero-meta">
            <span>TOUCHSTONE BULLION</span>
            <strong>Trusted Gold. Global Trade.</strong>
          </div>
        </div>
        <div className="scroll-indicator" aria-hidden="true">
          {/* <span>SCROLL</span> */}
          <i />
        </div>
      </section>

      <Ticker />

      <section className="focus-strip" aria-label="Core capabilities">
        {homeFocus.map((item) => (
          <Link className="focus-strip__item" to={item.href} key={item.title} data-reveal>
            <strong>{item.title}</strong>
            <ArrowUpRight size={18} />
          </Link>
        ))}
      </section>

      <section className="section section--platinum">
        <div className="container">
          <SectionHeading title="Why Touchstone Bullion" />
          <div className="why-grid">
            {whyItems.map(([t, p]) => (
              <article className="why-item" key={t} data-reveal>
                <div className="why-item__rule" />
                <h3>{t}</h3>
                <p>{p}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
