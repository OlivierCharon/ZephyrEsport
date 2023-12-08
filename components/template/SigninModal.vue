<template>
    <div class="bg-[rgb(0,0,0)] bg-[rgba(0,0,0,0.4)] fixed z-0 left-0 top-0 w-full h-full overflow-auto">
        <div  class="flex items-center justify-center rounded-lg w-1/5 bg-slate-50 m-auto p-3 border-2 border-l-gray-300 border-solid text-center flex-col absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <span class="text-gray-400 text-3xl ml-auto mr-2 font-bold leading-none hover:text-gray-900 focus:text-gray-900 hover:cursor-pointer focus:cursor-pointer fade-transition duration-150" @click="$emit('closeModal')">&times;</span>
            <form class="w-full max-w-sm p-2 relative mb-5">
                <h2 class="block text-gray-700 text-lg font-bold mb-8 uppercase">Créer un compte</h2>
                <div class="md:flex md:items-center mb-6 flex space-x-6 flex space-x-6">
                    <div class="md:w-1/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0" for="inline-email">
                            Adresse email
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-email" type="email" v-model="form.name">
                    </div>
                </div>
                <div class="md:flex md:items-center mb-6 flex space-x-6">
                    <div class="md:w-1/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0" for="inline-full-name">
                            Pseudo
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" v-model="form.name">
                    </div>
                </div>
                <div class="md:flex md:items-center mb-6 flex space-x-6">
                    <div class="md:w-1/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0" for="inline-password">
                            Mot de passe
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" v-model="form.password">
                    </div>
                </div>
                <div class="md:flex md:items-center mb-6 flex space-x-6  md:justify-center">
                    <label class="block text-gray-500 font-bold">
                        <input class="mr-2 leading-tight accent-zpr_purple-600" type="checkbox">
                        <span class="text-sm">
                            S'inscrire à la poulpe-letter
                        </span>
                    </label>
                </div>
                <div class="md:flex md:items-center md:justify-center">
                    <button @click="createUser" class="shadow bg-zpr_purple-800 hover:bg-zpr_purple-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded fade-transition duration-100" type="button">
                        Créer mon compte
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { useToast } from "vue-toastification";
import _ from 'lodash'

// const modal = ref(null)
// onMounted(()=>{
    //     modal.value.focus()
    // })
    
    const runtimeConfig = useRuntimeConfig()
    const errors = ref(null)
    const toast = useToast()
    
    const form = {
        email: null,
        name: null,
        password: null
    }
    
    const createUser = async () => {
        // console.log(runtimeConfig.public.API_BASE_URL)
        
        try {
            const user = await fetch(`${runtimeConfig.public.API_BASE_URL}/register`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify({
                    email: form.email,
                    name: form.name,
                    password: form.password
                })
            })
            .then( res => res.json())
            console.log(user)
            user.success ? toast.success(user.message) : _.each(user.errorList,(error) => toast.error(error[0]))
        }
        catch(error) {
            console.warn(error)
        }
    }
</script>

<style scoped>
</style>