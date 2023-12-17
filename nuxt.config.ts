// https://nuxt.com/docs/api/configuration/nuxt-config

export default {
    dev: true,
    devtools: {enabled: true},
    pages: true,
    modules: [
        '@nuxtjs/google-fonts',
        "@nuxtjs/i18n",
        "@nuxtjs/tailwindcss",
        "@pinia/nuxt",
        "@formkit/auto-animate",
        "@vueuse/nuxt",
        '@vueform/nuxt',
        'nuxt-icon-tw',
        'nuxt-icon',
        '@nuxtjs/strapi',
    ],

    "google-fonts": {
        families: {
            "Open Sans": true,
            "Orbitron": {
                wght: '400..800',
                ital: '400..800',
            }
        }
    },

    imports: {
        dirs: ['stores', 'server'],
        presets: [
            {
                from: '@nuxtjs/strapi',
                imports: ['useStrapiAuth', 'useStrapiUser']
            }
        ]
    },

    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'it']
    },

    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config',
        exposeConfig: false,
        exposeLevel: 2,
        config: {},
        injectPosition: 'first',
        viewer: true,
    },

    pinia: {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
    },

    runtimeConfig: {
        adminId: "info@dreamlab.solutions",
        public: {}
    },

    strapi:{
        url: process.env.STRAPI_URL || 'http://localhost:1337',
        prefix: '/api',
        admin: '/admin',
        version: 'v4',
        devtools: true,
        cookieName: 'strapi_token',
        cookie: {
            sameSite: true,
            maxAge: 60 * 60 * 24
        }
    },

    build: {
        postcss: {
            plugins: {
                'postcss-import': true,
                'tailwindcss/nesting': {},
                'postcss-nested': {},
            },
        },
    },
}
