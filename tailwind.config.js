/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        tanit: {
          bg: '#050580',
          panel: '#050580',
          panelSoft: '#050580',
          gold: '#E06050',
          goldSoft: '#E06050',
          sand: '#E06050',
        },
      },
      boxShadow: {
        glow: '0 24px 90px rgba(224, 96, 80, 0.18)',
        soft: '0 18px 50px rgba(0, 0, 0, 0.35)',
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at top, rgba(224, 96, 80, 0.2), transparent 40%), radial-gradient(circle at 80% 20%, rgba(5, 5, 128, 0.25), transparent 32%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -16px, 0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: 0.5, transform: 'scale(0.98)' },
          '50%': { opacity: 1, transform: 'scale(1.02)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        float: 'float 9s ease-in-out infinite',
        pulseSoft: 'pulseSoft 4s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui'],
        display: ['Cormorant Garamond', 'ui-serif', 'Georgia'],
      },
    },
  },
  plugins: [],
};