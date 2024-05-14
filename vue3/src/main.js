import { createApp } from 'vue';
// import {
//   applyPolyfills,
//   defineCustomElements,
// } from '@cdssnc/gcds-components-vue/loader';
import { GcdsComponents } from '@cdssnc/gcds-components-vue';

import '@cdssnc/gcds-components-vue/gcds.css';
import './style.css';
import App from './App.vue';

// applyPolyfills().then(() => {
//   defineCustomElements();
// });

// createApp(App).mount('#app');
createApp(App).use(GcdsComponents).mount('#app');

