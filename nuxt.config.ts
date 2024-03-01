// https://nuxt.com/docs/api/configuration/nuxt-config

export default {

    modules: [
        "@nuxt/image",
        "@nuxt/ui",
        "@pinia/nuxt",
        "@nuxtjs/i18n",
        "@vueuse/nuxt",
        '@nuxtjs/strapi',
    ],
    dev: true,
    devtools: {enabled: true},


    build: {
        /*postcss: {
            plugins: {
                'postcss-import': {},
                'tailwindcss/nesting': {},
                tailwindcss: {},
                autoprefixer: {},
            },
        },*/
    },


    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'it']
    },

    imports: {
        dirs: ['stores', 'server'],
    },

    pages: true,

    pinia: {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
    },

    runtimeConfig: {
        adminId: "info@dreamlab.solutions",
        public: {
            companyLegalName: process.env.NUXT_PUBLIC_COMPANY_LEGAL_NAME,
            companyLegalEmail: process.env.NUXT_PUBLIC_COMPANY_LEGAL_EMAIL,
            companyKvkNumber: process.env.NUXT_PUBLIC_COMPANY_KVK_NUMBER,
            companyBtwNumber: process.env.NUXT_PUBLIC_COMPANY_BTW_NUMBER,
        }
    },

    strapi: {
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

    ui: {
        global: true,
        icons: ['fa6-regular', 'fa6-solid', 'fa6-brands', 'simple-icons']
    },
}
