
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

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
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
			},
			backgroundImage: {
				'dot-pattern': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'%3E%3Cg stroke-width='3.5' stroke='hsla(0, 0%25, 100%25, 1.00)' fill='none'%3E%3Ccircle r='4.29' cx='0' cy='0' fill='hsla(0, 0%25, 100%25, 1.00)' stroke='none'/%3E%3Ccircle r='4.29' cx='400' cy='0' fill='hsla(0, 0%25, 100%25, 1.00)' stroke='none'/%3E%3Ccircle r='4.29' cx='800' cy='0' fill='hsla(0, 0%25, 100%25, 1.00)' stroke='none'/%3E%3Ccircle r='4.29' cx='0' cy='400' fill='hsla(0, 0%25, 100%25, 1.00)' stroke='none'/%3E%3Ccircle r='4.29' cx='400' cy='400' fill='hsla(0, 0%25, 100%25, 1.00)' stroke='none'/%3E%3Ccircle r='4.29' cx='800' cy='400' fill='hsla(0, 0%25, 100%25, 1.00)' stroke='none'/%3E%3Ccircle r='4.29' cx='0' cy='800' fill='hsla(0, 0%25, 100%25, 1.00)' stroke='none'/%3E%3Ccircle r='4.29' cx='400' cy='800' fill='hsla(0, 0%25, 100%25, 1.00)' stroke='none'/%3E%3Ccircle r='4.29' cx='800' cy='800' fill='hsla(0, 0%25, 100%25, 1.00)' stroke='none'/%3E%3C/g%3E%3C/svg%3E")`,
				'dot-pattern-light': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'%3E%3Cg stroke-width='3.5' stroke='hsla(215, 16%25, 47%25, 1.00)' fill='none'%3E%3Ccircle r='4.29' cx='0' cy='0' fill='hsla(215, 16%25, 47%25, 1.00)' stroke='none'/%3E%3Ccircle r='4.29' cx='400' cy='0' fill='hsla(215, 16%25, 47%25, 1.00)' stroke='none'/%3E%3Ccircle r='4.29' cx='800' cy='0' fill='hsla(215, 16%25, 47%25, 1.00)' stroke='none'/%3E%3Ccircle r='4.29' cx='0' cy='400' fill='hsla(215, 16%25, 47%25, 1.00)' stroke='none'/%3E%3Ccircle r='4.29' cx='400' cy='400' fill='hsla(215, 16%25, 47%25, 1.00)' stroke='none'/%3E%3Ccircle r='4.29' cx='800' cy='400' fill='hsla(215, 16%25, 47%25, 1.00)' stroke='none'/%3E%3Ccircle r='4.29' cx='0' cy='800' fill='hsla(215, 16%25, 47%25, 1.00)' stroke='none'/%3E%3Ccircle r='4.29' cx='400' cy='800' fill='hsla(215, 16%25, 47%25, 1.00)' stroke='none'/%3E%3Ccircle r='4.29' cx='800' cy='800' fill='hsla(215, 16%25, 47%25, 1.00)' stroke='none'/%3E%3C/g%3E%3C/svg%3E")`,
			},
			colors: {
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
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%':   { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%':   { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' }
				},
				'scale-in': {
					'0%':   { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)',    opacity: '1' }
				},
				'scale-out': {
					from: { transform: 'scale(1)',    opacity: '1' },
					to:   { transform: 'scale(0.95)', opacity: '0' }
				},
				'slide-in': {
					'0%':   { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%':      { transform: 'translateY(-10px)' }
				},
				'float-slow': {
					'0%, 100%': { transform: 'translate3d(0, 0, 0)' },
					'50%':      { transform: 'translate3d(0, -28px, 0)' }
				},
				'sway': {
					'0%, 100%': { transform: 'translateX(0px)' },
					'50%':      { transform: 'translateX(5px)' }
				},
				'drift': {
					'0%':   { transform: 'translateX(0px)' },
					'100%': { transform: 'translateX(20px)' }
				},
				'aurora-a': {
					'0%':   { transform: 'translate3d(-8%, -4%, 0) scale(1)' },
					'33%':  { transform: 'translate3d(6%, 8%, 0) scale(1.08)' },
					'66%':  { transform: 'translate3d(10%, -6%, 0) scale(0.95)' },
					'100%': { transform: 'translate3d(-8%, -4%, 0) scale(1)' }
				},
				'aurora-b': {
					'0%':   { transform: 'translate3d(10%, 6%, 0) scale(1.05)' },
					'50%':  { transform: 'translate3d(-8%, -10%, 0) scale(0.95)' },
					'100%': { transform: 'translate3d(10%, 6%, 0) scale(1.05)' }
				},
				'aurora-c': {
					'0%':   { transform: 'translate3d(0%, 0%, 0) scale(1)' },
					'50%':  { transform: 'translate3d(4%, 12%, 0) scale(1.1)' },
					'100%': { transform: 'translate3d(0%, 0%, 0) scale(1)' }
				},
				'gradient-pan': {
					'0%':   { backgroundPosition: '0% 50%' },
					'50%':  { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				},
				'text-shine': {
					'0%':   { backgroundPosition: '200% center' },
					'100%': { backgroundPosition: '-200% center' }
				},
				'shimmer': {
					'0%':   { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(200%)' }
				},
				'marquee': {
					'0%':   { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-50%)' }
				},
				'spin-slow': {
					from: { transform: 'rotate(0deg)' },
					to:   { transform: 'rotate(360deg)' }
				},
				'pulse-ring': {
					'0%':   { transform: 'scale(0.85)', opacity: '0.7' },
					'80%':  { transform: 'scale(1.4)',  opacity: '0' },
					'100%': { transform: 'scale(1.4)',  opacity: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up':   'accordion-up 0.2s ease-out',
				'fade-in':        'fade-in 0.3s ease-out',
				'fade-out':       'fade-out 0.3s ease-out',
				'scale-in':       'scale-in 0.2s ease-out',
				'scale-out':      'scale-out 0.2s ease-out',
				'slide-in':       'slide-in 0.3s ease-out',
				'float':          'float 6s ease-in-out infinite',
				'float-slow':     'float-slow 14s ease-in-out infinite',
				'aurora-a':       'aurora-a 22s ease-in-out infinite',
				'aurora-b':       'aurora-b 26s ease-in-out infinite',
				'aurora-c':       'aurora-c 30s ease-in-out infinite',
				'gradient-pan':   'gradient-pan 12s ease infinite',
				'text-shine':     'text-shine 6s linear infinite',
				'shimmer':        'shimmer 3.2s ease-in-out infinite',
				'marquee':        'marquee 45s linear infinite',
				'spin-slow':      'spin-slow 22s linear infinite',
				'pulse-ring':     'pulse-ring 2.4s cubic-bezier(0.25, 0.1, 0.25, 1) infinite'
			}
		}
	},
	plugins: [tailwindcssAnimate],
} satisfies Config;
