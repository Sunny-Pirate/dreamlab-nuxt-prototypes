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
      'nuxt-icon'
    ],

    "google-fonts": {
        families: {
            "Open Sans": true
        }
    },

    imports: {
        dirs: ['stores'],
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
        public: {
            adminId: "info@dreamlab.solutions"
        }
    }

}