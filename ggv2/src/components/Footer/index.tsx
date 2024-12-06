import { Container, Grid, Typography, Box, Link, IconButton, Stack } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { Link as RouterLink } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: 'secondary.main',
        color: 'white',
        pt: 8,
        pb: 4,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 4 }}>
              <img 
                src="/src/assets/images/logo-square.png" 
                alt="Gutter Goat Logo" 
                style={{ 
                  height: '60px',
                  width: 'auto',
                  marginBottom: '1rem'
                }}
              />
              <Typography variant="body2" sx={{ mb: 2, color: 'rgba(255, 255, 255, 0.8)' }}>
                Professional gutter cleaning services in Wollongong and the Illawarra region. 
                Reliable, efficient, and fully insured.
              </Typography>
            </Box>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon sx={{ color: 'primary.main' }} />
                <Link href="tel:0497347752" color="inherit" underline="hover">
                  0497 347 752
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon sx={{ color: 'primary.main' }} />
                <Link href="mailto:info@guttergoat.com.au" color="inherit" underline="hover">
                  info@guttergoat.com.au
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOnIcon sx={{ color: 'primary.main' }} />
                <Typography variant="body2">
                  Wollongong, NSW 2500
                </Typography>
              </Box>
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ mb: 3, color: 'primary.main' }}>
              Quick Links
            </Typography>
            <Stack spacing={2} alignItems={{ xs: 'center', sm: 'flex-start' }}>
              <Link component={RouterLink} to="/" color="inherit" underline="hover">
                Home
              </Link>
              <Link component={RouterLink} to="/#services" color="inherit" underline="hover">
                Services
              </Link>
              <Link component={RouterLink} to="/#about" color="inherit" underline="hover">
                About Us
              </Link>
              <Link component={RouterLink} to="/#areas" color="inherit" underline="hover">
                Service Areas
              </Link>
              <Link component={RouterLink} to="/#faq" color="inherit" underline="hover">
                FAQ
              </Link>
              <Link component={RouterLink} to="/#contact" color="inherit" underline="hover">
                Contact
              </Link>
            </Stack>
          </Grid>

          {/* Connect With Us */}
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
              <Typography variant="h6" sx={{ mb: 3, color: 'primary.main' }}>
                Connect With Us
              </Typography>
              <Typography variant="body2" sx={{ mb: 3, color: 'rgba(255, 255, 255, 0.8)' }}>
                Follow us on social media for tips, updates, and special offers
              </Typography>
              <Stack 
                direction="row" 
                spacing={2} 
                justifyContent={{ xs: 'center', sm: 'flex-start' }}
              >
                <IconButton 
                  href="https://facebook.com" 
                  target="_blank"
                  sx={{ 
                    color: 'white',
                    '&:hover': { color: 'primary.main' }
                  }}
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton 
                  href="https://instagram.com" 
                  target="_blank"
                  sx={{ 
                    color: 'white',
                    '&:hover': { color: 'primary.main' }
                  }}
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton 
                  href="https://linkedin.com" 
                  target="_blank"
                  sx={{ 
                    color: 'white',
                    '&:hover': { color: 'primary.main' }
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
              </Stack>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Box 
          sx={{ 
            mt: 8,
            pt: 3,
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center'
          }}
        >
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
            © {currentYear} Gutter Goat. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
} 