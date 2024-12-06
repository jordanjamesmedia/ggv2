import { useState } from 'react'
import { Box, Container, Typography, Grid, Paper, TextField, InputAdornment } from '@mui/material'
import { Link } from 'react-router-dom'
import { locations } from '../../data/locations'
import SearchIcon from '@mui/icons-material/Search'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import gc13 from '../../assets/images/gc13.jpg'

export default function ServiceAreasPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredLocations = locations.filter(location => 
    location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    location.postcode.includes(searchTerm)
  )

  return (
    <Box sx={{ mt: 0 }}>
      {/* Hero Section */}
      <Box 
        sx={{
          position: 'relative',
          minHeight: { xs: 'auto', md: '40vh' },
          py: { xs: 8, md: 12 },
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
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${gc13})`,
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
              Our Service Areas
            </Typography>
            <Typography 
              sx={{ 
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                opacity: 0.9,
                mb: 4,
                color: 'white'
              }}
            >
              Professional gutter cleaning services across the Illawarra region
            </Typography>
            <Paper 
              elevation={0}
              sx={{ 
                p: 0.5,
                maxWidth: 600,
                mx: 'auto',
                bgcolor: 'rgba(255, 255, 255, 0.95)',
                borderRadius: 3
              }}
            >
              <TextField
                fullWidth
                placeholder="Search by suburb or postcode..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: '#4DD8E6' }} />
                    </InputAdornment>
                  ),
                  sx: {
                    bgcolor: 'transparent',
                    '& fieldset': { border: 'none' }
                  }
                }}
              />
            </Paper>
          </Box>
        </Container>
      </Box>

      {/* Locations Grid */}
      <Box sx={{ py: { xs: 2, md: 8 }, bgcolor: '#f8fafc' }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 0.5, md: 3 }}>
            {filteredLocations.map((location) => (
              <Grid item xs={4} sm={4} md={4} lg={3} key={location.id}>
                <Paper
                  component={Link}
                  to={`/locations/${location.id}`}
                  sx={{
                    p: { xs: 1, md: 3 },
                    borderRadius: { xs: 1, md: 4 },
                    textDecoration: 'none',
                    display: 'block',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(77, 216, 230, 0.1)',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 48px rgba(77, 216, 230, 0.15)',
                      bgcolor: 'rgba(77, 216, 230, 0.05)'
                    }
                  }}
                >
                  <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center', 
                    gap: { xs: 0.25, md: 2 },
                    textAlign: 'center'
                  }}>
                    <Typography 
                      sx={{ 
                        color: '#2C3E50',
                        fontWeight: 600,
                        fontSize: { xs: '0.7rem', md: '1.1rem' },
                        lineHeight: { xs: 1.2, md: 1.4 },
                        mb: { xs: 0, md: 0.5 },
                        width: '100%',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {location.name}
                    </Typography>
                    <Typography 
                      sx={{ 
                        color: '#5D6D7E',
                        fontSize: { xs: '0.65rem', md: '0.9rem' },
                        lineHeight: 1
                      }}
                    >
                      {location.postcode}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>

          {filteredLocations.length === 0 && (
            <Box 
              sx={{ 
                textAlign: 'center',
                py: 8
              }}
            >
              <Typography 
                sx={{ 
                  color: '#2C3E50',
                  fontSize: '1.25rem',
                  mb: 2
                }}
              >
                No locations found matching "{searchTerm}"
              </Typography>
              <Typography 
                sx={{ 
                  color: '#5D6D7E'
                }}
              >
                Try searching for a different suburb or postcode
              </Typography>
            </Box>
          )}
        </Container>
      </Box>
    </Box>
  )
} 