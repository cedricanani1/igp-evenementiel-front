import axios from 'axios'

axios.defaults.baseURL = 'https://igp-event-backend.lce-ci.com/';
axios.defaults.headers.common['Authorization'] ='Bearer ' + localStorage.getItem('token');