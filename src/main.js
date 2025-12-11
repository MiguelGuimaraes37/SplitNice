import { createApp } from 'vue';
import App from '@/pages/App.vue';
import '@/assets/main.css';
import router from './router.js';
import store from '@/store/index.js';

const app = createApp(App);

app.use(store);
app.use(router);

app.mount('#app');
