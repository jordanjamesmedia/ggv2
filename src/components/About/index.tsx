import React from 'react'
import { Box, Container, Typography, Grid, Paper } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import HandymanIcon from '@mui/icons-material/Handyman'
import GroupIcon from '@mui/icons-material/Group'
import StarIcon from '@mui/icons-material/Star'
import PageHeader from '../shared/PageHeader'

export default function About() {
  const values = [
    {
      icon: <HandymanIcon sx={{ fontSize: 40, color: '#4DD8E6' }} />,
      title: 'Professional Excellence',
      description: 'Our team brings years of experience and expertise to every job, ensuring the highest quality service.'
    },
    {
      icon: <GroupIcon sx={{ fontSize: 40, color: '#4DD8E6' }} />,
      title: 'Customer Focus',
      description: 'We prioritize your satisfaction and work closely with you to meet your specific needs.'
    },
    {
      icon: <StarIcon sx={{ fontSize: 40, color: '#4DD8E6' }} />,
      title: 'Quality Service',
      description: 'Using the latest equipment and techniques, we deliver exceptional results every time.'
    }
  ]

  return (
    <Box>
      <PageHeader
        title="About Us"
        subtitle="Your trusted gutter maintenance experts in the Illawarra region"
        variant="about"
      />

      {/* Main Content */}
      <Box sx={{ py: 8, bgcolor: '#f8fafc' }}>
        <Container maxWidth="lg">
          {/* Our Story Section */}
          <Box sx={{ mb: 8 }}>
            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: '2rem',
                fontWeight: 600,
                color: '#2C3E50',
                mb: 3,
                textAlign: 'center'
              }}
            >
              Our Story
            </Typography>
            <Typography 
              sx={{ 
                color: '#5D6D7E',
                textAlign: 'center',
                maxWidth: 800,
                mx: 'auto',
                mb: 6,
                lineHeight: 1.8
              }}
            >
              Since our establishment, Gutter Goat has been committed to providing top-quality gutter cleaning and maintenance services to homeowners in the Illawarra region. Our journey began with a simple mission: to protect homes from water damage through professional gutter maintenance.
            </Typography>
          </Box>

          {/* Our Values */}
          <Grid container spacing={4} sx={{ mb: 8 }}>
            {values.map((value, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    borderRadius: 4,
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.8) 100%)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(77, 216, 230, 0.2)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 48px rgba(77, 216, 230, 0.15)'
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <Box sx={{ mb: 3 }}>
                      {value.icon}
                    </Box>
                    <Typography 
                      variant="h3" 
                      sx={{ 
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        color: '#2C3E50',
                        mb: 2
                      }}
                    >
                      {value.title}
                    </Typography>
                    <Typography sx={{ color: '#5D6D7E' }}>
                      {value.description}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>

          {/* Why Choose Us */}
          <Box>
            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: '2rem',
                fontWeight: 600,
                color: '#2C3E50',
                mb: 3,
                textAlign: 'center'
              }}
            >
              Why Choose Us
            </Typography>
            <Grid container spacing={3}>
              {[
                'Fully licensed and insured',
                'Experienced local team',
                'Latest equipment and techniques',
                'Comprehensive service guarantee',
                'Flexible scheduling options',
                'Competitive pricing'
              ].map((feature, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.8) 100%)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(77, 216, 230, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 24px rgba(77, 216, 230, 0.15)'
                      }
                    }}
                  >
                    <CheckCircleOutlineIcon sx={{ color: '#4DD8E6' }} />
                    <Typography sx={{ color: '#2C3E50', fontWeight: 500 }}>
                      {feature}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  )
} 