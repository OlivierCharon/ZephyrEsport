<template>
    <h1>Our Esport teams</h1>
    <div v-for="game in games" :key="game">
        {{ game }}
        <img src="/assets/games/dofus.png" alt="">
        <img :src="`@/assets/games/${game}.png`" alt="">
    </div>

</template>

<script setup>
import {ref} from 'vue'

const games = ['pu','tm','fifa','tm','dofus']
</script>