import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

// Error Routes
import ErrorView from "../views/ErrorView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/:catchAll(.*)",
      component: () => ErrorView,
    },
  ],
});

export default router;
