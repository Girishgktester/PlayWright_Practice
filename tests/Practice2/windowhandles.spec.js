const { test, expect } = require('@playwright/test')

test("Window handling ", async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")

    await page.locator(".blinkingText").click();

    const page2 = context.waitForEvent('page');

    
});  