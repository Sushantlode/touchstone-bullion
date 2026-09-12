import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SiteLayout from './components/SiteLayout.jsx'
import HomeScreen from './screens/HomeScreen.jsx'
import AboutScreen from './screens/AboutScreen.jsx'
import BusinessScreen from './screens/BusinessScreen.jsx'
import GoldTradingScreen from './screens/GoldTradingScreen.jsx'
import ComplianceScreen from './screens/ComplianceScreen.jsx'
import NetworkScreen from './screens/NetworkScreen.jsx'
import PartnersScreen from './screens/PartnersScreen.jsx'
import ContactScreen from './screens/ContactScreen.jsx'
import NotFoundScreen from './screens/NotFoundScreen.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomeScreen />} />
        <Route path="about" element={<AboutScreen />} />
        <Route path="business" element={<BusinessScreen />} />
        <Route path="gold-trading" element={<GoldTradingScreen />} />
        <Route path="compliance" element={<ComplianceScreen />} />
        <Route path="global-network" element={<NetworkScreen />} />
        <Route path="partners" element={<PartnersScreen />} />
        <Route path="contact" element={<ContactScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Route>
    </Routes>
  )
}
