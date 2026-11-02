/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Material Design 3 Expressive Tonal Palette (Indigo / Cyan / Amber / Violet)
        md: {
          primary: '#6366F1',
          'primary-container': '#E0E7FF',
          'on-primary': '#FFFFFF',
          'on-primary-container': '#1E1B4B',
          secondary: '#06B6D4',
          'secondary-container': '#CFFAFE',
          tertiary: '#8B5CF6',
          'tertiary-container': '#EDE9FE',
          surface: '#0F172A',
          'surface-dim': '#0B0F19',
          'surface-bright': '#1E293B',
          'surface-container-lowest': '#050811',
          'surface-container-low': '#0A101D',
          'surface-container': '#0F172A',
          'surface-container-high': '#162238',
          'surface-container-highest': '#1E2D4A',
          outline: '#475569',
          'outline-variant': '#334155',
        },
        glass: {
          light: 'rgba(255, 255, 255, 0.08)',
          card: 'rgba(15, 23, 42, 0.65)',
          'card-hover': 'rgba(30, 41, 59, 0.75)',
          border: 'rgba(255, 255, 255, 0.12)',
          'border-highlight': 'rgba(255, 255, 255, 0.25)',
          glow: 'rgba(99, 102, 241, 0.15)'
        }
      },
      borderRadius: {
        'm3-sm': '8px',
        'm3-md': '12px',
        'm3-lg': '16px',
        'm3-xl': '28px',
        'm3-full': '9999px',
      },
      boxShadow: {
        'glass-sm': '0 4px 16px 0 rgba(0, 0, 0, 0.25), inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)',
        'glass-md': '0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 1px 0 rgba(255, 255, 255, 0.15)',
        'glass-lg': '0 16px 48px 0 rgba(0, 0, 0, 0.45), inset 0 1px 2px 0 rgba(255, 255, 255, 0.2)',
        'm3-elevated-1': '0 1px 3px 1px rgba(0,0,0,0.15), 0 1px 2px 0 rgba(0,0,0,0.3)',
        'm3-elevated-2': '0 2px 6px 2px rgba(0,0,0,0.15), 0 1px 2px 0 rgba(0,0,0,0.3)',
        'm3-elevated-3': '0 4px 8px 3px rgba(0,0,0,0.15), 0 1px 3px 0 rgba(0,0,0,0.3)',
        'glow-primary': '0 0 30px rgba(99, 102, 241, 0.45)',
        'glow-cyan': '0 0 30px rgba(6, 182, 212, 0.45)',
      },
      animation: {
        'blob': 'blob 18s infinite alternate cubic-bezier(0.4, 0, 0.2, 1)',
        'blob-delayed': 'blob 22s infinite alternate-reverse cubic-bezier(0.4, 0, 0.2, 1)',
        'shimmer': 'shimmer 2.5s infinite linear',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1) rotate(0deg)' },
          '33%': { transform: 'translate(40px, -60px) scale(1.15) rotate(120deg)' },
          '66%': { transform: 'translate(-30px, 30px) scale(0.9) rotate(240deg)' },
          '100%': { transform: 'translate(0px, 0px) scale(1) rotate(360deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '0.5' },
        }
      }
    },
  },
  plugins: [],
}
