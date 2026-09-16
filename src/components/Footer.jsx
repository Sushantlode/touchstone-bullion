import React from 'react'
import { Link } from 'react-router-dom'
import BrandMark from './BrandMark.jsx'
import { companyName, positioning, inquiryEmail } from '../utils/content.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <BrandMark />
            <p>{positioning}<br />Dubai, United Arab Emirates</p>
          </div>
          <div className="footer-nav">
            <div>
              <span>Company</span>
              <Link to="/about">About</Link>
              <Link to="/business">Our Business</Link>
              <Link to="/partners">Partners</Link>
            </div>
            <div>
              <span>Trade</span>
              <Link to="/gold-trading">Gold Trading</Link>
              <Link to="/global-network">Global Network</Link>
              <Link to="/compliance">Compliance</Link>
            </div>
            <div>
              <span>Connect</span>
              <Link to="/contact">Business Enquiry</Link>
              <a href={`mailto:${inquiryEmail}`}>{inquiryEmail}</a>
              <a href="tel:+919028999279">Yogesh Tillu · +91 9028999279</a>
            </div>
          </div>
        </div>
        <div className="footer-rule" />
        <div className="footer-bottom">
          <span>© 2026 {companyName}</span>
          <span>Trusted Gold. Global Trade.</span>
        </div>
        <p className="footer-disclaimer">
          Information on this website is for general corporate and business-information purposes only and does not constitute investment, financial, legal or trading advice, or an offer or solicitation to purchase or sell any financial instrument or precious metal. All transactions are subject to counterparty acceptance, due diligence, applicable regulatory requirements, commercial agreement and definitive transaction documentation. References to international pricing benchmarks, including LBMA reference pricing, are for general commercial context only and do not imply membership, accreditation, endorsement or certification by any benchmark administrator or industry organisation.
        </p>
      </div>
    </footer>
  )
}
