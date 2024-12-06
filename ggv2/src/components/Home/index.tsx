import { Box, Container, Typography, Button, Stack, Grid } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import Services from '../Services'
import Benefits from '../Benefits'
import Testimonials from '../Testimonials'
import CTA from '../CTA'
import BlogCarousel from '../Blog/BlogCarousel'
import LeadForm from '../LeadForm'
import ServiceArea from '../ServiceArea'
import gc5 from '../../assets/images/gc5.jpg'

export default function Home() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services')
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Box sx={{ mt: 0 }}>
      {/* Hero Section */}
      <Box 
        sx={{
          mt: 0,
          position: 'relative',
          minHeight: { xs: 'auto', md: '100vh' },
          py: { xs: 8, md: 12 },
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
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${gc5})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: -1
          }
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 6, md: 4 }} alignItems="center">
            <Grid item xs={12} md={7} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography 
                variant="h1" 
                sx={{ 
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 700,
                  mb: 2,
                  lineHeight: 1.2,
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                Professional Gutter Cleaning Services in Illawarra
              </Typography>
              <Typography 
                sx={{ 
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  opacity: 0.9,
                  mb: 4,
                  maxWidth: 600,
                  textAlign: { xs: 'center', md: 'left' },
                  mx: { xs: 'auto', md: 0 },
                  color: 'white'
                }}
              >
                Protect your home with expert gutter cleaning. Professional, reliable, and guaranteed satisfaction.
              </Typography>
              <Stack 
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                sx={{ 
                  mb: { xs: 0, md: 6 },
                  justifyContent: { xs: 'center', md: 'flex-start' }
                }}
              >
                <Button
                  component={RouterLink}
                  to="/quote"
                  variant="contained"
                  size="large"
                  sx={{
                    py: 1.5,
                    px: { xs: 6, sm: 4 },
                    fontSize: '1.1rem',
                    textTransform: 'none',
                    borderRadius: 2,
                    bgcolor: '#4DD8E6',
                    '&:hover': {
                      bgcolor: '#3CC7D5'
                    },
                    minWidth: { xs: '100%', sm: '200px' }
                  }}
                >
                  Get a Quote
                </Button>
                <Button
                  onClick={scrollToServices}
                  variant="outlined"
                  size="large"
                  sx={{
                    py: 1.5,
                    px: { xs: 6, sm: 4 },
                    fontSize: '1.1rem',
                    textTransform: 'none',
                    borderRadius: 2,
                    color: 'white',
                    borderColor: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      bgcolor: 'rgba(255,255,255,0.1)'
                    },
                    minWidth: { xs: '100%', sm: '200px' }
                  }}
                >
                  Our Services
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box 
                sx={{ 
                  bgcolor: 'rgba(255,255,255,0.95)',
                  p: { xs: 3, sm: 4 },
                  borderRadius: 4,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                  mb: { xs: 4, md: 0 }
                }}
              >
                <LeadForm />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box id="services">
        <Services />
      </Box>

      {/* Benefits Section */}
      <Benefits />

      {/* Service Area Section */}
      <ServiceArea />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Blog Section */}
      <BlogCarousel />

      {/* CTA Section */}
      <CTA />
    </Box>
  )
} 