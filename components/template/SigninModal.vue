<template>
    <div class="bg-[rgb(0,0,0)] bg-[rgba(0,0,0,0.4)] fixed z-50 left-0 top-0 w-full h-full overflow-auto">
        <div  class="flex items-center justify-center rounded-lg w-2/5 bg-slate-50 m-auto p-3 border-2 border-l-gray-300 border-solid text-center flex-col absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <span class="text-gray-400 text-3xl ml-auto mr-2 font-bold leading-none hover:text-gray-900 focus:text-gray-900 hover:cursor-pointer focus:cursor-pointer fade-transition duration-150" @click="$emit('closeModal')">&times;</span>
            <form class="w-full px-20 p-2 relative mb-5" @submit.prevent="createUser">
                <!-- <input type="hidden" name="_token" :value="csrf"> -->
                
                <h2 class="block text-gray-700 text-lg font-bold mb-8 uppercase">Créer un compte</h2>
                <div class="md:flex md:items-center mb-6 flex space-x-6">
                    <div class="md:w-1/3">
                        <label class="block text-lg text-gray-500 font-bold md:text-right mb-1 md:mb-0" for="inline-email">
                            Adresse email
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-email" type="email" v-model="form.email">
                        <p class="text-red-600 text-left text-xs" v-if="error.email">{{ error.email }}</p>
                    </div>
                </div>
                <div class="md:flex md:items-center mb-6 flex space-x-6">
                    <div class="md:w-1/3">
                        <label class="block text-lg text-gray-500 font-bold md:text-right mb-1 md:mb-0" for="inline-full-name">
                            Pseudo
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" v-model="form.name">
                        <p class="text-red-600 text-left text-xs" v-if="error.name">{{ error.name }}</p>
                    </div>
                </div>
                <div class="md:flex md:items-center mb-6 flex space-x-6">
                    <div class="md:w-1/3">
                        <label class="block text-lg text-gray-500 font-bold md:text-right mb-1 md:mb-0" for="inline-password">
                            Mot de passe
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" v-model="form.password">
                        <p class="text-red-600 text-left text-xs" v-if="error.password">{{ error.password }}</p>
                    </div>
                </div>
                <div class="md:flex md:items-center mb-6 flex space-x-6">
                    <div class="md:w-1/3">
                        <label class="block text-lg text-gray-500 font-bold md:text-right mb-1 md:mb-0" for="inline-pwd-check">
                            Confirmer le mot de passe
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-pwdCheck" type="password" v-model="form.pwdCheck">
                        <p class="text-red-600 text-left text-xs" v-if="error.pwdCheck">{{ error.pwdCheck }}</p>
                    </div>
                </div>
                <div class="md:flex md:items-center mb-6 flex space-x-6  md:justify-center">
                    <label class="block text-lg text-gray-500 font-bold">
                        <input class="mr-2 leading-tight accent-zpr_purple-600" type="checkbox">
                        <span class="text-sm">
                            S'inscrire à la poulpe-letter
                        </span>
                    </label>
                </div>
                <div class="md:flex md:items-center md:justify-center">
                    <input type="submit" class="shadow bg-zpr_purple-800 hover:bg-zpr_purple-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded fade-transition duration-100" value="Créer mon compte" />
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
    import { useToast } from "vue-toastification";
    import _ from 'lodash'
    const auth = useAuthStore()
    const userCookie = useCookieFetch("user")
    const router = useRouter()
    const toast = useToast()
    // const toastError = ref(null)

    const form = ref({
        email: null,
        name: null,
        password: null,        
        pwdCheck: null,
    })

    const error = ref({
        email: null,
        name: null,
        password: null,        
        pwdCheck: null,
    })

    const createUser = async () => {
        error.value = {
            email: null,
            name: null,
            password: null,
            pwdCheck: null,
        }
        
        _.each(form.value,(value,field)=>{
            _.isEmpty(value)?error.value[field]='Ce champs est obligatoire':''
        })
        
        form.value.password === form.value.pwdCheck?'':error.value.pwdCheck='Les mots de passe ne correspondent pas' 
        
        // If we got any error, we stop the submition
        if(!_.isEmpty(_.filter(error.value, (field) => field != null )))
            return
        
        try {
            const response = await auth.signin(form.value)
            if(response.success){
                toast.success(response.message)
                setTimeout(() => {
                    userCookie.value = {...response.user??null}
                    router.go()
                }, 3000);
            } else {
                // toastError.value = null
                // _.each(data.value.errorList,(apiError) => _.each(error.value,(errorType) => apiError.toLowerCase().includes(errorType.toLowerCase())?error.value[errorType.toLowerCase()] = 'Ce champs doit être renseigné correctement':''))
                toast.error('Merci de vérifier les données renseignées')
            }
        }
        catch(error) {
            console.warn(error)
        }
    }
</script>

<style scoped>
</style>