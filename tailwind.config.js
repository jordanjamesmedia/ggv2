/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        secondary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'premium': '0 4px 20px -2px rgba(0, 0, 0, 0.1)',
        'card': '0 2px 10px -2px rgba(0, 0, 0, 0.05)',
        'hover': '0 10px 40px -10px rgba(0, 0, 0, 0.15)',
        'glow': '0 0 20px rgba(249, 115, 22, 0.4)',
      },
      backgroundImage: {
        'hero-pattern': 'linear-gradient(135deg, rgba(2, 132, 199, 0.95) 0%, rgba(7, 89, 133, 0.95) 100%)',
        'cta-pattern': 'linear-gradient(135deg, rgba(12, 74, 110, 0.98) 0%, rgba(7, 89, 133, 0.98) 100%)',
        'hero-animate': 'linear-gradient(135deg, rgba(2, 132, 199, 0.95) 0%, rgba(7, 89, 133, 0.95) 50%, rgba(2, 132, 199, 0.95) 100%)',
        'services-pattern': `
          linear-gradient(135deg, rgba(14, 165, 233, 0.07) 25%, transparent 25%) -50px 0,
          linear-gradient(225deg, rgba(14, 165, 233, 0.07) 25%, transparent 25%) -50px 0,
          linear-gradient(315deg, rgba(14, 165, 233, 0.07) 25%, transparent 25%),
          linear-gradient(45deg, rgba(14, 165, 233, 0.07) 25%, transparent 25%)
        `,
        'benefits-pattern': `
          radial-gradient(circle at 67% 83%, rgba(249, 115, 22, 0.05) 0%, rgba(249, 115, 22, 0.05) 1%, transparent 1%, transparent 100%),
          radial-gradient(circle at 24% 80%, rgba(14, 165, 233, 0.03) 0%, rgba(14, 165, 233, 0.03) 10%, transparent 10%, transparent 100%),
          radial-gradient(circle at 23% 5%, rgba(249, 115, 22, 0.05) 0%, rgba(249, 115, 22, 0.05) 5%, transparent 5%, transparent 100%),
          radial-gradient(circle at 85% 18%, rgba(14, 165, 233, 0.03) 0%, rgba(14, 165, 233, 0.03) 15%, transparent 15%, transparent 100%)
        `,
        'testimonials-pattern': `
          linear-gradient(30deg, rgba(14, 165, 233, 0.03) 12%, transparent 12.5%, transparent 87%, rgba(14, 165, 233, 0.03) 87.5%, rgba(14, 165, 233, 0.03)),
          linear-gradient(150deg, rgba(14, 165, 233, 0.03) 12%, transparent 12.5%, transparent 87%, rgba(14, 165, 233, 0.03) 87.5%, rgba(14, 165, 233, 0.03)),
          linear-gradient(30deg, rgba(14, 165, 233, 0.03) 12%, transparent 12.5%, transparent 87%, rgba(14, 165, 233, 0.03) 87.5%, rgba(14, 165, 233, 0.03)),
          linear-gradient(150deg, rgba(14, 165, 233, 0.03) 12%, transparent 12.5%, transparent 87%, rgba(14, 165, 233, 0.03) 87.5%, rgba(14, 165, 233, 0.03)),
          linear-gradient(60deg, rgba(249, 115, 22, 0.03) 25%, transparent 25.5%, transparent 75%, rgba(249, 115, 22, 0.03) 75%, rgba(249, 115, 22, 0.03))
        `,
      },
      backgroundSize: {
        'pattern-lg': '100px 100px',
        'pattern-xl': '150px 150px',
        'hero-animate': '400% 400%',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'hero-gradient': 'heroGradient 15s ease infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'fade-in-slow': 'fadeIn 1s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        heroGradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(249, 115, 22, 0.4)' },
          '50%': { boxShadow: '0 0 30px rgba(249, 115, 22, 0.6)' },
        },
      },
    },
  },
  plugins: [],
} 