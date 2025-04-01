const { test, expect } = require('@playwright/test');
const exp = require('constants');

test('keyboard Actions', async function ({ page }) {
    
    await page.goto("https://gotranscript.com/text-compare")

    await page.getByPlaceholder("Paste one version of the text here.").fill("Hello");

    await page.keyboard.press('Control+A')

    await page.keyboard.press('Control+C')

    await page.keyboard.press('Tab')

    await page.keyboard.press('Control+V')





});
