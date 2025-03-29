const { test, expect } = require('@playwright/test');
const exp = require('constants');


test('Handle input box', async function ({ browser }) {

    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto("https://testautomationpractice.blogspot.com/")
    const name = await page.getByPlaceholder('Enter Name')

    await expect(name).toBeVisible();
    await expect(name).toBeEditable();
    await expect(name).toBeEnabled();
    await expect(name).not.toBeDisabled();

    name.fill('Playwright Tester')

    const placeholderText = await name.getAttribute('placeholder');
    await expect(placeholderText).toBe('Enter Name')

    await page.getByPlaceholder("Enter EMail").fill("Test@test.com")
    const phoneInput = page.getByRole('textbox', { name: 'Enter Phone' });
    phoneInput.fill("123456789")

    const maleRadioButton = await page.locator('#male');

    maleRadioButton.check(); // check means click
    const checkedRadio = maleRadioButton.isChecked();
    await expect(checkedRadio).toBeTruthy();
    await expect(maleRadioButton).toBeChecked().toBeTruthy


});
