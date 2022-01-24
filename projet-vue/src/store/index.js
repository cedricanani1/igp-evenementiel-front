import { createStore } from 'vuex'
import axios from 'axios'


export default createStore({
  state: {
    // products:[],
    // token:localStorage.getItem('token'),
    user:JSON.parse(localStorage.getItem("user")),
    cart:[],
    // infoCommande:JSON.parse(localStorage.getItem("info")),
    // token:localStorage.getItem("token"),
    // cartItemCount:0,
  },
  getters: {

    
  },
  mutations: {

  },
  actions: {
  
  },
  modules: {
  }
})
