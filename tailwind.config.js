module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  variants: {
    display: ['children', 'default', 'children-first', 'children-last', 'children-odd', 'children-even', 'children-not-first', 'children-not-last', 'children-hover', 'hover', 'children-focus', 'focus', 'children-focus-within', 'focus-within', 'children-active', 'active', 'children-visited', 'visited', 'children-disabled', 'disabled', 'responsive'],
  },

  theme: {

    screens: {
      'xs': '340px',
      // => @media (min-width: 340px) { ... }

      'sm': '425px',
      // => @media (min-width: 540px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      colors: {
        primary: "#00756A",
        secondary: "#E6F1F0",
        tertiary: "#373656",
        background: '#FAFAFA'
      },

      fontFamily: {
        primary: ['poppins', 'sans-serif'],
        secondary: ['Josefin Sans', 'sans-serif'],
        primarySemiBold: ['poppinsSemiBold', 'sans-serif'],
        primaryExtraBold: ['poppinsExtraBold', 'sans-serif'],
        primaryBlack: ['poppinsBlack', 'sans-serif'],
      },

      fontSize: {
        'xxs': '0.5rem',
        'hero': '2.75rem'
      },

      zIndex: {
        'absolute': '10000'
      }
    },
  },
  plugins: [
    require('tailwindcss-children'),
  ],
}