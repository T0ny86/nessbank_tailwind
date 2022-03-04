module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'black': '#000',
      'white': '#FFF',
      'creme': '#feddd8',
      'gray':'#0000004D'
    },
    fontFamily:{
      'montserrat':''
    },
    extend: {
      backgroundImage:{
        'hero-image': 'url("/dist/img/bg.webp")',
        'hero-cards': 'url("/dist/img/cards.webp")',
        'footer-company': 'url("/dist/img/company.webp")',
      }
    },
  },
  plugins: [],
}
