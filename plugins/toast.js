import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(Toast, {
        hideProgressBar : true,
        transition: "Vue-Toastification__fade",
        showCloseButtonOnHover: true,
        timeout: 2000,
        position: "bottom-center",
        filterToasts: toasts => {
            // Keep track of existing types
            const types = {};
            return toasts.reduce((aggToasts, toast) => {
            // Check if type was not seen before
            if (!types[toast.type]) {
                aggToasts.push(toast);
                types[toast.type] = true;
            }
            return aggToasts;
            }, []);
        }
    });
  })