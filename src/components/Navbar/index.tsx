import { useState, useEffect } from 'react'
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
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <Box sx={{ height: scrolled ? 64 : 80 }}>
      <AppBar 
        position="fixed" 
        elevation={0}
        sx={{ 
          bgcolor: scrolled ? 'transparent' : '#1B4B5A',
          transition: 'all 0.3s ease',
          boxShadow: 'none'
        }}
      >
        <Container maxWidth="lg">
          <Toolbar 
            disableGutters 
            sx={{ 
              height: scrolled ? 64 : 80,
              px: { xs: 2, md: 4 },
              mx: scrolled ? 2 : 0,
              mt: scrolled ? 2 : 0,
              bgcolor: '#1B4B5A',
              borderRadius: scrolled ? 2 : 0,
              boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.15)' : 'none',
              transition: 'all 0.3s ease'
            }}
          >
            {/* Desktop Logo */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
              <RouterLink to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  component="img"
                  src={logoSquare}
                  alt="Gutter Goat"
                  sx={{
                    height: scrolled ? 40 : 45,
                    width: 'auto',
                    transition: 'all 0.3s ease'
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: 'white',
                    fontSize: scrolled ? '1.25rem' : '1.4rem',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Gutter Goat
                </Typography>
              </RouterLink>
            </Box>

            {/* Mobile Menu */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 'auto' }}>
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ color: 'white', p: 1 }}
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
                  display: { xs: 'block', md: 'none' },
                  '& .MuiPaper-root': {
                    bgcolor: '#1B4B5A',
                    boxShadow: '0 4px 20px rgba(27, 75, 90, 0.2)',
                    borderRadius: 2,
                    mt: 1
                  }
                }}
              >
                {pages.map((page) => (
                  <MenuItem 
                    key={page.name} 
                    onClick={handleCloseNavMenu}
                    component={RouterLink}
                    to={page.path}
                    sx={{
                      color: location.pathname === page.path ? '#4DD8E6' : 'white',
                      '&:hover': {
                        bgcolor: 'rgba(77, 216, 230, 0.1)'
                      }
                    }}
                  >
                    <Typography sx={{ fontWeight: 500 }}>{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Mobile Logo */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 1, flexGrow: 1, justifyContent: 'center' }}>
              <RouterLink to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  component="img"
                  src={logoSquare}
                  alt="Gutter Goat"
                  sx={{
                    height: scrolled ? 32 : 35,
                    width: 'auto',
                    transition: 'all 0.3s ease'
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: 'white',
                    fontSize: scrolled ? '1rem' : '1.1rem',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Gutter Goat
                </Typography>
              </RouterLink>
            </Box>

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
                  sx={{
                    color: location.pathname === page.path ? '#4DD8E6' : 'white',
                    textDecoration: 'none',
                    fontSize: scrolled ? '0.95rem' : '1rem',
                    fontWeight: 500,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#4DD8E6'
                    }
                  }}
                >
                  {page.name}
                </Link>
              ))}
            </Box>

            {/* CTA Button */}
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <Button
                component={RouterLink}
                to="/quote"
                variant="contained"
                sx={{
                  bgcolor: '#4DD8E6',
                  color: 'white',
                  px: 3,
                  py: 1,
                  fontSize: '0.95rem',
                  textTransform: 'none',
                  transition: 'all 0.3s ease',
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
    </Box>
  )
} 