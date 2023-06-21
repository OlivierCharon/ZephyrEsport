<template>
    <div
        class="m-[1.5rem] grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
        <NewsArticle
            v-for="article in articlesList"
            :key="article.id"
            :articleId="article.id"
        />
        <span
            v-if="pagination.currentPage < pagination.lastPage"
            class="text-lg text-center text-gray-200 cursor-pointer w-full col-start-1 col-end-[-1]"
            @click="seeMore()"
            >Voir plus d'articles...</span
        >
    </div>
</template>

<script setup>
const articlesStore = useArticlesStore();
const { articlesList, pagination } = storeToRefs(articlesStore);
const { fetchArticles, seeMore } = articlesStore;
onMounted(() => {
    fetchArticles();
});
</script>

<style>
</style>
