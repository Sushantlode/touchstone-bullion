import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { images } from '../utils/images.js'
import { companyName } from '../utils/content.js'

export default function BrandMark({ compact = false }) {
  const [burst, setBurst] = useState(false)

  const onClick = () => {
    setBurst(false)
    requestAnimationFrame(() => setBurst(true))
    document.body.classList.remove('logo-pulse')
    requestAnimationFrame(() => document.body.classList.add('logo-pulse'))
    window.setTimeout(() => document.body.classList.remove('logo-pulse'), 1000)
  }

  return (
    <Link
      className={`brand ${compact ? 'brand--compact' : ''} ${burst ? 'brand--burst' : ''}`}
      to="/"
      aria-label={companyName}
      onClick={onClick}
      onAnimationEnd={(e) => {
        if (e.animationName === 'logoBurst') setBurst(false)
      }}
    >
      <span className="brand__frame">
        <span className="brand__shine" aria-hidden="true" />
        <img className="brand__logo" src={images.logo} alt={companyName} />
      </span>
    </Link>
  )
}
