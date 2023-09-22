import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

const app = createApp(App)

app.use(router)

app.mount('#app')

axios.interceptors.request.use(  config => {    
  if (localStorage.getItem('Authorization'))
   {      
      config.headers.Authorization = localStorage.getItem('Authorization');    
   }    
  return config;  },  
  error => {    return Promise.reject(error);  
});