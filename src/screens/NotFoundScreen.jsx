import React from 'react'
import { Link } from 'react-router-dom'
export default function NotFoundScreen(){return <section className="not-found"><div className="container" data-reveal><span>404</span><h1>Page not found.</h1><p>The requested Touchstone Bullion page does not exist.</p><Link className="btn btn--gold" to="/">Return Home</Link></div></section>}
