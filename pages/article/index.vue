<template>
    <div class="space-y-10 md:mx-[33%] mx-10 mb-12">
        <form class="grid grid-cols-[1fr_3fr] gap-6" @submit.prevent="createArticle" method="post">
                <label class="flex items-center text-gray-800 font-bold md:text-right mb-1 md:mb-0" for="img">Illustration</label>
                <input class="appearance-none w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="file" @change="onFileChanged($event)" accept="image/*" capture name="title" id="title">

                <label class="flex items-center text-gray-800 font-bold md:text-right mb-1 md:mb-0" for="title">Titre</label>
                <input class="bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" name="img" id="img" v-model="form.title">

                <label class="flex items-center text-gray-800 font-bold md:text-right mb-1 md:mb-0" for="txt">Description</label>
                <textarea class="bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="textarea" rows="4" cols="50"  name="txt" id="txt" v-model="form.txt"></textarea>

                <input class="col-span-full shadow bg-zpr_purple-800 hover:bg-zpr_purple-700 focus:shadow-outline focus:outline-none text-white uppercase py-2 px-4 rounded fade-transition duration-100" type="submit" value="Envoyer">
        </form>
        <button @click="post.fetchArticles()">tester</button>

        <div id="articles-list">
            <h2>List des articles récents</h2>
            <ul>
                {{ post.articlesList }}
                
                <li>LA</li>
                <li>LA</li>
                <li>LA</li>
                <li>LA</li>
                <li>LA</li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
    definePageMeta({
        layout: 'admin'
    })
    const post = useArticlesStore();
    
    const form:any = ref({
        title: null,
        img: null,
        txt: null
    })

    const createArticle = () => post.create(form.value)

    const onFileChanged = ($event: Event)=>{
        const target = $event.target as HTMLInputElement
        console.log(target.files)
    }
</script>

<style>
</style>