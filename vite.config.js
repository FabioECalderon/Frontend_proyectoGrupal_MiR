import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  server: {
    port: process.env.CI ? 5180 : 5173, // Use a different port in CI environment
  },
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
