const { test, expect } = require('@playwright/test')


test('First playwright testcase', async function ({ browser }) {

    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto("https://letcode.in/")
});


test(' only run this  testcase', async function ({ page }) {

    await page.goto("https://google.in/")

    let titles =  await page.title();

    console.log(titles);

  await  expect(page).toHaveTitle('Google')

}); 