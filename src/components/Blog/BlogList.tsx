import React, { useState, useEffect } from 'react'
import { Box, Container, Typography, Grid, Paper, Card, CardContent, CardMedia, Button } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import { blogPosts } from '../../data/blog'
import PageHeader from '../shared/PageHeader'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PersonIcon from '@mui/icons-material/Person'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import UpdateIcon from '@mui/icons-material/Update'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import { cardVariants, cardTypographyStyles, CARD_COLORS } from '../../styles/cardStyles'

export default function BlogList() {
  const location = useLocation()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    location.state?.selectedCategory || null
  )

  const categories = [
    'Gutter Maintenance',
    'Home Improvement',
    'Seasonal Tips',
    'DIY Guides',
    'Professional Services'
  ]

  const filteredPosts = selectedCategory
    ? blogPosts.filter(post => post.categories.includes(selectedCategory))
    : blogPosts

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category)
  }

  useEffect(() => {
    if (location.state?.selectedCategory) {
      setSelectedCategory(location.state.selectedCategory)
      window.history.replaceState({}, '')
    }
  }, [location.state])

  const popularTopics = [
    'How to Clean Gutters Safely',
    'Signs of Gutter Damage',
    'Seasonal Maintenance Guide',
    'Choosing the Right Gutter Guards',
    'When to Replace Your Gutters'
  ]

  // Function to determine card variant based on index
  const getCardVariant = (index: number) => {
    const variants = ['primary', 'secondary', 'tertiary']
    return variants[index % variants.length] as keyof typeof cardVariants
  }

  return (
    <Box>
      <PageHeader
        title="Blog & Resources"
        subtitle="Expert tips and guides for maintaining your gutters"
        variant="blog"
      />

      <Box sx={{ py: 8, bgcolor: CARD_COLORS.backgroundLight }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Grid container spacing={4}>
                {filteredPosts.map((post, index) => (
                  <Grid item xs={12} key={post.id}>
                    <Card
                      component={Link}
                      to={`/blog/${post.id}`}
                      sx={{
                        ...cardVariants[getCardVariant(index)],
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        height: '100%',
                        textDecoration: 'none',
                        background: index % 3 === 0 
                          ? '#FFFFFF'
                          : index % 3 === 1
                          ? CARD_COLORS.backgroundAlt
                          : CARD_COLORS.backgroundAlt2,
                        border: '1px solid rgba(27, 75, 90, 0.1)',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: '0 12px 48px rgba(77, 216, 230, 0.15)',
                          background: index % 3 === 0
                            ? CARD_COLORS.backgroundAlt
                            : index % 3 === 1
                            ? CARD_COLORS.backgroundAlt2
                            : CARD_COLORS.backgroundAlt3
                        }
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={post.imageUrl}
                        alt={post.title}
                        sx={{ 
                          width: { xs: '100%', sm: '280px' },
                          height: { xs: 240, sm: 'auto' },
                          objectFit: 'cover'
                        }}
                      />
                      <CardContent sx={{ p: 4, flexGrow: 1 }}>
                        <Box sx={{ mb: 2, display: 'flex', gap: 3 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <AccessTimeIcon sx={{ fontSize: '1rem', color: CARD_COLORS.accent }} />
                            <Typography sx={{ fontSize: '0.9rem', color: CARD_COLORS.mutedText }}>
                              {post.readTime} min read
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <PersonIcon sx={{ fontSize: '1rem', color: CARD_COLORS.accent }} />
                            <Typography sx={{ fontSize: '0.9rem', color: CARD_COLORS.mutedText }}>
                              {post.author}
                            </Typography>
                          </Box>
                        </Box>
                        <Typography
                          variant="h2"
                          sx={{
                            fontSize: '1.5rem',
                            fontWeight: 600,
                            color: CARD_COLORS.text,
                            mb: 2,
                            lineHeight: 1.3
                          }}
                        >
                          {post.title}
                        </Typography>
                        <Typography
                          sx={{
                            color: CARD_COLORS.mutedText,
                            mb: 3,
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            lineHeight: 1.7
                          }}
                        >
                          {post.excerpt}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                          {post.categories.map((category, index) => (
                            <Box
                              key={index}
                              sx={{
                                px: 2,
                                py: 0.5,
                                borderRadius: 2,
                                fontSize: '0.85rem',
                                bgcolor: category === selectedCategory ? 'rgba(77, 216, 230, 0.2)' : 'rgba(27, 75, 90, 0.05)',
                                color: category === selectedCategory ? CARD_COLORS.accent : CARD_COLORS.mutedText,
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                border: '1px solid rgba(27, 75, 90, 0.1)',
                                '&:hover': {
                                  bgcolor: 'rgba(77, 216, 230, 0.2)',
                                  color: CARD_COLORS.accent
                                }
                              }}
                              onClick={(e) => {
                                e.preventDefault();
                                handleCategoryClick(category);
                              }}
                            >
                              {category}
                            </Box>
                          ))}
                        </Box>
                        <Typography
                          sx={{
                            color: CARD_COLORS.accent,
                            fontWeight: 500,
                            display: 'flex',
                            alignItems: 'center',
                            mt: 'auto',
                            '&:hover': {
                              color: '#3CC7D5'
                            }
                          }}
                        >
                          Read More →
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>

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
                    ...cardVariants.secondary,
                    mb: 4
                  }}
                >
                  <Typography 
                    variant="h3" 
                    sx={cardTypographyStyles.title}
                  >
                    <LocalOfferIcon sx={{ color: CARD_COLORS.accent, mr: 1 }} />
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
                          color: category === selectedCategory ? CARD_COLORS.accent : CARD_COLORS.mutedText,
                          textTransform: 'none',
                          bgcolor: category === selectedCategory ? 'rgba(77, 216, 230, 0.25)' : 'transparent',
                          '&:hover': {
                            color: CARD_COLORS.accent,
                            bgcolor: 'rgba(77, 216, 230, 0.25)'
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
                    ...cardVariants.tertiary,
                    mb: 4
                  }}
                >
                  <Typography 
                    variant="h3" 
                    sx={cardTypographyStyles.title}
                  >
                    <BookmarkIcon sx={{ color: CARD_COLORS.accent, mr: 1 }} />
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
                        <CheckCircleOutlineIcon sx={{ color: CARD_COLORS.accent }} />
                        <Typography sx={cardTypographyStyles.text}>
                          {topic}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Paper>

                {/* Latest Updates */}
                <Paper
                  elevation={0}
                  sx={cardVariants.gradient}
                >
                  <Typography 
                    variant="h3" 
                    sx={cardTypographyStyles.title}
                  >
                    <UpdateIcon sx={{ color: CARD_COLORS.accent, mr: 1 }} />
                    Stay Updated
                  </Typography>
                  <Typography sx={cardTypographyStyles.text}>
                    Subscribe to our newsletter for the latest gutter maintenance tips and exclusive offers.
                  </Typography>
                  <Button
                    component={Link}
                    to="/quote"
                    variant="contained"
                    fullWidth
                    sx={{
                      bgcolor: CARD_COLORS.accent,
                      color: 'white',
                      py: 1.5,
                      textTransform: 'none',
                      mt: 3,
                      '&:hover': {
                        bgcolor: '#3CC7D5'
                      }
                    }}
                  >
                    Get Free Updates
                  </Button>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
} 