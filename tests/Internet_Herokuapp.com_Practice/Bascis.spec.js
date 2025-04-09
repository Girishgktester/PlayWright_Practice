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