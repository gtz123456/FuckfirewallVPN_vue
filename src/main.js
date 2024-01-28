import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.mount('#app')

axios.interceptors.request.use(  config => {    
  if (localStorage.getItem('Authorization'))
   {      
      config.headers.Authorization = localStorage.getItem('Authorization');    
   }    
  return config;  },  
  error => {    return Promise.reject(error);  
});