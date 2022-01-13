import { createStore } from 'vuex'
import axios from 'axios'


export default createStore({
  state: {
    token: localStorage.getItem('token')
  },
  mutations: {
  },
  actions: {

  },
  modules: {
  }
})
