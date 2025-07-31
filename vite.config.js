import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.ico',
        'apple-touch-icon.png',
        'favicon-16x16.png',
        'favicon-32x32.png'
      ],
      manifest: {
        name: 'Calculator App',
        short_name: 'Calculator',
        description: 'A simple calculator built with React and Vite',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/android-chrome-192x192',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/android-chrome-512x512',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
