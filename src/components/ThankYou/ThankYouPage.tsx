import { Box, Container, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import gc14 from '../../assets/images/gc14.jpg'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useEffect } from 'react'

// Declare gtag as a global function
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export default function ThankYouPage() {
  useEffect(() => {
    // Fire the conversion event when component mounts
    window.gtag('event', 'conversion', {
      'send_to': 'AW-16797354549/sADJCML-qvIZELWUzck-'
    });
  }, []);

  return (
    <Box>
      {/* Hero Section */}
      <Box 
        sx={{
          mt: '74px',
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          color: 'white',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${gc14})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: -1
          }
        }}
      >
        <Container maxWidth="sm">
          <Box sx={{ textAlign: 'center' }}>
            <CheckCircleIcon 
              sx={{ 
                fontSize: '5rem', 
                color: '#4DD8E6',
                mb: 3
              }} 
            />
            <Typography 
              variant="h1" 
              sx={{ 
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                mb: 2
              }}
            >
              Thank You!
            </Typography>
            <Typography 
              sx={{ 
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                opacity: 0.9,
                mb: 4,
                color: 'white'
              }}
            >
              We've received your message and will get back to you within 24 hours.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
              <Button
                component={Link}
                to="/"
                variant="contained"
                startIcon={<ArrowBackIcon />}
                sx={{
                  bgcolor: '#4DD8E6',
                  color: 'white',
                  py: 1.5,
                  px: 4,
                  fontSize: '1.1rem',
                  textTransform: 'none',
                  '&:hover': {
                    bgcolor: '#3CC7D5'
                  }
                }}
              >
                Back to Home
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  )
} 