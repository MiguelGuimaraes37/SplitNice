import { createApp } from 'vue';
import App from '@/pages/App.vue';
import '@/assets/main.css';
import router from './router.js';

createApp(App).use(router).mount('#app');
