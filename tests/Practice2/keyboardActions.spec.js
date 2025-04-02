import { test, expect } from '@playwright/test';

test("Keyboard actions", async ({ page }) => {

    await page.goto("https://www.google.com/");

    await page.locator("textarea[name='q']").fill("Mukesh Otwani");

    // await page.keyboard.press("Enter");

    await page.keyboard.press("Control+A"); // Select all

    await page.keyboard.press("Control+C"); // Select all

    await page.keyboard.press("Backspace");

    await page.keyboard.press("Control+V"); // Select all

    // await page.keyboard.press()

    await page.waitForTimeout(2000);

});
