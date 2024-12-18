import React from 'react'
import { Box, Container, Grid, Typography, Link, Stack } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import logoSquare from '../../assets/images/logo-square.png'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: 'primary.dark',
        color: 'white',
        pt: 8,
        pb: 4,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 4 }}>
              <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
                <img 
                  src={logoSquare}
                  alt="Gutter Goat Logo" 
                  style={{ 
                    height: '50px',
                    width: 'auto'
                  }}
                />
                <Typography variant="h6" sx={{ fontWeight: 600, color: 'white' }}>
                  Gutter Goat
                </Typography>
              </Stack>
              <Typography variant="body2" sx={{ mb: 2, color: 'rgba(255, 255, 255, 0.8)' }}>
                Professional gutter cleaning services in Wollongong and the Illawarra region. 
                Reliable, efficient, and fully insured.
              </Typography>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ mb: 3 }}>Quick Links</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link 
                component={RouterLink} 
                to="/"
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  '&:hover': { color: '#4DD8E6' }
                }}
              >
                Home
              </Link>
              <Link 
                component={RouterLink} 
                to="/services"
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  '&:hover': { color: '#4DD8E6' }
                }}
              >
                Services
              </Link>
              <Link 
                component={RouterLink} 
                to="/locations"
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  '&:hover': { color: '#4DD8E6' }
                }}
              >
                Service Areas
              </Link>
              <Link 
                component={RouterLink} 
                to="/quote"
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  '&:hover': { color: '#4DD8E6' }
                }}
              >
                Get a Quote
              </Link>
            </Box>
          </Grid>

          {/* Legal Links */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ mb: 3 }}>Legal</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link 
                component={RouterLink} 
                to="/privacy"
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  '&:hover': { color: '#4DD8E6' }
                }}
              >
                Privacy Policy
              </Link>
              <Link 
                component="a"
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  localStorage.removeItem('cookieConsent')
                  window.location.reload()
                }}
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  '&:hover': { color: '#4DD8E6' }
                }}
              >
                Cookie Preferences
              </Link>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box sx={{ 
          mt: 6, 
          pt: 3, 
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          textAlign: 'center'
        }}>
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
            © {currentYear} Gutter Goat. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
} 