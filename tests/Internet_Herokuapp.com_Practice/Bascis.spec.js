import { test, expect } from '@playwright/test';
import exp from 'constants';

test('Testcase 1: Add/Remove Elements', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");

    const addElement = await page.locator("button[onclick='addElement()']");

    for (let i = 0; i < 10; i++) {
        await page.waitForTimeout(1000)
        await addElement.click();
        const deleteButtons = await page.$$('button', { hasText: 'Delete' })  // all buttons with "Delete" text
        console.log("Number of Delete Buttons added per iteration" + deleteButtons.length)
    }
});


test('Testcase 2: Checkboxes', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/checkboxes");

    const checkbox1 = page.locator('//form[@id="checkboxes"]/input[1]');
    await checkbox1.check();
    await expect(checkbox1).toBeChecked();
    const checkbox2 = page.locator('//form[@id="checkboxes"]/input[2]');
    await checkbox2.uncheck();
    await page.waitForTimeout(2000)
    await expect(checkbox2).not.toBeChecked();
    await page.waitForTimeout(2000)
});