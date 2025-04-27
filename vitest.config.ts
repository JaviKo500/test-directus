import { defineConfig } from 'vitest/config'
import { resolve } from 'path';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'dist/',
        'extensions/',
      ]
    },
  },
  resolve: {
    alias: {
      '@directus/api': resolve(__dirname, 'node_modules/@directus/api')
    }
  },
})