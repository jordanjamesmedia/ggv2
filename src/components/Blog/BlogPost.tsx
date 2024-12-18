import React from 'react'
import { Box, Container, Typography, Breadcrumbs, Link as MuiLink, Paper, Grid, Button } from '@mui/material'
import { Link, useParams, Navigate, useNavigate } from 'react-router-dom'
import { blogPosts } from '../../data/blog'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PersonIcon from '@mui/icons-material/Person'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import PageHeader from '../shared/PageHeader'
import BlogCarousel from './BlogCarousel'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'

const BACKGROUND_COLOR = '#1B4B5A08';
const CARD_BACKGROUND = '#1B4B5A0A';

export default function BlogPost() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const post = blogPosts.find(post => post.id === id)

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  const categories = [
    'Gutter Maintenance',
    'Home Improvement',
    'Seasonal Tips',
    'DIY Guides',
    'Professional Services'
  ]

  const popularTopics = [
    'How to Clean Gutters Safely',
    'Signs of Gutter Damage',
    'Seasonal Maintenance Guide',
    'Choosing the Right Gutter Guards',
    'When to Replace Your Gutters'
  ]

  const handleCategoryClick = (category: string) => {
    navigate('/blog', { state: { selectedCategory: category } })
  }

  const renderContent = (content: string) => {
    const lines = content.split('\n')
    const elements: JSX.Element[] = []
    let listItems: string[] = []
    let inList = false
    let isNumberedList = false

    lines.forEach((line, index) => {
      const trimmedLine = line.trim()
      
      if (trimmedLine === '') {
        if (inList) {
          if (isNumberedList) {
            elements.push(
              <ol key={`list-${index}`} style={{ marginBottom: '1.5rem', paddingLeft: '2rem' }}>
                {listItems.map((item, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem', color: '#2C3E50' }}>
                    {item.replace(/^\d+\.\s*/, '')}
                  </li>
                ))}
              </ol>
            )
          } else {
            elements.push(
              <ul key={`list-${index}`} style={{ marginBottom: '1.5rem', paddingLeft: '2rem' }}>
                {listItems.map((item, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem', color: '#2C3E50' }}>
                    {item.replace(/^-\s*/, '')}
                  </li>
                ))}
              </ul>
            )
          }
          listItems = []
          inList = false
          isNumberedList = false
        }
        return
      }

      if (trimmedLine.startsWith('## ')) {
        if (inList) {
          if (isNumberedList) {
            elements.push(
              <ol key={`list-${index}`} style={{ marginBottom: '1.5rem', paddingLeft: '2rem' }}>
                {listItems.map((item, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem', color: '#2C3E50' }}>
                    {item.replace(/^\d+\.\s*/, '')}
                  </li>
                ))}
              </ol>
            )
          } else {
            elements.push(
              <ul key={`list-${index}`} style={{ marginBottom: '1.5rem', paddingLeft: '2rem' }}>
                {listItems.map((item, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem', color: '#2C3E50' }}>
                    {item.replace(/^-\s*/, '')}
                  </li>
                ))}
              </ul>
            )
          }
          listItems = []
          inList = false
          isNumberedList = false
        }
        elements.push(
          <Typography
            key={index}
            variant="h2"
            sx={{
              fontSize: '1.75rem',
              fontWeight: 600,
              color: '#2C3E50',
              mt: 6,
              mb: 3
            }}
          >
            {trimmedLine.replace('## ', '')}
          </Typography>
        )
      } else if (trimmedLine.startsWith('# ')) {
        elements.push(
          <Typography
            key={index}
            variant="h1"
            sx={{
              fontSize: '2.25rem',
              fontWeight: 700,
              color: '#2C3E50',
              mt: 4,
              mb: 3
            }}
          >
            {trimmedLine.replace('# ', '')}
          </Typography>
        )
      } else if (trimmedLine.match(/^\d+\.\s/)) {
        listItems.push(trimmedLine)
        inList = true
        isNumberedList = true
      } else if (trimmedLine.startsWith('- ')) {
        listItems.push(trimmedLine)
        inList = true
        isNumberedList = false
      } else {
        if (inList) {
          if (isNumberedList) {
            elements.push(
              <ol key={`list-${index}`} style={{ marginBottom: '1.5rem', paddingLeft: '2rem' }}>
                {listItems.map((item, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem', color: '#2C3E50' }}>
                    {item.replace(/^\d+\.\s*/, '')}
                  </li>
                ))}
              </ol>
            )
          } else {
            elements.push(
              <ul key={`list-${index}`} style={{ marginBottom: '1.5rem', paddingLeft: '2rem' }}>
                {listItems.map((item, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem', color: '#2C3E50' }}>
                    {item.replace(/^-\s*/, '')}
                  </li>
                ))}
              </ul>
            )
          }
          listItems = []
          inList = false
          isNumberedList = false
        }
        elements.push(
          <Typography
            key={index}
            paragraph
            sx={{
              color: '#2C3E50',
              lineHeight: 1.8,
              mb: 3
            }}
          >
            {trimmedLine}
          </Typography>
        )
      }
    })

    if (inList) {
      if (isNumberedList) {
        elements.push(
          <ol key="final-list" style={{ marginBottom: '1.5rem', paddingLeft: '2rem' }}>
            {listItems.map((item, i) => (
              <li key={i} style={{ marginBottom: '0.5rem', color: '#2C3E50' }}>
                {item.replace(/^\d+\.\s*/, '')}
              </li>
            ))}
          </ol>
        )
      } else {
        elements.push(
          <ul key="final-list" style={{ marginBottom: '1.5rem', paddingLeft: '2rem' }}>
            {listItems.map((item, i) => (
              <li key={i} style={{ marginBottom: '0.5rem', color: '#2C3E50' }}>
                {item.replace(/^-\s*/, '')}
              </li>
            ))}
          </ul>
        )
      }
    }

    return elements
  }

  return (
    <Box>
      <PageHeader
        title={post.title}
        subtitle={post.excerpt}
        variant="blog"
      />

      {/* Blog Content */}
      <Box sx={{ py: 8, bgcolor: BACKGROUND_COLOR }}>
        <Container maxWidth="lg">
          {/* Breadcrumbs */}
          <Breadcrumbs sx={{ mb: 4 }}>
            <MuiLink component={Link} to="/" color="inherit">
              Home
            </MuiLink>
            <MuiLink component={Link} to="/blog" color="inherit">
              Blog
            </MuiLink>
            <Typography color="text.primary">{post.title}</Typography>
          </Breadcrumbs>

          {/* Meta Information */}
          <Box sx={{ mb: 6, display: 'flex', gap: 4, color: '#5D6D7E' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CalendarTodayIcon sx={{ fontSize: '1.2rem', color: '#4DD8E6' }} />
              <Typography>{new Date(post.date).toLocaleDateString()}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <AccessTimeIcon sx={{ fontSize: '1.2rem', color: '#4DD8E6' }} />
              <Typography>{post.readTime} min read</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <PersonIcon sx={{ fontSize: '1.2rem', color: '#4DD8E6' }} />
              <Typography>{post.author}</Typography>
            </Box>
          </Box>

          <Grid container spacing={4}>
            {/* Main Content */}
            <Grid item xs={12} md={8}>
              {/* Featured Image */}
              <Box 
                component="img"
                src={post.imageUrl}
                alt={post.title}
                sx={{
                  width: '100%',
                  height: 400,
                  objectFit: 'cover',
                  borderRadius: 4,
                  mb: 6
                }}
              />

              {/* Categories */}
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
                {post.categories.map((category, index) => (
                  <Box
                    key={index}
                    sx={{
                      px: 2,
                      py: 0.5,
                      borderRadius: 2,
                      fontSize: '0.9rem',
                      bgcolor: 'rgba(77, 216, 230, 0.15)',
                      color: '#4DD8E6',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        bgcolor: 'rgba(77, 216, 230, 0.2)'
                      }
                    }}
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category}
                  </Box>
                ))}
              </Box>

              {/* Content */}
              <Paper
                elevation={0}
                sx={{
                  p: 6,
                  borderRadius: 4,
                  bgcolor: CARD_BACKGROUND,
                  mb: 6
                }}
              >
                {renderContent(post.content)}
              </Paper>
            </Grid>

            {/* Right Column */}
            <Grid item xs={12} md={4}>
              <Box sx={{ 
                position: 'sticky',
                top: 100,
                height: 'fit-content'
              }}>
                {/* Categories */}
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 4 },
                    borderRadius: 4,
                    bgcolor: CARD_BACKGROUND,
                    mb: 4
                  }}
                >
                  <Typography 
                    variant="h3" 
                    sx={{ 
                      fontSize: '1.5rem',
                      fontWeight: 600,
                      color: '#2C3E50',
                      mb: 3,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1
                    }}
                  >
                    <LocalOfferIcon sx={{ color: '#4DD8E6' }} />
                    Categories
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {categories.map((category, index) => (
                      <Button
                        key={index}
                        variant="text"
                        onClick={() => handleCategoryClick(category)}
                        sx={{
                          justifyContent: 'flex-start',
                          color: post.categories.includes(category) ? '#4DD8E6' : '#2C3E50',
                          textTransform: 'none',
                          bgcolor: post.categories.includes(category) ? 'rgba(77, 216, 230, 0.15)' : 'transparent',
                          '&:hover': {
                            color: '#4DD8E6',
                            bgcolor: 'rgba(77, 216, 230, 0.15)'
                          }
                        }}
                      >
                        {category}
                      </Button>
                    ))}
                  </Box>
                </Paper>

                {/* Popular Topics */}
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 4 },
                    borderRadius: 4,
                    bgcolor: CARD_BACKGROUND,
                    mb: 4
                  }}
                >
                  <Typography 
                    variant="h3" 
                    sx={{ 
                      fontSize: '1.5rem',
                      fontWeight: 600,
                      color: '#2C3E50',
                      mb: 3,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1
                    }}
                  >
                    <BookmarkIcon sx={{ color: '#4DD8E6' }} />
                    Popular Topics
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {popularTopics.map((topic, index) => (
                      <Box 
                        key={index} 
                        sx={{ 
                          display: 'flex', 
                          alignItems: 'center',
                          gap: 2
                        }}
                      >
                        <CheckCircleOutlineIcon sx={{ color: '#4DD8E6' }} />
                        <Typography sx={{ color: '#2C3E50' }}>
                          {topic}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Paper>

                {/* CTA */}
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 4 },
                    borderRadius: 4,
                    background: 'linear-gradient(135deg, #1B4B5A 0%, #2C3E50 100%)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'radial-gradient(circle at center, rgba(77, 216, 230, 0.15) 0%, rgba(77, 216, 230, 0) 70%)',
                      zIndex: 0
                    }
                  }}
                >
                  <Box sx={{ position: 'relative', zIndex: 1 }}>
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        color: 'white',
                        mb: 2
                      }}
                    >
                      Need Gutter Service?
                    </Typography>
                    <Typography
                      sx={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        mb: 3
                      }}
                    >
                      Get a free quote for professional gutter cleaning and maintenance services.
                    </Typography>
                    <Button
                      component={Link}
                      to="/quote"
                      variant="contained"
                      fullWidth
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        bgcolor: '#4DD8E6',
                        color: 'white',
                        py: 1.5,
                        textTransform: 'none',
                        '&:hover': {
                          bgcolor: '#3CC7D5'
                        }
                      }}
                    >
                      Get a Free Quote
                    </Button>
                  </Box>
                </Paper>
              </Box>
            </Grid>
          </Grid>

          {/* Blog Carousel */}
          <Box sx={{ mt: 6 }}>
            <BlogCarousel title="More Articles" excludePostId={post.id} />
          </Box>
        </Container>
      </Box>
    </Box>
  )
} 