import React from 'react'
import PageHero from '../components/PageHero.jsx'
import PhotoSplit from '../components/PhotoSplit.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CTA from '../components/CTA.jsx'
import { images } from '../utils/images.js'
import { aboutCopy, visionMission, founder, team, companyName } from '../utils/content.js'

export default function AboutScreen() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Dubai, UAE · Established 2026"
        title="About Us"
        image={images.boardroom}
        position="center 48%"
      />

      <section className="section section--platinum" id="leadership">
        <div className="container">
          <div className="leadership-feature">
            <div className="leadership-feature__portrait" data-reveal>
              <img src={images.neelesh} alt={`${founder.name}, ${founder.title}`} />
            </div>
            <div className="leadership-feature__copy">
              <SectionHeading eyebrow={founder.title} title={founder.name} align="left" />
              <p className="leadership-feature__place">{founder.location}</p>
              <p className="leadership-feature__bio">{founder.bio}</p>
            </div>
          </div>

          <div className="team-stagger">
            <div className="team-stagger__list">
              {team.map(person => (
                <article className="team-stagger__item" key={person.name} data-reveal>
                  <div className={`team-stagger__photo team-stagger__photo--${person.photo}`}>
                    <img src={images[person.photo]} alt={`${person.name}, ${person.title}`} />
                  </div>
                  <div className="team-stagger__caption">
                    <h3>{person.name}</h3>
                    <p>{person.title}</p>
                    <p className="team-stagger__bio">{person.bio}</p>
                    {(person.email || person.phone) && (
                      <p className="team-stagger__contact">
                        {person.email && <a href={`mailto:${person.email}`}>{person.email}</a>}
                        {person.phone && <a href={`tel:${person.phone.replace(/\s/g, '')}`}>{person.phone}</a>}
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container">
          <PhotoSplit
            reverse
            image={images.professionals}
            alt={`${companyName} commercial presence in Dubai`}
            badge={{ kicker: 'HQ', title: 'Dubai, UAE', note: 'Established 2026' }}
          >
            <div className="editorial-copy editorial-copy--flush" data-reveal>
              {aboutCopy.map(paragraph => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </PhotoSplit>
        </div>
      </section>

      <section className="section section--green">
        <div className="container dual-statement">
          {visionMission.map(([title, text]) => (
            <article key={title} data-reveal>
              <h2>{title}</h2>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </>
  )
}
