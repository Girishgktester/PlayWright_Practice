const { test, expect } = require('@playwright/test');
const exp = require('constants');

test('Multi select dropdown', async function ({ browser }) {

    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.selectOption('#colors', ['Blue', 'Red', 'Yellow'])

    await page.waitForTimeout(4000)

    const selectedOptions = await page.locator('#colors option:checked').allTextContents();

    // Trim whitespace and sort both arrays before comparing
    const formattedOptions = selectedOptions.map(option => option.trim()).sort();
    const expectedOptions = ['Blue', 'Red', 'Yellow'].sort();
    
    await expect(formattedOptions).toEqual(expectedOptions);

    const selectedOptions1 = await page.locator('#colors option:checked').evaluateAll(options =>
        options.map(option => option.textContent.trim()).sort());
    
    await expect(selectedOptions1).toEqual(['Blue', 'Red', 'Yellow']);

    const selectedOptionss = await page.locator('#colors option:checked').evaluateAll(options =>
        options.map(option => option.textContent.trim()).sort()
    );
    
    await expect(selectedOptionss).toEqual(['Blue', 'Red', 'Yellow'].sort());

});
