/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      zIndex: {
        '-10': '-10',
      },
      animation: {
        'float': 'float 10s ease-in-out infinite',
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'sparkle': 'sparkle 3s linear infinite',
        'bounce': 'bounce 1s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        pulse: {
          '0%, 100%': { opacity: '.5' },
          '50%': { opacity: '1' },
        },
        sparkle: {
          '0%': { left: '-100%' },
          '50%, 100%': { left: '100%' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      blur: {
        '3xl': '64px',
        '4xl': '96px',
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: 'rgb(219, 39, 119)',
              '&:hover': {
                color: 'rgb(190, 24, 93)',
              },
            },
          },
        },
      },
    },
  },
  plugins: [],
}