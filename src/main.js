import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import AOS from 'aos';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'aos/dist/aos.css';


const app = createApp(App)
AOS.init();
app.config.globalProperties.$http = axios
app.use(router)
app.mount('#app')
