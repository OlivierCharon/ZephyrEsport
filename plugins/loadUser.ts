import { useAuthStore } from "~/stores/useAuthStore";

export default defineNuxtPlugin(async () => {
    const auth = useAuthStore()
    !auth.isLoggedIn?await auth.fetchUser():''
})