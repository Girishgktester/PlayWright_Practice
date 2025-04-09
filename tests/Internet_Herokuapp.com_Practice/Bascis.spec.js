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
    await checkbox2.isChecked();
    await page.waitForTimeout(2000)
    await expect(checkbox2).not.toBeChecked();
    await page.waitForTimeout(2000)
});


test('Testcase 3: Dropdown', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/dropdown");
    const dropdowns  =  await page.locator("#dropdown");
    dropdowns.selectOption("1")
    dropdowns.selectOption("Option 2")
    await page.waitForTimeout(5000)
});

test('Testcase 4: Inputs', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/inputs");

    const input  =  await page.locator("//input[@type='number']");
    input.fill("123456")
    await expect(input).toHaveValue("123456");
    await page.waitForTimeout(5000)
});

test('Move slider using click and drag', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/horizontal_slider');

  const slider = await page.locator("//input[@value='0']");
  const boundingBox = await slider.boundingBox();

  console.log(boundingBox)
  if (boundingBox) {
    const { x, y, width, height } = boundingBox;

    // Start from the middle of the slider
    const startX = x + width / 2;
    const centerY = y + height / 2;

    // Move 50 pixels to the right (adjust based on slider granularity)
    const moveBy = 50;

    await page.mouse.move(startX, centerY);
    await page.mouse.down();
    await page.mouse.move(startX + moveBy, centerY, { steps: 10 });
    await page.mouse.up();
  }

  const value = await slider.inputValue();
  console.log('Slider value:', value);
});



