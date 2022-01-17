import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import jQuery from 'jquery'
import StartRating from 'vue-star-rating'
import VueSweetalert2 from 'vue-sweetalert2'
// import "../src/components/axios.js"
import "bootstrap"

createApp(App).use(store).use(router).use(jQuery).use(VueSweetalert2).mount('#app') 

