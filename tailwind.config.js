module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      sans: ['"Muli"', 'sans-serif']
    },
   
    extend: {
      colors:{
        primary :{
          50: '#FD8E35',
          100: '#F4C914'
        },
        gray: '#F3F5F8',
        secondary:{
          50: '#296D8F',
        }
      },
      fontSize: {
        base: ['18px', '24px'],
      },
    },
  }, 
  variants: {
    extend: {},
  },
  plugins: [],
}
