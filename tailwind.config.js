/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '479px',
      md: '767px',
      lg: '991px',
      xl: '1200px',
      xxl: '1400px',
    },
    extend: {
      height: {
        screen: ['100vh /* fallback */', '100dvh'],
      },
      minHeight: {
        screen: ['100vh /* fallback */', '100dvh'],
      },
      colors: {
        'nav-bg': 'var(--nav-bg)',
        'nav-text': 'var(--nav-text)',
        'creativity': '#c3b2e7',
        'creativity-dark': '#52225e',
        'passion': '#f682a5',
        'passion-dark': '#52225e',
        'balance': '#c9da8f',
        'balance-dark': '#1c471f',
        'joy': '#fedf6f',
        'joy-dark': '#4a411e',
        'warmth': '#f9a474',
        'warmth-dark': '#582614',
        'heart': '#b8cedc',
        'heart-dark': '#184363',
      },
      fontSize: {
        '4rem': '4rem',
        '5rem': '5rem',
      },
      fontFamily: {
        'body': "'Hellix', sans-serif",
        'heading': "'Larken', serif",
      },
      padding: {
        '4.5': '1.125rem',
      },
      gridTemplateRows: {
        'auto': 'auto'
      },
    },
  },
  plugins: [],
};
