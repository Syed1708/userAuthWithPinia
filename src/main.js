import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
//router
import router from './router/router.js'

// pinia 

const pinia = createPinia()


createApp(App).use(router).use(pinia).mount('#app')
