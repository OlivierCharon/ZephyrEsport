export function useCookieFetch<T>(cookie:string){
    return useCookie(cookie,{
        sameSite: 'none',
        secure: true,
    });
}