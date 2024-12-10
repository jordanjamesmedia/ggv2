import React from 'react'
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Divider } from '@mui/material'
import { SERVICES } from '../../data/services'
import WaterDamageIcon from '@mui/icons-material/WaterDamage'
import PestControlIcon from '@mui/icons-material/PestControl'
import FoundationIcon from '@mui/icons-material/Foundation'

const benefits = [
  {
    icon: <WaterDamageIcon sx={{ fontSize: 40, color: '#4DD8E6' }} />,
    title: 'Prevent Water Damage',
    description: "Protect your home from foundation damage, basement flooding, and interior wall damage caused by overflowing gutters."
  },
  {
    icon: <PestControlIcon sx={{ fontSize: 40, color: '#4DD8E6' }} />,
    title: 'Eliminate Pest Havens',
    description: "Stop mosquitoes, birds, and rodents from making their homes in debris-filled gutters."
  },
  {
    icon: <FoundationIcon sx={{ fontSize: 40, color: '#4DD8E6' }} />,
    title: 'Maintain Structural Health',
    description: "Prevent mold growth, wood rot, and structural damage that can compromise your home's integrity."
  }
]

export default function Services() {
  return (
    <Box sx={{ py: 8, bgcolor: '#f8fafc' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              color: '#2C3E50',
              mb: 2
            }}
          >
            Our Services
          </Typography>
          <Typography 
            sx={{ 
              fontSize: '1.1rem',
              color: '#5D6D7E',
              maxWidth: 800,
              mx: 'auto'
            }}
          >
            Professional gutter cleaning and protection services to maintain your home's gutter system and prevent water damage
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {SERVICES.map((service) => (
            <Grid item xs={12} md={4} key={service.id}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 4,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)'
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={service.image}
                  alt={service.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1, p: 4 }}>
                  <Typography 
                    gutterBottom 
                    variant="h5" 
                    sx={{ 
                      fontSize: '1.5rem',
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
                      lineHeight: 1.6
                    }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 8 }} />

        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              color: '#2C3E50',
              mb: 2
            }}
          >
            Why Regular Maintenance Matters
          </Typography>
          <Typography 
            sx={{ 
              fontSize: '1.1rem',
              color: '#5D6D7E',
              maxWidth: 800,
              mx: 'auto',
              mb: 6
            }}
          >
            Protect your investment and prevent costly repairs with professional gutter maintenance
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 4,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  p: 4
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                  {benefit.icon}
                </Box>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    color: '#2C3E50',
                    mb: 2,
                    textAlign: 'center'
                  }}
                >
                  {benefit.title}
                </Typography>
                <Typography 
                  sx={{ 
                    color: '#5D6D7E',
                    textAlign: 'center',
                    lineHeight: 1.6
                  }}
                >
                  {benefit.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
} 