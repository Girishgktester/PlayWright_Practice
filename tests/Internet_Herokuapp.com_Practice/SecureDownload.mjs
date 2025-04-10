import { test, expect } from '@playwright/test';
import DigestFetch from 'digest-fetch';
import fs from 'fs';
import path from 'path';

test('Secure file download with Digest Auth and continue UI testing', async ({ page }) => {
  // Step 1: Secure File Download
  const client = new DigestFetch('admin', 'admin'); // replace with real creds

  const res = await client.fetch('https://the-internet.herokuapp.com/download/somefile.txt');
  const buffer = await res.buffer();

  const downloadPath = path.join(__dirname, 'downloads', 'somefile.txt');
  fs.mkdirSync(path.dirname(downloadPath), { recursive: true });
  fs.writeFileSync(downloadPath, buffer);

  console.log('✅ File downloaded successfully.');

  // Step 2: Continue with Playwright UI tests
  await page.goto('https://the-internet.herokuapp.com');

  // Continue your UI interactions...
  await page.click('text=File Download');
  await expect(page.locator('text=somefile.txt')).toBeVisible();
});
