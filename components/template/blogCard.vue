<template>
    <div class="mx-auto my-6 p-4 flex items-center justify-center">
        <div class="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer" @click="$emit('post-details',props.post.id)">
            <img :src="props.post.img??`https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?auto=format&fit=crop&q=80&w=1528&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`" alt="Img by Meriç Dağlı https://unsplash.com/@meric" class="w-full h-auto object-cover rounded-lg">
            <div class="absolute bottom-0 left-0 right-0 h-40 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
                <h1 class="text-2xl font-semibold">{{ props.post.title }}</h1>
                <p class="mt-2">{{ props.post.txt }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps({
        post: {
            type: Object as PropType<Post>,
            required: true
        }
    })

    const { deletePost } = usePostsStore()
</script>

<style scoped>

</style>