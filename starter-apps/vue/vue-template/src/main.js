import '@gcds-core/components-vue/gcds.css';
import '@gcds-core/css-shortcuts/dist/gcds-css-shortcuts.min.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { GcdsComponents } from '@gcds-core/components-vue';


import App from './App.vue'
import i18n from '@/i18n/index.js';
import router from './router'

// const app = createApp(App)
const app = createApp(App);
app.use(GcdsComponents)
app.use(i18n.i18n)
app.use(createPinia())
app.use(router)

app.mount('#app')
