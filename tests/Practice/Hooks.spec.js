const { test, expect } = require('@playwright/test');
const exp = require('constants');
let page;

test.beforeEach('Login', async ({ browser }) => {
    page = await browser.newPage();

    await page.goto("https://demoblaze.com/index.html");
    await page.locator("id=login2").click();
    await page.locator("#loginusername").fill("pavanol");
    await page.locator("#loginpassword").fill("test@123")
    const text = await page.locator("id=logInModalLabel").textContent();
    console.log(text);
    await page.click("button[onclick='logIn()']");

});


test('Hooks dropdown', async () => {

    const links = await page.$$('//a')    // return aall the links
    console.log(links.length)

});



test('Add to cart ', async () => {
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();

});


test.afterEach('Logout', async() =>{
    const element = await page.locator("#logout2");
    await expect(element).toBeVisible();
    await page.waitForTimeout(3000)
});

