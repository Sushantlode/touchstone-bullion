# Touchstone Bullion — Premium React + Vite Multi-Screen Website

A premium institutional website for **Touchstone Bullion Gold Trading LLC, Dubai, UAE**.

## Architecture

This is intentionally **not** a single-screen `App.jsx` build.

`App.jsx` only defines routes and shared layout. Main website screens are separated into:

- `src/screens/HomeScreen.jsx`
- `src/screens/AboutScreen.jsx`
- `src/screens/BusinessScreen.jsx`
- `src/screens/GoldTradingScreen.jsx`
- `src/screens/ComplianceScreen.jsx`
- `src/screens/NetworkScreen.jsx`
- `src/screens/PartnersScreen.jsx`
- `src/screens/ContactScreen.jsx`

Reusable UI is under `src/components/`.

## Run

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Global network map

The map uses:

- Local GeoJSON: `src/data/world.json`
- `d3-geo` Natural Earth projection
- highlighted country shapes for UAE, India, Tanzania and Suriname
- an accurate geographic marker for Mauritius
- Dubai hub marker and glow
- animated dotted curved routes from India, Mauritius, Tanzania and Suriname to Dubai

No crude placeholder map is used.

## Contact form

The form is frontend-only by design. The submit handler is located in:

`src/screens/ContactScreen.jsx`

Replace it with your verified API, CRM or corporate email integration before public launch.

## Launch checklist

Before publishing, insert and verify:

- final Dubai office address
- UAE phone number
- official company-domain email addresses
- trade licence / registration details if appropriate for public display
- final privacy policy and terms
- final legal review of compliance wording

## Image note

The design uses remote Pexels image URLs for presentation. For production, download/licence your preferred final imagery and replace the remote URLs with locally hosted optimised WebP/AVIF assets.
