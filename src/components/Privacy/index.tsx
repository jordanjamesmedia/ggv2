import React from 'react';
import { Box, Container, Typography } from '@mui/material';

export default function Privacy() {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography variant="h1" gutterBottom>
          Privacy Policy
        </Typography>
        <Typography variant="body1" paragraph>
          Last updated: December 2024
        </Typography>
        <Typography variant="body1" paragraph>
          We take your privacy seriously and are committed to protecting your personal information.
        </Typography>
      </Container>
    </Box>
  );
} 