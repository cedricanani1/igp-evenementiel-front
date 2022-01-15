import axios from 'axios'

axios.defaults.baseURL = 'http://192.168.1.11:8004/';
axios.defaults.headers.common['Authorization'] ='Bearer ' + localStorage.getItem('token');