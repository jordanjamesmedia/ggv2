import React, { useState, useEffect } from 'react'
import { Box, Button, Container, Link, Snackbar, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

export default function CookieConsent() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setOpen(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setOpen(false)
    // Enable Google Analytics after consent
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      })
    }
  }

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined')
    setOpen(false)
    // Disable Google Analytics
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied'
      })
    }
  }

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      sx={{
        '& .MuiPaper-root': {
          width: '100%',
          maxWidth: 'none',
          bgcolor: 'rgba(27, 75, 90, 0.95)',
          backdropFilter: 'blur(10px)',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        }
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ 
          py: 2,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'stretch', md: 'center' },
          gap: 2
        }}>
          <Typography sx={{ color: 'white', flex: 1 }}>
            We use cookies to enhance your experience and analyze our site usage. 
            Please read our{' '}
            <Link 
              component={RouterLink} 
              to="/privacy"
              sx={{ 
                color: '#4DD8E6',
                '&:hover': { color: '#3CC7D5' }
              }}
            >
              Privacy Policy
            </Link>{' '}
            for more information.
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            gap: 2,
            flexDirection: { xs: 'column', sm: 'row' }
          }}>
            <Button
              variant="outlined"
              onClick={handleDecline}
              sx={{
                color: 'white',
                borderColor: 'white',
                '&:hover': {
                  borderColor: 'white',
                  bgcolor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              Decline
            </Button>
            <Button
              variant="contained"
              onClick={handleAccept}
              sx={{
                bgcolor: '#4DD8E6',
                color: 'white',
                '&:hover': {
                  bgcolor: '#3CC7D5'
                }
              }}
            >
              Accept All Cookies
            </Button>
          </Box>
        </Box>
      </Container>
    </Snackbar>
  )
} 