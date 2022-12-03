import { createRouter, createWebHistory } from "vue-router";
import index from "../views/index.vue";
import events from "../views/events/events.vue";
import my_events from "../views/user/my_events.vue";
import login from "../views/login.vue";
import register from "../views/register.vue";
import register_for_event from "../views/events/register_for_event.vue";
import add_event from "../views/events/add_event.vue";
import event_details from "../views/events/event_details.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: index,
    },
    {
      path: "/events/all",
      name: "all_events",
      component: events,
    },
    {
      path: "/:userid/events",
      name: "my_events",
      component: my_events,
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
    },
    {
      path: "/events/:id",
      name: "event_details",
      component: event_details,
    },
  ],
});

export default router;
