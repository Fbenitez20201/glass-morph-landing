import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1400px'
      }
    },
    extend: { // << --- IMPORTANTE: La configuración de la fuente va aquí dentro de 'extend'
      fontFamily: { // +++ AÑADIR ESTA SECCIÓN +++
        sans: ['Inter', 'sans-serif'], // Establece Inter como la fuente sans-serif por defecto
      },
      fontWeight: { // +++ AÑADIR ESTA SECCIÓN (OPCIONAL, pero recomendado para consistencia) +++
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600', // Corresponde a semibold
        bold: '700',
        // Si importaste un 800 (extrabold) para Inter, podrías añadir:
        // extrabold: '800',
      },
      colors: { // Tus colores existentes
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        }
      },
      borderRadius: { // Tu borderRadius existente
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: { // Tus keyframes existentes
        'float-rotate': {
          '0%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-60px) rotate(30deg)' },
          '100%': { transform: 'translateY(0) rotate(0deg)' },
        },
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-out': {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(10px)' }
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' }
        }
      },
      animation: { // Tus animaciones existentes
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.3s ease-out forwards',
        'scale-in': 'scale-in 0.2s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'float-rotate': 'float-rotate 6s ease-in-out infinite',
        spinSlow: "spin 20s linear infinite",
      },
      backgroundImage: { // Tus backgroundImages existentes
        'hero-gradient': 'linear-gradient(90deg, rgba(239,68,68,0.7) 0%, rgba(249,115,22,0.7) 15%, rgba(139,92,246,0.7) 50%, rgba(59,130,246,0.7) 85%, rgba(16,185,129,0.7) 100%)',
        'glass-gradient': 'linear-gradient(180deg, rgba(30,41,59,0.5) 0%, rgba(30,41,59,0.7) 100%)',
        'security-gradient': 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, rgba(16,185,129,0.1) 50%, rgba(30,41,59,0) 100%)'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;