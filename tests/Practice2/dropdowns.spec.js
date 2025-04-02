const { test, expect } = require('@playwright/test')


test('Automate static dropdowns', async function ({ page }) {


    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")

    const userName = page.locator("#username");
    const password = page.locator("#password");
    const loginButton = page.locator("#signInBtn");
    const errorText = page.locator(".error");
    const phoneNames = page.locator(".card-body a");
    const selecttag = page.locator("select.form-control")
    const radioButton = page.locator(".radiotextsty").last()
    const popup = page.locator("#okayBtn");
    const agree = page.locator("#terms")

    await userName.fill("rahulshettyacademy");
    await password.fill("learning");
    await selecttag.selectOption("consult")
    await radioButton.click();
    await popup.click();
    await expect(radioButton).toBeChecked();

    //toBeFalsy
    await agree.check();
    await agree.uncheck();

    console.log(await page.locator(".blinkingText").textContent())
    await expect(page.locator(".blinkingText")).toHaveAttribute("class","blinkingText");

    await loginButton.click();

});

