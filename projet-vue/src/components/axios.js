import axios from 'axios'
import store from '@/store'

axios.defaults.baseURL = 'http://192.168.1.7:8004/';
axios.defaults.headers.common['Authorization'] ='Bearer ' + localStorage.getItem('token');