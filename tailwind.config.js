const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js', './lib/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        '9/16': '56.25%',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: [
          '"Noto Sans Display"',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        display: ['Montserrat'],
      },
      colors: {
        theme: {
          50: '#ffcbe9',
          100: '#ff97d3',
          200: '#ff63be',
          300: '#ff2fa8',
          400: '#fa0091',
          500: '#9e005c',
          600: '#770045',
          700: '#4f002e',
          800: '#4f002e',
          900: '#280017',
          primary: '#fe28a2',
          dark: '#262626',
          'dark-light': '#4e4e4e',
          'dark-bright': '#e1e1e1',
          black: '#000000',
        },
        gray: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
        primary: colors.red,
        stone: colors.stone,
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.stone.900'),
            a: {
              color: theme('colors.theme.400'),
              'text-decoration': 'none',
              '&:hover': {
                color: `${theme('colors.theme.600')} !important`,
              },
              code: { color: theme('colors.theme.300') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.stone.900'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.stone.900'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.stone.900'),
            },
            'h4,h5,h6': {
              color: theme('colors.stone.900'),
            },
            pre: {
              backgroundColor: theme('colors.stone.800'),
            },
            code: {
              color: theme('colors.pink.500'),
              backgroundColor: theme('colors.stone.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            details: {
              backgroundColor: theme('colors.stone.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            hr: { borderColor: theme('colors.stone.200') },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.stone.500'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.stone.500'),
            },
            strong: { color: theme('colors.stone.600') },
            blockquote: {
              color: theme('colors.stone.900'),
              borderLeftColor: theme('colors.stone.200'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.stone.300'),
            a: {
              color: theme('colors.theme.300'),
              'text-decoration': 'none',
              '&:hover': {
                color: `${theme('colors.theme.100')} !important`,
              },
              code: { color: theme('colors.theme.100') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.stone.100'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.stone.100'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.stone.100'),
            },
            'h4,h5,h6': {
              color: theme('colors.stone.100'),
            },
            pre: {
              backgroundColor: theme('colors.stone.800'),
            },
            code: {
              backgroundColor: theme('colors.stone.800'),
            },
            details: {
              backgroundColor: theme('colors.stone.800'),
            },
            hr: { borderColor: theme('colors.stone.700') },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.stone.400'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.stone.400'),
            },
            strong: { color: theme('colors.stone.100') },
            thead: {
              th: {
                color: theme('colors.stone.100'),
              },
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.stone.700'),
              },
            },
            blockquote: {
              color: theme('colors.stone.100'),
              borderLeftColor: theme('colors.stone.700'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
