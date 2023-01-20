//creating an instance of vue from the vue folder
import { createApp } from 'vue';
//creating an instance of pinia from the pinia folder (data stores)
import { createPinia } from 'pinia';

import App from './App.vue';
//loading from the router folder, assumes there is an index file
import router from './router';

// This is where styles are being brought in
import './assets/main.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
