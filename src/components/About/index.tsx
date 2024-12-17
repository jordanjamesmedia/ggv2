import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Hero from '../Hero';

export default function About() {
  return (
    <Box>
      <Hero 
        title="About Us"
        subtitle="Your trusted gutter maintenance experts"
        ctaText="Contact Us"
        ctaLink="/contact"
        backgroundImage="/images/hero-about.jpg"
      />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography variant="h1" gutterBottom>
          Our Story
        </Typography>
        <Typography variant="body1" paragraph>
          We've been serving homeowners with professional gutter services since 2010.
        </Typography>
      </Container>
    </Box>
  );
} 