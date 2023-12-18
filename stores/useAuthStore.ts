export const useAuthStore = defineStore("authStore", () => {
    
    // DATA
    const user = ref<User|null>(null)
    const isLoggedIn = computed<boolean>(() => !!user.value)

     // GET CURRENT USER
    async function fetchUser(){
        const {data} = await useApiFetch("user");
        user.value = data.value.user as User;
    }

    // SIGNIN
    async function signin(user: User){
        await useApiFetch("csrf-cookie");
        
        const {data}:any = await useApiFetch("register",{
            method: 'POST',
            body: user,
        });
        data.value.success?await fetchUser():''

        return data.value
    }
    
    // LOGIN
    async function login(credentials: Credentials){
        await useApiFetch('csrf-cookie')

        const login = await useApiFetch("login",{
            method: 'POST',
            body: credentials,
        });

        await fetchUser()

        return login;
    }
    
    // LOGOUT
    async function logout(){
        await useApiFetch("logout",{method: 'DELETE'});
        user.value = null
    }

    return { user, isLoggedIn, signin, login, logout, fetchUser };
});
