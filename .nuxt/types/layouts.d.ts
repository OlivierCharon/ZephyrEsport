import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "admin" | "default" | "shop"
declare module "/home/ochar/Perso/ZephyrEsport/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}