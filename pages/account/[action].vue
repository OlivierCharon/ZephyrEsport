<template>
    <div v-if="1==1">
        <h2>Se connecter</h2>
        
    </div>
    <div v-else>
        <h2>Créer un compte</h2>
    </div>
</template>

<script setup>
const route = useRoute()
</script>

<style scoped>
body{
    position: fixed;
    width: 100px;
    height: 100px;
}
</style>