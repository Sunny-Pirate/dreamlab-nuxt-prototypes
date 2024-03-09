import type {Config} from 'tailwindcss';

import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "presets/**/*.{js,vue,ts}"
    ],
    theme: {
        container: {
            center: true,
            padding: "1rem",
        },

        screens: {
            "xs": "475px",
            ...defaultTheme.screens,
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
            colors: {

                'primary-50': 'rgb(var(--primary-50))',
                'primary-100': 'rgb(var(--primary-100))',
                'primary-200': 'rgb(var(--primary-200))',
                'primary-300': 'rgb(var(--primary-300))',
                'primary-400': 'rgb(var(--primary-400))',
                'primary-500': 'rgb(var(--primary-500))',
                'primary-600': 'rgb(var(--primary-600))',
                'primary-700': 'rgb(var(--primary-700))',
                'primary-800': 'rgb(var(--primary-800))',
                'primary-900': 'rgb(var(--primary-900))',
                'primary-950': 'rgb(var(--primary-950))',
                'surface-0': 'rgb(var(--surface-0))',
                'surface-50': 'rgb(var(--surface-50))',
                'surface-100': 'rgb(var(--surface-100))',
                'surface-200': 'rgb(var(--surface-200))',
                'surface-300': 'rgb(var(--surface-300))',
                'surface-400': 'rgb(var(--surface-400))',
                'surface-500': 'rgb(var(--surface-500))',
                'surface-600': 'rgb(var(--surface-600))',
                'surface-700': 'rgb(var(--surface-700))',
                'surface-800': 'rgb(var(--surface-800))',
                'surface-900': 'rgb(var(--surface-900))',
                'surface-950': 'rgb(var(--surface-950))'
            },
            fontFamily: {
                elegant: ["'Architects Daughter'", ...defaultTheme.fontFamily.sans],
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
                "navigation": "1fr minmax(60%, max-content) 1fr"
            },
            gridTemplateRows: {
                "dashboard": "min-content auto min-content"
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
}

export default config;
