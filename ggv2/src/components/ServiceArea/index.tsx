import { Container, Typography, Box, Grid, Paper } from '@mui/material'
import { Link } from 'react-router-dom'
import serviceAreaMap from '../../assets/images/service-area-map.png'
import { locations } from '../../data/locations'
import './ServiceArea.css'

export default function ServiceArea() {
  const itemsPerColumn = Math.ceil(locations.length / 3)
  const columns = Array.from({ length: 3 }, (_, i) => 
    locations.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn)
  )

  return (
    <Box 
      sx={{ 
        position: 'relative',
        py: { xs: 6, md: 8 },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${serviceAreaMap})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.06,
          filter: 'blur(8px)',
          zIndex: 0
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
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
            Areas We Service
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
            Proudly serving Wollongong and the entire Illawarra region
          </Typography>
        </Box>

        <Grid container spacing={6} alignItems="center">
          {/* Map - Now on the left and larger */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: 2,
                borderRadius: 4,
                overflow: 'hidden',
                border: '1px solid rgba(77, 216, 230, 0.1)',
                bgcolor: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(12px)',
                transform: 'perspective(1000px) rotateY(-5deg)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'perspective(1000px) rotateY(0deg)',
                  boxShadow: '0 20px 60px rgba(44, 62, 80, 0.12)'
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
          </Grid>

          {/* Location Lists - Now on the right */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 4,
                bgcolor: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(77, 216, 230, 0.1)'
              }}
            >
              <Grid container spacing={3}>
                {columns.map((column, colIndex) => (
                  <Grid item xs={12} sm={4} key={colIndex}>
                    <Box>
                      {column.map((location) => (
                        <Link 
                          to={`/locations/${location.id}`} 
                          key={location.id} 
                          style={{ textDecoration: 'none' }}
                        >
                          <Box
                            sx={{
                              py: 1,
                              px: 2,
                              mb: 1,
                              borderRadius: 2,
                              transition: 'all 0.2s ease',
                              '&:hover': {
                                bgcolor: 'rgba(77, 216, 230, 0.04)',
                                transform: 'translateX(4px)'
                              }
                            }}
                          >
                            <Typography 
                              sx={{ 
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                color: '#2C3E50',
                                fontWeight: 500,
                                fontSize: '0.95rem'
                              }}
                            >
                              <span>{location.name}</span>
                              <span style={{ 
                                color: '#5D6D7E',
                                fontSize: '0.85rem'
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
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
} 