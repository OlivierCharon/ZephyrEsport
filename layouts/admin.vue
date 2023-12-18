<template>
  <div class="bg-zpr_pink-800">
    <TemplateNavBar />
    <div class="flex text-center justify-center space-x-10 m-16">
        <nuxt-link to="articles">Articles</nuxt-link>
        <nuxt-link to="users">Utilisateurs</nuxt-link>
    </div>
    <slot />
    <LazyTemplateFooterBar />
  </div>
</template>
