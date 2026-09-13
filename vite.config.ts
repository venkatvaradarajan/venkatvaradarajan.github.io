import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// This repo is a GitHub *user* Pages site (venkatv.github.io), which is served
// from the domain root, so base stays "/". If you ever move this to a
// project repo (served at username.github.io/repo-name), change base to
// "/repo-name/".
export default defineConfig({
  plugins: [react()],
  base: '/',
})
