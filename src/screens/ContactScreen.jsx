import React, { useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import { images } from '../utils/images.js'
import { companyName } from '../utils/content.js'

const INQUIRY_EMAIL = 'yogeshtillu@ehealthsystems.in'

export default function ContactScreen() {
  const [status, setStatus] = useState(null)
  const [sending, setSending] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    if (form.elements.gotcha?.value) return

    setSending(true)
    setStatus({ type: 'pending', text: 'Sending your enquiry…' })

    const data = new FormData(form)
    data.set('_subject', `Touchstone Bullion enquiry — ${data.get('enquiry_type') || 'Website'}`)
    data.set('_template', 'table')
    data.set('_captcha', 'false')
    data.set('_replyto', data.get('email'))

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${INQUIRY_EMAIL}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      const json = await res.json().catch(() => ({}))
      const message = String(json.message || '')
      const needsActivation = /activ/i.test(message) || json.success === 'false' || json.success === false

      if (needsActivation && /activ/i.test(message)) {
        setStatus({
          type: 'pending',
          text: `Check ${INQUIRY_EMAIL} (and spam) for an email from FormSubmit. Open it and click “Activate Form”. After that, submit this enquiry again and it will be delivered.`,
        })
        return
      }

      const ok = res.ok && json.success !== false && json.success !== 'false'
      if (!ok) throw new Error(message || 'Send failed')
      form.reset()
      setStatus({ type: 'ok', text: 'Thank you. Your enquiry has been sent. We will respond shortly.' })
    } catch {
      setStatus({
        type: 'error',
        text: `Could not send right now. Please email ${INQUIRY_EMAIL} directly.`,
      })
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <PageHero title="Contact Us" image={images.boardroom} position="center 35%" />

      <section className="section section--platinum">
        <div className="container contact-grid">
          <div>
            <div className="contact-company" data-reveal>
              <strong>{companyName}</strong>
              <a className="contact-mail" href={`mailto:${INQUIRY_EMAIL}`}>{INQUIRY_EMAIL}</a>
              <div className="contact-person">
                <span>Contact</span>
                <strong>Yogesh Tillu</strong>
                <a href="tel:+919028999279">+91 9028999279</a>
              </div>
            </div>
            <div className="contact-channels" data-reveal>
              <div><span>Trading</span><strong>Gold trading enquiries</strong></div>
              <div><span>Suppliers</span><strong>Supplier registration</strong></div>
              <div><span>Buyers</span><strong>Institutional buyer enquiries</strong></div>
              <div><span>Partners</span><strong>Strategic partnership enquiries</strong></div>
              <div><span>Refineries</span><strong>Refinery partnership enquiries</strong></div>
            </div>
            <div className="contact-visual" data-reveal>
              <img src={images.professionals} alt="Touchstone Bullion commercial team in Dubai" />
            </div>
          </div>
          <div className="form-panel" data-reveal>
            <form onSubmit={submit}>
              <input type="text" name="gotcha" className="form-honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              <div className="form-row">
                <label>
                  <span>Full Name</span>
                  <input required name="name" placeholder="Your full name" />
                </label>
                <label>
                  <span>Company</span>
                  <input name="company" placeholder="Company / organisation" />
                </label>
              </div>
              <label>
                <span>Email</span>
                <input required type="email" name="email" placeholder="name@company.com" />
              </label>
              <label>
                <span>Enquiry Type</span>
                <select required name="enquiry_type" defaultValue="">
                  <option value="" disabled>Select enquiry type</option>
                  <option>Business Enquiry</option>
                  <option>Gold Trading Enquiry</option>
                  <option>Supplier Registration</option>
                  <option>Institutional Buyer Enquiry</option>
                  <option>Strategic Partnership Enquiry</option>
                </select>
              </label>
              <label>
                <span>Message</span>
                <textarea required name="message" placeholder="Please provide a concise summary of your enquiry." />
              </label>
              <button className="btn btn--gold form-submit" type="submit" disabled={sending}>
                {sending ? 'Sending…' : 'Submit Enquiry'} <span>↗</span>
              </button>
              <p className="form-privacy">Enquiries are sent to {INQUIRY_EMAIL}. By submitting, you agree to be contacted about this request.</p>
              {status && (
                <div className={`form-status form-status--${status.type}`} role="status">
                  {status.text}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
