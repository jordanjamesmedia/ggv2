import { Container, Grid, Typography, Paper, Box, Button } from '@mui/material'
import WaterDamageIcon from '@mui/icons-material/WaterDamage'
import BuildIcon from '@mui/icons-material/Build'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices'
import ShieldIcon from '@mui/icons-material/Shield'

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
    ]
  },
  {
    icon: <WaterDamageIcon sx={{ fontSize: 40 }} />,
    title: 'Gutter Repair',
    description: 'Professional repair services to fix leaks, sagging, and damaged gutters.',
    features: [
      'Leak detection and sealing',
      'Sagging gutter repair',
      'Loose gutter fastening',
      'Downspout repair and replacement'
    ]
  },
  {
    icon: <BuildIcon sx={{ fontSize: 40 }} />,
    title: 'Gutter Installation',
    description: 'Expert installation of new gutters and downspouts for optimal water management.',
    features: [
      'Custom gutter sizing and fitting',
      'Professional installation',
      'Quality materials and workmanship',
      'Proper pitch and alignment'
    ]
  },
  {
    icon: <ShieldIcon sx={{ fontSize: 40 }} />,
    title: 'Gutter Protection',
    description: 'Premium gutter guard installation to prevent debris buildup and maintain flow.',
    features: [
      'Gutter guard installation',
      'Debris prevention systems',
      'Reduced maintenance needs',
      'Extended gutter life'
    ]
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
            Professional gutter services to protect your home and maintain its value
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 3,
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(77, 216, 230, 0.08)',
                  bgcolor: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 48px rgba(44, 62, 80, 0.08)',
                    bgcolor: 'rgba(77, 216, 230, 0.02)'
                  }
                }}
              >
                <Box 
                  sx={{ 
                    mb: 3,
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
                      width: 60,
                      height: 60,
                      borderRadius: '12px',
                      bgcolor: 'rgba(77, 216, 230, 0.06)',
                      color: '#4DD8E6',
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Typography 
                    variant="h5" 
                    component="h3"
                    sx={{ 
                      fontWeight: 600,
                      color: '#2C3E50',
                      fontSize: '1.5rem'
                    }}
                  >
                    {service.title}
                  </Typography>
                </Box>
                
                <Typography 
                  sx={{ 
                    color: '#5D6D7E',
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
                          bgcolor: 'rgba(77, 216, 230, 0.4)',
                          flexShrink: 0
                        }} 
                      />
                      <Typography sx={{ color: '#5D6D7E' }}>
                        {feature}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Box sx={{ mt: 'auto' }}>
                  <Button
                    variant="outlined"
                    sx={{
                      py: 1.5,
                      px: 4,
                      borderRadius: 2,
                      textTransform: 'none',
                      fontSize: '1rem',
                      width: '100%',
                      borderColor: 'rgba(77, 216, 230, 0.3)',
                      color: '#4DD8E6',
                      '&:hover': {
                        borderColor: '#4DD8E6',
                        bgcolor: 'rgba(77, 216, 230, 0.02)'
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
      </Box>
    </Container>
  )
} 