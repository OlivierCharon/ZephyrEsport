<template>
    <div class="mx-44">
        <Suspense>
            <template #default>
                <NewsArticle v-for="article in articles.data" :key="article.id" :article="article.id"/>
            </template>
            <template #fallback>
                LOading...
            </template>
        </Suspense>
    </div>
</template>

<script setup>
    const { data:articles, pending, error, refresh } = await useFetch('http://127.0.0.1:8000/api/posts'
    // ,{
    //     query: { 
    //         perPage: null,
    //         page: null, 
    //         title: null,
    //         txt: null
    //     }
    // }
    )
    // console.log(data)
    console.log(articles)
</script>

<style>

</style>