export const useStrapiBackend = (url: string | undefined) => {
    const config = useRuntimeConfig();
    return config.public.backend.url + url
}
