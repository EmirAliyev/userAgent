import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)
app.use(store).use(router).use(VueAxios, axios).mount('#app')
