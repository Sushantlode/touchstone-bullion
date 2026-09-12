import React from 'react'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import WorldNetworkMap from '../components/WorldNetworkMap.jsx'
import CTA from '../components/CTA.jsx'
import { groupNodes, tradingMarkets } from '../utils/content.js'
import { images } from '../utils/images.js'

export default function NetworkScreen() {
  return (
    <>
      <PageHero title="Global Network" image={images.heroDubai} position="center 48%" />

      <section className="section section--network">
        <div className="container">
          <WorldNetworkMap />
        </div>
      </section>

      <section className="section section--platinum">
        <div className="container">
          <SectionHeading eyebrow="Possible Trading Markets" />
          <div className="market-detail-grid">
            {tradingMarkets.map((item) => (
              <article key={item.title} data-reveal>
                <img src={images[item.image]} alt={item.title} style={{ objectPosition: item.position }} />
                <h3>{item.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container">
          <SectionHeading
            text="Only formal legal relationships that are actually established should be treated as confirmed."
            align="left"
          />
          <div className="group-list">
            {groupNodes.map(([name, loc, text]) => (
              <article key={name} data-reveal>
                <span>{loc}</span>
                <h3>{name}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  )
}
