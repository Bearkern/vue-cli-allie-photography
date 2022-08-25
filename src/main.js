import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router/router';

const app = createApp(App);

app.use(axios, VueAxios);
app.use(router);
app.mount('#app');
