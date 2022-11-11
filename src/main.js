import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vuesax from 'vuesax'

import App from './App.vue'
import router from './router'

import 'vuesax/dist/vuesax.css'
import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Vuesax)

app.mount('#app')
