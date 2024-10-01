/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {  
    
    extend: {
      screens:{
        'lg2':'1570px',
        'lg3':'1260px',
        'md2':'370px'
      },
      

      fontFamily: {
        "fredoka": ['Fredoka', 'sans-serif'],
         'oswald':["Oswald", 'sans-serif']
    },
      animation: {
        text: 'text 5s ease infinite',
        scroller1:'scroller 15s linear infinite',
        scroller2:'scroller 15s linear infinite -3s reverse'
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },

        scroller:{
          'from':{
            'left':'translateX(0)'
          },
          'to':{
             'transform':'translateX(-100%)'
          }
        }
      },
    },
  },
  plugins: [tailwindScrollbar],
}