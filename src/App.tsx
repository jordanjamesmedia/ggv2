import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './theme'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import ServiceAreasPage from './components/ServiceAreas/ServiceAreasPage'
import BlogList from './components/Blog/BlogList'
import BlogPost from './components/Blog/BlogPost'
import Quote from './components/Quote'
import Privacy from './components/Privacy'
import LocationPage from './components/LocationPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import ScrollToTop from './components/shared/ScrollToTop'
import MobileCTA from './components/MobileCTA'
import ThankYou from './components/ThankYou'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/locations" element={<ServiceAreasPage />} />
          <Route path="/locations/:id" element={<LocationPage />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/thanks" element={<ThankYou />} />
        </Routes>
        <Footer />
        <CookieConsent />
        <MobileCTA />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
