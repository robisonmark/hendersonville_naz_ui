import { createRouter, createWebHistory } from "vue-router";

// Standard Routes
import HomeView from "../views/HomeView.vue";
import EventView from "../views/EventView.vue";

// Static Content Routes
import StyleGuideView from "../views/StyleGuide.vue";

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
      path: "/events",
      name: "events",
      component: EventView,
    },
    {
      path: "/style_guide",
      name: "styleGuide",
      component: StyleGuideView,
    },
    {
      path: "/:catchAll(.*)",
      component: () => ErrorView,
    },
  ],
});

export default router;
