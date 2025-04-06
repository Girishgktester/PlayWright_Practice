import { test, expect } from '@playwright/test';

test('Testcase 11:  Verify Subscription in Cart page', async ({ page }) => {
    await page.goto("https://automationexercise.com/");

    await page.getByText(" Cart").first().click({strict:true});


    await page.getByText("Subscription").scrollIntoViewIfNeeded();

    await page.getByPlaceholder('Your email address').fill("test@gmail.com");

    await page.keyboard.press("Enter")

    await  expect(page.getByText("You have been successfully subscribed!")).toBeVisible();

   
});
