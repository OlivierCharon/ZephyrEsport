<template>
    <div class="flex text-center justify-center space-x-10 m-16">
        <form @submit.prevent="articlesStore.createArticle(form)" method="post">
            <div>
                <label for="img">Illustration</label>
                <input type="text" name="img" id="img" v-model="form.img">
            </div>
            <div>
                <label for="title">Titre</label>
                <!-- <input type="file" @change="onFileChanged($event)" accept="image/*" capture name="title" id="title"> -->
                <IKContext publicKey="public_1i5J2AWJQZsWnQVadzPsLytev74=" urlEndpoint="https://ik.imagekit.io/ZephyrEsport">
                <IKUpload />
            </IKContext>
                
            </div>
            <div>
                <label for="txt">Description</label>
                <input type="textarea" name="txt" id="txt" v-model="form.txt">
            </div>
        </form>
    {{ articlesStore.articlesList?articlesStore.articlesList:`Il n'y a pas d'articles` }}
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
    layout: 'admin'
})
const articlesStore = useArticlesStore();

const form = ref<object>({
    title: null,
    img: null,
    txt: null
})

const onFileChanged = ($event: Event)=>{
    const target = $event.target as HTMLInputElement
    console.log(target.files)
}

</script>

<style>
</style>