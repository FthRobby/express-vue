import { createApp } from 'vue'
import App from './App.vue'

//import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import 'bootstrap/dist/js/bootstrap.min'

//import router
import router from './router'

const app = createApp(App)

//use vue router
app.use(router)

app.mount('#app')
