import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './theme'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import LoadingSpinner from './components/common/LoadingSpinner'

// Lazy load route components
const HomePage = lazy(() => import('./components/Home/HomePage'))
const PrivacyPage = lazy(() => import('./components/Privacy/PrivacyPage'))
// Add other routes as needed

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            {/* Add other routes */}
          </Routes>
        </Suspense>
        <Footer />
        <CookieConsent />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
