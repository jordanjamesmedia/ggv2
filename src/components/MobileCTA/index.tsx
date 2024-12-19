import { Box, Button } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import PhoneIcon from '@mui/icons-material/Phone'
import RequestQuoteIcon from '@mui/icons-material/RequestQuote'
import { useState, useEffect } from 'react'
import { CARD_COLORS } from '../../styles/cardStyles'

export default function MobileCTA() {
  const [showButtons, setShowButtons] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isScrollingUp, setIsScrollingUp] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const showThreshold = windowHeight * 0.2 // Show after 20% of viewport height
      
      // Determine scroll direction
      setIsScrollingUp(scrollPosition < lastScrollY)
      setLastScrollY(scrollPosition)

      // Show buttons based on scroll position and direction
      setShowButtons(scrollPosition > showThreshold)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        bgcolor: 'rgba(27, 75, 90, 0.95)',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 -4px 32px rgba(0,0,0,0.15)',
        p: 2,
        display: { xs: 'flex', md: 'none' },
        gap: 2,
        zIndex: 1000,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: showButtons ? 'translateY(0)' : 'translateY(100%)',
        opacity: showButtons ? 1 : 0
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
          transition: 'all 0.2s ease',
          '&:hover': {
            borderColor: '#3CC7D5',
            bgcolor: 'rgba(77, 216, 230, 0.15)',
            transform: 'translateY(-2px)'
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
          transition: 'all 0.2s ease',
          '&:hover': {
            bgcolor: '#3CC7D5',
            transform: 'translateY(-2px)'
          }
        }}
      >
        Get Quote
      </Button>
    </Box>
  )
} 