import React from 'react'
const items = ['TOUCHSTONE BULLION', 'GOLD TRADING', 'BULLION', 'PRECIOUS METALS', 'GLOBAL PARTNERSHIPS', 'DUBAI, UNITED ARAB EMIRATES', 'TRUSTED GOLD. GLOBAL TRADE.']
export default function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {[...items, ...items].map((x, i) => <span key={`${x}-${i}`}><i />{x}</span>)}
      </div>
    </div>
  )
}
