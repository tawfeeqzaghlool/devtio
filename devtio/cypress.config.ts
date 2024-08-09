import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'b6thjx',
  e2e: {
    specPattern: 'cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:4173'
  }
})
