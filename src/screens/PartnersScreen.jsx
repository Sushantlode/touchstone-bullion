import React from 'react'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import PhotoSplit from '../components/PhotoSplit.jsx'
import CTA from '../components/CTA.jsx'
import { partnerItems, miningAreas } from '../utils/content.js'
import { images } from '../utils/images.js'

export default function PartnersScreen() {
  return (
    <>
      <PageHero
        title="Investors & Strategic Partners"
        text="Touchstone Bullion welcomes discussions with qualified institutional buyers, bullion suppliers, licensed mining companies, refineries, financial institutions and strategic investors for suitable precious-metals transactions and projects."
        image={images.boardroom}
        position="center 40%"
      />

      <section className="section section--onyx">
        <div className="container">
          <SectionHeading eyebrow="Categories" />
          <div className="partner-grid">
            {partnerItems.map((item) => (
              <article className="partner-card" key={item.title} data-reveal>
                <img src={images[item.image]} alt={`${item.title}, Touchstone Bullion`} style={{ objectPosition: item.position }} />
                <h3>{item.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container">
          <PhotoSplit
            reverse
            image={images.mining}
            alt="Gold mining operations, molten refining and finished bars"
            badge={{ kicker: 'Separate from core trading', title: 'Mining & Strategic Investments', note: 'Selected international markets' }}
          >
            <SectionHeading
              eyebrow="Gold Mining & Strategic Partnerships"
              text="Through strategic relationships, Touchstone Bullion seeks opportunities to collaborate with licensed mining companies, concession holders, refineries, investors and institutional partners across selected international markets."
              align="left"
            />
            <ul className="mining-list">
              {miningAreas.map(item => <li key={item} data-reveal>{item}</li>)}
            </ul>
          </PhotoSplit>
        </div>
      </section>
      <CTA />
    </>
  )
}
