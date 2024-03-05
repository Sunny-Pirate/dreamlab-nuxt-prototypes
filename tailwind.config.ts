import type {Config} from 'tailwindcss';

import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
    darkMode: ["class"],
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            aspectRatio: {
                auto: 'auto',
                square: '1 / 1',
                video: '16 / 9'
            },
            backgroundImage: {
                "primary": "bg-gradient-to-r from-emerald-600 to-emerald-400",
                "accent": "bg-gradient-to-r from-emerald-600 to-emerald-400",
                "warning": "bg-gradient-to-r from-emerald-600 to-emerald-400",
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            fontFamily: {
                headings: ["Neuropol", ...defaultTheme.fontFamily.sans],
                display: ["Sephora", ...defaultTheme.fontFamily.sans],
                dreamlab: ["Open Sans", ...defaultTheme.fontFamily.sans]
            },
            keyframes: {
                "accordion-down": {
                    from: {height: "0"},
                    to: {height: "var(--radix-accordion-content-height)"},
                },
                "accordion-up": {
                    from: {height: "var(--radix-accordion-content-height)"},
                    to: {height: "0"},
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
            maxWidth: {
                "screen": "100vw"
            },
            gridTemplateColumns: {
                "article": "3fr 1fr",
                "navigation": "1fr auto 1fr"
            },
            gridTemplateRows: {
                "dashboard": "min-content auto min-content"
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}

export default config;
