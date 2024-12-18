import React from 'react'
import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices'
import BuildIcon from '@mui/icons-material/Build'
import SecurityIcon from '@mui/icons-material/Security'
import { Link } from 'react-router-dom'
import PageHeader from '../shared/PageHeader'

const services = [
  {
    icon: <CleaningServicesIcon sx={{ fontSize: '2rem', color: '#4DD8E6' }} />,
    title: 'Gutter Cleaning',
    description: 'Complete removal of leaves, debris, and buildup from your gutters and downspouts.',
    features: [
      'Thorough cleaning of gutters and downspouts',
      'Debris removal and disposal',
      'Downspout flushing',
      'Gutter functionality check'
    ],
    image: '/images/services/gutter-cleaning.jpg'
  },
  {
    icon: <BuildIcon sx={{ fontSize: '2rem', color: '#4DD8E6' }} />,
    title: 'Gutter Maintenance',
    description: 'Regular inspection and maintenance to keep your gutters functioning properly.',
    features: [
      'Regular inspections',
      'Preventive cleaning',
      'Flow testing',
      'Performance optimization'
    ],
    image: '/images/services/gutter-maintenance.jpg'
  },
  {
    icon: <SecurityIcon sx={{ fontSize: '2rem', color: '#4DD8E6' }} />,
    title: 'Gutter Guard Installation',
    description: 'Premium gutter guard installation to prevent debris buildup and reduce maintenance needs.',
    features: [
      'High-quality guard installation',
      'Debris prevention system',
      'Reduced maintenance needs',
      'Extended gutter life'
    ],
    image: '/images/services/gutter-guard.jpg'
  }
]

const Services: React.FC = () => {
  return (
    <Box>
      <PageHeader
        title="Our Services"
        subtitle="Professional gutter cleaning and maintenance services to protect your home"
        variant="services"
      />

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 2,
                  overflow: 'hidden',
                  bgcolor: '#1B4B5A',
                  color: 'white'
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    height: 200,
                    backgroundImage: `url(${service.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'rgba(27, 75, 90, 0.7)'
                    }
                  }}
                >
                  <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 1 }}>
                    {service.icon}
                    <Typography variant="h5" sx={{ fontWeight: 600 }}>
                      {service.title}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ p: 3, flexGrow: 1 }}>
                  <Typography sx={{ mb: 3, color: 'rgba(255, 255, 255, 0.9)' }}>
                    {service.description}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                    {service.features.map((feature, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          color: 'rgba(255, 255, 255, 0.9)',
                          '&::before': {
                            content: '""',
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            bgcolor: '#4DD8E6',
                            flexShrink: 0
                          }
                        }}
                      >
                        <Typography sx={{ fontSize: '0.9rem' }}>
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>

                <Box sx={{ p: 3, pt: 0 }}>
                  <Button
                    component={Link}
                    to="/quote"
                    variant="contained"
                    fullWidth
                    sx={{
                      bgcolor: '#4DD8E6',
                      color: '#1B4B5A',
                      py: 1.5,
                      textTransform: 'none',
                      fontWeight: 600,
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
  )
}

export default Services 