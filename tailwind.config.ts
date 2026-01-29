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
                serif: ['Playfair Display', 'serif'],
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
                'charcoal': '#1A1A1A',  // Deep background
                'slate-grey': '#2D3436', // Cards
                'brushed-silver': '#B0B3B8', // Accents

                // Royal-Thomian Palette
                'royal-gold': '#FFD700', // Bright Logo Gold
                'royal-blue': '#1E3A8A', // Deep Royal Blue
                'thomian-blue': '#000033', // Dark Navy/Blackish Blue
                'thomian-black': '#050505', // True Black

                // Championship Heritage Palette
                'championship-white': '#F9FAFB', // Clean airy luxury
                'midnight-slate': '#111827',     // Historic grit
                'burnished-silver': '#8E8E93',   // Antique silver

                // Legacy / Horse Color Palette (Keeping for reference or mix)
                'iron': '#0F1115',      // Raw Gunmetal / Steel
                'blue-roan': '#1E2329', // Cool-Toned Slate
                'rose-grey': '#C8C2BC', // Warm Cement
                'dapple': '#7A7D85',    // Polished Concrete
                'fleabitten': '#ECECE9' // Speckled Granite
            }
        },
    },
    plugins: [],
};
export default config;
