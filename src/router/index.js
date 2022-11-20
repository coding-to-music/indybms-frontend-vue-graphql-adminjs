import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Events from '../views/Events.vue'
import MyEvents from '../views/MyEvents.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import RegisterEvent from '../views/RegisterEvent.vue'
import AddEvent from '../views/AddEvent.vue'

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
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/registerevent',
      name: 'registerevent',
      component: RegisterEvent
    },
    {
      path: '/addevent',
      name: 'addevent',
      component: AddEvent
    },
  ]
})

export default router
