import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './mock' // 引入 Mock 服务

const app = createApp(App)
app.use(router)
app.mount('#app')
