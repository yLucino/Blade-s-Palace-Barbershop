/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        AntonSC: ['Anton SC', 'sans-serif'],
        OpenSans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        Blue: '#0d3e69',
        BlueDark: '#021b2f',
        BlueDarkSoft: '#062946',
        BlueLight: '#135c9c',
        Yellow: '#fed35b',
        YellowDark: '#b89842',
        Golden: '#e6ca7d',
        GoldenDark: '#977656',
        GoldenLight: '#fcf0cf',
        White: '#ffffff',
        Black: '#000000',
        sampleText: '#ffffff8a',
        sampleTextLight: '#ffffff4d',
        Shadow: '#04142296',
        Gray: '#1f1f1f', 
        GrayBlue: '#2d3f50',
        GrayDark: '#141414', 
        GrayLight: '#2e2e2e',
        Brown: '#8C6D51',
        BrownDark: '#593831',
      }
    },
  },
  plugins: [],
}

