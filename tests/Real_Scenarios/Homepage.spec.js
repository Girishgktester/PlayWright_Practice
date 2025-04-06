import { test, expect } from '@playwright/test';
import exp from 'constants';

test('Testcase 9: Search for product', async ({ page }) => {
    await page.goto("https://automationexercise.com/");

    await page.getByText("Subscription").scrollIntoViewIfNeeded();

    await page.getByPlaceholder('Your email address').fill("test@gmail.com");

    await page.keyboard.press("Enter")

    await  expect(page.getByText("You have been successfully subscribed!")).toBeVisible();
});
