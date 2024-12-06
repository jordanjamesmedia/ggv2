import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline, Box, GlobalStyles } from '@mui/material'
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
import ScrollToTop from './components/ScrollToTop'

const globalStyles = {
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  'html, body': {
    margin: 0,
    padding: 0,
    minHeight: '100vh',
    width: '100%',
    overflow: 'auto'
  },
  '#root': {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    padding: 0
  }
}

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
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      <Router>
        <ScrollToTop />
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            minHeight: '100vh', 
            margin: 0, 
            padding: 0,
            position: 'relative'
          }}
        >
          <Navbar />
          <Box 
            component="main" 
            sx={{ 
              flexGrow: 1, 
              margin: 0, 
              padding: 0,
              display: 'flex',
              flexDirection: 'column'
            }}
          >
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
          </Box>
          <Footer />
          <ExitPopup open={showExitPopup} onClose={handleClosePopup} />
        </Box>
      </Router>
    </ThemeProvider>
  )
}

export default App
// Build: 2024-12-06 23:08
