import {useStrapiAuth} from "#build/imports";
import type {StrapiAuthenticationData, StrapiAuthenticationResponse} from "@nuxtjs/strapi/dist/runtime/types";
import {CookieStore} from "@netlify/serverless-functions-api/dist/cookie_store";

export const useAuthStore = defineStore('auth-store', () => {

    const session = ref<StrapiAuthenticationResponse>()
    const redirectCookie = ref(useCookie('redirect'));
    const user = useStrapiUser();
    const {login} = useStrapiAuth();


    const isAuthenticated = computed(() => !!user.value)


    async function authenticate(session: StrapiAuthenticationResponse) {
        console.log(`[auth-store] User is trying to loggin. It wil be redirect ${redirectCookie.value}`)


        if (session.jwt === null || session.user) {
            return createError({
                statusCode: 401, statusMessage: "You cannot authenticate without passing a session."
            })
        }

        return

    }


    return {session, isAuthenticated, authenticate}

})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
