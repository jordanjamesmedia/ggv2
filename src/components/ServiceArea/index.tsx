import { Container, Typography, Box, Grid, Paper } from '@mui/material'
import { Link } from 'react-router-dom'
import serviceAreaMap from '../../assets/images/service-area-map.png'
import areasBg from '../../assets/images/areasbg.png'
import { locations } from '../../data/locations'
import './ServiceArea.css'

export default function ServiceArea() {
  const totalLocations = locations.length
  const itemsPerColumn = Math.ceil(totalLocations / 3)
  const columns = [
    locations.slice(0, itemsPerColumn),
    locations.slice(itemsPerColumn, itemsPerColumn * 2),
    locations.slice(itemsPerColumn * 2)
  ]

  return (
    <Box 
      sx={{ 
        position: 'relative',
        py: { xs: 6, md: 8 },
        bgcolor: '#1B4B5A',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${areasBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1,
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
              color: 'white',
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
              color: 'rgba(255,255,255,0.8)',
              maxWidth: '800px',
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.125rem' }
            }}
          >
            Proudly serving Wollongong and the entire Illawarra region
          </Typography>
        </Box>

        <Grid container spacing={6} alignItems="center">
          {/* Location Lists */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: { xs: 2, sm: 4 },
                borderRadius: 4,
                bgcolor: 'rgba(255, 255, 255, 0.02)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}
            >
              <Grid container spacing={{ xs: 1, sm: 3 }}>
                {columns.map((column, colIndex) => (
                  <Grid item xs={4} key={colIndex}>
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
          </Grid>

          {/* Map */}
          <Grid item xs={12} md={6}>
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
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
} 