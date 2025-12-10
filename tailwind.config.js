/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'black-to-dark-green': 'linear-gradient(to right, #000000, #1A2E1F)',
        'white-to-dark-green': 'linear-gradient(to right, #FFFFFF, #1A2E1F)',
        'black-to-gold': 'linear-gradient(to right, #000000, #C9A227)'
      },
      colors: {
        // Base colors
        dark: '#161616',
        forest: '#3D5743', // Primary brand color (green)
        gold: '#C9A227',   // Accent color
        'gold-light': '#E8C15E', // Lighter gold for hover states
        
        // Text colors (from light to dark)
        'light-1': '#F8F9FA', // Lightest text on dark bg
        'light-2': '#E9ECEF', // Secondary light text
        'light-3': '#DEE2E6', // Tertiary light text
        'light-4': '#ADB5BD', // Muted text
        'light-5': '#6C757D', // Secondary text
        
        // Background and surface colors
        'bg-light': '#FFFFFF', // Main background (white/ivory)
        'bg-offwhite': '#F8F9FA', // Slightly off-white for cards/sections
        
        // Utility colors
        white: '#FFFFFF',
        black: '#161616',
        
        // Semantic colors
        foreground: '#161616',
        primary: '#3D5743',
        accent: '#C9A227',
        muted: '#6C757D',
      },
      backgroundColor: {
        default: '#FFFFFF',
        primary: '#3D5743', // forest
        secondary: '#C9A227', // gold
        dark: '#161616',
      },
      textColor: {
        foreground: '#161616',
        primary: '#3D5743',
        accent: '#C9A227',
        muted: '#6C757D',
        light: '#F8F9FA',
      },
      borderColor: {
        DEFAULT: '#E9ECEF',
        primary: '#3D5743',
        accent: '#C9A227',
        light: '#E9ECEF',
      },
    },
  },
  plugins: [],
}
