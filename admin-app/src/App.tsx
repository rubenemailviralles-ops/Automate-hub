import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import ContactMessages from './pages/ContactMessages'
import Consultations from './pages/Consultations'
import Archives from './pages/Archives'
import Debug from './pages/Debug'

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
            <Route path="/archives" element={<Archives />} />
            <Route path="/debug" element={<Debug />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  )
}

export default App
