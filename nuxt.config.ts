// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        "@nuxtjs/tailwindcss",
        "@nuxt/image",
        "dayjs-nuxt",
        [
            "@pinia/nuxt",
            {
                autoImports: ["defineStore", "acceptHMRUpdate", "storeToRefs"],
            },
        ],
    ],
    css: ["~/assets/css/main.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    dayjs: {
        locales: ["en", "fr"],
        plugins: ["relativeTime", "utc", "timezone"],
        defaultLocale: "en",
        defaultTimezone: "America/New_York",
    },
    runtimeConfig: {
        public: {
            API_BASE_URL: process.env.API_BASE_URL,
        },
    },
    image: {
        provider: "imagekit",
        imagekit: {
            baseURL: process.env.IMAGE_KIT_URL,
        },
    },
    imports: {
        dirs: ["stores"],
    },
    build: {
        // vue-toastification - old commonjs module
        transpile: ["vue-toastification"],
    },
});
