import { createRouter, createWebHistory } from "vue-router";
import DetailProject from "@views/DetailProject.vue";
import Home from "@views/Home.vue";
import { loadingState } from "@stores/loading";

const routes = [
    {path: '/', name: 'Home', component: Home},
    { path: '/:id', name: 'Detail', component: DetailProject, props: true },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
    loadingState.isLoading = true
    next()
})

router.afterEach(() => {
    setTimeout(() => {
        loadingState.isLoading = false
    }, 500);
})

export default router