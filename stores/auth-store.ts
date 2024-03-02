import {CookieStore} from "@netlify/serverless-functions-api/dist/cookie_store";

export const useAuthStore = defineStore('auth-store', () => {

    const redirectCookie = ref(useCookie('redirect'));

    return {redirectCookie};
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
