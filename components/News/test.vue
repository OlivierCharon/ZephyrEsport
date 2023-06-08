<template>
    <h1>Test du placeholder</h1>
    <img :src="imgUrl" alt="test" @error="remplacement">
</template>

<script setup>
    const imgUrl = ref('https://www.globaltimes.cn/Portals/0/attacdhment/2023/2023-03-09/3279aafd-645c-43e6-953b-d313e8189ede.jpeg')
    const remplacement = ()=>{
        imgUrl.value = 'https://resize-europe1.lanmedia.fr/f/webp/r/622,311,forcex,center-middle/img/var/europe1/storage/images/europe1/international/le-panda-geant-nest-plus-en-danger-mais-reste-menace-2837755/28733065-1-fre-FR/Le-panda-geant-n-est-plus-en-danger-mais-reste-menace.jpg'
    }
</script>

<style>

</style>