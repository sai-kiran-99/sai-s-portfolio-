/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          gray: {
            50: '#fafafa',
            100: '#f5f5f7',
            200: '#f2f2f7',
            300: '#d2d2d7',
            400: '#86868b',
            500: '#515154',
            600: '#1d1d1f',
          },
          blue: '#007aff',
          green: '#30d158',
        }
      },
      fontFamily: {
        'sf-pro': ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      screens: {
        'xs': '475px',
      }
    },
  },
  plugins: [],
}