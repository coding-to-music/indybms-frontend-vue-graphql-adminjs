import { createRouter, createWebHistory } from "vue-router";
import index from "../views/index.vue";
import my_events from "../views/user/my_events.vue";
import login from "../views/login.vue";
import register from "../views/register.vue";
import search_list from "../views/search_list.vue";
import category_list from "../views/category_list.vue";
import register_for_event from "../views/events/register_for_event.vue";
import add_event from "../views/events/add_event.vue";
import event_details from "../views/events/event_details.vue";

import { useUserStore } from "../stores/user";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: index,
    },
    {
      path: "/:userid/events",
      name: "my_events",
      component: my_events,
      meta: { requiresAuth: true },
    },
    {
      path: "/login",
      name: "login",
      component: login,
    },
    {
      path: "/register",
      name: "register",
      component: register,
    },
    {
      path: "/events/:id/register",
      name: "register_for_event",
      component: register_for_event,
    },
    {
      path: "/events/add",
      name: "add_event",
      component: add_event,
      meta: { requiresAuth: true },
    },
    {
      path: "/events/:id",
      name: "event_details",
      component: event_details,
    },
    {
      path: "/find",
      name: "find_events",
      component: search_list,
      props: (route) => ({ searchTerm: route.query.searchTerm }),
    },
    {
      path: "/categories/:categoryId",
      name: "category_events",
      component: category_list,
    },
  ],
});

router.beforeEach((to, from) => {
  const userStore = useUserStore();
  if (to.meta.requiresAuth && userStore.token == null) {
    return {
      path: "/",
    };
  }
});

export default router;
