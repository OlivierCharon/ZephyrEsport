<template>
    <div class="flex flex-col justify-between">
        <h2>Nos joueurs</h2>
        <div class="flex flex-row justify-around">
            <div v-for="player in props.players" :key="player">
                <span>{{ player }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        players: Array
    })
    console.log(props.players)
</script>

<style>

</style>