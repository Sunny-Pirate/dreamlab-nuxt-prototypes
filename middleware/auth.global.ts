export default defineNuxtRouteMiddleware((to, _from) => {

    const protectedPaths = ['/labs', '/simgarage'];

    if (protectedPaths.some(path => new RegExp(`^${path}`).test(to.path))) {
        const user = useStrapiUser()
        if (!user.value) {
            useCookie('login-redirect', {path: '/', sameSite: true}).value = to.fullPath
            // useCookie('login-redirect-msg', {path: '/', sameSite: true}).value = "You're not authorized to view the labs section. Please log in."
            return navigateTo('/auth/login')
        }
    }

    return
})
