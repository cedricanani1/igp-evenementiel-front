import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import SingleProduct from '../views/SingleProduct.vue'
import Produits from "../views/Produits.vue"
import Commnander from "../views/Commander.vue"
import Contacts from "../views/Contacts.vue"

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/single-product/:product/:id/:image/:prix',
    alias: '/singleProduct/:product/:id/:image/:prix',
    name: 'SingleProduct',
    component: SingleProduct,
  },
  {
    path: '/produits',
    name: 'Produits',
    component: Produits,
  },
  {
    path: '/commander',
    name: 'Commander',
    component: Commnander
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
