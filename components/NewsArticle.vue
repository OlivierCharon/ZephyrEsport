<template>
    <div class="mx-24 my-10 text-gray-50 p-4 flex flex-row items-center justify-around bg-zpr_purple-900 shadow-md">
        <nuxt-link :to='link'>
            <img class="max-w-[200px]" src="@/assets/img/logo_short.png" alt="">
        </nuxt-link>

        <p class="w-[75%]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum ratione iure dicta quisquam fugit et illo tempora eos, assumenda, hic, officiis maiores laudantium ducimus consectetur esse laboriosam odio provident beatae nemo explicabo. Quis odio id velit animi, molestiae deserunt possimus voluptatum excepturi voluptatem dignissimos repellat nam laudantium eius nemo quam expedita! Accusamus tempore a consequuntur neque praesentium corporis non nesciunt quia porro suscipit cumque deleniti, quibusdam deserunt vitae sit. Asperiores, veritatis natus. Aspernatur eum ullam delectus, deleniti eius suscipit aut mollitia assumenda. Similique non nihil et cumque, obcaecati voluptate eligendi quibusdam blanditiis alias tempora tempore optio. Ullam, repellendus, aperiam fugit natus optio voluptatibus hic molestias consequatur rerum assumenda sequi voluptates expedita facere adipisci, distinctio voluptatem explicabo quis deserunt placeat itaque odio porro deleniti labore nihil? Delectus, ut totam.</p>
    </div>
</template>

<script setup>
    const props = defineProps({
        article: Object
    })
    const link = ref(`/article/${props.article.kind}/details/${props.article.id}`)
</script>

<style>

</style>