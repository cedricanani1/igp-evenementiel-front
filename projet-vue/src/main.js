import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import $ from 'jquery'
import VueSweetalert2 from 'vue-sweetalert2'
// import "../src/components/axios.js"
import "bootstrap"
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

createApp(App).use(store).use(router).use(jQuery).use(VueSweetalert2).use(VueLoading).mount('#app') 

