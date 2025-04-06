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
