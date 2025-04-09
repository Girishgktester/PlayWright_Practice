// @ts-check
import { defineConfig, devices } from '@playwright/test'

const config = defineConfig({
  testDir: './tests',
  testIgnore: [
    '**/ApiIntegration.spec.js',
    '**/practice.spec.js',
  ],
  timeout: 40 * 1000,
  fullyParallel: false,
  expect: {
    timeout: 40 * 1000,
  },
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
  use: {
    browserName: 'chromium',
    headless: false,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    retries: 2,
    video: 'retry-with-video',
  },
})

export default config
