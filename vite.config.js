import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'



// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: process.env.CI ? 5180 : 5173,},// Use a different port in CI environment
  plugins: [react()],
})
