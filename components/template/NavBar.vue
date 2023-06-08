<template>
    <header
    class="sticky top-0 z-50 items-center shadow-md"
    >
    <nav class="bg-zpr_pink-900 border-zpr_purple-900 dark:bg-zpr_purple-900 shadow-md sticky w-full border-b">
        <div class="flex flex-wrap items-center justify-between mx-12 p-5">
            <NuxtLink to="/" class="flex items-center">
                <img src="/img/logo_short.png" class="h-14 mr-3" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Zephyr Esport</span>
            </NuxtLink>
            <div class="flex items-center md:order-2">
                <button type="button" class="relative flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom" @click="hiddenDropdown=!hiddenDropdown">
                    <span class="sr-only">Open user menu</span>
                    <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/logo.svg" alt="user photo">
                    <!-- Dropdown menu -->
                    <div :class="{'hidden':hiddenDropdown,}" class="absolute -left-32 top-10 z-50 text-base list-none bg-zpr_pink-second divide-y divide-gray-100 rounded-lg shadow dark:bg-zpr_purple-second dark:divide-gray-600" id="user-dropdown">
                        <div class="px-4 py-3">
                            <span class="block text-sm font-bold text-gray-900 dark:text-zpr_purple-900">Bonnie Green</span>
                            <span class="block text-sm  text-gray-500 truncate dark:text-zpr_pink-900">name@flowbite.com</span>
                        </div>
                        <ul class="py-2" aria-labelledby="user-menu-button">
                            <li>
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-zpr_pink-second dark:text-zpr_purple-900">Profil</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-zpr_pink-second dark:text-zpr_purple-900">Adhésion</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-zpr_pink-second dark:text-zpr_purple-900">Déconnexion</a>
                            </li>
                        </ul>
                    </div>
                </button> 
                <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-zpr_pink-900 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
            <div class="items-center hidden justify-between w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-zpr_pink dark:bg-zpr_purple-900 dark:border-gray-700">
                    <li>
                        <NuxtLink to="/" class="block py-2 pl-3 uppercase mx-2 pr-4 text-gray-900 rounded md:p-0 dark:text-white dark:hover:text-zpr_pink-second  dark:border-gray-700">Accueil</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/esport" class="block py-2 pl-3 uppercase mx-2 pr-4 text-gray-900 rounded md:p-0 dark:text-white dark:hover:text-zpr_pink-second  dark:border-gray-700">Esport</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/community" class="block py-2 pl-3 uppercase mx-2 pr-4 text-gray-900 rounded md:p-0 dark:text-white dark:hover:text-zpr_pink-second  dark:border-gray-700" >Communauté</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/organisation" class="block py-2 pl-3 uppercase mx-2 pr-4 text-gray-900 rounded md:p-0 dark:text-white dark:hover:text-zpr_pink-second  dark:border-gray-700" >Association</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/contact" class="block py-2 pl-3 uppercase mx-2 pr-4 text-gray-900 rounded md:p-0 dark:text-white dark:hover:text-zpr_pink-second  dark:border-gray-700" >Nous contacter</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
</template>

<script setup>
import {ref} from 'vue'

let hiddenDropdown = ref(true)
</script>

<style>
    nav ul .router-link-exact-active{
        color: #E2267B;
        text-shadow: 1px 1px 2px #0e0e0e55;
    }
</style>