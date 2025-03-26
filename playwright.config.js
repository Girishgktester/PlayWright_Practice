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
  use: {
    browserName: 'chromium',   // Use Chromium engine for Edge
    headless : false,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    retries : 2
  },
});

export default config;
