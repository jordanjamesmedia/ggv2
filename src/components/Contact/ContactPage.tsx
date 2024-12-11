import { Box, Container, Typography, Grid, Paper } from '@mui/material'
import LeadForm from '../LeadForm'
import gc14 from '../../assets/images/gc14.jpg'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import LocationOnIcon from '@mui/icons-material/LocationOn'

const contactInfo = {
  phone: '0497 347 752',
  email: 'info@guttergoat.com.au',
  hours: 'Mon-Sat: 7am - 5pm',
  area: 'Serving the Illawarra region'
}

export default function ContactPage() {
  return (
    <Box>
      {/* Hero Section */}
      <Box 
        sx={{
          position: 'relative',
          minHeight: '40vh',
          display: 'flex',
          alignItems: 'center',
          color: 'white',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${gc14})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: -1
          }
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 800, mx: 'auto', textAlign: 'center' }}>
            <Typography 
              variant="h1" 
              sx={{ 
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                mb: 2
              }}
            >
              Get a Free Quote
            </Typography>
            <Typography 
              sx={{ 
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                opacity: 0.9,
                mb: 4,
                color: 'white'
              }}
            >
              Contact us today for professional gutter cleaning services
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Content Section */}
      <Box sx={{ py: 8, bgcolor: '#f8fafc' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Contact Form */}
            <Grid item xs={12} md={8}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 6 },
                  borderRadius: 4,
                  bgcolor: 'white',
                  height: '100%'
                }}
              >
                <Typography 
                  variant="h2" 
                  sx={{ 
                    fontSize: '2rem',
                    fontWeight: 600,
                    color: '#2C3E50',
                    mb: 1
                  }}
                >
                  Request a Quote
                </Typography>
                <Typography 
                  sx={{ 
                    color: '#5D6D7E',
                    mb: 4
                  }}
                >
                  Fill out the form below and we'll get back to you within 24 hours
                </Typography>
                <LeadForm />
              </Paper>
            </Grid>

            {/* Contact Info */}
            <Grid item xs={12} md={4}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 4,
                  bgcolor: 'white',
                  height: '100%'
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center', textAlign: 'center' }}>
                  <Typography 
                    variant="h2" 
                    sx={{ 
                      fontSize: '1.5rem',
                      fontWeight: 600,
                      color: '#2C3E50',
                      mb: 2
                    }}
                  >
                    Contact Information
                  </Typography>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center', width: '100%' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                      <Box 
                        sx={{ 
                          bgcolor: 'rgba(77, 216, 230, 0.1)',
                          p: 2,
                          borderRadius: 2,
                          width: '48px',
                          height: '48px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 1
                        }}
                      >
                        <PhoneIcon sx={{ color: '#4DD8E6' }} />
                      </Box>
                      <Typography 
                        sx={{ 
                          color: '#5D6D7E',
                          fontSize: '0.9rem'
                        }}
                      >
                        Phone
                      </Typography>
                      <Typography 
                        component="a"
                        href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                        sx={{ 
                          color: '#2C3E50',
                          fontWeight: 500,
                          textDecoration: 'none',
                          fontSize: '1.1rem',
                          '&:hover': {
                            color: '#4DD8E6'
                          }
                        }}
                      >
                        {contactInfo.phone}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                      <Box 
                        sx={{ 
                          bgcolor: 'rgba(77, 216, 230, 0.1)',
                          p: 2,
                          borderRadius: 2,
                          width: '48px',
                          height: '48px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 1
                        }}
                      >
                        <EmailIcon sx={{ color: '#4DD8E6' }} />
                      </Box>
                      <Typography 
                        sx={{ 
                          color: '#5D6D7E',
                          fontSize: '0.9rem'
                        }}
                      >
                        Email
                      </Typography>
                      <Typography 
                        component="a"
                        href={`mailto:${contactInfo.email}`}
                        sx={{ 
                          color: '#2C3E50',
                          fontWeight: 500,
                          textDecoration: 'none',
                          fontSize: '1.1rem',
                          '&:hover': {
                            color: '#4DD8E6'
                          }
                        }}
                      >
                        {contactInfo.email}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                      <Box 
                        sx={{ 
                          bgcolor: 'rgba(77, 216, 230, 0.1)',
                          p: 2,
                          borderRadius: 2,
                          width: '48px',
                          height: '48px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 1
                        }}
                      >
                        <AccessTimeIcon sx={{ color: '#4DD8E6' }} />
                      </Box>
                      <Typography 
                        sx={{ 
                          color: '#5D6D7E',
                          fontSize: '0.9rem'
                        }}
                      >
                        Business Hours
                      </Typography>
                      <Typography 
                        sx={{ 
                          color: '#2C3E50',
                          fontWeight: 500,
                          fontSize: '1.1rem'
                        }}
                      >
                        {contactInfo.hours}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                      <Box 
                        sx={{ 
                          bgcolor: 'rgba(77, 216, 230, 0.1)',
                          p: 2,
                          borderRadius: 2,
                          width: '48px',
                          height: '48px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 1
                        }}
                      >
                        <LocationOnIcon sx={{ color: '#4DD8E6' }} />
                      </Box>
                      <Typography 
                        sx={{ 
                          color: '#5D6D7E',
                          fontSize: '0.9rem'
                        }}
                      >
                        Service Area
                      </Typography>
                      <Typography 
                        sx={{ 
                          color: '#2C3E50',
                          fontWeight: 500,
                          fontSize: '1.1rem'
                        }}
                      >
                        {contactInfo.area}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
} 