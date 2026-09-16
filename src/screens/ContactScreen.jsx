import React, { useEffect, useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import { images } from '../utils/images.js'
import { companyName, inquiryEmail } from '../utils/content.js'

export default function ContactScreen() {
  const [status, setStatus] = useState(null)
  const [sending, setSending] = useState(false)

  useEffect(() => {
    if (status?.type !== 'ok') return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') setStatus(null)
    }
    document.body.style.overflow = 'hidden'
    addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      removeEventListener('keydown', onKey)
    }
  }, [status])

  const submit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    if (form.elements.gotcha?.value) return

    setSending(true)
    setStatus(null)

    const data = new FormData(form)
    data.delete('gotcha')
    data.set('_subject', `Touchstone Bullion enquiry — ${data.get('enquiry_type') || 'Website'}`)
    data.set('_template', 'table')
    data.set('_captcha', 'false')
    data.set('_replyto', data.get('email'))

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${inquiryEmail}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      if (!res.ok) throw new Error('Send failed')
      form.reset()
      setStatus({ type: 'ok' })
    } catch {
      setStatus({
        type: 'error',
        text: 'Could not send right now. Please try again shortly.',
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
              <a className="contact-mail" href={`mailto:${inquiryEmail}`}>{inquiryEmail}</a>
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
              <p className="form-privacy">Enquiries are sent to {inquiryEmail}. By submitting, you agree to be contacted about this request.</p>
              {status?.type === 'error' && (
                <div className="form-status form-status--error" role="status">
                  {status.text}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {status?.type === 'ok' && (
        <div className="enquiry-modal" role="dialog" aria-modal="true" aria-labelledby="enquiry-ok-title">
          <button className="enquiry-modal__veil" type="button" aria-label="Close" onClick={() => setStatus(null)} />
          <div className="enquiry-modal__card">
            <h2 id="enquiry-ok-title">Enquiry sent</h2>
            <p role="status">Thank you. Your enquiry has been sent. We will respond shortly.</p>
            <button className="btn btn--gold" type="button" onClick={() => setStatus(null)}>Close</button>
          </div>
        </div>
      )}
    </>
  )
}
