import { useParams, Link } from 'react-router-dom'
import { Box, Container, Typography, Button, Breadcrumbs, Paper } from '@mui/material'
import { blogPosts } from '../../data/blog'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PersonIcon from '@mui/icons-material/Person'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import BlogCarousel from './BlogCarousel'

export default function BlogPost() {
  const { id } = useParams()
  const post = blogPosts.find(post => post.id === id)

  if (!post) {
    return (
      <Box sx={{ mt: '74px', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h1">Post not found</Typography>
          <Button component={Link} to="/blog" startIcon={<ArrowBackIcon />}>
            Back to Blog
          </Button>
        </Container>
      </Box>
    )
  }

  return (
    <>
      <Box sx={{ mt: '74px', py: 8, bgcolor: '#f8fafc' }}>
        <Container maxWidth="lg">
          {/* Breadcrumbs */}
          <Breadcrumbs sx={{ mb: 4 }}>
            <Link to="/" style={{ color: '#5D6D7E', textDecoration: 'none' }}>
              Home
            </Link>
            <Link to="/blog" style={{ color: '#5D6D7E', textDecoration: 'none' }}>
              Blog
            </Link>
            <Typography color="#2C3E50">{post.title}</Typography>
          </Breadcrumbs>

          {/* Hero Image */}
          <Box 
            sx={{ 
              height: '400px',
              borderRadius: 4,
              overflow: 'hidden',
              mb: 4,
              position: 'relative'
            }}
          >
            <Box
              component="img"
              src={post.imageUrl}
              alt={post.title}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </Box>

          {/* Content */}
          <Paper 
            elevation={0}
            sx={{ 
              p: { xs: 3, md: 6 },
              borderRadius: 4,
              bgcolor: 'white'
            }}
          >
            <Typography 
              variant="h1" 
              sx={{ 
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 700,
                color: '#2C3E50',
                mb: 3
              }}
            >
              {post.title}
            </Typography>

            {/* Meta Information */}
            <Box 
              sx={{ 
                display: 'flex',
                flexWrap: 'wrap',
                gap: 4,
                mb: 4,
                pb: 4,
                borderBottom: '1px solid rgba(93, 109, 126, 0.2)'
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PersonIcon sx={{ color: '#4DD8E6' }} />
                <Typography sx={{ color: '#5D6D7E' }}>
                  {post.author}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CalendarTodayIcon sx={{ color: '#4DD8E6' }} />
                <Typography sx={{ color: '#5D6D7E' }}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <AccessTimeIcon sx={{ color: '#4DD8E6' }} />
                <Typography sx={{ color: '#5D6D7E' }}>
                  {post.readTime} min read
                </Typography>
              </Box>
            </Box>

            {/* Article Content */}
            <Typography 
              component="div"
              sx={{ 
                color: '#2C3E50',
                lineHeight: 1.8,
                '& p': {
                  mb: 3
                }
              }}
            >
              {post.content.split('\n').map((paragraph, index) => (
                <Typography key={index} paragraph>
                  {paragraph.trim()}
                </Typography>
              ))}
            </Typography>

            {/* Back to Blog */}
            <Box sx={{ mt: 6, pt: 4, borderTop: '1px solid rgba(93, 109, 126, 0.2)' }}>
              <Button
                component={Link}
                to="/blog"
                startIcon={<ArrowBackIcon />}
                sx={{
                  color: '#4DD8E6',
                  '&:hover': {
                    bgcolor: 'rgba(77, 216, 230, 0.1)'
                  }
                }}
              >
                Back to Blog
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>

      {/* Related Posts */}
      <BlogCarousel 
        title="Continue Reading" 
        excludePostId={post.id}
        maxPosts={6}
      />
    </>
  )
} 