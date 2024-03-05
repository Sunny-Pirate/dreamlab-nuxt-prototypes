// https://nuxt.com/docs/api/configuration/nuxt-config

export default {

    modules: [
        "@nuxt/image",
        "@nuxt/ui",
        "@pinia/nuxt",
        "@vueuse/nuxt",
        "nuxt-graphql-client"
    ],
    dev: true,
    devtools: {enabled: true},
    /*
        apollo: {
            clients: {
                default: {
                    httpEndpoint: process.env.NUXT_STRAPI_URL,

                    httpLinkOptions: {
                        credentials: 'include'
                    }
                }
            },
        },*/

    "graphql-client": {
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
    },

    imports: {
        dirs: ['stores'],
    },

    pages: true,

    pinia: {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
    },

    runtimeConfig: {
        strapi: {
            url: process.env.NUXT_STRAPI_URL || 'http://localhost:1337',
            key: process.env.NUXT_STRAPI_KEY || 'sha256'
        },
        public: {
            backend: {
                url: process.env.NUXT_PUBLIC_BACKEND_URL || 'http://localhost:1337',
            },
            // GQL_HOST: process.env.NUXT_PUBLIC_STRAPI_URL + "/graphql",
            companyLegalName: process.env.NUXT_PUBLIC_COMPANY_LEGAL_NAME,
            companyLegalEmail: process.env.NUXT_PUBLIC_COMPANY_LEGAL_EMAIL,
            companyKvkNumber: process.env.NUXT_PUBLIC_COMPANY_KVK_NUMBER,
            companyBtwNumber: process.env.NUXT_PUBLIC_COMPANY_BTW_NUMBER,

        }
    },

    ui: {
        global: true,
        icons: ['fa6-regular', 'fa6-solid', 'fa6-brands', 'simple-icons', 'mdi']
    },
}
