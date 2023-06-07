<template>
    <div class="mx-24 my-10 text-gray-50 p-4 flex flex-row items-center justify-around bg-zpr_purple-900 shadow-md">
        <nuxt-link :to='link'>
            <img class="max-w-[200px]" :src="'/img/logo_shdort.png'" alt="" @error="$event.target.src='/img/logo_short.png'">
        </nuxt-link>

        <p class="w-[75%]">{{article.data.txt}}</p>
    </div>
</template>

<script async setup>
    const props = defineProps({
        article: Number
    })

    const { data: article, pending, error, refresh } = await useFetch(`http://127.0.0.1:8000/api/post/${props.article}`)

    const link = ref(`/`)
</script>

<style>

</style>