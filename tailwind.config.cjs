/** @type {import('tailwindcss').Config} */
/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

// Modify your tailwind.config.js
const disabledCss = {
  'code::before': false,
  'code::after': false,
  'blockquote p:first-of-type::before': false,
  'blockquote p:last-of-type::after': false,
  pre: false,
  code: false,
  'pre code': false,
  'code::before': false,
  'code::after': false,
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      typography: {
        DEFAULT: { css: disabledCss },
        sm: { css: disabledCss },
        lg: { css: disabledCss },
        xl: { css: disabledCss },
        '2xl': { css: disabledCss },
      },
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
        poppins: ['Poppins', ...fontFamily.sans],
      },
      colors: {
        primary: {
          // Customize it on globals.css :root
          200: 'rgb(var(--tw-clr-primary-200) / <alpha-value>)',
          300: 'rgb(var(--tw-clr-primary-300) / <alpha-value>)',
          400: 'rgb(var(--tw-clr-primary-400) / <alpha-value>)',
          500: 'rgb(var(--tw-clr-primary-500) / <alpha-value>)',
        },
        attention: {
          // Customize it on globals.css :root
          200: 'rgb(var(--tw-clr-attention-200) / <alpha-value>)',
          300: 'rgb(var(--tw-clr-attention-300) / <alpha-value>)',
          400: 'rgb(var(--tw-clr-attention-400) / <alpha-value>)',
          500: 'rgb(var(--tw-clr-attention-500) / <alpha-value>)',
        },

        danger: {
          // Customize it on globals.css :root
          200: 'rgba(var(--tw-clr-danger-200) / <alpha-value>)',
          300: 'rgba(var(--tw-clr-danger-300) / <alpha-value>)',
          400: 'rgba(var(--tw-clr-danger-400) / <alpha-value>)',
          500: 'rgba(var(--tw-clr-danger-500) / <alpha-value>)',
        },
        dark: 'rgb(34, 35, 43)',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
        tilt: {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(0.5deg)',
          },
          '75%': {
            transform: 'rotate(-0.5deg)',
          },
        },
        shimmer: {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '70%': {
            transform: 'translateX(20%)',
          },
          '100%': {
            transform: 'translateX(100%)',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        tilt: 'tilt 10s infinite linear',
        shimmer: 'shimmer 650ms ease-out',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
