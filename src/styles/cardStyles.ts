import { Theme } from '@mui/material/styles'

// Color constants with improved contrast ratios
export const CARD_COLORS = {
  // Primary card colors
  background: '#FFFFFF',      // White background
  text: '#1B4B5A',           // Dark teal text for contrast
  mutedText: '#235E70',      // Medium teal for secondary text
  accent: '#4DD8E6',         // Bright teal accent
  
  // Card background colors (lighter blues)
  backgroundAlt: '#F5F9FA',  // Very light blue-grey
  backgroundAlt2: '#EDF3F5', // Light blue-grey
  backgroundAlt3: '#E5EEF1', // Slightly darker blue-grey
  
  // Light variants
  backgroundLight: '#F8FAFC',
  backgroundLighter: '#FFFFFF',
  
  // Text colors for different backgrounds
  textDark: '#0A2027',      // Very dark teal for light backgrounds
  mutedTextDark: '#1B4B5A', // Dark teal for secondary text
  
  // Hover states
  hover: '#F0F7F9',
  hoverLight: '#FFFFFF'
}

// Base card style
export const baseCardStyle = {
  p: { xs: 3, md: 4 },
  borderRadius: 4,
  bgcolor: CARD_COLORS.background,
  color: CARD_COLORS.text,
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 48px rgba(77, 216, 230, 0.15)'
  }
}

// Alternating card styles
export const cardVariants = {
  primary: {
    ...baseCardStyle,
    background: '#FFFFFF',
    border: '1px solid rgba(27, 75, 90, 0.1)',
    color: CARD_COLORS.text
  },
  secondary: {
    ...baseCardStyle,
    background: CARD_COLORS.backgroundAlt,
    border: '1px solid rgba(27, 75, 90, 0.1)',
    color: CARD_COLORS.text
  },
  tertiary: {
    ...baseCardStyle,
    background: CARD_COLORS.backgroundAlt2,
    border: '1px solid rgba(27, 75, 90, 0.1)',
    color: CARD_COLORS.text
  },
  light: {
    ...baseCardStyle,
    bgcolor: CARD_COLORS.backgroundLighter,
    color: CARD_COLORS.textDark,
    '&:hover': {
      ...baseCardStyle['&:hover'],
      bgcolor: CARD_COLORS.hoverLight
    }
  },
  glass: {
    ...baseCardStyle,
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(27, 75, 90, 0.1)',
    color: CARD_COLORS.text,
    '&:hover': {
      ...baseCardStyle['&:hover'],
      background: 'rgba(255, 255, 255, 1)'
    }
  },
  gradient: {
    ...baseCardStyle,
    background: 'linear-gradient(135deg, #FFFFFF 0%, #F5F9FA 100%)',
    position: 'relative',
    overflow: 'hidden',
    border: '1px solid rgba(27, 75, 90, 0.1)',
    color: CARD_COLORS.text,
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'radial-gradient(circle at center, rgba(77, 216, 230, 0.1) 0%, rgba(77, 216, 230, 0) 70%)',
      zIndex: 0
    }
  },
  gradientAlt: {
    ...baseCardStyle,
    background: 'linear-gradient(135deg, #F5F9FA 0%, #EDF3F5 100%)',
    position: 'relative',
    overflow: 'hidden',
    border: '1px solid rgba(27, 75, 90, 0.1)',
    color: CARD_COLORS.text,
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'radial-gradient(circle at center, rgba(77, 216, 230, 0.1) 0%, rgba(77, 216, 230, 0) 70%)',
      zIndex: 0
    }
  }
}

// Typography styles with improved contrast
export const cardTypographyStyles = {
  title: {
    fontSize: '1.5rem',
    fontWeight: 600,
    color: CARD_COLORS.text,
    mb: 2,
    lineHeight: 1.3
  },
  subtitle: {
    color: CARD_COLORS.mutedText,
    mb: 3,
    lineHeight: 1.6
  },
  text: {
    color: CARD_COLORS.mutedText
  },
  titleDark: {
    fontSize: '1.5rem',
    fontWeight: 600,
    color: CARD_COLORS.textDark,
    mb: 2,
    lineHeight: 1.3
  },
  subtitleDark: {
    color: CARD_COLORS.mutedTextDark,
    mb: 3,
    lineHeight: 1.6
  },
  textDark: {
    color: CARD_COLORS.mutedTextDark
  }
}

// Button styles within cards
export const cardButtonStyle = {
  color: CARD_COLORS.accent,
  '&:hover': {
    bgcolor: 'rgba(77, 216, 230, 0.1)',
    color: CARD_COLORS.text
  }
}

// Icon styles within cards
export const cardIconStyle = {
  color: CARD_COLORS.accent,
  fontSize: '1.2rem'
}

// Badge/tag styles within cards
export const cardBadgeStyle = {
  px: 2,
  py: 0.5,
  borderRadius: 2,
  fontSize: '0.85rem',
  bgcolor: 'rgba(77, 216, 230, 0.1)',
  color: CARD_COLORS.text,
  transition: 'all 0.2s ease',
  border: '1px solid rgba(27, 75, 90, 0.1)',
  '&:hover': {
    bgcolor: 'rgba(77, 216, 230, 0.2)',
    color: CARD_COLORS.text
  }
}

// Theme augmentation
export const cardThemeComponents = {
  MuiCard: {
    styleOverrides: {
      root: {
        ...cardVariants.primary
      }
    }
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        '&.card': {
          ...cardVariants.primary
        },
        '&.card-secondary': {
          ...cardVariants.secondary
        },
        '&.card-tertiary': {
          ...cardVariants.tertiary
        },
        '&.card-light': {
          ...cardVariants.light
        },
        '&.card-glass': {
          ...cardVariants.glass
        },
        '&.card-gradient': {
          ...cardVariants.gradient
        },
        '&.card-gradient-alt': {
          ...cardVariants.gradientAlt
        }
      }
    }
  }
} 