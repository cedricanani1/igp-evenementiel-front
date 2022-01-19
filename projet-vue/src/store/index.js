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
    items: state => id => {
      return state.products.find(item => item.id === id);
    },
    

  },
  mutations: {
   
    
  },
  actions: {
   
    // getProducts({commit}){
    //   axios.get('http://192.168.1.4:8006/api/products')
    //       .then(reponse => {
    //         commit('SET_PRODUCT',reponse.data)
    //       })
    // }
   

  },
  modules: {
  }
})
