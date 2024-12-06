import { Container, Typography, Box, Grid, Paper, Rating } from '@mui/material'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Wollongong",
    rating: 5,
    text: "Absolutely fantastic service! They were professional, thorough, and left my gutters spotless. Highly recommend!"
  },
  {
    name: "Michael Chen",
    location: "Thirroul",
    rating: 5,
    text: "Great experience from start to finish. They were on time, efficient, and very reasonably priced."
  },
  {
    name: "Emma Thompson",
    location: "Shellharbour",
    rating: 5,
    text: "Best gutter cleaning service in the Illawarra! They did an amazing job and were very professional."
  }
]

export default function Testimonials() {
  return (
    <section style={{ 
      backgroundColor: '#f5f7f9',
      padding: '6rem 0'
    }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h2" 
            component="h2"
            sx={{ 
              color: 'secondary.main',
              mb: 2
            }}
          >
            What Our Customers Say
          </Typography>
          <Typography 
            variant="subtitle1"
            sx={{ 
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            Don't just take our word for it - hear what our satisfied customers have to say
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                sx={{
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 48px rgba(0,0,0,0.12)',
                  }
                }}
              >
                <Box sx={{ 
                  position: 'absolute',
                  top: 20,
                  right: 20,
                  opacity: 0.1,
                  transform: 'rotate(180deg)'
                }}>
                  <FormatQuoteIcon sx={{ fontSize: 60 }} />
                </Box>
                
                <Box sx={{ mb: 2 }}>
                  <Rating 
                    value={testimonial.rating} 
                    readOnly 
                    sx={{
                      '& .MuiRating-icon': {
                        color: '#FFB400'
                      }
                    }}
                  />
                </Box>

                <Typography 
                  sx={{ 
                    mb: 3,
                    color: 'text.secondary',
                    flex: 1,
                    fontSize: '1.1rem',
                    lineHeight: 1.6,
                    fontStyle: 'italic'
                  }}
                >
                  "{testimonial.text}"
                </Typography>

                <Box>
                  <Typography 
                    variant="subtitle1" 
                    sx={{ 
                      fontWeight: 600,
                      color: 'text.primary'
                    }}
                  >
                    {testimonial.name}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'text.secondary'
                    }}
                  >
                    {testimonial.location}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  )
} 