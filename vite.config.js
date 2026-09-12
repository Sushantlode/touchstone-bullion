import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/touchstone-bullion/',
  server: {
    port: 5173,
    host: true,
    allowedHosts: [
      'trigger-attempt-competitions-native.trycloudflare.com',
      '.trycloudflare.com',
    ],
    watch: {
      ignored: ['**/assestes/**', '**/assestes'],
    },
  },
})
