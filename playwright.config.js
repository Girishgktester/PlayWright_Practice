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
  reporter: [['html', { outputFolder: 'playwright-report', open: 'always' }]],
  use: {
    browserName: 'firefox',   // Use Chromium engine for Edge
    headless : false
  },
});

export default config;
