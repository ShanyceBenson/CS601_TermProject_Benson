import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/CS601_TermProject_Benson",
  plugins: [react()],
})
