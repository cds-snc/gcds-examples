import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('gcds'),
          // Optional: if also using other custom components that use the `-` pattern, you may use the following:
          // isCustomElement: (tag) => tag.includes('-'),
        },
      },
    }),
  ],
});
