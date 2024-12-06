import { Container, Typography, Box, Grid, List, ListItem, ListItemIcon, ListItemText, Button, Paper } from '@mui/material'
import { useParams, Link } from 'react-router-dom'
import { locations } from '../../data/locations'
import LeadForm from '../LeadForm'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import LocationOnIcon from '@mui/icons-material/LocationOn'

// Import background images
import gc2 from '../../assets/images/gc2.jpg'
import gc7 from '../../assets/images/gc7.jpg'
import gc8 from '../../assets/images/gc8.jpg'
import gc11 from '../../assets/images/gc11.jpg'
import gc13 from '../../assets/images/gc13.jpg'
import gc14 from '../../assets/images/gc14.jpg'

import BlogCarousel from '../Blog/BlogCarousel'

const backgroundImages = {
  'wollongong': gc13,
  'thirroul': gc2,
  'bulli': gc7,
  'austinmer': gc8,
  'corrimal': gc11,
  'towradgi': gc14,
  'fairy-meadow': gc2,
  'mount-ousley': gc7,
  'mount-pleasant': gc8,
  'keiraville': gc11,
  'gwynneville': gc13,
  'north-wollongong': gc14,
  'figtree': gc2,
  'mount-keira': gc7,
  'west-wollongong': gc8,
  'mangerton': gc11,
  'coniston': gc13,
  'port-kembla': gc14,
  'warrawong': gc2,
  'lake-heights': gc7,
  'berkeley': gc8,
  'unanderra': gc11,
  'farmborough-heights': gc13,
  'kembla-grange': gc14,
  'dapto': gc2,
  'horsley': gc7,
  'kanahooka': gc8,
  'koonawarra': gc11,
  'shellharbour': gc13,
  'flinders': gc14,
  'blackbutt': gc2,
  'oak-flats': gc7,
  'albion-park': gc8,
  'albion-park-rail': gc11,
  'kiama': gc13,
  'kiama-downs': gc14
}

const getNearbyLocations = (currentLocation: typeof locations[0], count: number = 3) => {
  return locations
    .filter(loc => loc.id !== currentLocation.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, count)
}

export default function LocationPage() {
  const { id } = useParams()
  const location = locations.find(loc => loc.id === id)

  if (!location) {
    return <div>Location not found</div>
  }

  const nearbyLocations = locations
    .filter(loc => loc.id !== id)
    .slice(0, 6)

  const backgroundImage = backgroundImages[location.id as keyof typeof backgroundImages] || gc2

  return (
    <Box sx={{ mt: 0 }}>
      {/* Hero Section */}
      <Box 
        sx={{
          minHeight: { xs: 'auto', md: '60vh' },
          py: { xs: 8, md: 12 },
          display: 'flex',
          alignItems: 'center',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={{ xs: 6, md: 4 }} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography 
                variant="h1" 
                sx={{ 
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 700,
                  color: 'white',
                  mb: 2,
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                Gutter Cleaning {location.name}
              </Typography>
              <Typography 
                sx={{ 
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  color: 'white',
                  opacity: 0.9,
                  mb: 3,
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                Professional gutter services in {location.name}, {location.postcode}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <Paper
                elevation={0}
                sx={{ 
                  bgcolor: 'rgba(255,255,255,0.95)',
                  p: { xs: 3, sm: 4 },
                  borderRadius: 4,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                  mb: { xs: 4, md: 0 }
                }}
              >
                <LeadForm />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Content Section */}
      <Box sx={{ 
        py: 8,
        background: 'linear-gradient(180deg, rgba(77, 216, 230, 0.08) 0%, rgba(77, 216, 230, 0.15) 100%)'
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={8}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.8) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(77, 216, 230, 0.2)',
                  mb: 4
                }}
              >
                <Typography 
                  variant="h2" 
                  sx={{ 
                    fontSize: '2rem',
                    fontWeight: 600,
                    color: '#2C3E50',
                    mb: 3
                  }}
                >
                  Professional Gutter Cleaning in {location.name}
                </Typography>
                <Typography 
                  sx={{ 
                    color: '#5D6D7E',
                    mb: 4,
                    lineHeight: 1.8
                  }}
                >
                  Our expert team provides comprehensive gutter cleaning services in {location.name} and surrounding areas. 
                  With years of experience serving the {location.name} community, we understand the unique challenges that local 
                  homeowners face with gutter maintenance.
                </Typography>

                {/* Services Grid */}
                <Grid container spacing={2} sx={{ mb: 4 }}>
                  {[
                    'Complete gutter cleaning',
                    'Downspout flushing',
                    'Gutter repairs',
                    'Gutter guard installation',
                    'Roof valley cleaning',
                    'Free inspection'
                  ].map((service, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Paper
                        elevation={0}
                        sx={{
                          p: 2,
                          borderRadius: 2,
                          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.8) 100%)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(77, 216, 230, 0.2)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 24px rgba(77, 216, 230, 0.15)',
                            background: 'linear-gradient(135deg, rgba(77, 216, 230, 0.1) 0%, rgba(77, 216, 230, 0.05) 100%)'
                          }
                        }}
                      >
                        <CheckCircleOutlineIcon sx={{ color: '#4DD8E6' }} />
                        <Typography sx={{ color: '#2C3E50' }}>
                          {service}
                        </Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Paper>

              {/* Nearby Locations */}
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.8) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(77, 216, 230, 0.2)'
                }}
              >
                <Typography 
                  variant="h3" 
                  sx={{ 
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    color: '#2C3E50',
                    mb: 3,
                    textAlign: { xs: 'center', md: 'left' }
                  }}
                >
                  We Also Service These Nearby Areas
                </Typography>
                <Grid container spacing={2}>
                  {nearbyLocations.map((nearbyLoc) => (
                    <Grid item xs={6} sm={4} key={nearbyLoc.id}>
                      <Link 
                        to={`/locations/${nearbyLoc.id}`}
                        style={{ textDecoration: 'none' }}
                      >
                        <Paper
                          elevation={0}
                          sx={{
                            p: 2,
                            borderRadius: 2,
                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.8) 100%)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(77, 216, 230, 0.2)',
                            transition: 'all 0.3s ease',
                            textAlign: 'center',
                            '&:hover': {
                              transform: 'translateY(-2px)',
                              boxShadow: '0 8px 24px rgba(77, 216, 230, 0.15)',
                              background: 'linear-gradient(135deg, rgba(77, 216, 230, 0.1) 0%, rgba(77, 216, 230, 0.05) 100%)'
                            }
                          }}
                        >
                          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                            <LocationOnIcon sx={{ color: '#4DD8E6' }} />
                            <Box>
                              <Typography sx={{ 
                                color: '#2C3E50',
                                fontWeight: 500,
                                fontSize: { xs: '0.9rem', sm: '1rem' }
                              }}>
                                {nearbyLoc.name}
                              </Typography>
                              <Typography sx={{ 
                                color: '#5D6D7E',
                                fontSize: { xs: '0.8rem', sm: '0.9rem' }
                              }}>
                                {nearbyLoc.postcode}
                              </Typography>
                            </Box>
                          </Box>
                        </Paper>
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>

            {/* Sidebar */}
            <Grid item xs={12} md={4}>
              <Box sx={{ position: 'sticky', top: '100px' }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.8) 100%)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(77, 216, 230, 0.2)',
                    mb: 4
                  }}
                >
                  <Typography 
                    variant="h3" 
                    sx={{ 
                      fontSize: '1.5rem',
                      fontWeight: 600,
                      color: '#2C3E50',
                      mb: 3
                    }}
                  >
                    Get a Free Quote
                  </Typography>
                  <Typography 
                    sx={{ 
                      color: '#5D6D7E',
                      mb: 3
                    }}
                  >
                    Protect your home in {location.name} with our professional gutter cleaning service. 
                    Contact us today for a free, no-obligation quote.
                  </Typography>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      py: 1.5,
                      bgcolor: '#4DD8E6',
                      textTransform: 'none',
                      fontSize: '1.1rem',
                      '&:hover': {
                        bgcolor: '#3CC7D5'
                      }
                    }}
                  >
                    Request Quote
                  </Button>
                </Paper>

                {/* Why Choose Us */}
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.8) 100%)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(77, 216, 230, 0.2)'
                  }}
                >
                  <Typography 
                    variant="h3" 
                    sx={{ 
                      fontSize: '1.5rem',
                      fontWeight: 600,
                      color: '#2C3E50',
                      mb: 3
                    }}
                  >
                    Why Choose Us?
                  </Typography>
                  <List disablePadding>
                    {[
                      'Local, experienced team',
                      'Fully licensed & insured',
                      'Satisfaction guaranteed',
                      'Same-day quotes available',
                      'Professional equipment',
                      'Competitive pricing'
                    ].map((benefit, index) => (
                      <ListItem 
                        key={index}
                        disableGutters
                        sx={{
                          px: 0,
                          py: 1
                        }}
                      >
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckCircleOutlineIcon sx={{ color: '#4DD8E6' }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={benefit}
                          primaryTypographyProps={{
                            sx: { 
                              color: '#5D6D7E',
                              fontSize: '0.95rem'
                            }
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Blog Section */}
      <BlogCarousel title="Tips & Advice" maxPosts={6} />
    </Box>
  )
} 