<template>
    <div class="mx-44">
        <NewsArticle v-for="article in articles.data" :key="article.id" :article="article.id"/>
        <!-- <h1 v-for="article in articles.data" :key="article.id">{{article.id}}</h1> -->
    </div>
</template>

<script setup>
    // const conf = useRuntimeConfig()
    const { data:articles, pending, error, refresh } = await useFetch('http://127.0.0.1:8000/api/posts')
    // console.log(`${conf.public.api_ip}posts`)
    // const { data:articles, pending, error, refresh } = await useFetch(`${conf.public.api_ip}posts`)
</script>

<style>

</style>