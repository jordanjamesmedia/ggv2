import { Box, Button } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import PhoneIcon from '@mui/icons-material/Phone'
import RequestQuoteIcon from '@mui/icons-material/RequestQuote'

export default function MobileCTA() {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        bgcolor: 'white',
        boxShadow: '0 -4px 12px rgba(0,0,0,0.1)',
        p: 2,
        display: { xs: 'flex', md: 'none' },
        gap: 2,
        zIndex: 1000
      }}
    >
      <Button
        component="a"
        href="tel:0497347752"
        variant="outlined"
        startIcon={<PhoneIcon />}
        fullWidth
        sx={{
          py: 1.5,
          borderColor: '#4DD8E6',
          color: '#4DD8E6',
          '&:hover': {
            borderColor: '#3CC7D5',
            bgcolor: 'rgba(77, 216, 230, 0.05)'
          }
        }}
      >
        Call Now
      </Button>
      <Button
        component={RouterLink}
        to="/quote"
        variant="contained"
        startIcon={<RequestQuoteIcon />}
        fullWidth
        sx={{
          py: 1.5,
          bgcolor: '#4DD8E6',
          '&:hover': {
            bgcolor: '#3CC7D5'
          }
        }}
      >
        Get Quote
      </Button>
    </Box>
  )
} 