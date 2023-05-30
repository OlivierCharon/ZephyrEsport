<template>
    <div class="mx-44">
        <NewsArticle v-for="i in 5" :key="i" :article="{'id':i,'kind':'kind'+i}"/>
    </div>
</template>

<script setup>

</script>

<style>

</style>