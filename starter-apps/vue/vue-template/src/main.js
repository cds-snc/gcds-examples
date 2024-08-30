import '@cdssnc/gcds-components-vue/gcds.css';
import '@cdssnc/gcds-utility/dist/gcds-utility.min.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { GcdsComponents } from '@cdssnc/gcds-components-vue';


import App from './App.vue'
import i18n from './i18n';
import router from './router'

// const app = createApp(App)
const app = createApp(App);
app.use(GcdsComponents)
app.use(i18n.i18n)
app.use(createPinia())
app.use(router)

app.mount('#app')
