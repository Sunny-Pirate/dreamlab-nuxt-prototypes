export default defineNuxtRouteMiddleware((to, _from) => {

    if (to.path.startsWith('/labs' || '/simgarage')) {
        const user = useStrapiUser()
        if (!user.value) {
            useCookie('redirect', {path: to.path}).value = to.fullPath
            useCookie('redirectMsg', {path: to.path}).value = "You're not authorized to view the labs section. PLease log in."
            return navigateTo('/auth/login')
        }
    }

    return
})
