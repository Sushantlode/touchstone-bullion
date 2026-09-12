import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Touchstone_Bullion_React_Vite_MultiScreen_10_10/',
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
