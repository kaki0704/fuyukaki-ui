import plugin from 'tailwindcss/plugin'

export function fuyukaki() {
  return plugin(
    ({ addBase }) => {
      addBase({
        ':root': {
          '--background': '32 46% 98%',
          '--foreground': '18 19% 26%',
          '--card': '20 75% 95%',
          '--card-foreground': '18 19% 26%',
          '--popover': '20 75% 95%',
          '--popover-foreground': '18 19% 26%',
          '--primary': '24 98% 46%',
          '--primary-foreground': '32 46% 98%',
          '--secondary': '88 30% 40%',
          '--secondary-foreground': '32 46% 98%',
          '--muted': '30 20% 85%',
          '--muted-foreground': '18 15% 45%',
          '--accent': '20 75% 95%',
          '--accent-foreground': '18 19% 26%',
          '--destructive': '10 75% 50%',
          '--destructive-foreground': '32 46% 98%',
          '--border': '30 20% 85%',
          '--input': '30 20% 85%',
          '--ring': '24 60% 50%',
          '--radius': '8px',
        },
        '.dark': {
          '--background': '222.2 84% 4.9%',
          '--foreground': '210 40% 98%',
          '--card': '222.2 84% 4.9%',
          '--card-foreground': '210 40% 98%',
          '--popover': '222.2 84% 4.9%',
          '--popover-foreground': '210 40% 98%',
          '--primary': '210 40% 98%',
          '--primary-foreground': '222.2 47.4% 11.2%',
          '--secondary': '217.2 32.6% 17.5%',
          '--secondary-foreground': '210 40% 98%',
          '--muted': '217.2 32.6% 17.5%',
          '--muted-foreground': '215 20.2% 65.1%',
          '--accent': '217.2 32.6% 17.5%',
          '--accent-foreground': '210 40% 98%',
          '--destructive': '0 62.8% 30.6%',
          '--destructive-foreground': '210 40% 98%',
          '--border': '217.2 32.6% 17.5%',
          '--input': '217.2 32.6% 17.5%',
          '--ring': '212.7 26.8% 83.9%',
        },
      })
    },
    {
      theme: {
        extend: {
          colors: {
            border: 'hsl(var(--border))',
            input: 'hsl(var(--input))',
            ring: 'hsl(var(--ring))',
            background: 'hsl(var(--background))',
            foreground: 'hsl(var(--foreground))',
            primary: {
              DEFAULT: 'hsl(var(--primary))',
              foreground: 'hsl(var(--primary-foreground))',
            },
            secondary: {
              DEFAULT: 'hsl(var(--secondary))',
              foreground: 'hsl(var(--secondary-foreground))',
            },
            destructive: {
              DEFAULT: 'hsl(var(--destructive))',
              foreground: 'hsl(var(--destructive-foreground))',
            },
            muted: {
              DEFAULT: 'hsl(var(--muted))',
              foreground: 'hsl(var(--muted-foreground))',
            },
            accent: {
              DEFAULT: 'hsl(var(--accent))',
              foreground: 'hsl(var(--accent-foreground))',
            },
            popover: {
              DEFAULT: 'hsl(var(--popover))',
              foreground: 'hsl(var(--popover-foreground))',
            },
            card: {
              DEFAULT: 'hsl(var(--card))',
              foreground: 'hsl(var(--card-foreground))',
            },
          },
          borderRadius: {
            lg: 'var(--radius)',
            md: 'calc(var(--radius) - 2px)',
            sm: 'calc(var(--radius) - 4px)',
          },
        },
      },
    }
  )
}

export default fuyukaki
