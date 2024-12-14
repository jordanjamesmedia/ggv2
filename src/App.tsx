import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
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
import PrivacyPage from './components/Privacy/PrivacyPage'
import CookieConsent from './components/CookieConsent'
import MobileCTA from './components/MobileCTA'
import ScrollToTop from './components/ScrollToTop'
import { Box } from '@mui/material'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ScrollToTop />
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <Box component="main" sx={{ flex: 1 }}>
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
              <Route path="/privacy" element={<PrivacyPage />} />
            </Routes>
          </Box>
          <Footer />
          <MobileCTA />
          <CookieConsent />
        </Box>
      </Router>
    </ThemeProvider>
  )
}

export default App
