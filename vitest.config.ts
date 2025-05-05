import { defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
  test: {
    exclude: ['e2e', 'e2e/**', 'node_modules', 'dist'],
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./tests/setup.ts'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})