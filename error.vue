<template>
    <div class="flex flex-col items-center justify-around py-[17%] h-screen">
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center" role="alert">
            <h1 class="text-2xl font-bold">{{ error.statusCode }}</h1>
            <strong class="font-bold pr-1">Eh vous!!</strong>
            <span class="block sm:inline">{{ error.statusMessage }}</span>
        </div>
        <button @click="navigateTo('/')" class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">
            Revenir sur le site
        </button>
    </div>
</template>

<script setup>
    const error = useError()
</script>

<style>

</style>