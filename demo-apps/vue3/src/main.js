import { createApp } from 'vue';
import { GcdsComponents } from '@gcds-core/components-vue';

import '@gcds-core/components-vue/gcds.css';
import './style.css';
import App from './App.vue';

createApp(App).use(GcdsComponents).mount('#app');

