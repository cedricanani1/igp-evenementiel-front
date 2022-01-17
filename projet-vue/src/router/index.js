import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import SingleProduct from '../views/SingleProduct.vue'
import Produits from "../views/Produits.vue"
import Commnander from "../views/Commander.vue"
import Contacts from "../views/Contacts.vue"
import Login from "../views/Login.vue"
import Inscription from "../views/Inscription.vue"
import AproposDeNous from "../views/AproposDeNous.vue"
// import Reset from "../views/Reset.vue"
import Modify from "../views/Modify.vue"


const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/single-product/:id',
    alias: '/singleProduct/:id',
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
  },{
    path:'/login',
    name:'Login',
    component:Login
  },
  {
    path:'/register',
    name:'Inscription',
    component:Inscription
  },
  {
    path:'/about',
    name:'AproposDeNous',
    component:AproposDeNous
  },
  // {
  //   path:'/reset',
  //   name:'Reset',
  //   component:Reset
  // },
  {
    path:'/modify',
    name:'modify',
    component:Modify
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
