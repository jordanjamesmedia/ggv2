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
        maxWidth: '600px',
        left: '50%',
        transform: 'translateX(-50%)',
        bottom: { xs: 0, sm: '24px' },
        '& .MuiPaper-root': {
          width: '100%',
          bgcolor: '#1B4B5A',
          borderRadius: 2,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
        }
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="body2" sx={{ color: 'white', mb: 1.5, fontSize: '0.875rem' }}>
          We use cookies to enhance your experience. Read our{' '}
          <Link 
            component={RouterLink} 
            to="/privacy"
            sx={{ 
              color: '#4DD8E6',
              '&:hover': { color: '#3CC7D5' }
            }}
          >
            Privacy Policy
          </Link>
        </Typography>
        <Box sx={{ 
          display: 'flex', 
          gap: 1,
          justifyContent: 'flex-end'
        }}>
          <Button
            size="small"
            variant="outlined"
            onClick={handleDecline}
            sx={{
              color: 'white',
              borderColor: 'white',
              fontSize: '0.8125rem',
              py: 0.5,
              '&:hover': {
                borderColor: 'white',
                bgcolor: 'rgba(255, 255, 255, 0.1)'
              }
            }}
          >
            Decline
          </Button>
          <Button
            size="small"
            variant="contained"
            onClick={handleAccept}
            sx={{
              bgcolor: '#4DD8E6',
              color: 'white',
              fontSize: '0.8125rem',
              py: 0.5,
              '&:hover': {
                bgcolor: '#3CC7D5'
              }
            }}
          >
            Accept
          </Button>
        </Box>
      </Box>
    </Snackbar>
  )
} 