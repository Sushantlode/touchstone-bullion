import React from 'react'
import { Link } from 'react-router-dom'
import { images } from '../utils/images.js'

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-section__media moving-media" style={{ backgroundImage: `url(${images.dubaiGold})` }} />
      <div className="cta-section__veil" />
      <div className="cta-section__orb" />
      <div className="container cta-inner" data-reveal>
        <div className="eyebrow eyebrow--light">Contact</div>
        <h2>Business Enquiry</h2>
        <Link className="btn btn--gold" to="/contact">Contact Our Trading Desk</Link>
      </div>
    </section>
  )
}
