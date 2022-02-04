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
import ListCommandes from "../views/ListCommandes.vue"
import Modify from "../views/Modify.vue"
import DetailCommandes from "../views/DetailCommandes.vue"
import store from '@/store'


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
    // beforeEnter: (to, from, next) => {
    //   if(store.state.token === null) next({name:'Login'})
    //   else next()
    // }
  },
  {
    path: '/produits',
    name: 'Produits',
    component: Produits,
  },
  {
    path: '/commander',
    name: 'Commander',
    component: Commnander,
     beforeEnter: (to, from, next) => {
      if(store.state.token === null) next({name:'Login'})
      
      else next()
    }
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  },{
    path:'/login',
    name:'Login',
    component:Login,
    // beforeEnter: (to, from, next) => {
    //   if(store.state.token === null) next({name:'Login'})
    //   else next('/commander')
    // }
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
  {
    path:'/commande',
    name:'commande',
    component:ListCommandes,
    beforeEnter: (to, from, next) => {
      if(store.state.token === null) next({name:'Login'})
      else next()
    },
  },
  {
    path:'/detailcommande',
    name:'detailcommande',
    component:DetailCommandes,
    beforeEnter: (to, from, next) => {
      if(store.state.token === null) next({name:'Login'})
      else next()
    }
  },
  {
    path:'/modify',
    name:'modify',
    component:Modify,
    beforeEnter: (to, from, next) => {
      if(store.state.token === null) next({name:'Login'})
      else next()
    }
  },
  // {
  //   path:'/listcommnade',
  //   name:'listcommande',
  //   component:ListCommandes
  // }



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
