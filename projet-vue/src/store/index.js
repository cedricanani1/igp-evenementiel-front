import { createStore } from 'vuex'
import axios from 'axios'


export default createStore({
  state: {
    products:[],
    // token:localStorage.getItem('token'),
    user:JSON.parse(localStorage.getItem("user")),
    cart:[],
    infoCommande:JSON.parse(localStorage.getItem("info")),
    // cartItemCount:0,
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
    }, 
    // SET_ID(state,id){
    //   let itemsTrouver={};
    //   state.products.forEach((items)=>{
    //     if(id == items.id){
    //       itemsTrouver = items;
    //     }
    //   })
    //   state.products=itemsTrouver;
    // },
    ADD_TO_CART(state,{items,quantity}) {
      state.cart.push({items,quantity})
    }
  },
  actions: {
   
    obtenirProduits({commit}){
      axios.get('https://igp-event-backend.lce-ci.com/api/products')
          .then(reponse => {
            commit('SET_PRODUCT',reponse.data.data)
          })
    }, 
    addProductToCart({commit},{items,quantity}){
      commit('ADD_TO_CART',{items,quantity});
    },
    
  
    
   

  },
  modules: {
  }
})
