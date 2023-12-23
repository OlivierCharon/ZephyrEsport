import { useArticlesStore } from "~/stores/useArticlesStore"

export default defineNuxtPlugin(async () => {
    const post = useArticlesStore()
    await post.fetchArticles()
})