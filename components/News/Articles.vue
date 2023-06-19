<template>
    <div
        class="m-[1.5rem] grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
        {{ articlesList }}
        <NewsArticle
            v-for="article in articlesList"
            :key="article.id"
            :article="article.id"
        />
        <p v-for="article in articlesList" :key="article">
            {{ article }}
        </p>
    </div>
</template>

<script setup>
const articlesStore = useArticlesStore();
const { articlesList } = storeToRefs(articlesStore);
const { fetchArticles } = articlesStore;
onMounted(() => {
    fetchArticles();
});
</script>

<style>
</style>
