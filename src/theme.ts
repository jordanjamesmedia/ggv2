import { createTheme } from '@mui/material/styles'
import { cardThemeComponents, CARD_COLORS } from './styles/cardStyles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1B4B5A',
      light: '#4DD8E6',
      dark: '#163F4C',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#4DD8E6',
      light: '#7DE4ED',
      dark: '#3CC7D5',
      contrastText: '#FFFFFF'
    },
    background: {
      default: '#F8FAFC',
      paper: CARD_COLORS.background
    },
    text: {
      primary: CARD_COLORS.text,
      secondary: CARD_COLORS.mutedText
    }
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1.2
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.3
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.4
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: 600,
      lineHeight: 1.4
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.4
    },
    subtitle1: {
      fontSize: '1.125rem',
      lineHeight: 1.6
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.6
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
          padding: '8px 24px',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          },
        },
      },
    },
    ...cardThemeComponents,
    MuiContainer: {
      styleOverrides: {
        root: {
          '@media (min-width:600px)': {
            paddingLeft: 32,
            paddingRight: 32,
          },
        },
      },
    },
  },
})

export default theme 