import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material'
import gc1 from '../../assets/images/gc1.png'
import gc2 from '../../assets/images/gc2.jpg'
import gc3 from '../../assets/images/gc3.jpg'
import gc4 from '../../assets/images/gc4.jpg'

const services = [
  {
    title: 'Gutter Cleaning',
    description: 'Professional removal of leaves, debris, and blockages to ensure proper water flow.',
    image: gc1
  },
  {
    title: 'Gutter Repair',
    description: 'Professional repair services to fix leaks, sagging, and damaged gutters.',
    image: gc2
  },
  {
    title: 'Gutter Guard Installation',
    description: 'High-quality gutter guard installation to prevent debris buildup.',
    image: gc3
  },
  {
    title: 'Gutter Protection',
    description: 'Premium gutter guard installation to prevent debris buildup and maintain flow.',
    image: gc4
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
              maxWidth: 600,
              mx: 'auto'
            }}
          >
            Professional gutter cleaning and maintenance services to protect your home
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={3} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 4,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
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
                      color: '#5D6D7E'
                    }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
} 