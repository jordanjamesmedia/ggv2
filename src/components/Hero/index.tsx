import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { zIndex, opacity } from '@/theme/constants';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage: string;
}

/**
 * Hero component displays a full-width banner with background image, text, and optional CTA button.
 * Uses semantic HTML and proper ARIA attributes for accessibility.
 * 
 * @param {string} title - Main heading text
 * @param {string} subtitle - Secondary text below the heading
 * @param {string} [ctaText] - Optional call-to-action button text
 * @param {string} [ctaLink] - Optional call-to-action button link
 * @param {string} backgroundImage - URL of the background image
 */
export default function Hero({ 
  title, 
  subtitle, 
  ctaText, 
  ctaLink = '/quote',
  backgroundImage 
}: HeroProps) {
  return (
    <Box
      component="section"
      role="banner"
      sx={{
        position: 'relative',
        color: 'white',
        py: { xs: 8, md: 12 },
        overflow: 'hidden',
      }}
    >
      {/* Background Image with Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: zIndex.background,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: 'rgba(0,0,0,0.5)',
            opacity: opacity.overlay,
          },
          '& > img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }
        }}
      >
        <img 
          src={backgroundImage} 
          alt="" // Decorative image, no alt text needed
          aria-hidden="true"
        />
      </Box>

      {/* Content */}
      <Container 
        maxWidth="lg"
        sx={{ 
          position: 'relative',
          zIndex: zIndex.base 
        }}
      >
        <Box maxWidth="md">
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 700,
              mb: 2,
              textShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.25rem', md: '1.5rem' },
              mb: 4,
              textShadow: '0 1px 2px rgba(0,0,0,0.2)'
            }}
          >
            {subtitle}
          </Typography>
          {ctaText && (
            <Button
              component={RouterLink}
              to={ctaLink}
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'secondary.main',
                color: 'white',
                px: 4,
                py: 1.5,
                fontSize: '1.125rem',
                '&:hover': {
                  bgcolor: 'secondary.dark'
                }
              }}
            >
              {ctaText}
            </Button>
          )}
        </Box>
      </Container>
    </Box>
  );
} 