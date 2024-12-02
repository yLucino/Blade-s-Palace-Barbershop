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
        ShadowDark: '#0000005b',
        Gray: '#1f1f1f', 
        GrayBlue: '#2d3f50',
        GrayDark: '#141414', 
        GrayLight: '#2e2e2e',
        Brown: '#8C6D51',
        BrownDark: '#593831',
        BlurBlueBg: '#0053fa11',
      },
      height: {
        '680': '680px',
        '600': '600px',
        '550': '550px',
        '480': '480px',
        '450': '450px',
        '220': '220px',
        '50': '50px'
      },
      width: {
        '320': '320px',
        '550': '550px',
        '1500': '1500px'
      },
      maxWidth: {
        '400': '400px',
      },
      screens: {
        '1500sw': '1500px',
        '1361sw': '1361px',
        '1070sw': '1070px',
        '860sw': '860px',
        '850sw': '850px',
        '750sw': '750px',
        '3xl': '1638px',
        '1xl': '1074px'
      },
      zIndex: {
        '1000': '1000',
        '1100': '1100'
      },
      boxShadow: {
        'inset-GoldenDark': 'inset 0 0 10px #977656',
        'scrollOnShadow': '0px 17px 20px -10px rgba(0, 0, 0, 0.692)',
      },
      padding: {
        '10': '10px',
        '50': '50px',
        '40': '40px'
      },
      fontSize: {
        '10': '10px',
        '13': '13px',
      },
      borderRadius: {
        'scrollOnRadius': '0 0 20px 20px',
      },
    },
  },
  plugins: [],
}

