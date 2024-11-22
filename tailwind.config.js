/** @type {import('tailwindcss').Config} */

export default {
    darkMode: ['class'],
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
  	extend: {
  		fontFamily: {
  			Pretendard: ['Pretendard']
  		},
  		backgroundImage: {
  			'custom-gradient': 'linear-gradient(to right, rgba(72, 77, 84, 0.5), rgba(72, 77, 84, 1))'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	},
  	colors: {
  		black01: '#212121',
  		black02: '#464656',
  		gray01: '#626273',
  		gray02: '#9090A0',
  		gray03: '#C6C6D0',
  		white01: '#E9E9EE',
  		white02: '#F5F5F9',
  		white03: '#FFFFFF'
  	},
  	fontSize: {
  		'12': '0.75rem',
  		'14': '0.875rem',
  		'16': '1rem',
  		'18': '1.25rem',
  		'24': '1.5rem',
  		'28': '1.75rem'
  	},
  	maxWidth: {
  		DEFAULT: '430px'
  	}
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      };
      addUtilities(newUtilities);
    },
      require("tailwindcss-animate")
],
};
