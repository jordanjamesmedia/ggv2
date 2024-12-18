import React, { useState } from 'react'
import { Container, Typography, Box, Grid, Paper, TextField, InputAdornment, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { locations } from '../../data/locations'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import SearchIcon from '@mui/icons-material/Search'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import areasbg from '../../assets/images/areasbg.png'
import serviceAreaMap from '../../assets/images/service-area-map.png'
import gc11 from '../../assets/images/gc11.jpg'

export default function ServiceAreasPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const totalLocations = locations.length
  const filteredLocations = locations.filter(location =>
    location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    location.postcode.includes(searchTerm)
  )
  const itemsPerColumn = Math.ceil(filteredLocations.length / 6)
  const columns = [
    filteredLocations.slice(0, itemsPerColumn),
    filteredLocations.slice(itemsPerColumn, itemsPerColumn * 2),
    filteredLocations.slice(itemsPerColumn * 2, itemsPerColumn * 3),
    filteredLocations.slice(itemsPerColumn * 3, itemsPerColumn * 4),
    filteredLocations.slice(itemsPerColumn * 4, itemsPerColumn * 5),
    filteredLocations.slice(itemsPerColumn * 5)
  ]

  return (
    <>
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
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${gc11})`,
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
              Service Areas
            </Typography>
            <Typography 
              sx={{ 
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                opacity: 0.9,
                mb: 4
              }}
            >
              Find professional gutter cleaning services in your area
            </Typography>
            <Paper
              sx={{
                p: 2,
                maxWidth: 500,
                mx: 'auto',
                bgcolor: 'rgba(255, 255, 255, 0.95)',
                borderRadius: 3,
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
              }}
            >
              <TextField
                fullWidth
                placeholder="Search by suburb or postcode..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: '#4DD8E6' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'transparent',
                    },
                    '&:hover fieldset': {
                      borderColor: 'transparent',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#4DD8E6',
                    },
                  },
                }}
              />
            </Paper>
          </Box>
        </Container>
      </Box>

      {/* Main Content */}
      <Box 
        sx={{ 
          position: 'relative',
          bgcolor: '#1B4B5A',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${areasbg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1,
            zIndex: 0
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: { xs: 6, md: 8 } }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography 
              variant="h2" 
              sx={{ 
                color: 'white',
                mb: 2,
                fontSize: { xs: '2rem', md: '2.75rem' },
                fontWeight: 600
              }}
            >
              Areas We Service
            </Typography>
            <Typography 
              sx={{ 
                color: 'rgba(255,255,255,0.8)',
                maxWidth: '800px',
                mx: 'auto',
                fontSize: { xs: '1rem', md: '1.125rem' }
              }}
            >
              Proudly serving Wollongong and the entire Illawarra region
            </Typography>
          </Box>

          {/* Location Lists */}
          <Box
            sx={{
              p: { xs: 2, sm: 4 },
              borderRadius: 4,
              bgcolor: 'rgba(255, 255, 255, 0.02)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              mb: 6
            }}
          >
            <Grid container spacing={{ xs: 1, sm: 3 }}>
              {columns.map((column, colIndex) => (
                <Grid item xs={4} sm={4} md={2} key={colIndex}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 0.5, sm: 1 } }}>
                    {column.map((location) => (
                      <Link 
                        to={`/locations/${location.id}`}
                        key={location.id} 
                        style={{ textDecoration: 'none' }}
                      >
                        <Box
                          sx={{
                            py: { xs: 0.5, sm: 1 },
                            px: { xs: 0.5, sm: 2 },
                            borderRadius: 2,
                            transition: 'all 0.2s ease',
                            textAlign: 'center',
                            '&:hover': {
                              bgcolor: 'rgba(255, 255, 255, 0.05)',
                              transform: 'translateX(4px)'
                            }
                          }}
                        >
                          <Typography 
                            sx={{ 
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'white',
                              fontWeight: 500,
                              fontSize: { xs: '0.75rem', sm: '0.95rem' },
                              lineHeight: 1.2,
                              gap: { xs: 0.25, sm: 0.5 }
                            }}
                          >
                            <span style={{
                              display: 'block',
                              width: '100%',
                              textAlign: 'center',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap'
                            }}>
                              {location.name}
                            </span>
                            <span style={{ 
                              color: 'rgba(255,255,255,0.6)',
                              fontSize: '0.7em',
                              display: 'block'
                            }}>
                              {location.postcode}
                            </span>
                          </Typography>
                        </Box>
                      </Link>
                    ))}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Map Image */}
          <Box sx={{ maxWidth: '400px', mx: 'auto', mb: 8 }}>
            <Paper
              elevation={0}
              sx={{
                p: 2,
                borderRadius: 4,
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                bgcolor: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(12px)',
                transform: 'perspective(1000px) rotateY(-5deg)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'perspective(1000px) rotateY(0deg)',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)'
                }
              }}
            >
              <img 
                src={serviceAreaMap} 
                alt="Service Area Map - Wollongong and Illawarra Region" 
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '12px'
                }}
              />
            </Paper>
          </Box>

          {/* CTA Section */}
          <Box
            sx={{
              textAlign: 'center',
              p: { xs: 4, md: 6 },
              borderRadius: 4,
              background: 'linear-gradient(135deg, rgba(77, 216, 230, 0.2) 0%, rgba(77, 216, 230, 0.1) 100%)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <Typography
              variant="h2"
              sx={{
                color: 'white',
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 600,
                mb: 2
              }}
            >
              Ready to Get Started?
            </Typography>
            <Typography
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                mb: 4,
                maxWidth: 800,
                mx: 'auto'
              }}
            >
              Contact us today for professional gutter cleaning services in your area
            </Typography>
            <Button
              component={Link}
              to="/quote"
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{
                bgcolor: 'white',
                color: '#1B4B5A',
                py: 1.5,
                px: 4,
                fontSize: '1.1rem',
                borderRadius: 2,
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.9)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 12px 48px rgba(77, 216, 230, 0.3)'
                }
              }}
            >
              Get a Free Quote
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  )
} 