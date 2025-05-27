import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css';
import './assets/base.css';
import { typewriter } from './typewriter.js';




const app = createApp(App)



app.use(router) 
app.directive('typewriter', typewriter);
app.mount('#app')
