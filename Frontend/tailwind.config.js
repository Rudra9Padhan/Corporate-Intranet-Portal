/** Tailwind CSS configuration for Corporate Intranet Portal frontend */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx,html,vue}',
    './public/index.html'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.25rem',
        lg: '2rem',
      },
    },
    extend: {
      colors: {
        primary: {
          50:  '#f5fbff',
          100: '#e6f3ff',
          200: '#bfe6ff',
          300: '#8ed0ff',
          400: '#58b5ff',
          500: '#1f98ff',
          600: '#147be6',
          700: '#0f5fb4',
          800: '#0a436f',
          900: '#052735',
        },
        secondary: {
          50:  '#fff8f3',
          100: '#fff0e6',
          200: '#ffd6b8',
          300: '#ffbd8a',
          400: '#ffa85e',
          500: '#ff8f2a',
          600: '#e67210',
          700: '#b8560b',
          800: '#8a3f07',
          900: '#5c2603',
        },
        neutral: {
          50:  '#fafafa',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#0b1220',
        },
        success: '#16a34a',
        danger:  '#dc2626',
        warning: '#d97706',
        info:    '#0ea5e9',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      borderRadius: {
        'xl': '12px',
      },
      boxShadow: {
        'card': '0 6px 18px rgba(15, 23, 42, 0.08)',
        'focus-ring': '0 0 0 4px rgba(31,152,255,0.12)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 240ms cubic-bezier(.2,.9,.2,1) both',
      },
      screens: {
        'xs': '420px',
        '3xl': '1600px',
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp')
  ]
};
