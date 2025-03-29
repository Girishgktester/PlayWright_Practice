import { test, expect } from '@playwright/test';
import exp from 'constants';

test("Practice Assertions", async ({ page }) => {

    await page.goto("https://demo.nopcommerce.com/register");

    await expect(page).toHaveURL("https://demo.nopcommerce.com/register")

    await expect(page).toHaveTitle("nopCommerce demo store. Register")

    await expect(page.getByAltText("nopCommerce demo store")).toBeVisible();

    await expect(page.getByLabel('Search store')).toBeEnabled();

    const radio = await page.locator("#gender-male");
    radio.click();
    await expect(radio).toBeChecked();

    await expect(page.locator("#register-button")).toHaveAttribute('type', 'submit');

    await expect(page.locator('#register-button')).toHaveText("Register")

    const conunts = await page.locator('//a').count()

    await expect(conunts).toBe(62)

});


test("Soft Assertions", async ({ page }) => {

    await page.goto("https://demoblaze.com/");

    //hard asserion
    await expect(page).toHaveTitle("STORE")
    await expect(page).toHaveURL("https://demoblaze.com/")

    //Soft assertions
    await expect.soft(page).toHaveTitle("STORE")
    await expect.soft(page).toHaveURL("https://demoblaze.com/")


});




