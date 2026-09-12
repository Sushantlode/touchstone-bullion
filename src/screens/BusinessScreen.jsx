import React from 'react'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import TransactionTimeline from '../components/TransactionTimeline.jsx'
import PhotoSplit from '../components/PhotoSplit.jsx'
import CTA from '../components/CTA.jsx'
import { businessPillars } from '../utils/content.js'
import { images } from '../utils/images.js'

export default function BusinessScreen() {
  return (
    <>
      <PageHero
        title="Our Business"
        image={images.logistics}
        position="center 55%"
      />

      <section className="section section--onyx">
        <div className="container">
          <div className="business-grid">
            {businessPillars.map(x => (
              <article className="business-card" key={x.title} data-reveal>
                <div className="business-card__top"><i /></div>
                <h3>{x.title}</h3>
                <p>{x.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container">
          <PhotoSplit image={images.professionals} alt="Professional review of gold transaction documentation">
            <SectionHeading eyebrow="How We Work" align="left" />
            <p className="pricing-note" data-reveal>
              Commercial pricing may reference internationally recognised gold-market benchmarks, including LBMA reference pricing, subject to transaction-specific commercial terms. Individual discounts remain inside private agreements and offers.
            </p>
          </PhotoSplit>
          <TransactionTimeline />
        </div>
      </section>
      <CTA />
    </>
  )
}
