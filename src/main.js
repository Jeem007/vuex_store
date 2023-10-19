import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/lara-light-indigo/theme.css";
import App from './App.vue'
import './assets/tailwind.css'

/* Store */
import store from './store/index'




const app = createApp(App);
app.use(PrimeVue);
app.use(store);
app.mount('#app');



