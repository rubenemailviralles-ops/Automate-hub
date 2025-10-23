import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import ContactMessages from './pages/ContactMessages'
import Consultations from './pages/Consultations'
import Archives from './pages/Archives'
import Analytics from './pages/Analytics'
import Install from './pages/Install'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        {/* Background orbs */}
        <div className="floating-orb-1"></div>
        <div className="floating-orb-2"></div>
        <div className="floating-orb-3"></div>
        
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/contact" element={<ContactMessages />} />
            <Route path="/consultations" element={<Consultations />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/archives" element={<Archives />} />
            <Route path="/install" element={<Install />} />
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  )
}

export default App
