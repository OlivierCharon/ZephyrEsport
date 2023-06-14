<template>
    <header class="sticky top-0 z-50 items-center shadow-md">
        <nav class="flex lg:items-center justify-between flex-col bg-zpr_pink-900 dark:bg-zpr_purple-900 shadow-md sticky w-full border-b lg:flex-row border-zpr_purple-900 lg:h-fit" :class="{'h-screen':showMobileMenu}">
            <div class="flex w-full h-fit p-4 lg:w-fit justify-between  items-center shrink-0">
                <div class="flex items-center flex-shrink-0  text-white">
                    <NuxtLink to="/" class="flex items-center">
                        <nuxt-img provider="imagekit" src="/zephyr_logo.png" class="h-14 mr-3 max-w-[4rem]" alt="Flowbite Logo" />
                        <span class="font-semibold text-[1rem] tracking-tightself-center whitespace-nowrap dark:text-white">Zephyr Esport</span>
                    </NuxtLink>
                </div>
                <div class="block lg:hidden" @click="showMobileMenu = !showMobileMenu">
                    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
            </div>
            <div class="uppercase flex whitespace-nowrap flex-col place-content-center text-2xl lg:flex-grow  space-y-12 main-menu flex-grow lg:h-min lg:inline-block lg:space-y-0 lg:flex-row lg:text-center lg:space-x-[2%] lg:justify-center
            lg:text-base" :class="{'hidden':!showMobileMenu}">
                <nuxt-link to="/" class="text-zpr_purple-second hover:text-white">Accueil</nuxt-link>
                <nuxt-link to="/esport" class="text-zpr_purple-second hover:text-white">Esport</nuxt-link>
                <nuxt-link to="/community" class="text-zpr_purple-second hover:text-white">Communauté</nuxt-link>
                <nuxt-link to="/organisation" class="text-zpr_purple-second hover:text-white">Association</nuxt-link>
                <nuxt-link to="/contact" class="text-zpr_purple-second hover:text-white">Nous contacter</nuxt-link>
            </div>
            <div class="space-x-[1vw] h-fit p-4 lg:inline-block text-center text-lg" :class="{'hidden':!showMobileMenu}">
                <nuxt-link to="/login" class="inline-block text-sm px-4 py-2 leading-none border rounded whitespace-nowrap text-zpr_purple-second border-white hover:text-zpr_pink-second mt-4 lg:mt-0 uppercase w-36">Se connecter</nuxt-link>
                <nuxt-link to="/sign-in" class="inline-block text-sm py-2 leading-none border rounded whitespace-nowrap text-zpr_pink-900 border-white hover:border-transparent hover:text-zpr_purple-900 bg-white mt-4 lg:mt-0 uppercase w-36">Créer un compte</nuxt-link>
            </div>
        </nav>
    </header>
</template>

<script setup>
    const showMobileMenu = ref(false)
</script>

<style scoped>
    nav .main-menu .router-link-exact-active{
        color: #E2267B;
        text-shadow: 1px 1px 2px #0e0e0e55;
    }
</style>