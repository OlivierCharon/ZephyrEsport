import type { CookieOptions } from "nuxt/app";

export const useAuthStore = defineStore("authStore", () => {
    
    // DATA
    const user = ref<User|null>(null)
    const userCookie:any = useCookieFetch('user')

     // GET CURRENT USER
    async function currentUser(){

        return await useApiFetch("user");
    }

    // SIGNIN
    async function signin(user: User){
        await useApiFetch("csrf-cookie");
        
        return await useApiFetch("register",{
            method: 'POST',
            body: user,
        });
    }
    
    // LOGIN
    async function login(credentials: Credentials){
        await useApiFetch('csrf-cookie')

        const login = await useApiFetch("login",{
            method: 'POST',
            body: credentials,
        });

        const {data} =  await currentUser();
        const userCookie = useCookieFetch('user')

        user.value = data.value.user as User;
        userCookie.value = data.value.user as User;

        return login;
    }
    
    // LOGOUT
    async function logout(){
        const token:any = await useApiFetch("csrf-cookie");

        await useApiFetch("logout",{
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'X-XSRF-TOKEN': JSON.stringify(token.value),
            }
        });
        token.value = null;
        userCookie.value = null
    }

    return { user, signin, login, logout, currentUser };
});
