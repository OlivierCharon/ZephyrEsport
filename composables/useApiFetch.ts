import type { UseFetchOptions } from "nuxt/app";

export function useApiFetch(route:string,options: UseFetchOptions = {}){
    const runtimeConfig = useRuntimeConfig()
    let headers: any = {}
    const token = useCookie("XSRF-TOKEN",{
        sameSite: 'none',
        secure: true,
    });

    headers['content-type'] = 'application/json; charset=UTF-8'
    headers['X-XSRF-TOKEN'] = token?.value as string

    return useFetch(`${runtimeConfig.public.API_BASE_URL}/${route}`, {
        credentials: "include",
        watch: false,
        headers: {
            ...headers,
            ...options?.headers
        },
        ...options
    })
}