import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Touchstone_Bullion_React_Vite_MultiScreen_10_10">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
