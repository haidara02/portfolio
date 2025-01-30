import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        clay: {
          green: '#606c38',
          darkGreen: '#283618',
          cream: '#fefae0',
          shadeCream: '#f1ecd4',
          darkCream: '#979586',
          yellow: '#dda15e',
          brown: '#894e1a',
          darkBrown: '#3e2723',
        },
      },
      keyframes: {
        slideUp: {
          '25%': { transform: 'translateY(100%)', opacity: '0' },
          '75%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '25%': { transform: 'translateY(0)', opacity: '1' },
          '75%': { transform: 'translateY(0)', opacity: '1' },
          '90%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(100%)', opacity: '0' },
        },
      },
      animation: {
        slideUp: 'slideUp 1500ms ease-in-out',
        slideDown: 'slideDown 5000ms ease-in-out forwards',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
} satisfies Config;
