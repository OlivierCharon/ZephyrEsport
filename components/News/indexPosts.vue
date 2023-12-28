<template>
    <div id="posts-list" class="grid grid-cols-1 my-10">
        <h2 class="text-2xl font-bold text-center">Liste des articles les plus récents</h2>
        <div class="grid grid-cols-4">
            <TemplateBlogCard @post-details="postToEdit = $event" v-for="post in postsList" :key="post.id" :post="post" />
        </div>
        
        <span
        v-if="pagination.currentPage < pagination.lastPage"
        class="text-lg text-center text-gray-200 cursor-pointer w-full col-start-1 col-end-[-1]"
        @click="seeMore()"
        >Voir plus d'articles...</span
        >
    </div>
    <teleport to='body'>
        <NewsEditPost v-if="postToEdit" :post="postsList.find((post)=> post.id === postToEdit)" @close-modal="postToEdit = null" />
    </teleport>
</template>

<script lang="ts" setup>
const postsStore = usePostsStore()
const { postsList, pagination } = storeToRefs(postsStore);
const {seeMore} = postsStore
const postToEdit = ref(null)
</script>

<style>
</style>
