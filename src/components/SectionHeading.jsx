import React from 'react'
export default function SectionHeading({ eyebrow, title, text, align='center', light=false }) {
  return (
    <div className={`section-heading section-heading--${align} ${light ? 'section-heading--light':''}`} data-reveal>
      {eyebrow && <div className={`eyebrow ${light ? 'eyebrow--light':''}`}>{eyebrow}</div>}
      {title && <h2>{title}</h2>}
      {text && <p>{text}</p>}
    </div>
  )
}
