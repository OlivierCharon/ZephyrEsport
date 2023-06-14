<template>
    <div class="m-[1.5rem] grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <NewsArticle v-for="article in articles.data" :key="article.id" :article="article.id"/>
    </div>
</template>
    
<script setup>
    const conf = useRuntimeConfig()
    // const { data:articles, pending, error, refresh } = await useFetch('http://127.0.0.1:8000/api/posts')
    const { data:articles, pending, error, refresh } = await useFetch(`${conf.public.API_BASE_URL}/posts`)
</script>

<style>

</style>