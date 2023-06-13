<template>
    <!-- <div class="my-10 p-3 text-gray-50 flex flex-row items-center justify-around bg-zpr_purple-900 shadow-md text-l">
        <nuxt-link :to='link'>
            <nuxt-img provider="imagekit" format="webp" class="w-[15vw] mr-4 relative " :src="imgSrc" alt="" @error="imgFallback" />
            <p class="w-[75%] absolute">{{currentArticle.data.txt}}</p>
        </nuxt-link>
    </div> -->
    <nuxt-link rel="noopener noreferrer" :to="link" class="max-w-sm mx-auto group hover:no-underline w-64 focus:no-underline dark:bg-zpr_purple-900">
        <nuxt-img provider="imagekit" format="webp" role="presentation" class="object-cover w-full rounded h-44 dark:bg-gray-500" :src="imgSrc" alt="" @error="imgFallback" />
        <div class="p-6 space-y-2">
            <h3 class="text-2xl font-semibold group-hover:underline group-focus:underline">{{currentArticle.data.title}}</h3>
            <span class="text-xs dark:text-gray-400">{{articleDate}}</span>
            <p>{{currentArticle.data.txt}}</p>
        </div>
    </nuxt-link>
</template>

<script setup>
    const conf = useRuntimeConfig()
    const dayjs = useDayjs()

    const props = defineProps({
        article: Number
    })

    const { data: currentArticle, pending, error, refresh } = await useFetch(`${conf.public.API_BASE_URL}/post/${props.article}`)
    const imgSrc = ref(`/${currentArticle.value.data.img??'zephyr_logo.png'}`)
    const defaultImgSrc = '/zephyr_logo.png'

    const imgFallback = ()=>{
        imgSrc.value = defaultImgSrc
    }

    const link = ref(`/article/news/details/${currentArticle.id}`)
    const articleDate = dayjs(currentArticle.value.data.created_at).format('DD MMM YYYY')
</script>

<style>

</style>