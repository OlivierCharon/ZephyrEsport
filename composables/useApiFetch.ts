import type { UseFetchOptions } from "nuxt/app";
import { useCookieFetch } from "./useCookieFetch";

export async function useApiFetch<T>(route:string,options: UseFetchOptions<T> = {}){

    const runtimeConfig = useRuntimeConfig()
    let headers: any = {}
    const token = useCookieFetch('XSRF-TOKEN')

    token.value?headers['X-XSRF-TOKEN'] = token.value as string:''

    process.server?headers={
        ...headers,
        ...useRequestHeaders(["referer", "cookie"])
    }:''

    return useFetch(`${runtimeConfig.public.API_BASE_URL}/${route}`, {
        credentials: "include",
        watch: false,
        ...options,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            ...headers,
            ...options?.headers
        },
    })
}