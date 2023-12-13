export const useAuthStore = defineStore('auth-store', () => {
    const cookie = useCookie("token")
    const token = ref<string | null | undefined>(cookie.value)
    const isAuthenticated = computed(() => {
        console.log('token: ', token.value, !!token.value)
        return !!token.value
    })


    // TODO: Separate user concepts in another store ie: on a user or profile store?
    const user = ref<IUser | null | undefined>(null)
    const getUserId = computed(() => user.value?.id)
    const getUserRole = computed(() => user.value?.role)


    // TODO: Ask @Diego if it's secure bypass this calling directly from the page and let auth state read only the cookies
    async function login(identifier: string) {
        const {error, data, status, pending, execute, refresh} = await useAsyncData('doLogin', () => $fetch('/api/auth/login', {
            method: "POST",
            body: JSON.stringify({
                identifier
            })
        }));

        if (status.value === "success" && data.value) {
            token.value = data.value.token
            user.value = data.value.user
        }

        return {error, data, status, pending, execute, refresh}
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
        token, user, isAuthenticated, getUserId, login
        // , verifyToken, logout
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
