/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*[js, jsx]"],
  theme: {
    backgroundImage:{
      'cloud': "url('./images/Cloud.jpg')",
      
    },
    extend: {
     
      fontFamily: {
        CircularStd: ["CircularStd", "sans-serif"],
        CircularSp: ["CircularSp", "sans-serif"],
        Hiragino: ["Hiragino-Gothic", "sans-serif"],
        Helvetica: ["helvetica", "sans-serif"],
        Arialn: ["Arialn", "sans-serif"],
        HelveticaNeue: ["Helvetica-Neue", "san-serif"],
        Meiryo: ["Meiryo", "sans-serif"],
        MSGothic: ["MSGothic", "sans-serif"],
      },
    },
  },
  plugins: [],
}
