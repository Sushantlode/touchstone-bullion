import React from 'react'

export default function PhotoSplit({ image, alt, badge, children, reverse = false, tall = false, compact = false }) {
  return (
    <div className={`photo-split ${reverse ? 'photo-split--reverse' : ''} ${tall ? 'photo-split--tall' : ''} ${compact ? 'photo-split--compact' : ''}`}>
      <div className="photo-split__media" data-reveal>
        <img src={image} alt={alt} loading="lazy" />
        {badge && (
          <div className="photo-split__badge">
            <span>{badge.kicker}</span>
            <strong>{badge.title}</strong>
            {badge.note && <small>{badge.note}</small>}
          </div>
        )}
      </div>
      <div className="photo-split__copy">{children}</div>
    </div>
  )
}
