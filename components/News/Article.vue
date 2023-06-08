<template>
    <div class="mx-24 my-10 text-gray-50 p-4 flex flex-row items-center justify-around bg-zpr_purple-900 shadow-md">
        <nuxt-link :to='link'>
            <nuxt-img class="max-w-[200px]" format="webp" :src="imgSrc" alt="" @error="imgFallback" />
        </nuxt-link>

        <p class="w-[75%]">{{currentArticle.data.txt}}</p>
    </div>
</template>

<script setup>
    // const conf = useRuntimeConfig()

    const props = defineProps({
        article: Number
    })

    // const { data: article, pending, error, refresh } = await useFetch(`${conf.public.api_ip}/post/${props.article}`)
    const { data:currentArticle, pending, error, refresh } = await useFetch(`http://127.0.0.1:8000/api/post/${props.article}`)
    console.log(currentArticle)
    const imgSrc = ref(`/img/${currentArticle.value.data.img??'logo_short.png'}`)
    const defaultImgSrc = '/img/logo_short.png'

    const imgFallback = ()=>{
        imgSrc.value = defaultImgSrc
    }

    const link = ref(`/`)
</script>

<style>

</style>