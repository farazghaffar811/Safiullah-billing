/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        azure: {
          DEFAULT: '#238BEE',
          50: '#F0F7FE',
          100: '#E0EFFD',
          200: '#BADDFB',
          300: '#7FBEF8',
          400: '#3D9DF4',
          500: '#238BEE',
          600: '#0F6FD4',
          700: '#0C58AC',
          800: '#0E4B8D',
          900: '#113F73',
        },
        navy: {
          DEFAULT: '#061B50',
          50: '#F0F3F9',
          100: '#DCE4F2',
          200: '#BECDE5',
          300: '#94AFD3',
          400: '#648CBC',
          500: '#436DA5',
          600: '#2F5488',
          700: '#26446F',
          800: '#21395C',
          900: '#061B50',
          950: '#030E2A',
        },
        frost: {
          50: '#F8FCFD',
          100: '#F1FAFD',
          200: '#EDF6FC',
          300: '#DCEEF9',
        },
        mint: {
          DEFAULT: '#00D084',
          light: '#10B981',
          50: '#ECFDF5',
          100: '#D1FAE5',
          500: '#00D084',
        }
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif'
        ],
      },
      boxShadow: {
        'glass-sm': '0 4px 16px 0 rgba(6, 27, 80, 0.04), 0 1px 2px 0 rgba(6, 27, 80, 0.02)',
        'glass': '0 12px 40px -4px rgba(6, 27, 80, 0.06), 0 4px 12px -2px rgba(6, 27, 80, 0.03)',
        'glass-hover': '0 20px 50px -6px rgba(35, 139, 238, 0.16), 0 8px 24px -4px rgba(6, 27, 80, 0.06)',
        'glass-glow': '0 0 35px 2px rgba(35, 139, 238, 0.25)',
        'specular': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.8), 0 10px 30px rgba(0, 0, 0, 0.05)',
        'capsule': '0 12px 35px rgba(6, 27, 80, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)',
      },
      backdropBlur: {
        'xs': '2px',
        '2xl': '40px',
        '3xl': '64px',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'float-reverse': 'floatReverse 8s ease-in-out infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(12px)' },
        }
      }
    },
  },
  plugins: [],
}
