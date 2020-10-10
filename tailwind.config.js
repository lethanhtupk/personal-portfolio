module.exports = {
  purge: ['src/**/*.js', 'src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx', 'public/**/*.html'],
  theme: {
    extend: {
      colors: {
        gray: {
          1: '#f6f7ff',
          2: '#777'
        },
        blue: {
          1: '#445bd1',
          2: '#4a63e7'
        },
        red: {
          1: '#ff5959'
        }
      },
      spacing: {
        2.5: '0.625rem',
        3.5: '0.875rem',
        7.5: '1.875rem',
        5: '1.25rem',
        6.25: '1.5625rem',
        15: '3.75rem',
        16.25: '4.0625rem',
        17.5: '4.375rem',
        18: '4.375rem',
        37.5: '9.375rem',
        70: '17.5rem',
        78: '19.5rem',
        125: '31.25rem',
        160: '40.875rem'
      },
      borderRadius: {
        '2lg': '1rem'
      },
      boxShadow: {
        custom: '0px 8px 15px 0px rgba(0,0,0,.2)'
      },
      lineHeight: {
        custom: '1.75',
        h1: '1em'
      }
    }
  },
  variants: {},
  plugins: []
}
