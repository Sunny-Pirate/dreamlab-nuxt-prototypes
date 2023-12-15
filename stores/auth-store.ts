import {useStrapiAuth} from "#build/imports";
import type {StrapiAuthenticationData, StrapiAuthenticationResponse} from "@nuxtjs/strapi/dist/runtime/types";
import {CookieStore} from "@netlify/serverless-functions-api/dist/cookie_store";

export const useAuthStore = defineStore('auth-store', () => {

    const session = ref<StrapiAuthenticationResponse>()

    const user = useStrapiUser();
    const {login} = useStrapiAuth();



    const isAuthenticated = computed(() => !!user.value)


    async function loginWithCredentials({identifier, password}: StrapiAuthenticationData) {
        // console.log(`[auth-store] User is trying to loggin. It wil be redirect ${redirectCookie.value}`)
        const loginResponse = await useLazyAsyncData('doLoginwithCredentials', () => login({
            identifier, password
        }));

        const {status, pending, error, data, execute} = loginResponse;

        if (data.value !== null){
            session.value = data.value
        }

        return {pending, error, status, execute}
    }


    return {session, isAuthenticated, loginWithCredentials}

})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
