<template>
  <div class="mx-32">
    <GameGames />
    <NuxtPage />

    <!-- <div v-for="game in games" :key="game.name" class="my-16 w-full px-52 space-y-32" :class="[currentGame == game.name?'flex flex-col':'hidden']">
                <GameDescription :game="game"/>
                <PlayersList :players="game.players"/>
            </div> -->
  </div>
</template>

<script setup>
const route = useRoute()
useHead({
  title: 'Zephyr Esport'
})
definePageMeta({
  layout: 'admin'
})
</script>
