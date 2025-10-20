const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-goli)', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'display-10': ['75px', { lineHeight: '1.115em', letterSpacing: '-0.02em' }],
        'display-9': ['60px', { lineHeight: '1.115em', letterSpacing: '-0.01em' }],
        'display-8': ['48px', { lineHeight: '1.25em' }],
        'display-7': ['36px', { lineHeight: '1.25em' }],
        'display-2': ['16px', { lineHeight: '1.25em' }],
        'display-1': ['14px', { lineHeight: '1.25em' }],
        'para-lg': ['18px', { lineHeight: '1.5em' }],
        'para-md': ['16px', { lineHeight: '1.5em' }],
        'para-sm': ['14px', { lineHeight: '1.5em' }],
      },
      colors: {
        background: 'rgb(var(--background) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        'muted-foreground': 'rgb(var(--muted-foreground) / <alpha-value>)',
        card: 'rgb(var(--card) / <alpha-value>)',
        'card-foreground': 'rgb(var(--card-foreground) / <alpha-value>)',
        border: 'rgb(var(--border) / <alpha-value>)',
        input: 'rgb(var(--input) / <alpha-value>)',
        ring: 'rgb(var(--ring) / <alpha-value>)',
        primary: 'rgb(var(--primary) / <alpha-value>)',
        'primary-foreground': 'rgb(var(--primary-foreground) / <alpha-value>)',
        'primary-100': 'rgb(var(--primary-100) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        'secondary-foreground': 'rgb(var(--secondary-foreground) / <alpha-value>)',
        'secondary-100': 'rgb(var(--secondary-100) / <alpha-value>)',
        'secondary-200': 'rgb(var(--secondary-200) / <alpha-value>)',
        'secondary-300': 'rgb(var(--secondary-300) / <alpha-value>)',
        'secondary-400': 'rgb(var(--secondary-400) / <alpha-value>)',
        'neutral-100': 'rgb(var(--neutral-100) / <alpha-value>)',
        'neutral-200': 'rgb(var(--neutral-200) / <alpha-value>)',
        'neutral-300': 'rgb(var(--neutral-300) / <alpha-value>)',
        'neutral-400': 'rgb(var(--neutral-400) / <alpha-value>)',
        'neutral-500': 'rgb(var(--neutral-500) / <alpha-value>)',
        'neutral-600': 'rgb(var(--neutral-600) / <alpha-value>)',
        'neutral-700': 'rgb(var(--neutral-700) / <alpha-value>)',
        'neutral-800': 'rgb(var(--neutral-800) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        'accent-foreground': 'rgb(var(--accent-foreground) / <alpha-value>)',
        destructive: 'rgb(var(--destructive) / <alpha-value>)',
        'destructive-foreground': 'rgb(var(--destructive-foreground) / <alpha-value>)'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          '2xl': '1400px'
        }
      }
    }
  },
  plugins: []
};
