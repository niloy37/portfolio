/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#050814',
          900: '#09111f',
          800: '#0f1728',
          700: '#162238',
        },
        mist: {
          100: '#e6edf8',
          200: '#cad5e5',
          300: '#a8b4c8',
          400: '#7f8ba2',
        },
        signal: {
          300: '#8df4ff',
          400: '#54d9e8',
          500: '#1ab6c8',
        },
        ember: {
          300: '#f8d78f',
          400: '#efb256',
          500: '#de8a1d',
        },
        rose: {
          300: '#f8a8b2',
          400: '#eb7484',
          500: '#d64562',
        },
        emerald: {
          300: '#8ce1c2',
          400: '#44c38e',
          500: '#1c9b67',
        },
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        sans: ['Manrope', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        drift: 'drift 16s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(24px, -18px, 0) scale(1.05)' },
        },
      },
      boxShadow: {
        panel: '0 24px 80px rgba(2, 6, 23, 0.38)',
        glow: '0 0 0 1px rgba(141, 244, 255, 0.08), 0 20px 80px rgba(26, 182, 200, 0.16)',
      },
    },
  },
  plugins: [],
};
