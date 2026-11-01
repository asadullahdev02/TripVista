/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFCF9',
          100: '#FAF6F0',
          200: '#F4ECE1',
          300: '#EADBC7',
        },
        offwhite: '#F7F4EE',
        beige: {
          50: '#FAF7F2',
          100: '#F2EDE3',
          200: '#E6DDD0',
          300: '#D5C7B3',
          400: '#C0AF99',
          500: '#A8947C',
        },
        burgundy: {
          50: '#FDF6F7',
          100: '#F9EBEE',
          200: '#F4D7DD',
          300: '#E9B4BE',
          400: '#D88899',
          500: '#B83E58',
          600: '#982B43',
          700: '#801D34', // Primary deep burgundy
          800: '#6B192C',
          900: '#521322',
          950: '#350813',
        },
        rose: {
          50: '#FDF8F9',
          100: '#FAF0F2',
          200: '#F5DEE3',
          300: '#ECC3CB',
          400: '#DE9DAA',
          500: '#CA7384', // Muted rose secondary accent
          600: '#B45769',
          700: '#964253',
          800: '#7C3845',
          900: '#67323C',
        },
        charcoal: {
          50: '#F8F7F6',
          100: '#ECE9E6',
          200: '#D6D2CC',
          300: '#B5AFA6',
          400: '#8A8276',
          500: '#645D53',
          600: '#4E4840',
          700: '#3D3832',
          800: '#2C2825',
          900: '#1F1C19',
          950: '#141210',
        },
        brown: {
          100: '#F4EFEA',
          200: '#E4D9CE',
          300: '#C7B5A1',
          400: '#A48E75',
          500: '#826C55',
          600: '#67523E',
          700: '#4E3E30',
          800: '#3D2B1F',
          900: '#2B1D14',
          950: '#1E140E',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'warm': '0 10px 30px -10px rgba(61, 43, 31, 0.07)',
        'warm-lg': '0 20px 40px -15px rgba(61, 43, 31, 0.10)',
        'warm-hover': '0 25px 50px -12px rgba(128, 29, 52, 0.14)',
      }
    },
  },
  plugins: [],
}
