import { Box, Container, Typography, Button } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

export default function CTA() {
  return (
    <Box sx={{ py: 8, bgcolor: '#4DD8E6' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', color: 'white' }}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              mb: 2
            }}
          >
            Ready to Get Started?
          </Typography>
          <Typography 
            sx={{ 
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              opacity: 0.9,
              mb: 4,
              maxWidth: 600,
              mx: 'auto'
            }}
          >
            Contact us today for a free quote and experience the difference professional gutter cleaning can make.
          </Typography>
          <Button
            component={RouterLink}
            to="/quote"
            variant="contained"
            size="large"
            sx={{
              bgcolor: 'white',
              color: '#4DD8E6',
              py: 1.5,
              px: 4,
              fontSize: '1.1rem',
              textTransform: 'none',
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.9)'
              }
            }}
          >
            Get Your Free Quote
          </Button>
        </Box>
      </Container>
    </Box>
  )
} 