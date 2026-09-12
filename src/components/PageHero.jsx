import React from 'react'
import { images } from '../utils/images.js'

export default function PageHero({ eyebrow, title, text, image = images.heroDubai, position = 'center 42%', compact = true }) {
  return (
    <section className={`page-hero ${compact ? 'page-hero--compact' : ''}`}>
      <div
        className="page-hero__media moving-media"
        style={{ backgroundImage: `url(${image})`, '--pos': position }}
      />
      <div className="page-hero__veil" />
      <div className="container page-hero__inner">
        {eyebrow && <div className="eyebrow eyebrow--light">{eyebrow}</div>}
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
    </section>
  )
}
