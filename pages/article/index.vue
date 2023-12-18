<template>
    <div class="flex text-center justify-center space-x-10 m-16">
        lite d'articles
    </div>
</template>

<script setup>
const articlesStore = useArticlesStore();
const {data} = articlesStore.fetchArticles()
console.log(data)
definePageMeta({
    layout: 'admin'
})
</script>

<style>
</style>