import 'bs-stepper/dist/css/bs-stepper.min.css'
import 'tiny-slider/dist/tiny-slider.css'
import 'glightbox/dist/css/glightbox.min.css'
import 'aos/dist/aos.css'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import 'bootstrap/scss/bootstrap.scss'
import '@/assets/scss/style.scss'
import i18n from './plugins/i18n'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createBootstrap } from 'bootstrap-vue-next'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { FcGoogle } from 'oh-vue-icons/icons'
import App from './App.vue'
import router from './router'
import 'typeface-mulish';





addIcons(FcGoogle)
const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.component('font-awesome-icon', FontAwesomeIcon)
app.component('v-icon', OhVueIcon)
app.use(createBootstrap())
app.use(pinia)
app.use(router)
app.use(i18n)
app.mount('#app')
