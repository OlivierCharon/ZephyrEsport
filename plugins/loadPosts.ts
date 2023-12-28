import { usePostsStore } from "~/stores/usePostsStore"

export default defineNuxtPlugin(async () => {
    const {fetchPosts} = usePostsStore()
    await fetchPosts()
})