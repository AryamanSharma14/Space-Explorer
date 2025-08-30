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
				'2xl': '1400px'
			}
		},
		extend: {
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
				// Space-themed color palette
				rocket: {
					DEFAULT: 'hsl(var(--rocket-orange))',
					orange: 'hsl(var(--rocket-orange))'
				},
				meteor: {
					DEFAULT: 'hsl(var(--meteor-blue))',
					blue: 'hsl(var(--meteor-blue))'
				},
				nebula: {
					DEFAULT: 'hsl(var(--nebula-purple))',
					purple: 'hsl(var(--nebula-purple))'
				},
				star: {
					DEFAULT: 'hsl(var(--star-white))',
					white: 'hsl(var(--star-white))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
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
				// Space-themed animations
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'rocket-launch': {
					'0%': { transform: 'translate(-50%, 50%) rotate(45deg)' },
					'50%': { transform: 'translate(-50%, -50%) rotate(0deg) scale(1.2)' },
					'100%': { transform: 'translate(-50%, -50%) rotate(0deg) scale(1)' }
				},
				'twinkle': {
					'0%, 100%': { opacity: '0.8' },
					'50%': { opacity: '0.3' }
				},
				'typing': {
					'from': { width: '0' },
					'to': { width: '100%' }
				},
				'blink-caret': {
					'from, to': { borderColor: 'transparent' },
					'50%': { borderColor: 'hsl(var(--primary))' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'orbit': {
					'0%': { transform: 'rotate(0deg) translateX(50px) rotate(0deg)' },
					'100%': { transform: 'rotate(360deg) translateX(50px) rotate(-360deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'rocket-launch': 'rocket-launch 0.6s ease-out',
				'twinkle': 'twinkle 8s linear infinite',
				'typing': 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite',
				'blink': 'blink-caret 0.75s step-end infinite',
				'fade-in': 'fade-in 0.3s ease-out',
				'slide-in': 'slide-in 0.5s ease-out',
				'orbit': 'orbit 20s linear infinite'
			},
			backgroundImage: {
				'cosmic-gradient': 'var(--gradient-cosmic)',
				'nebula-gradient': 'var(--gradient-nebula)',
				'stellar-gradient': 'var(--gradient-stellar)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;