import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VuePaginate from "vue-paginate"
import jQuery from 'jquery'

import "bootstrap"

createApp(App).use(store).use(router).use(jQuery).use(VuePaginate).mount('#app')
