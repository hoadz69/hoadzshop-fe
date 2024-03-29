import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18n from './locales/i18n'
const app = createApp(App)

app.use(createPinia())
app.use(router).use(i18n)

app.mount('#app')
