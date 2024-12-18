import React from 'react'
import { Box, Container, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import gc8 from '../../assets/images/gc8.jpg'

const nextSteps = [
  "Our team will review your request within 24 hours",
  "We will contact you to confirm details and schedule a visit if needed",
  "You will receive a detailed quote based on your requirements",
  "Once approved, we will schedule your service at a time that works for you"
]

export default function ThankYou() {
  return (
    <Box
      sx={{
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
          backgroundImage: `url(${gc8})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3)',
          zIndex: -2
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, rgba(27, 75, 90, 0.85), rgba(27, 75, 90, 0.9))',
          zIndex: -1
        }
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            textAlign: 'center',
            py: { xs: 8, md: 12 }
          }}
        >
          <CheckCircleIcon 
            sx={{ 
              fontSize: '4rem', 
              color: '#4DD8E6',
              mb: 3
            }} 
          />
          
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 700,
              mb: 3,
              textShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}
          >
            Thank You for Your Request!
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              mb: 4,
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            We have received your quote request and will get back to you within 24 hours. 
            In the meantime, feel free to explore our services or contact us if you have any questions.
          </Typography>

          <Box
            sx={{
              display: 'flex',
              gap: 2,
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}
          >
            <Button
              component={Link}
              to="/"
              variant="contained"
              sx={{
                bgcolor: '#4DD8E6',
                color: '#1B4B5A',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                textTransform: 'none',
                fontWeight: 600,
                '&:hover': {
                  bgcolor: '#3CC7D5'
                }
              }}
            >
              Back to Home
            </Button>

            <Button
              component={Link}
              to="/services"
              variant="outlined"
              sx={{
                borderColor: '#4DD8E6',
                color: '#FFFFFF',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                textTransform: 'none',
                fontWeight: 600,
                '&:hover': {
                  borderColor: '#3CC7D5',
                  bgcolor: 'rgba(77, 216, 230, 0.1)'
                }
              }}
            >
              Our Services
            </Button>
          </Box>

          <Box
            sx={{
              mt: 8,
              p: 4,
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: 2,
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                fontWeight: 600,
                mb: 2
              }}
            >
              What Happens Next?
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {nextSteps.map((step, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    color: 'rgba(255, 255, 255, 0.9)'
                  }}
                >
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      bgcolor: 'rgba(77, 216, 230, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      border: '1px solid rgba(77, 216, 230, 0.3)',
                      color: '#4DD8E6',
                      fontSize: '0.875rem',
                      fontWeight: 600
                    }}
                  >
                    {index + 1}
                  </Box>
                  <Typography sx={{ fontSize: '1rem' }}>
                    {step}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
} 