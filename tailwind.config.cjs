/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    fontFamily:{
      'handLetter': ['Solitreo', 'cursive'],
      'mainfont': ['Roboto', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'fall': "url('/fall.svg')",
        'summer': "url('/summer.svg')",
        'winter': "url('/winter.svg')",
        'spring': "url('/spring.svg')"
      },
      height: {
        'navbar': '10%',
        'main': '86%',
        'timeOptions': '7%',
        'footer': '4%'
      },
      width: {
        'infoWidth': '98%'
      }
    }
  },
  plugins: []
}
