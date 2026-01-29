import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dns from 'node:dns'
import path from 'node:path'
import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Show `localhost` rather than `127.0.0.1`
// https://vitejs.dev/config/server-options.html#server-host
dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // https://vuejs.org/guide/extras/web-components.html#using-custom-elements-in-vue
          // treat all tags with a dash as custom elements
          isCustomElement: tag => tag.includes('-'),
        },
      },
    }),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@socialgouv/e2esdk-client': path.resolve(
        __dirname,
        '../../packages/client/src'
      ),
      '@socialgouv/e2esdk-devtools': path.resolve(
        __dirname,
        '../../packages/devtools/src'
      ),
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
