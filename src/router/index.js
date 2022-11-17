import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Events from '../views/Events.vue'
import MyEvents from '../views/MyEvents.vue'
import Login from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/events',
      name: 'events',
      component: Events
    },
    {
      path: '/myevents',
      name: 'myevents',
      component: MyEvents
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
})

export default router
