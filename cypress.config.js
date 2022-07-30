const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: false,
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'http://localhost:8000',
  },
})
