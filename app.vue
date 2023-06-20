<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup>
const articlesStore = useArticlesStore();
// const { articlesList } = storeToRefs(articlesStore);
const { fetchArticles } = articlesStore;
onMounted(() => {
    fetchArticles();
});
</script>