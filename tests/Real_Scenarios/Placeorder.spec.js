import { test, expect } from '@playwright/test';
import exp from 'constants';

test('Testcase 9: Add product to cart , login and place order', async ({ page }) => {

    await page.goto("https://automationexercise.com/");
    await page.locator('[data-product-id="1"]').first().hover();
    await page.locator('[data-product-id="1"]').first().click();
    await page.getByText("View Cart").click();
    await page.waitForTimeout(2000);
    await page.getByText("Proceed To Checkout").click();
    await page.locator("//u[normalize-space()='Register / Login']").first().click();
    await page.waitForTimeout(3000);
    await page.getByPlaceholder("Email Address").first().fill("Test@Tester1.com")
    await page.getByPlaceholder("Password").fill("Admin123")
    await page.locator("button[data-qa='login-button']").click();
    await expect(page.getByText("TestSite")).toBeVisible();
    await page.locator("a[href='/view_cart']").first().click();
    await page.getByText("Proceed To Checkout").click();
    await page.locator("textarea[name='message']").fill("Nice website for practicing automation");
    await page.getByText("Place Order").click();
    await expect (page.getByText("Name on Card")).toBeVisible();
    await expect (page.getByText("Card Number")).toBeVisible();
    await expect (page.getByText("CVC")).toBeVisible();
    await expect (page.getByText("Expiration")).toBeVisible();
    await page.locator("input[name='name_on_card']").fill("Test")
    await page.locator("input[name='card_number']").fill("123456789")
    await page.locator("input[placeholder='ex. 311']").fill("123")
    await page.locator("input[placeholder='MM']").fill("12")
    await page.locator("input[placeholder='YYYY']").fill("1234")
    await page.getByText("Pay and Confirm Order").click();
    await expect(page.getByText("Order Placed!")).toBeVisible();

});


test('Testcase 15:Place Order: Register before Checkout', async ({ page }) => {

    await page.goto("https://automationexercise.com/");
    await page.getByText(" Signup / Login").click();

    await page.getByPlaceholder("Email Address").first().fill("Test@Tester1.com")
    await page.getByPlaceholder("Password").fill("Admin123")
    await page.locator("button[data-qa='login-button']").click();


    await page.locator('[data-product-id="1"]').first().hover();
    await page.locator('[data-product-id="1"]').first().click();
    await page.waitForTimeout(2000);
    await page.getByText("View Cart").first().click();
    await page.waitForTimeout(3000);
    
    await page.getByText("Proceed To Checkout").click();
    await page.locator("textarea[name='message']").fill("Nice website for practicing automation");
    await page.getByText("Place Order").click();
    await expect (page.getByText("Name on Card")).toBeVisible();
    await expect (page.getByText("Card Number")).toBeVisible();
    await expect (page.getByText("CVC")).toBeVisible();
    await expect (page.getByText("Expiration")).toBeVisible();
    await page.locator("input[name='name_on_card']").fill("Test")
    await page.locator("input[name='card_number']").fill("123456789")
    await page.locator("input[placeholder='ex. 311']").fill("123")
    await page.locator("input[placeholder='MM']").fill("12")
    await page.locator("input[placeholder='YYYY']").fill("1234")
    await page.getByText("Pay and Confirm Order").click();
    await expect(page.getByText("Order Placed!")).toBeVisible();

});