import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(Toast, {
        hideProgressBar : true,
        transition: "Vue-Toastification__fade",
        maxToasts: 20,
        newestOnTop: true,
        position: "bottom-center",
        timeout: 5000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: "button",
        icon: true,
        rtl: false,
        toastClassName: 'custom',
        bodyClassName: ['custom'],
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