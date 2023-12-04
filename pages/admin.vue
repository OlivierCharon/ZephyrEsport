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
definePageMeta({
    layout: 'admin'
})
</script>

<style>
</style>