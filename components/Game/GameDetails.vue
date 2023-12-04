<template>
  <div>
    <h2>{{ props.game.name }}</h2>
    <div>{{  props.game.txt }}</div>
    <h3>Nos talents</h3>
    <ul>
      <li v-for="player in props.game.players" :key="player">{{ player }}</li>
    </ul>
    <h3>Palmarès</h3>
    <ul>
      <li v-for="played in props.game.pastTournaments" :key="played.name">{{ played.year }}: place {{played.place}} de la {{ played.name }} en {{played.category.toLowerCase()}}</li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  game: Object
})
</script>

<style lang="scss" scoped>

</style>