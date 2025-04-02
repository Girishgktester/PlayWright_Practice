const { test, expect } = require('@playwright/test')


test('First playwright testcase', async function ({ browser }) {

  let context = await browser.newContext();
  let page = await context.newPage();

  await page.goto("https://letcode.in/")
});


test(' only run this  testcase', async function ({ page }) {

  await page.goto("https://google.in/")

  let titles = await page.title();

  console.log(titles);

  await expect(page).toHaveTitle('Google')
});


test(' locators', async function ({ page }) {

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/")

  const userName = page.locator("#username");
  const password = page.locator("#password");
  const loginButton = page.locator("#signInBtn");
  const errorText = page.locator(".error");
  const phoneNames = page.locator(".card-body a");

  await userName.fill("rahulshettyacademy");
  await password.fill("learning");
  await loginButton.click();

  console.log("index wise first" + await phoneNames.nth(0).textContent())
  console.log("First() " + await phoneNames.first().textContent())
  console.log("Last() " + await phoneNames.last().textContent())
  const alltitles = await phoneNames.allTextContents();
  console.log(" all()" + alltitles);
});


test.only(' Syncs', async function ({ page }) {

  await page.goto("https://rahulshettyacademy.com/client")

  const userName = page.locator("#userEmail");
  const password = page.locator("#userPassword");
  const loginButton = page.locator("#login");
  const errorText = page.locator(".error");
  const phoneNames = page.locator(".card-body b");

  await userName.fill("anshika@gmail.com");
  await password.fill("Iamking@000");

  await loginButton.click();

  await page.waitForLoadState('networkidle');

  await phoneNames.first().waitFor();

  const names = await phoneNames.allTextContents();

  console.log(names);

});  