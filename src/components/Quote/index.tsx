import React from 'react'
import { Box, Container, Typography, Paper, Grid } from '@mui/material'
import LeadForm from '../LeadForm'
import gc14 from '../../assets/images/gc14.jpg'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import SecurityIcon from '@mui/icons-material/Security'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'

export default function Quote() {
  const benefits = [
    {
      icon: <AccessTimeIcon sx={{ fontSize: 40, color: '#4DD8E6' }} />,
      title: 'Fast Response',
      description: 'Get a quote within 24 hours of your request'
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40, color: '#4DD8E6' }} />,
      title: 'Licensed & Insured',
      description: 'Professional service with full coverage'
    },
    {
      icon: <SupportAgentIcon sx={{ fontSize: 40, color: '#4DD8E6' }} />,
      title: 'Expert Support',
      description: 'Experienced team ready to help'
    }
  ];

  const features = [
    'Free initial consultation',
    'Competitive pricing',
    'Professional equipment',
    'Experienced team',
    'Satisfaction guarantee',
    'Flexible scheduling'
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box 
        sx={{
          position: 'relative',
          minHeight: '40vh',
          display: 'flex',
          alignItems: 'center',
          color: 'white',
          mt: 0,
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
              Get a Free Quote
            </Typography>
            <Typography 
              sx={{ 
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                opacity: 0.9,
                mb: 4,
                color: 'white'
              }}
            >
              Contact us today for professional gutter cleaning services
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Content Section */}
      <Box sx={{ py: 8, bgcolor: '#f8fafc' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Contact Form */}
            <Grid item xs={12} md={8}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 6 },
                  borderRadius: 4,
                  bgcolor: 'white'
                }}
              >
                <Typography 
                  variant="h2" 
                  sx={{ 
                    fontSize: '2rem',
                    fontWeight: 600,
                    color: '#2C3E50',
                    mb: 1
                  }}
                >
                  Request a Quote
                </Typography>
                <Typography 
                  sx={{ 
                    color: '#5D6D7E',
                    mb: 4
                  }}
                >
                  Fill out the form below and we'll get back to you within 24 hours
                </Typography>
                <LeadForm />
              </Paper>
            </Grid>

            {/* Benefits and Features */}
            <Grid item xs={12} md={4}>
              {/* Benefits */}
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 4,
                  bgcolor: 'white',
                  mb: 4
                }}
              >
                <Typography 
                  variant="h3" 
                  sx={{ 
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    color: '#2C3E50',
                    mb: 3
                  }}
                >
                  Why Choose Us
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {benefits.map((benefit, index) => (
                    <Box key={index} sx={{ display: 'flex', gap: 2 }}>
                      <Box sx={{ mt: 0.5 }}>{benefit.icon}</Box>
                      <Box>
                        <Typography 
                          sx={{ 
                            fontWeight: 600,
                            color: '#2C3E50',
                            mb: 0.5
                          }}
                        >
                          {benefit.title}
                        </Typography>
                        <Typography sx={{ color: '#5D6D7E', fontSize: '0.95rem' }}>
                          {benefit.description}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Paper>

              {/* Features */}
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 4,
                  bgcolor: 'white'
                }}
              >
                <Typography 
                  variant="h3" 
                  sx={{ 
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    color: '#2C3E50',
                    mb: 3
                  }}
                >
                  What's Included
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {features.map((feature, index) => (
                    <Box 
                      key={index} 
                      sx={{ 
                        display: 'flex', 
                        alignItems: 'center',
                        gap: 2
                      }}
                    >
                      <CheckCircleOutlineIcon sx={{ color: '#4DD8E6' }} />
                      <Typography sx={{ color: '#2C3E50' }}>
                        {feature}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
} 