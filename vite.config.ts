import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
        '@': path.resolve(__dirname, './src'),
        '@components': path.resolve(__dirname, './src/components'),
        '@project': path.resolve(__dirname, './src/project'),
        '@routes': path.resolve(__dirname, './src/routes'),
        '@stores': path.resolve(__dirname, './src/stores'),
        '@views': path.resolve(__dirname, './src/views')
    }
  }
})
