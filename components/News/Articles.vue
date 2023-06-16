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
        <div v-for="article in articlesList" :key="article">
            {{ article }}
        </div>
        <input type="text" name="new-article" id="" v-model="newArticle" />
        <button @click="createArticle()">Valider</button>
    </div>
</template>

<script setup>
// const conf = useRuntimeConfig();
// const {
//     data: articles,
//     pending,
//     error,
//     refresh,
// } = await useFetch(`${conf.public.API_BASE_URL}/posts`);

const articlesStore = useArticlesStore();
const { fetchArticles } = articlesStore;
const { articlesList } = storeToRefs(articlesStore);
const newArticle = ref(null);

// function createArticle() {
//     addValueToFilterList(newArticle.value);
//     newArticle.value = null;
// }

onMounted(() => {
    fetchArticles();
    re;
});
</script>

<style>
</style>
