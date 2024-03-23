// https://nuxt.com/docs/api/configuration/nuxt-config

import * as path from "path";
// import tailwindForms from "@tailwindcss/forms";

export default {

    modules: [
        "@nuxt/image",
        "@pinia/nuxt",
        "@vueuse/nuxt",
        // "nuxt-graphql-client",
        "nuxt-primevue",
        "@nuxtjs/tailwindcss",
        "@nuxtjs/supabase",
        'nuxt-icon'
    ],
    dev: true,
    devtools: {enabled: true},

    /*"graphql-client": {
        watch: true,
        autoImport: true,
        functionPrefix: 'Gql',
        documentPaths: ['./queries/'],
        preferGETQueries: false,

        codegen: {
            silent: false,
            skipTypename: false,
            useTypeImports: true,
            dedupeFragments: true,
            onlyOperationTypes: false,
            avoidOptionals: false,
            disableOnBuild: false,
            maybeValue: 'T | null | undefined',
        },

        clients: {
            default: {
                host: process.env.NUXT_STRAPI_URL + "/graphql",
                token: `Bearer ${process.env.NUXT_STRAPI_KEY}`,
                headers: {
                    'Authorization': `Bearer ${process.env.NUXT_STRAPI_KEY}`,
                },
                tokenStorage: {
                    name: '__session',
                    mode: 'cookie', // default
                    cookieOptions: {
                        path: '/',
                        secure: false, // defaults to `process.env.NODE_ENV === 'production'`
                        httpOnly: false, // Only accessible via HTTP(S)
                        maxAge: 60 * 60 * 24 * 30 // 30 days
                    }
                },
                // Advanced

            }
        }
    },*/

    imports: {
        dirs: ['stores'],
    },

    pages: true,

    pinia: {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
    },

    primevue: {
        options: {
            ripple: true,
        },
        unstyled: true,
        // cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities',

        importPT: {as: 'Dreamlab', from: '~/presets/dreamvue/'}      //import and apply preset
    },


    runtimeConfig: {

        public: {}
    },

    supabase: {
        redirect: true,
        redirectOptions: {
            login: '/auth/login',
            callback: '/auth/confirm',
            exclude: ['/', '/contact-us', '/portfolio', '/services'],
            cookieRedirect: true,
        },
        cookieOptions: {
            maxAge: 60 * 60 * 8,
            sameSite: 'lax',
            secure: true,
            auth: {
                debug: true
            }
        }
    },

    tailwindcss: {
        cssPath: ["~/assets/css/tailwind.css", {injectPosition: "first"}],
        configPath: 'tailwind.config.ts',
        exposeConfig: {
            level: 2,
        },
        config: {
            // plugins: [tailwindForms],
        },
        viewer: true,

    }

}
