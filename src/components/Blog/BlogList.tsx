import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, CardActionArea } from '@mui/material'
import { Link } from 'react-router-dom'
import { blogPosts } from '../../data/blog'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PersonIcon from '@mui/icons-material/Person'

export default function BlogList() {
  return (
    <Box sx={{ py: 8, bgcolor: '#f8fafc' }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h1" 
          sx={{ 
            fontSize: '2.5rem',
            fontWeight: 700,
            mb: 1,
            color: '#2C3E50'
          }}
        >
          Gutter Cleaning Blog
        </Typography>
        <Typography 
          sx={{ 
            fontSize: '1.1rem',
            color: '#5D6D7E',
            mb: 6
          }}
        >
          Expert advice and tips for maintaining your gutters
        </Typography>

        <Grid container spacing={4}>
          {blogPosts.map((post) => (
            <Grid item xs={12} md={6} lg={4} key={post.id}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 4,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 48px rgba(77, 216, 230, 0.15)'
                  }
                }}
              >
                <CardActionArea 
                  component={Link} 
                  to={`/blog/${post.id}`}
                  sx={{ flexGrow: 1 }}
                >
                  <Box sx={{ 
                    position: 'relative',
                    paddingTop: '60%', // This creates a 5:3 aspect ratio
                    width: '100%'
                  }}>
                    <CardMedia
                      component="img"
                      image={post.imageUrl}
                      alt={post.title}
                      sx={{ 
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </Box>
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography 
                      gutterBottom 
                      variant="h5" 
                      sx={{ 
                        fontSize: '1.25rem',
                        fontWeight: 600,
                        color: '#2C3E50',
                        mb: 2,
                        minHeight: '3.75rem', // Ensures consistent height for titles
                        display: '-webkit-box',
                        overflow: 'hidden',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 2
                      }}
                    >
                      {post.title}
                    </Typography>
                    <Typography 
                      sx={{ 
                        color: '#5D6D7E',
                        mb: 2,
                        display: '-webkit-box',
                        overflow: 'hidden',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 3,
                        minHeight: '4.5rem' // Ensures consistent height for excerpts
                      }}
                    >
                      {post.excerpt}
                    </Typography>
                    <Box 
                      sx={{ 
                        display: 'flex',
                        alignItems: 'center',
                        gap: 3,
                        mt: 'auto'
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <PersonIcon sx={{ color: '#4DD8E6', fontSize: '1.1rem' }} />
                        <Typography 
                          sx={{ 
                            color: '#5D6D7E',
                            fontSize: '0.9rem'
                          }}
                        >
                          {post.author}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <AccessTimeIcon sx={{ color: '#4DD8E6', fontSize: '1.1rem' }} />
                        <Typography 
                          sx={{ 
                            color: '#5D6D7E',
                            fontSize: '0.9rem'
                          }}
                        >
                          {post.readTime} min read
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
} 