import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import jQuery from 'jquery'
// import "../src/components/axios.js"

import "bootstrap"

createApp(App).use(store).use(router).use(jQuery).mount('#app') 

