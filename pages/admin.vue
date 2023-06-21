<template>
    <div>
        <h1>Admin page</h1>
        <NewsArticles />
    </div>
</template>

<script setup>
const articlesStore = useArticlesStore();
const { fetchArticles } = articlesStore;
onMounted(() => {
    fetchArticles("all");
});
</script>

<style>
</style>