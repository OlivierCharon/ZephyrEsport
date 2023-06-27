<template>
    <h1>CODEINGAME</h1>
    <button @click="toast('tadaaaa')">làà</button>
</template>

<script setup>
import { useToast } from "vue-toastification";

const toast = useToast();
console.log("tata");
</script>

<style>
</style>