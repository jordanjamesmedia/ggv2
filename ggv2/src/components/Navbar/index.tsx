import { useState, useEffect } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { AppBar, Box, Container, IconButton, Link, Menu, MenuItem, Toolbar, Button, Typography, Stack } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import PhoneIcon from '@mui/icons-material/Phone'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
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

  const handleCallClick = () => {
    window.location.href = 'tel:0420747772'
  }

  // Using a spring-like easing curve for a more dynamic feel
  const transition = {
    transform: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
    opacity: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    sizing: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
  }

  return (
    <Box sx={{ height: scrolled ? 64 : 80, position: 'relative', margin: 0, padding: 0, mb: -8 }}>
      <AppBar 
        position="fixed" 
        elevation={0}
        sx={{ 
          bgcolor: scrolled ? 'transparent' : '#1B4B5A',
          borderRadius: 0,
          boxShadow: 'none',
          border: 'none',
          top: 0,
          left: 0,
          right: 0,
          margin: 0,
          padding: 0,
          transform: `translateY(0)`,
          transition: transition.transform,
          zIndex: 1200
        }}
      >
        <Container 
          maxWidth={scrolled ? "lg" : false}
          disableGutters={!scrolled}
          sx={{
            px: scrolled ? { xs: 2, md: 3 } : 0,
            transition: transition.sizing,
            border: 'none',
            bgcolor: 'transparent',
            margin: 0,
            padding: 0
          }}
        >
          <Toolbar 
            disableGutters 
            sx={{ 
              height: scrolled ? 64 : 80,
              px: scrolled ? { xs: 2, md: 4 } : { xs: 2, md: 6 },
              mx: 'auto',
              my: scrolled ? 1 : 0,
              bgcolor: '#1B4B5A',
              borderRadius: scrolled ? 2 : 0,
              boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.15)' : 'none',
              border: 'none',
              overflow: 'hidden',
              transform: `scale(${scrolled ? '0.98' : '1'})`,
              opacity: scrolled ? 0.98 : 1,
              transition: `${transition.transform}, ${transition.opacity}`,
              width: scrolled ? '100%' : 'auto'
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
                    transform: `scale(${scrolled ? '0.95' : '1'})`,
                    transition: transition.transform
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: 'white',
                    fontSize: scrolled ? '1.25rem' : '1.4rem',
                    transform: `translateX(${scrolled ? '-2px' : '0'})`,
                    transition: transition.transform
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
                    borderRadius: 0,
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
                    transform: `scale(${scrolled ? '0.95' : '1'})`,
                    transition: transition.transform
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: 'white',
                    fontSize: scrolled ? '1rem' : '1.1rem',
                    transform: `translateX(${scrolled ? '-1px' : '0'})`,
                    transition: transition.transform
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
                    transform: `translateY(${scrolled ? '-1px' : '0'})`,
                    transition: transition.transform,
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
                  color: '#1B4B5A',
                  px: scrolled ? 2.5 : 3,
                  py: scrolled ? 0.75 : 1,
                  textTransform: 'none',
                  fontSize: scrolled ? '0.95rem' : '1rem',
                  fontWeight: 600,
                  borderRadius: 0,
                  transform: `scale(${scrolled ? '0.98' : '1'})`,
                  transition: transition.transform,
                  '&:hover': {
                    bgcolor: '#3CC7D5',
                    transform: `scale(${scrolled ? '1.02' : '1.04'})`
                  }
                }}
              >
                Get Quote
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile CTA Bar */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          margin: 0,
          transform: `translateY(${scrolled ? '0' : '100%'})`,
          transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
          bgcolor: '#1B4B5A',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          zIndex: 1100,
          display: { xs: 'block', md: 'none' }
        }}
      >
        <Container maxWidth="lg" disableGutters>
          <Stack
            direction="row"
            spacing={1}
            sx={{
              p: 1.5,
              px: 2
            }}
          >
            <Button
              onClick={handleCallClick}
              variant="outlined"
              size="small"
              startIcon={<PhoneIcon />}
              sx={{
                flex: 1,
                color: 'white',
                borderColor: 'rgba(255,255,255,0.3)',
                textTransform: 'none',
                fontSize: '0.85rem',
                py: 0.75,
                '&:hover': {
                  borderColor: 'white',
                  bgcolor: 'rgba(255,255,255,0.1)'
                }
              }}
            >
              Call Now
            </Button>
            <Button
              component={RouterLink}
              to="/quote"
              variant="contained"
              size="small"
              endIcon={<ArrowUpwardIcon />}
              sx={{
                flex: 1,
                bgcolor: '#4DD8E6',
                color: '#1B4B5A',
                textTransform: 'none',
                fontSize: '0.85rem',
                py: 0.75,
                fontWeight: 600,
                '&:hover': {
                  bgcolor: '#3CC7D5'
                }
              }}
            >
              Get Free Quote
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Bottom spacer for mobile CTA */}
      <Box 
        sx={{ 
          height: scrolled ? '64px' : 0,
          transition: 'height 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
          display: { xs: 'block', md: 'none' }
        }} 
      />

      <Box sx={{ height: { xs: scrolled ? 80 : 80, md: scrolled ? 96 : 80 } }} />
    </Box>
  )
} 