import React from 'react'
import PageHero from '../components/PageHero.jsx'
import PhotoSplit from '../components/PhotoSplit.jsx'
import CTA from '../components/CTA.jsx'
import { complianceItems, companyName } from '../utils/content.js'
import { images } from '../utils/images.js'

export default function ComplianceScreen() {
  return (
    <>
      <PageHero
        eyebrow="Compliance"
        title="Responsible Gold Sourcing"
        text={`${companyName} is committed to conducting precious-metals transactions with appropriate counterparty verification, documentation and responsible sourcing controls.`}
        image={images.professionals}
        position="center 30%"
      />

      <section className="section section--platinum">
        <div className="container">
          <PhotoSplit image={images.goldBars} alt="Verified investment-grade gold bars" reverse compact>
            <p className="pricing-note" data-reveal>
              Transactions are subject to applicable KYC, AML, sanctions screening, source-of-funds and source-of-gold verification requirements.
            </p>
            <ul className="compliance-grid" data-reveal>
              {complianceItems.map((t) => (
                <li className="compliance-card" key={t}>
                  {t}
                </li>
              ))}
            </ul>
          </PhotoSplit>
        </div>
      </section>
      <CTA />
    </>
  )
}
