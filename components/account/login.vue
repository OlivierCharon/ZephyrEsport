<template>
    <div class="bg-[rgb(0,0,0)] bg-[rgba(0,0,0,0.4)] fixed z-50 left-0 top-0 w-full h-full overflow-auto">
        <div  class="flex items-center justify-center rounded-lg w-2/5 bg-slate-50 m-auto p-3 border-2 border-l-gray-300 border-solid text-center flex-col absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <span class="text-gray-400 text-3xl ml-auto mr-2 font-bold leading-none hover:text-gray-900 focus:text-gray-900 hover:cursor-pointer focus:cursor-pointer fade-transition duration-150" @click="emit('close-modal')">&times;</span>
            <form class="w-full px-20 p-2 relative mb-5" @submit.prevent="login" data-form-type=”login” >
                <h2 class="block text-gray-700 text-lg font-bold mb-8 uppercase">Se connecter</h2>
                <div class="md:flex md:items-center mb-6 flex space-x-6">
                    <div class="md:w-1/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0" for="inline-full-name">
                            Identifiant
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="login" type="text" v-model="form.login" data-form-type="username">
                        <p class="text-red-600 text-left text-xs" v-if="error.login">{{ error.login }}</p>
                    </div>
                </div>
                <div class="md:flex md:items-center mb-6 flex space-x-6">
                    <div class="md:w-1/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0" for="inline-password">
                            Mot de passe
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" v-model="form.password" data-form-type="password">
                        <p class="text-red-600 text-left text-xs" v-if="error.password">{{ error.password }}</p>
                    </div>
                </div>
                <div class="md:flex md:items-center mb-6 flex space-x-6  md:justify-center">
                    <span class="text-sm text-gray-500 font-bold">
                        Mot de passe oublié
                    </span>
                </div>
                <div class="md:flex md:items-center md:justify-center">
                    <input type="submit" class="shadow bg-zpr_purple-800 hover:bg-zpr_purple-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded fade-transition duration-100" value="Valider"/>
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { useToast } from "vue-toastification";
    import _ from 'lodash'
    const auth:any = useAuthStore()
    const toast = useToast()
    const emit = defineEmits(['close-modal'])

    const form:any = ref({
        login: null,
        password: null
    })

    const error:any = ref({
        login: null,
        password: null
    })

    const login = async () => {
        error.value = {
            login: null,
            password: null,
        }

        _.each(form.value,(value,field)=>{
            _.isEmpty(value)?error.value[field]='Ce champs est obligatoire':''
        })
        
        // If we got any error, we stop the submition
        if(!_.isEmpty(_.filter(error.value, (field) => field != null )))
            return
        
        try {
            const {data}:any = await auth.login(form.value)

            if(data.value.user){
                toast.success(`Bienvenue, ${auth.user.name}!`)
                emit('close-modal')
            } else {
                toast.error('Identifiants incorrectes')
            }
        }
        catch(error) {
            console.warn(error)
        }
    }
</script>

<style scoped>
</style>