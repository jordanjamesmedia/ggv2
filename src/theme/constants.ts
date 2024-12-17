/**
 * Theme constants for consistent styling across the application.
 * 
 * For detailed usage guidelines, examples, and best practices,
 * please refer to ./README.md
 */

/**
 * Standard opacity values for various UI elements
 */
export const opacity = {
  overlay: 0.9,
  decorative: 0.1,
  hidden: 0,
  visible: 1,
} as const;

/**
 * Z-index values to manage component layering
 */
export const zIndex = {
  background: -1,
  base: 0,
  overlay: 1,
  modal: 1000,
  tooltip: 1100,
  toast: 1200,
} as const;

/**
 * Transition durations and timing functions
 */
export const transitions = {
  fast: '0.2s ease',
  medium: '0.3s ease',
  slow: '0.5s ease',
} as const;

/**
 * Spacing values for consistent layout and padding
 * Use these values for margins, padding, and gaps
 */
export const spacing = {
  xs: '0.25rem',    // 4px
  sm: '0.5rem',     // 8px
  md: '1rem',       // 16px
  lg: '1.5rem',     // 24px
  xl: '2rem',       // 32px
  xxl: '3rem',      // 48px
} as const;

/**
 * Breakpoints for responsive design
 * Use these values with media queries
 */
export const breakpoints = {
  xs: '320px',      // Small mobile
  sm: '480px',      // Mobile
  md: '768px',      // Tablet
  lg: '1024px',     // Desktop
  xl: '1280px',     // Large desktop
  xxl: '1536px',    // Extra large desktop
} as const;

/**
 * Border radius values for consistent component shapes
 */
export const borderRadius = {
  sm: '0.25rem',    // 4px
  md: '0.5rem',     // 8px
  lg: '1rem',       // 16px
  round: '9999px',  // Fully rounded
} as const; 