import React from 'react'
import { Box, Container, Typography, Grid, Paper } from '@mui/material'
import HandymanIcon from '@mui/icons-material/Handyman'
import GroupIcon from '@mui/icons-material/Group'
import StarIcon from '@mui/icons-material/Star'
import { cardTypographyStyles, cardIconStyle, CARD_COLORS } from '../../styles/cardStyles'
import gc12 from '../../assets/images/gc12.jpg'

const benefits = [
  {
    icon: <HandymanIcon sx={{ fontSize: '2.5rem' }} />,
    title: 'Professional Service',
    description: 'Our experienced team delivers top-quality gutter cleaning and maintenance services.',
    highlight: 'Certified Professionals',
    variant: 'primary'
  },
  {
    icon: <GroupIcon sx={{ fontSize: '2.5rem' }} />,
    title: 'Customer Satisfaction',
    description: 'We prioritize your satisfaction with our 100% satisfaction guarantee.',
    highlight: '5-Star Service',
    variant: 'secondary'
  },
  {
    icon: <StarIcon sx={{ fontSize: '2.5rem' }} />,
    title: 'Reliable & Efficient',
    description: 'Fast, thorough service that keeps your gutters functioning perfectly.',
    highlight: 'Quick Turnaround',
    variant: 'tertiary'
  }
]

export default function Benefits() {
  return (
    <Box
      sx={{
        position: 'relative',
        py: 8,
        isolation: 'isolate',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${gc12})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          filter: 'brightness(0.15)',
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
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography 
            variant="h2" 
            component="h2"
            sx={{ 
              color: '#FFFFFF',
              mb: 2,
              fontSize: { xs: '2rem', md: '2.75rem' },
              fontWeight: 600,
              textShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}
          >
            Why Choose Gutter Goat?
          </Typography>
          <Typography 
            variant="subtitle1"
            sx={{ 
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: '800px',
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.125rem' },
              textShadow: '0 1px 2px rgba(0,0,0,0.2)'
            }}
          >
            Experience the difference with our professional gutter cleaning service
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  backdropFilter: 'blur(8px)',
                  background: `linear-gradient(135deg, ${
                    index === 0 
                      ? 'rgba(255, 255, 255, 0.15)' 
                      : index === 1
                      ? 'rgba(255, 255, 255, 0.12)'
                      : 'rgba(255, 255, 255, 0.1)'
                  } 0%, ${
                    index === 0
                      ? 'rgba(77, 216, 230, 0.15)'
                      : index === 1
                      ? 'rgba(77, 216, 230, 0.12)'
                      : 'rgba(77, 216, 230, 0.1)'
                  } 100%)`,
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  p: 4,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 48px rgba(0, 0, 0, 0.3)',
                    background: `linear-gradient(135deg, ${
                      index === 0 
                        ? 'rgba(255, 255, 255, 0.2)' 
                        : index === 1
                        ? 'rgba(255, 255, 255, 0.17)'
                        : 'rgba(255, 255, 255, 0.15)'
                    } 0%, ${
                      index === 0
                        ? 'rgba(77, 216, 230, 0.2)'
                        : index === 1
                        ? 'rgba(77, 216, 230, 0.17)'
                        : 'rgba(77, 216, 230, 0.15)'
                    } 100%)`
                  }
                }}
              >
                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  <Box 
                    sx={{ 
                      mb: 3,
                      color: '#4DD8E6',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {React.cloneElement(benefit.icon, {
                      sx: { fontSize: '2.5rem' }
                    })}
                  </Box>

                  <Typography 
                    variant="h5"
                    sx={{
                      color: '#FFFFFF',
                      fontWeight: 600,
                      textAlign: 'center',
                      mb: 2,
                      textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                    }}
                  >
                    {benefit.title}
                  </Typography>

                  <Typography 
                    sx={{
                      color: 'rgba(255, 255, 255, 0.9)',
                      textAlign: 'center',
                      mb: 3,
                      lineHeight: 1.7,
                      textShadow: '0 1px 2px rgba(0,0,0,0.1)'
                    }}
                  >
                    {benefit.description}
                  </Typography>

                  <Box 
                    className="highlight"
                    sx={{ 
                      position: 'absolute',
                      bottom: -64,
                      left: 0,
                      right: 0,
                      bgcolor: 'rgba(77, 216, 230, 0.2)',
                      color: '#FFFFFF',
                      py: 1.5,
                      textAlign: 'center',
                      fontWeight: 600,
                      transform: 'translateY(0)',
                      opacity: 0,
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(4px)',
                      textShadow: '0 1px 2px rgba(0,0,0,0.2)',
                      borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    {benefit.highlight}
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
} 