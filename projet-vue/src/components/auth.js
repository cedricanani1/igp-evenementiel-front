import axios from 'axios'

axios.defaults.baseURL = 'https://igp-auth.lce-ci.com/api/auth';
axios.defaults.headers.common['Authorization'] ='Bearer ' + localStorage.getItem('token');