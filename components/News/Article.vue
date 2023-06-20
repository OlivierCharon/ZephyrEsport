<template>
    <!-- <div class="my-10 p-3 text-gray-50 flex flex-row items-center justify-around bg-zpr_purple-900 shadow-md text-l">
                  <nuxt-link :to='link'>
                      <nuxt-img provider="imagekit" format="webp" class="w-[15vw] mr-4 relative " :src="imgSrc" alt="" @error="imgFallback" />
                      <p class="w-[75%] absolute">{{currentArticle.data.txt}}</p>
                  </nuxt-link>
              </div> -->
    <nuxt-link
        rel="noopener noreferrer"
        :to="link"
        class="max-w-lg mx-auto group hover:no-underline w-full focus:no-underline dark:bg-zpr_purple-900"
    >
        <nuxt-img
            provider="imagekit"
            format="webp"
            role="presentation"
            class="bg-red-400 object-contain w-full rounded h-44 dark:bg-gray-500"
            :src="imgSrc"
            alt=""
            @error="imgFallback"
        />
        <div class="p-6 space-y-2">
            <h3
                class="text-xl font-semibold text-zpr_purple-second group-hover:text-zpr_purple-500 uppercase group-focus:text-zpr_purple-500"
            >
                {{ currentArticle.data.title }}
            </h3>
            <span class="text-xs dark:text-gray-400">{{ articleDate }}</span>
            <p class="text-gray-100">
                {{ currentArticle.data.txt }}
            </p>
        </div>
    </nuxt-link>
</template>

<script setup>
// PROPS
const props = defineProps({
    articleId: Number,
});

// ARTICLE DATA
const articlesStore = useArticlesStore();
const { getArticle } = articlesStore;
const articleData = ref(getArticle(articleId));

// IMG SRC DATA
const defaultImgSrc = "/zephyr_logo.png";
const imgSrc = ref(`${articleData.img} ?? ${defaultImgSrc}}`);

const imgFallback = () => {
    imgSrc.value = defaultImgSrc;
};

// LINK
const link = ref(`/article/news/details/${currentArticle.id}`);

// DATES
const dayjs = useDayjs();
const articleDate = dayjs(currentArticle.value.data.created_at).format(
    "DD MMM YYYY"
);
</script>

<style>
</style>
