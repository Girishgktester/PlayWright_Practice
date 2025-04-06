import { test, expect } from '@playwright/test';
import exp from 'constants';

test('Testcase 9: Search for product', async ({ page }) => {
    await page.goto("https://automationexercise.com/");

    await page.locator("a[href='/products']").click();

    const searchbox = await page.getByRole("textbox", {name:'Search Product'})

    expect(searchbox).toBeVisible();
    searchbox.fill("Blue Top")

    await page.locator("#submit_search").click();

    await expect(page.getByText("Searched Products")).toBeVisible();

    await expect(page.locator("(//p[text()='Blue Top'])[2]")).toBeVisible();


});

test('Testcase 20: Search Products and Verify Cart After Login', async ({ page }) => {
    await page.goto("https://automationexercise.com/");

    await page.locator("a[href='/products']").click();
    const searchbox = await page.getByRole("textbox", {name:'Search Product'})
    expect(searchbox).toBeVisible();
    searchbox.fill("Blue Top")
    await page.locator("#submit_search").click();
    await expect(page.getByText("Searched Products")).toBeVisible();
    await expect(page.locator("(//p[text()='Blue Top'])[2]")).toBeVisible();
   
    await page.getByText(" Signup / Login").click();

    await page.getByPlaceholder("Email Address").first().fill("Test@Tester1.com")
    await page.getByPlaceholder("Password").fill("Admin123")
    await page.locator("button[data-qa='login-button']").click();

    await expect(page.locator("(//p[text()='Blue Top'])[2]")).toBeVisible();




});

