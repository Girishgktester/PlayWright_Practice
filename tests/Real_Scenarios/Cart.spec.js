import { test, expect } from '@playwright/test';

test('Testcase 11:  Verify Subscription in Cart page', async ({ page }) => {
    await page.goto("https://automationexercise.com/");

    await page.getByText(" Cart").first().click({strict:true});

    await page.getByText("Subscription").scrollIntoViewIfNeeded();

    await page.getByPlaceholder('Your email address').fill("test@gmail.com");

    await page.keyboard.press("Enter")

    await  expect(page.getByText("You have been successfully subscribed!")).toBeVisible();

   
});


test('Testcase 11:  Remove Products From Cart', async ({ page }) => {
    await page.goto("https://automationexercise.com/");


    await page.locator('[data-product-id="1"]').first().hover();
    await page.locator('[data-product-id="1"]').first().click();
    await page.waitForTimeout(2000);
    await page.getByText("View Cart").first().click();

    await page.locator('.cart_quantity_delete').click();

    await expect(page.locator('p.text-center')).toHaveText("Cart is empty! Click here to buy products.");
   
});

