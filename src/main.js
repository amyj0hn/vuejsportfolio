import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// Bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

// Bootstrap icons
import 'bootstrap-icons/font/bootstrap-icons.css'

createApp(App).use(store).use(router).mount('#app')
