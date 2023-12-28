<template>
    <div class="bg-[rgb(0,0,0)] bg-[rgba(0,0,0,0.4)] fixed z-50 left-0 top-0 w-full h-full overflow-auto">
        <div  class="flex items-center justify-center rounded-lg w-2/5 bg-slate-50 m-auto p-3 border-2 border-l-gray-300 border-solid text-center flex-col absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <span class="text-gray-400 text-3xl ml-auto mr-2 font-bold leading-none hover:text-gray-900 focus:text-gray-900 hover:cursor-pointer focus:cursor-pointer fade-transition duration-150" @click="$emit('closeModal')">&times;</span>
            <form class="grid grid-cols-[1fr_3fr] gap-6" @submit.prevent="updatePost(form)" method="put">
                <label class="flex items-center text-gray-800 font-bold md:text-right mb-1 md:mb-0" for="img">Illustration</label>
                <input class="appearance-none w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="file" @change="onFileChanged($event)" accept="image/*" capture name="title" id="title">
                
                <label class="flex items-center text-gray-800 font-bold md:text-right mb-1 md:mb-0" for="title">Titre</label>
                <input class="bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" name="img" id="img" v-model="form.title">
                
                <label class="flex items-center text-gray-800 font-bold md:text-right mb-1 md:mb-0" for="txt">Description</label>
                <textarea class="bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="textarea" rows="4" cols="50"  name="txt" id="txt" v-model="form.txt"></textarea>
                
                <input class="col-span-full shadow bg-zpr_purple-800 hover:bg-zpr_purple-700 focus:shadow-outline focus:outline-none text-white uppercase py-2 px-4 rounded fade-transition duration-100 hover:cursor-pointer focus:cursor-pointer" type="submit" value="Mettre à jour">
                <button class="col-span-full shadow bg-red-800 hover:bg-red-700 focus:shadow-outline focus:outline-none text-white uppercase py-2 px-4 rounded fade-transition duration-100" @click="deletePost(form.id)">Supprimer</button>
            </form>
        </div>
    </div>
</template>

<script lang="ts" setup>
    const props = defineProps({
        post: {
            type: Object as PropType<Post>,
            required: true
        }
    })
    const {updatePost, deletePost} = usePostsStore()

const form = ref(props.post)

const onFileChanged = ($event: Event)=>{
    const target = $event.target as HTMLInputElement
    console.log(target.files)
}

</script>

<style scoped>
</style>