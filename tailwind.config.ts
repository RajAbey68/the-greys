import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Cinzel', 'serif'],
            },
            colors: {
                silver: {
                    100: '#f5f5f5',
                    200: '#e5e5e5',
                    300: '#d4d4d4',
                    400: '#a3a3a3',
                    500: '#737373',
                },
                // Grey Horse Elite Palette
                'charcoal': '#1A1A1A',
                'slate-grey': '#2D3436',

                // New Elite Dark Palette
                'midnight-slate': '#020617', // Deepest slate/black for background
                'championship-royal-blue': '#1E40AF', // Vibrant royal blue for actions
                'brushed-silver': '#E2E8F0', // Light silver for elegant borders
                'royal-gold': '#FFD700', // Keep gold for accents

                // Legacy support
                'royal-blue': '#1E40AF',
                'thomian-blue': '#000033',
                'championship-white': '#F8FAFC',
            }
        },
    },
    plugins: [],
};
export default config;
