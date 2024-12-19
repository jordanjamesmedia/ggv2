import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import gc2 from '../../assets/images/gc2.jpg';
import gc8 from '../../assets/images/gc8.jpg';
import gc11 from '../../assets/images/gc11.jpg';
import gc13 from '../../assets/images/gc13.jpg';

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  variant: 'about' | 'blog' | 'services';
};

const backgroundImages = {
  about: gc13,
  blog: gc8,
  services: gc11
};

export default function PageHeader({ title, subtitle, variant }: PageHeaderProps) {
  return (
    <Box 
      sx={{
        position: 'relative',
        minHeight: '40vh',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        mt: 0,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(27, 75, 90, 0.7)), url(${backgroundImages[variant]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
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
            {title}
          </Typography>
          {subtitle && (
            <Typography 
              sx={{ 
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                opacity: 0.9,
                color: 'white'
              }}
            >
              {subtitle}
            </Typography>
          )}
        </Box>
      </Container>
    </Box>
  );
} 