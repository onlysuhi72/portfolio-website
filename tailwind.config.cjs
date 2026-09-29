/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: {
        extend: {
            colors: {
                bg: 'var(--bg)',
                'bg-2': 'var(--bg-2)',
                'bg-3': 'var(--bg-3)',
                surface: 'var(--surface)',
                'surface-2': 'var(--surface-2)',
                border: 'var(--border)',
                'border-hover': 'var(--border-hover)',
                primary: 'var(--text-primary)',
                secondary: 'var(--text-secondary)',
                muted: 'var(--text-muted)',
                accent: 'var(--accent)',
                'accent-dim': 'var(--accent-dim)',
                'accent-glow': 'var(--accent-glow)',
                red: 'var(--red)',
                blue: 'var(--blue)',
            },
            fontFamily: {
                display: ['Syne', 'sans-serif'],
                body: ['DM Sans', 'sans-serif'],
            },
            borderRadius: {
                sm: '6px',
                md: '12px',
                lg: '20px',
            },
            transitionTimingFunction: {
                portfolio: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                'portfolio-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
            },
            keyframes: {
                'fade-up': {
                    from: { opacity: '0', transform: 'translateY(24px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
                blink: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.3' },
                },
                'orb-pulse': {
                    '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
                    '50%': { opacity: '1', transform: 'scale(1.15)' },
                },
                'loading-progress': {
                    from: { transform: 'translateX(-120%)' },
                    to: { transform: 'translateX(300%)' },
                },
                'loading-orb-pulse': {
                    '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
                    '50%': { opacity: '1', transform: 'scale(1.15)' },
                },
                'gradient-shift': {
                    '0%, 100%': { backgroundPosition: '0% 0%' },
                    '50%': { backgroundPosition: '100% 100%' },
                },
            },
            animation: {
                'fade-up': 'fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
                blink: 'blink 1.8s ease-in-out infinite',
                'orb-pulse': 'orb-pulse 6s ease-in-out infinite',
                'loading-progress': 'loading-progress 1.6s ease-in-out infinite',
                'loading-orb-pulse': 'loading-orb-pulse 6s ease-in-out infinite',
                'gradient-shift': 'gradient-shift 6s ease infinite',
            },
            boxShadow: {
                'accent-glow': '0 12px 32px rgba(87, 184, 255, 0.33)',
            },
        },
    },
    plugins: [],
}