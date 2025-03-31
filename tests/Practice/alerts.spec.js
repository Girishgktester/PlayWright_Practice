const { test, expect } = require('@playwright/test');
const exp = require('constants');
test('Alert handling', async function ({ page }) {

    await page.goto("https://testautomationpractice.blogspot.com/")

    //enableing alert
    //dialog whindow handler 

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept();
    })

    await page.getByRole("button", { name: 'Simple Alert' }).click();

});


test('Confirmation window handle input box', async function ({ page }) {

    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.dismiss();
    })

    await page.getByRole("button", { name: 'Confirmation Alert' }).click();

});


test('Prompt window handle input box', async function ({ page }) {

    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on('dialog', async dialog => {
        expect(dialog.type()).toBe('prompt')
        expect(dialog.message()).toBe('Please enter your name:')
        await page.waitForTimeout(2000)
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await page.waitForTimeout(2000)
        await dialog.accept('Testing prompt alert');
    })
    await page.getByRole("button", { name: 'Prompt Alert' }).click();
});