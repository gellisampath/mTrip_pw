const { defineConfig, devices } = require('@playwright/test');
const browserConfig = require('./config/browserConfig');
const { parallelWorkers, testTimeout } = require('./config/config');

module.exports = defineConfig({
  testDir: './tests',
  use: {
    headless: browserConfig.browser.headless,
    viewport: browserConfig.browser.viewport,
    video: browserConfig.browser.video,
    screenshot: browserConfig.browser.screenshot,
    trace: 'on',
    ignoreHTTPSErrors: true
  },
  timeout: testTimeout,
  workers: parallelWorkers, // Support parallel execution
  retries: 1,
  reporter: [
    ['list'],
    ['allure-playwright'] // Allure report integration
  ],
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Microsoft Edge',
      use: { ...devices['Desktop Edge'], 
      channel: 'msedge' },
    },
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], 
      channel: 'chrome' },
    },
    
  ],
});