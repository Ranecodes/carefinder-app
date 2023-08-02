import { navigateTo } from "nuxt/app";

export default defineNuxtRouteMiddleware( ( ) => {
    const user = useSupabaseUser();
    if (!user.value) {
        return navigateTo("/")
    }
});