import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // Questa funzione permette tutte le richieste senza controllo host
    host: true,
    allowedHosts: [
      // puoi mettere anche 'all', ma a volte serve esplicitare 'localhost' e il wildcard
      'localhost',
      '127.0.0.1',
      '.ngrok-free.app'  // wildcard per tutti i sottodomini ngrok
    ],
  }
})
