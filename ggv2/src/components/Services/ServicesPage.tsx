import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import gc2 from '../../assets/images/gc2.jpg'
import gc7 from '../../assets/images/gc7.jpg'
import gc8 from '../../assets/images/gc8.jpg'
import gc11 from '../../assets/images/gc11.jpg'
import gc13 from '../../assets/images/gc13.jpg'
import gc14 from '../../assets/images/gc14.jpg'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const services = [
  {
    id: 'gutter-cleaning',
    title: 'Gutter Cleaning',
    description: 'Professional and thorough cleaning of your gutters to remove leaves, debris, and blockages. We ensure proper water flow and prevent potential water damage to your home.',
    image: gc13,
    features: [
      'Complete debris removal',
      'Downspout cleaning',
      'Gutter flushing',
      'System inspection',
      'Before & after photos',
      'Satisfaction guarantee'
    ]
  },
  {
    id: 'gutter-maintenance',
    title: 'Gutter Maintenance',
    description: 'Regular inspection and maintenance service to keep your gutters in optimal condition. We identify and address potential issues before they become major problems.',
    image: gc2,
    features: [
      'Regular inspections',
      'Preventive cleaning',
      'Flow testing',
      'Condition reporting',
      'Performance optimization',
      'Seasonal care'
    ]
  },
  {
    id: 'gutter-guard-installation',
    title: 'Gutter Guard Installation',
    description: 'High-quality gutter guard installation to prevent debris buildup while maintaining proper water flow. Reduce cleaning frequency and protect your gutters year-round.',
    image: gc7,
    features: [
      'Premium materials',
      'Professional installation',
      'Debris protection',
      'Reduced maintenance',
      'UV resistant',
      'Long-term warranty'
    ]
  }
]

export default function ServicesPage() {
  return (
    <Box>
      {/* Hero Section */}
      <Box 
        sx={{
          mt: '74px',
          position: 'relative',
          minHeight: '40vh',
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
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${gc13})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: -1
          }
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 800, mx: 'auto', textAlign: 'center' }}>
            <Typography 
              variant="h1" 
              sx={{ 
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                mb: 2
              }}
            >
              Our Services
            </Typography>
            <Typography 
              sx={{ 
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                opacity: 0.9,
                mb: 4,
                color: 'white'
              }}
            >
              Professional gutter cleaning and maintenance services to protect your home
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Services Grid */}
      <Box sx={{ py: 8, bgcolor: '#f8fafc' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {services.map((service) => (
              <Grid item xs={12} md={6} key={service.id}>
                <Paper
                  sx={{
                    height: '100%',
                    overflow: 'hidden',
                    borderRadius: 4,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 48px rgba(77, 216, 230, 0.15)'
                    }
                  }}
                >
                  <Box sx={{ position: 'relative', paddingTop: '50%' }}>
                    <Box
                      component="img"
                      src={service.image}
                      alt={service.title}
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </Box>
                  <Box sx={{ p: 4 }}>
                    <Typography 
                      variant="h2" 
                      sx={{ 
                        fontSize: '1.75rem',
                        fontWeight: 600,
                        color: '#2C3E50',
                        mb: 2
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography 
                      sx={{ 
                        color: '#5D6D7E',
                        mb: 3,
                        lineHeight: 1.6
                      }}
                    >
                      {service.description}
                    </Typography>
                    <Grid container spacing={2} sx={{ mb: 3 }}>
                      {service.features.map((feature, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <CheckCircleOutlineIcon sx={{ color: '#4DD8E6' }} />
                            <Typography sx={{ color: '#2C3E50' }}>
                              {feature}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                    <Button
                      component={Link}
                      to="/quote"
                      variant="contained"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        bgcolor: '#4DD8E6',
                        color: 'white',
                        py: 1.5,
                        px: 3,
                        borderRadius: 2,
                        textTransform: 'none',
                        '&:hover': {
                          bgcolor: '#3CC7D5'
                        }
                      }}
                    >
                      Get a Quote
                    </Button>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  )
} 