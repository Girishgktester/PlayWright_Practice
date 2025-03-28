import { test, expect } from '@playwright/test';

test("Practice Locators", async ({ page }) => {

    await page.goto("https://demoblaze.com/index.html");
    await page.locator("id=login2").click();
    await page.locator("#loginusername").fill("pavanol");
    await page.locator("#loginpassword").fill("test@123")
    const text = await page.locator("id=logInModalLabel").textContent();
    console.log(text);
    await page.click("button[onclick='logIn()']");
    const element = await page.locator("#logout2");
    await expect(element).toBeVisible();
    await page.waitForTimeout(3000)
});


test('Locating multiple webelements ', async ({ page }) => {
    await page.goto("https://demoblaze.com/index.html")
    const links = await page.$$('//a')    // return aall the links
    console.log(links.length)
    for (const link of links) {
        const linktexts = await link.textContent();
        console.log("All the links " + linktexts)
    }

    await page.waitForTimeout(2000)

    const productname = await page.$$("//div[@id='tbodyid']//div/h4/a")

    for (const product of productname) {

        const pname = await product.textContent()

        console.log("Product names " + pname)
    }
});


test("Playwright built in Locators", async ({ page }) => {

    await page.goto("https://demoblaze.com/index.html");
    await page.locator("id=login2").click();
    await page.locator("#loginusername").fill("pavanol");
    await page.locator("#loginpassword").fill("test@123")
    const text = await page.locator("id=logInModalLabel").textContent();
    console.log(text);
    await page.click("button[onclick='logIn()']");
    const element = await page.locator("#logout2");
    await expect(element).toBeVisible();
    await page.waitForTimeout(3000)
});


