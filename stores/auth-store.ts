export const useAuthStore = defineStore('auth-store', () => {

    const session = ref<IAuthSession | null>(null)
    const state = ref<"idle" | "loading" | "authorized">("idle")
    const authStateErrors = ref<Error | null>(null)

    const isAuthenticated = computed(() => !!session.value?.user)
    const authState = computed(() => state.value)
    const hasError = computed(() => authStateErrors !== null)
    const getError = computed(() => authStateErrors.value)

    async function login(email: string) {
        state.value = "loading"
        const {data, error, status} = await useAsyncData<IAuthSession>(
            'doLogin',
            () => $fetch('/api/auth/login', {
                method: "POST",
                body: JSON.stringify({
                    identifier: email
                })
            }))


        if (error.value !== null) authStateErrors.value = error.value

        if (data.value !== null) {
            session.value = data.value
            state.value = "authorized"
        }
    }


    /*
    async function verifyToken(): Promise<void> {
        const verificationResponse = await apiVerifyToken(token.value)
        if (verificationResponse.isValid) {
            user.value = verificationResponse.user // adjust this line as necessary depending on the API response shape
        } else {
            token.value = null
            user.value = null
        }
    }

    async function logout(): Promise<void> {
        await apiLogout()
        token.value = null
        user.value = null
    }

     */

    return {
        session, isAuthenticated, login, authState, hasError, getError
        // , verifyToken, logout
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
