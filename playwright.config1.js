// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = defineConfig({
  testDir: './tests',
  timeout: 40 * 1000,
  expect: {
    timeout: 40 * 1000,
  },
  reporter: [['html', { outputFolder: 'playwright-report', open: 'none' }]],

  projects: [
    {
      name: 'Chrome',
      use: {
        browserName: 'chromium',
        headless: false,
        screenshot: 'on',
        trace: 'retain-on-failure',
        ignoreHTTPSErrors: true,
        allowMultipleWindows: true,
        permissions: ['geolocation'],
        locale: 'en-US',
        colorScheme: 'dark',
        video: 'retain-on-failure',
        ...devices['Pixel 5'] //
      },
    },
    {
      name: 'Firefox',
      use: {
        browserName: 'firefox',
        headless: false,
        screenshot: 'on',
        trace: 'retain-on-failure'
      },
    },
    {
      name: 'Safari',
      use: {
        browserName: 'webkit',
        headless: false,
        screenshot: 'on',
        trace: 'retain-on-failure',
        ...devices['iPhone 12 Pro Max'] //
      
      },
    }



  ]

});

export default config;
