import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Test() {
  console.log('Test component rendered');
  
  return (
    <Box sx={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      bgcolor: '#f8fafc'
    }}>
      <Typography variant="h1">Test Component</Typography>
    </Box>
  );
}
