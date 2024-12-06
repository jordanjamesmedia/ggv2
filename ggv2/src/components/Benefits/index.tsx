import { Container, Typography, Box, Grid, Paper } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified'
import SecurityIcon from '@mui/icons-material/Security'
import HandymanIcon from '@mui/icons-material/Handyman'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import WaterDamageIcon from '@mui/icons-material/WaterDamage'
import PestControlIcon from '@mui/icons-material/PestControl'
import FoundationIcon from '@mui/icons-material/Foundation'

const importancePoints = [
  {
    icon: <WaterDamageIcon sx={{ fontSize: 40 }} />,
    title: 'Prevent Water Damage',
    description: 'Clogged gutters can cause water to overflow, leading to foundation damage, basement flooding, and wall/ceiling damage inside your home.'
  },
  {
    icon: <PestControlIcon sx={{ fontSize: 40 }} />,
    title: 'Avoid Pest Infestations',
    description: 'Debris-filled gutters create perfect breeding grounds for mosquitoes, birds, and rodents. Regular cleaning eliminates these pest havens.'
  },
  {
    icon: <FoundationIcon sx={{ fontSize: 40 }} />,
    title: 'Protect Structural Integrity',
    description: "Proper gutter maintenance prevents mold growth, wood rot, and structural damage that can compromise your roof and home's foundation."
  }
]

const benefits = [
  {
    icon: <VerifiedIcon sx={{ fontSize: 40 }} />,
    title: 'Licensed & Insured',
    description: 'Fully licensed and insured for your complete peace of mind.',
    highlight: 'Professional Service'
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 40 }} />,
    title: 'Satisfaction Guaranteed',
    description: 'Our work is backed by our satisfaction guarantee.',
    highlight: '100% Guaranteed'
  },
  {
    icon: <HandymanIcon sx={{ fontSize: 40 }} />,
    title: 'Expert Team',
    description: 'Skilled professionals with years of experience.',
    highlight: 'Experienced Staff'
  },
  {
    icon: <LocalOfferIcon sx={{ fontSize: 40 }} />,
    title: 'Competitive Pricing',
    description: 'Quality service at affordable rates.',
    highlight: 'Best Value'
  },
  {
    icon: <AccessTimeIcon sx={{ fontSize: 40 }} />,
    title: 'Reliable Service',
    description: 'On-time service with clear communication.',
    highlight: 'Prompt & Reliable'
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 40 }} />,
    title: 'Customer Support',
    description: 'Friendly and responsive customer service.',
    highlight: 'Here to Help'
  }
]

export default function Benefits() {
  return (
    <Box sx={{ 
      py: { xs: 6, md: 8 },
      bgcolor: '#f8fafc'
    }}>
      <Container maxWidth="lg">
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
            Why Regular Gutter Cleaning Matters
          </Typography>
          <Typography 
            variant="subtitle1"
            sx={{ 
              color: '#5D6D7E',
              maxWidth: '800px',
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.125rem' },
              mb: 6
            }}
          >
            Protect your home's integrity and prevent costly damages with professional gutter maintenance
          </Typography>

          <Grid container spacing={4} sx={{ mb: 8 }}>
            {importancePoints.map((point, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    borderRadius: 3,
                    border: '1px solid rgba(77, 216, 230, 0.12)',
                    bgcolor: 'white',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 48px rgba(44, 62, 80, 0.08)'
                    }
                  }}
                >
                  <Box 
                    sx={{ 
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 70,
                      height: 70,
                      borderRadius: '16px',
                      bgcolor: 'rgba(77, 216, 230, 0.08)',
                      color: '#4DD8E6',
                      mx: 'auto',
                      mb: 3
                    }}
                  >
                    {point.icon}
                  </Box>
                  <Typography 
                    variant="h6" 
                    component="h3"
                    sx={{ 
                      fontWeight: 600,
                      color: '#2C3E50',
                      textAlign: 'center',
                      mb: 2
                    }}
                  >
                    {point.title}
                  </Typography>
                  <Typography 
                    sx={{ 
                      color: '#5D6D7E',
                      textAlign: 'center',
                      lineHeight: 1.6
                    }}
                  >
                    {point.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

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
            Why Choose Gutter Goat?
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
            Experience the difference with our professional gutter cleaning service
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 3,
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(77, 216, 230, 0.08)',
                  bgcolor: 'white',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 48px rgba(44, 62, 80, 0.08)',
                    '& .highlight': {
                      transform: 'translateY(0)',
                      opacity: 1
                    }
                  }
                }}
              >
                <Box 
                  sx={{ 
                    mb: 2,
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
                      bgcolor: 'rgba(77, 216, 230, 0.06)',
                      color: '#4DD8E6'
                    }}
                  >
                    {benefit.icon}
                  </Box>
                  <Typography 
                    variant="h6" 
                    component="h3"
                    sx={{ 
                      fontWeight: 600,
                      color: '#2C3E50',
                      fontSize: '1.25rem'
                    }}
                  >
                    {benefit.title}
                  </Typography>
                </Box>
                
                <Typography 
                  sx={{ 
                    color: '#5D6D7E',
                    lineHeight: 1.6,
                    mb: 2
                  }}
                >
                  {benefit.description}
                </Typography>

                <Box 
                  className="highlight"
                  sx={{ 
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    bgcolor: 'rgba(77, 216, 230, 0.04)',
                    color: '#4DD8E6',
                    py: 1,
                    textAlign: 'center',
                    fontWeight: 600,
                    transform: 'translateY(100%)',
                    opacity: 0,
                    transition: 'all 0.3s ease'
                  }}
                >
                  {benefit.highlight}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
} 