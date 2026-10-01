import React from 'react'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CTA from '../components/CTA.jsx'
import { businessPillars, products, tradingMarkets } from '../utils/content.js'
import { images } from '../utils/images.js'

export default function GoldTradingScreen() {
  return (
    <>
      <PageHero title="Gold Trading" image={images.goldBars} position="center 60%" />

      <section className="gold-section gold-section--page">
        <div className="gold-section__media moving-media" style={{ backgroundImage: `url(${images.dubaiGold})` }} />
        <div className="gold-section__veil" />
        <div className="container gold-section__inner">
          <SectionHeading eyebrow="Products" light />
          <div className="product-grid">
            {products.map((item) => (
              <article className="product-card" key={item.title} data-reveal>
                <img src={images[item.image]} alt={item.title} style={{ objectPosition: item.position }} />
                <h3>{item.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--onyx">
        <div className="container">
          <div className="business-grid">
            {businessPillars.slice(0, 3).map((item) => (
              <article className="business-card" key={item.title} data-reveal>
                <img
                  className="business-card__bg"
                  src={images[item.image]}
                  alt=""
                  style={{ objectPosition: item.position || 'center' }}
                  aria-hidden="true"
                />
                <div className="business-card__veil" aria-hidden="true" />
                <div className="business-card__top"><i /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--platinum">
        <div className="container">
          <SectionHeading
            eyebrow="Possible Trading Markets"
            text="Only markets where Touchstone Bullion intends, and is legally able, to conduct business are presented."
          />
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
      <CTA />
    </>
  )
}
