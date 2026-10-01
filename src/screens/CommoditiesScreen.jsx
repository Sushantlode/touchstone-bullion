import React from 'react'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CTA from '../components/CTA.jsx'
import { commodities } from '../utils/content.js'
import { images } from '../utils/images.js'

export default function CommoditiesScreen() {
  return (
    <>
      <PageHero title="Global Commodities" image={images.mining} position="center 45%" />

      <section className="gold-section gold-section--page">
        <div className="gold-section__media moving-media" style={{ backgroundImage: `url(${images.dubaiGold})` }} />
        <div className="gold-section__veil" />
        <div className="container gold-section__inner">
          <SectionHeading eyebrow="Products" light />
          <div className="product-grid">
            {commodities.map((item) => (
              <article className="product-card" key={item.title} data-reveal>
                <img src={images[item.image]} alt={item.title} style={{ objectPosition: item.position }} />
                <h3>{item.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  )
}
