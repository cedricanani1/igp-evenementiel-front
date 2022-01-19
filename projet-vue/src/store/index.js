import { createStore } from 'vuex'
import axios from 'axios'


export default createStore({
  state: {
    products:[],
    // token:localStorage.getItem('token'),
    user:JSON.parse(localStorage.getItem("user")),
  },
  getters: {
    products: state =>{
      return state.products;
    }, 
    // items: state => id => {
    //   return state.products.find(item => item.id === id);
    // },
       items: state => id => {
      return state.products.find(item => item.id === id);
    },
    
  },
  mutations: {

    SET_PRODUCT(state, products) {
      state.products = products;
    }
  },
  actions: {
   
    obtenirProduits({commit}){
      axios.get('https://igp-event-backend.lce-ci.com/api/products')
          .then(reponse => {
            commit('SET_PRODUCT',reponse.data.data)
          })
    }, 
   

  },
  modules: {
  }
})
