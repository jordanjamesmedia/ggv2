import { Container, Grid, Typography, Paper, Box, Button } from '@mui/material'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices'
import HandymanIcon from '@mui/icons-material/Handyman'
import SecurityIcon from '@mui/icons-material/Security'
import { Link } from 'react-router-dom'
import gc2 from '../assets/images/gc2.jpg'
import gc6 from '../assets/images/gc6.jpg'
import gc9 from '../assets/images/gc9.jpg'

const services = [
  {
    icon: <CleaningServicesIcon sx={{ fontSize: 40 }} />,
    title: 'Gutter Cleaning',
    description: 'Complete removal of leaves, debris, and buildup from your gutters and downspouts.',
    features: [
      'Thorough cleaning of gutters and downspouts',
      'Debris removal and disposal',
      'Downspout flushing',
      'Gutter functionality check'
    ],
    image: gc2
  },
  {
    icon: <HandymanIcon sx={{ fontSize: 40 }} />,
    title: 'Gutter Maintenance',
    description: 'Regular inspection and maintenance to keep your gutters functioning properly.',
    features: [
      'Regular inspections',
      'Preventive cleaning',
      'Flow testing',
      'Performance optimization'
    ],
    image: gc6
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 40 }} />,
    title: 'Gutter Guard Installation',
    description: 'Premium gutter guard installation to prevent debris buildup and reduce maintenance needs.',
    features: [
      'High-quality guard installation',
      'Debris prevention system',
      'Reduced maintenance needs',
      'Extended gutter life'
    ],
    image: gc9
  }
]

export default function Services() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ 
        py: { xs: 6, md: 8 },
        px: { xs: 2, md: 4 }
      }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography 
            variant="h2" 
            component="h2"
            sx={{ 
              color: '#2C3E50',
              mb: 2,
              fontSize: { xs: '2rem', md: '2.75rem' },
              fontWeight: 600
            }}
          >
            Our Services
          </Typography>
          <Typography 
            variant="subtitle1"
            sx={{ 
              color: '#5D6D7E',
              maxWidth: '800px',
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.125rem' }
            }}
          >
            Professional gutter cleaning and protection services to maintain your home's gutter system
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 3,
                  transition: 'all 0.3s ease',
                  overflow: 'hidden',
                  border: '1px solid #1B4B5A',
                  bgcolor: '#1B4B5A',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 48px rgba(27, 75, 90, 0.4)',
                    '& .service-image': {
                      transform: 'scale(1.05)'
                    }
                  }
                }}
              >
                <Box 
                  sx={{ 
                    position: 'relative',
                    paddingTop: '60%',
                    overflow: 'hidden'
                  }}
                >
                  <Box
                    component="img"
                    src={service.image}
                    alt={service.title}
                    className="service-image"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                      pt: 8,
                      pb: 2,
                      px: 3
                    }}
                  >
                    <Box 
                      sx={{ 
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2
                      }}
                    >
                      <Box 
                        sx={{ 
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 50,
                          height: 50,
                          borderRadius: '12px',
                          bgcolor: 'rgba(227, 247, 249, 0.15)',
                          color: '#fff',
                          backdropFilter: 'blur(4px)'
                        }}
                      >
                        {service.icon}
                      </Box>
                      <Typography 
                        variant="h5" 
                        component="h3"
                        sx={{ 
                          fontWeight: 600,
                          color: '#fff',
                          fontSize: '1.5rem'
                        }}
                      >
                        {service.title}
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box sx={{ p: 4, bgcolor: '#1B4B5A' }}>
                  <Typography 
                    sx={{ 
                      color: '#fff',
                      mb: 3,
                      lineHeight: 1.6
                    }}
                  >
                    {service.description}
                  </Typography>

                  <Box sx={{ mb: 4 }}>
                    {service.features.map((feature, idx) => (
                      <Box 
                        key={idx} 
                        sx={{ 
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                          mb: 1.5
                        }}
                      >
                        <Box 
                          sx={{ 
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            bgcolor: '#4DD8E6',
                            flexShrink: 0
                          }} 
                        />
                        <Typography sx={{ color: '#fff' }}>
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  <Box sx={{ mt: 'auto' }}>
                    <Button
                      component={Link}
                      to="/quote"
                      variant="contained"
                      sx={{
                        py: 1.5,
                        px: 4,
                        borderRadius: 2,
                        textTransform: 'none',
                        fontSize: '1rem',
                        width: '100%',
                        bgcolor: '#4DD8E6',
                        color: '#1B4B5A',
                        '&:hover': {
                          bgcolor: '#3CC7D5'
                        }
                      }}
                    >
                      Get a Quote
                    </Button>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
} 