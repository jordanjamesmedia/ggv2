import React, { memo } from 'react'
import { AppBar, Toolbar, Box } from '@mui/material'
import { OptimizedImage } from '../common/OptimizedImage'

const Navbar = memo(() => {
  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        bgcolor: 'background.paper',
        boxShadow: 1,
        contain: 'layout style'
      }}
    >
      <Toolbar>
        <OptimizedImage
          src="/logo.png"
          alt="Gutter Goat Logo"
          width={150}
          height={40}
        />
        {/* Rest of your navbar content */}
      </Toolbar>
    </AppBar>
  )
})

export default Navbar 