import { createApp } from 'vue'
import App from './App.vue'
import { setupAntd } from './ant-design-vue'
import router from './router'

const app = createApp(App);
app.use(router)
setupAntd(app)
app.mount('#app')
// createApp(App).mount('#app')
