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
                sans: ['var(--font-inter)'],
                serif: ['var(--font-playfair)'],
            },
            colors: {
                silver: {
                    100: '#f5f5f5',
                    200: '#e5e5e5',
                    300: '#d4d4d4',
                    400: '#a3a3a3',
                    500: '#737373',
                },
                // Horse Color Palette
                'iron': '#0F1115',      // Raw Gunmetal / Steel - Backgrounds
                'blue-roan': '#1E2329', // Cool-Toned Slate - Cards/Sections
                'rose-grey': '#C8C2BC', // Warm Cement - Warm accents/text
                'dapple': '#7A7D85',    // Polished Concrete - Muted visuals
                'fleabitten': '#ECECE9' // Speckled Granite - Main text
            }
        },
    },
    plugins: [],
};
export default config;
