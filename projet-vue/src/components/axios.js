import axios from 'axios'

// axios.defaults.baseURL = 'https://logistique-backend.igp-ci.com/';
axios.defaults.headers.common['Authorization'] ='Bearer ' + localStorage.getItem('token');