import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home/index'
import LocationPage from './components/LocationPage'
import BlogList from './components/Blog/BlogList'
import BlogPost from './components/Blog/BlogPost'
import ServiceAreasPage from './components/ServiceAreas/ServiceAreasPage'
import ServicesPage from './components/Services/ServicesPage'
import ContactPage from './components/Contact/ContactPage'
import ThankYouPage from './components/ThankYou/ThankYouPage'
import ExitPopup from './components/ExitPopup'

function App() {
  const [showExitPopup, setShowExitPopup] = useState(false)

  const handleExitIntent = (e: MouseEvent) => {
    if (e.clientY <= 0) {
      const hasShownPopup = localStorage.getItem('hasShownExitPopup')
      if (!hasShownPopup) {
        setShowExitPopup(true)
      }
    }
  }

  const handleClosePopup = () => {
    setShowExitPopup(false)
    localStorage.setItem('hasShownExitPopup', 'true')
  }

  useEffect(() => {
    const hasShownPopup = localStorage.getItem('hasShownExitPopup')
    if (!hasShownPopup) {
      document.addEventListener('mouseleave', handleExitIntent)
      return () => {
        document.removeEventListener('mouseleave', handleExitIntent)
      }
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/locations/:id" element={<LocationPage />} />
          <Route path="/locations" element={<ServiceAreasPage />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/quote" element={<ContactPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/thanks" element={<ThankYouPage />} />
        </Routes>
        <Footer />
        <ExitPopup open={showExitPopup} onClose={handleClosePopup} />
      </Router>
    </ThemeProvider>
  )
}

export default App
