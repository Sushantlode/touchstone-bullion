import React from 'react'
import { transactionSteps } from '../utils/content.js'

export default function TransactionTimeline() {
  return (
    <div className="timeline">
      {transactionSteps.map((title) => (
        <div className="timeline-step" key={title} data-reveal>
          <div className="timeline-step__axis"><i /></div>
          <div className="timeline-step__copy">
            <h3>{title}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}
