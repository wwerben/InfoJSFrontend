import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server: {
    host: "0.0.0.0", // lub true
    port: 3000, // upewnij się, że port jest otwarty
    proxy: {
      '/api': {
        target: 'http://168.119.240.129:1337',
        changeOrigin: true,
        rewrite: p => p.replace(/^\/api/, '')
      }
    }
  },
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
