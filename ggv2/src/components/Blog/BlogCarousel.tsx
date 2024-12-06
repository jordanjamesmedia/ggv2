import { Box, Container, Typography, Card, CardContent, CardMedia, CardActionArea, IconButton, useTheme, useMediaQuery } from '@mui/material'
import { Link } from 'react-router-dom'
import { blogPosts, BlogPost } from '../../data/blog'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PersonIcon from '@mui/icons-material/Person'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useState } from 'react'

interface BlogCarouselProps {
  title?: string;
  excludePostId?: string;
  maxPosts?: number;
}

export default function BlogCarousel({ title = "Latest Articles", excludePostId, maxPosts = 3 }: BlogCarouselProps) {
  const [startIndex, setStartIndex] = useState(0)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  
  const filteredPosts = blogPosts
    .filter(post => !excludePostId || post.id !== excludePostId)
    .slice(0, maxPosts)

  const visiblePosts = isMobile ? filteredPosts : filteredPosts.slice(startIndex, startIndex + 3)
  const canScrollLeft = !isMobile && startIndex > 0
  const canScrollRight = !isMobile && startIndex + 3 < filteredPosts.length

  const handlePrevious = () => {
    if (canScrollLeft) {
      setStartIndex(prev => Math.max(0, prev - 1))
    }
  }

  const handleNext = () => {
    if (canScrollRight) {
      setStartIndex(prev => Math.min(filteredPosts.length - 3, prev + 1))
    }
  }

  return (
    <Box sx={{ py: { xs: 4, md: 8 }, bgcolor: '#f8fafc' }}>
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          mb: { xs: 3, md: 4 },
          flexDirection: { xs: 'column', sm: 'row' },
          gap: { xs: 2, sm: 0 }
        }}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontSize: { xs: '1.75rem', md: '2rem' },
              fontWeight: 700,
              color: '#2C3E50',
              textAlign: { xs: 'center', sm: 'left' }
            }}
          >
            {title}
          </Typography>
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton 
                onClick={handlePrevious}
                disabled={!canScrollLeft}
                sx={{
                  bgcolor: canScrollLeft ? 'rgba(77, 216, 230, 0.1)' : 'transparent',
                  '&:hover': {
                    bgcolor: 'rgba(77, 216, 230, 0.2)'
                  }
                }}
              >
                <ArrowBackIcon sx={{ color: canScrollLeft ? '#4DD8E6' : '#CBD5E1' }} />
              </IconButton>
              <IconButton 
                onClick={handleNext}
                disabled={!canScrollRight}
                sx={{
                  bgcolor: canScrollRight ? 'rgba(77, 216, 230, 0.1)' : 'transparent',
                  '&:hover': {
                    bgcolor: 'rgba(77, 216, 230, 0.2)'
                  }
                }}
              >
                <ArrowForwardIcon sx={{ color: canScrollRight ? '#4DD8E6' : '#CBD5E1' }} />
              </IconButton>
            </Box>
          )}
        </Box>

        <Box 
          sx={{ 
            display: 'flex',
            gap: { xs: 3, md: 4 },
            transition: 'transform 0.3s ease',
            overflow: { xs: 'visible', md: 'hidden' },
            flexDirection: { xs: 'column', md: 'row' },
            width: '100%'
          }}
        >
          {visiblePosts.map((post) => (
            <Card 
              key={post.id}
              sx={{ 
                width: { xs: '100%', md: 'calc(33.333% - 16px)' },
                display: 'flex',
                flexDirection: 'column',
                borderRadius: { xs: 2, md: 4 },
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: { xs: 'none', md: 'translateY(-4px)' },
                  boxShadow: { xs: '0 4px 20px rgba(77, 216, 230, 0.1)', md: '0 12px 48px rgba(77, 216, 230, 0.15)' }
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
                  paddingTop: { xs: '56.25%', md: '60%' },
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
                <CardContent sx={{ flexGrow: 1, p: { xs: 2, md: 3 } }}>
                  <Typography 
                    gutterBottom 
                    variant="h5" 
                    sx={{ 
                      fontSize: { xs: '1.1rem', md: '1.25rem' },
                      fontWeight: 600,
                      color: '#2C3E50',
                      mb: 2,
                      minHeight: { xs: 'auto', md: '3.75rem' },
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
                      minHeight: { xs: 'auto', md: '4.5rem' },
                      fontSize: { xs: '0.9rem', md: '1rem' }
                    }}
                  >
                    {post.excerpt}
                  </Typography>
                  <Box 
                    sx={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: { xs: 2, md: 3 },
                      mt: 'auto',
                      flexWrap: 'wrap'
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
          ))}
        </Box>
      </Container>
    </Box>
  )
} 