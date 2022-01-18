import { createStore } from 'vuex'
import axios from 'axios'


export default createStore({
  state: {
    products:[
      {
        id:1,
        libelle:'annanas',
        prix:2000,
        photo:'img.jpg',
        desc:"ceci est un bon produit pour la sante"
      },
        {
        id:2,
        libelle:'BANANE',
        prix:2000,
        photo:'img.jpg',
        desc:"ceci est un bon produit pour la sante"
      },
        {
        id:3,
        libelle:'poids',
        prix:2000,
        photo:'img.jpg',
        desc:"ceci est un bon produit pour la sante"
      },
        {
        id:4,
        libelle:'mais',
        prix:2000,
        photo:'img.jpg',
        desc:"ceci est un bon produit pour la sante"

      },
    ],
    // token:localStorage.getItem('token'),
  },
  getters: {
    products: state =>{
      return state.products;
    }, 
    items: state => id => {
      return state.products.find(item => item.id === id);
    },

  },
  mutations: {
  
    
  },
  actions: {
   

  },
  modules: {
  }
})
