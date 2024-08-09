// import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import router from '@/router';

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(bootstrap).use(router).mount('#app')
