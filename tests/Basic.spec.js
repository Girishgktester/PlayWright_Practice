const { test } = require('@playwright/test')


test('First playwright testcase', async function ({ browser }) {


    let context = await browser.newContext();

    let page = await context.newPage();

    await page.goto("https://letcode.in/")

});


test.only(' only run this  testcase', async function ({ page }) {


    await page.goto("https://letcode.in/")

}); 