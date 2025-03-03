import './assets/main.css'
import './tailwind.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import { createI18n } from 'vue-i18n'
import messages from './language/index'

const app = createApp(App)

const i18n = createI18n({
  legacy: false,
  locale: 'zh',
  fallbackLocale: 'en',
  messages: messages,
})

app.use(store)
app.use(router)
app.use(i18n)

app.mount('#app')
