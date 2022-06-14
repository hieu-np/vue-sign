import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import router from './router'
import TabMenu from 'primevue/tabmenu';
import Card from 'primevue/card';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css' 
import 'primeflex/primeflex.css'

createApp(App)
.use(PrimeVue)
.use(router)
.component('TabMenu', TabMenu)
.component('Card', Card)
.component('Button', Button)
.component('InputText', InputText)
.mount('#app')
