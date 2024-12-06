import { useState } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { AppBar, Box, Container, IconButton, Link, Menu, MenuItem, Toolbar, Button, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import logoSquare from '../../assets/images/logo-square.png'

const pages = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Blog', path: '/blog' },
  { name: 'Service Areas', path: '/locations' },
  { name: 'Contact', path: '/quote' }
]

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const location = useLocation()

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleNavClick = (path: string) => {
    handleCloseNavMenu()
    if (path.startsWith('/#')) {
      const element = document.getElementById(path.substring(2))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        bgcolor: 'white',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo and Name */}
          <RouterLink to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box
              component="img"
              src={logoSquare}
              alt="Gutter Goat"
              sx={{
                height: 50,
                width: 'auto',
                display: { xs: 'none', md: 'flex' }
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: '#2C3E50',
                display: { xs: 'none', md: 'block' }
              }}
            >
              Gutter Goat
            </Typography>
          </RouterLink>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: '#2C3E50' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map((page) => (
                <MenuItem 
                  key={page.name} 
                  onClick={() => handleNavClick(page.path)}
                  component={RouterLink}
                  to={page.path}
                  sx={{
                    color: location.pathname === page.path ? '#4DD8E6' : '#2C3E50'
                  }}
                >
                  {page.name}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Mobile Logo and Name */}
          <RouterLink to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box
              component="img"
              src={logoSquare}
              alt="Gutter Goat"
              sx={{
                height: 40,
                width: 'auto',
                display: { xs: 'flex', md: 'none' }
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: '#2C3E50',
                display: { xs: 'block', md: 'none' }
              }}
            >
              Gutter Goat
            </Typography>
          </RouterLink>

          {/* Desktop Menu */}
          <Box 
            sx={{ 
              flexGrow: 1, 
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              gap: 4
            }}
          >
            {pages.map((page) => (
              <Link
                key={page.name}
                component={RouterLink}
                to={page.path}
                onClick={() => handleNavClick(page.path)}
                sx={{
                  color: location.pathname === page.path ? '#4DD8E6' : '#2C3E50',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: 500,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '0%',
                    height: '2px',
                    bottom: -4,
                    left: 0,
                    backgroundColor: '#4DD8E6',
                    transition: 'width 0.3s ease'
                  },
                  '&:hover': {
                    color: '#4DD8E6',
                    '&::after': {
                      width: '100%'
                    }
                  }
                }}
              >
                {page.name}
              </Link>
            ))}
          </Box>

          {/* CTA Button */}
          <Box sx={{ flexGrow: 0 }}>
            <Button
              component={RouterLink}
              to="/quote"
              variant="contained"
              sx={{
                bgcolor: '#4DD8E6',
                color: 'white',
                px: 3,
                py: 1,
                textTransform: 'none',
                fontSize: '1rem',
                '&:hover': {
                  bgcolor: '#3CC7D5'
                }
              }}
            >
              Get Quote
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
} 