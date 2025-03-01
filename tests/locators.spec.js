import { test, expect } from '@playwright/test';


test('Advanced playeright locators', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/angularpractice/")

    // check box and radio buttons

    await page.getByLabel('Check me out if you Love IceCreams!').click();

    await page.getByLabel('Gender').selectOption("Male");

    await page.getByPlaceholder('Password').fill('Text')

    await page.getByRole("button", { name: 'Submit' }).click();

    await page.getByText("Sucess!");

    await page.getByRole("link", { name: 'shop' }).click();

    page.locator("app-card").filter({ hasText: 'iphone' }).getByRole('Button').click();

    console.log("checked? " + await page.getByLabel('Check me out if you Love IceCreams!').isChecked())

    await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole('Button').click();
});