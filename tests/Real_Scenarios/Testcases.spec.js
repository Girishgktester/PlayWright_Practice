import { test, expect } from '@playwright/test';



test('Testcase 4 : Land into testcase page', async ({ page }) => {
    await page.goto("https://automationexercise.com/");

    await page.locator("(//a[normalize-space()='Test Cases'])[1]").click();

    await expect(page.getByText("Test Cases").nth(1)).toBeVisible();
});
