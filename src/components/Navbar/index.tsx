import React, { memo, useState, useEffect } from 'react'
import { AppBar, Toolbar, Box, Button, Stack, IconButton, Drawer, List, ListItem, ListItemText, Typography } from '@mui/material'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import logoSquare from '../../assets/images/logo-square.png'

const Navbar = memo(() => {
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/locations', label: 'Locations' },
    { path: '/about', label: 'About' },
    { path: '/blog', label: 'Blog' }
  ]

  const handleDrawerToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <>
      <Box
        component="nav"
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          px: isScrolled ? 3 : 0,
          py: isScrolled ? 2 : 0,
          transition: 'all 0.3s ease'
        }}
      >
        <AppBar 
          position="relative" 
          sx={{ 
            bgcolor: isScrolled ? 'rgba(27, 75, 90, 0.95)' : 'transparent',
            boxShadow: isScrolled ? '0 8px 32px rgba(0, 0, 0, 0.15)' : 'none',
            transition: 'all 0.3s ease-in-out',
            backdropFilter: isScrolled ? 'blur(8px)' : 'none',
            borderRadius: isScrolled ? 3 : 0,
            mx: isScrolled ? 'auto' : 0,
            maxWidth: isScrolled ? '1400px' : '100%',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              bgcolor: isScrolled ? 'rgba(27, 75, 90, 0.95)' : 'transparent',
              borderRadius: 'inherit',
              transition: 'all 0.3s ease-in-out',
              zIndex: -1
            }
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <RouterLink to="/">
              <Stack direction="row" spacing={2} alignItems="center">
                <img
                  src={logoSquare}
                  alt="Gutter Goat Logo"
                  style={{ 
                    height: '40px',
                    width: 'auto',
                    filter: !isScrolled ? 'brightness(0) invert(1)' : 'none'
                  }}
                />
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: 'white',
                    display: { xs: 'none', sm: 'block' },
                    fontWeight: 600
                  }}
                >
                  Gutter Goat
                </Typography>
              </Stack>
            </RouterLink>

            {/* Desktop Navigation */}
            <Stack 
              direction="row" 
              spacing={1} 
              sx={{ 
                display: { xs: 'none', md: 'flex' } 
              }}
            >
              {navLinks.map(({ path, label }) => (
                <Button
                  key={path}
                  component={RouterLink}
                  to={path}
                  sx={{
                    color: 'white',
                    textTransform: 'none',
                    fontSize: '1rem',
                    px: 2,
                    position: 'relative',
                    opacity: isScrolled ? 1 : 0.9,
                    '&:hover': {
                      bgcolor: isScrolled ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.2)',
                      opacity: 1
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 6,
                      left: 8,
                      right: 8,
                      height: 2,
                      bgcolor: 'white',
                      transform: location.pathname === path ? 'scaleX(1)' : 'scaleX(0)',
                      transition: 'transform 0.2s ease-in-out',
                    },
                    '&:hover::after': {
                      transform: 'scaleX(1)',
                    },
                  }}
                >
                  {label}
                </Button>
              ))}
              <Button
                component={RouterLink}
                to="/quote"
                variant="contained"
                sx={{
                  bgcolor: isScrolled ? 'white' : 'primary.main',
                  color: isScrolled ? 'primary.main' : 'white',
                  '&:hover': {
                    bgcolor: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'primary.dark',
                    color: isScrolled ? 'primary.dark' : 'white',
                  },
                  transition: 'all 0.2s ease-in-out',
                  ml: 2,
                }}
              >
                Get Quote
              </Button>
            </Stack>

            {/* Mobile Menu Button */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ 
                display: { md: 'none' },
                color: 'white'
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: '100%',
            maxWidth: 360,
            bgcolor: 'primary.dark',
            color: 'white'
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton
            onClick={handleDrawerToggle}
            sx={{ color: 'white' }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navLinks.map(({ path, label }) => (
            <ListItem 
              key={path} 
              component={RouterLink} 
              to={path}
              onClick={handleDrawerToggle}
              sx={{
                color: 'white',
                textDecoration: 'none',
                py: 2,
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              <ListItemText 
                primary={label}
                primaryTypographyProps={{
                  sx: { fontSize: '1.1rem' }
                }}
              />
            </ListItem>
          ))}
          <ListItem sx={{ pt: 4 }}>
            <Button
              component={RouterLink}
              to="/quote"
              variant="contained"
              fullWidth
              onClick={handleDrawerToggle}
              sx={{
                bgcolor: 'white',
                color: 'primary.main',
                py: 1.5,
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.9)'
                }
              }}
            >
              Get Quote
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  )
})

export default Navbar