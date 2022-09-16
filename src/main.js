import { createApp } from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
import App from './App.vue';
import router from './router/router';
import 'material-icons/iconfont/material-icons.css';

const app = createApp(App);

app.use(VueAxios, axios);
app.use(router);
app.mount('#app');
