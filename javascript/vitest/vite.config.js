import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    includeSource: ['src/**/*.{js,ts}'],
    coverage: {
      provider: 'v8', // or 'v8'
      reporter: ['text', 'html'],

    },
  },
})
