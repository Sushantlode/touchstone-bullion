import React, { useMemo } from 'react'
import { geoGraticule10, geoNaturalEarth1, geoPath } from 'd3-geo'
import world from '../data/world.json'

const W=1200, H=620
const highlighted=new Set(['United Arab Emirates','India','Tanzania','Suriname'])
const places={
  dubai:{label:'Dubai / UAE',lon:55.2708,lat:25.2048,dx:15,dy:-16,hub:true},
  india:{label:'India',lon:78.9629,lat:20.5937,dx:14,dy:23},
  mauritius:{label:'Mauritius',lon:57.5522,lat:-20.3484,dx:14,dy:22},
  tanzania:{label:'Tanzania',lon:34.8888,lat:-6.369,dx:-16,dy:22,anchor:'end'},
  suriname:{label:'Suriname',lon:-56.0278,lat:3.9193,dx:14,dy:20},
}

function routePath(projection, a, b, bend=.18){
  const p1=projection([a.lon,a.lat]), p2=projection([b.lon,b.lat]); if(!p1||!p2) return ''
  const [x1,y1]=p1,[x2,y2]=p2; const mx=(x1+x2)/2,my=(y1+y2)/2; const dx=x2-x1,dy=y2-y1,l=Math.max(1,Math.hypot(dx,dy)); const nx=-dy/l,ny=dx/l; const lift=l*bend
  return `M${x1.toFixed(1)},${y1.toFixed(1)} Q${(mx+nx*lift).toFixed(1)},${(my+ny*lift).toFixed(1)} ${x2.toFixed(1)},${y2.toFixed(1)}`
}

export default function WorldNetworkMap(){
  const projection=useMemo(()=>geoNaturalEarth1().fitExtent([[32,35],[W-32,H-35]],world),[])
  const path=useMemo(()=>geoPath(projection),[projection])
  const hub=places.dubai; const routes=[places.india,places.mauritius,places.tanzania,places.suriname]
  return <div className="network-map-shell">
    <div className="network-map-topline"><div><span>Global network architecture</span></div><div className="map-legend"><span><i className="legend-dot legend-dot--hub"/>Dubai hub</span><span><i className="legend-dot legend-dot--market"/>Highlighted market</span><span><i className="legend-line"/>Dotted connection</span></div></div>
    <div className="network-map-stage"><svg className="network-map-svg" viewBox={`0 0 ${W} ${H}`} role="img" aria-label="World map highlighting UAE, India, Mauritius, Tanzania and Suriname with dotted routes to Dubai">
      <defs><radialGradient id="hubGlow"><stop offset="0%" stopColor="#E5C98F" stopOpacity=".8"/><stop offset="100%" stopColor="#C9A96B" stopOpacity="0"/></radialGradient><linearGradient id="targetFill" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#E5C98F" stopOpacity=".9"/><stop offset="100%" stopColor="#9C7639" stopOpacity=".65"/></linearGradient><filter id="softGlow" x="-80%" y="-80%" width="260%" height="260%"><feGaussianBlur stdDeviation="7" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
      <path d={path({type:'Sphere'})} className="map-sphere"/>
      <path d={path(geoGraticule10())} className="map-graticule"/>
      <g>{world.features.map(f=><path key={f.properties?.name} d={path(f)} className={`country ${highlighted.has(f.properties?.name)?'country--target':''}`}><title>{f.properties?.name}</title></path>)}</g>
      <g className="map-routes">{routes.map((p,i)=><path key={p.label} d={routePath(projection,p,hub,i===3?-.13:.14+i*.02)} className="map-route"/>)}</g>
      <g>{Object.entries(places).map(([id,p])=>{const xy=projection([p.lon,p.lat]); if(!xy)return null; return <g key={id} className={`map-node ${p.hub?'map-node--hub':''}`} transform={`translate(${xy[0]} ${xy[1]})`}>{p.hub&&<><circle className="map-node__glow" r="31"/><circle className="map-node__pulse" r="16"/></>}<circle className="map-node__outer" r={p.hub?8:5.5}/><circle className="map-node__inner" r={p.hub?3.7:2.4}/><text className="map-label" x={p.dx} y={p.dy} textAnchor={p.anchor||'start'}>{p.label}</text></g>})}</g>
    </svg></div>
  </div>
}
