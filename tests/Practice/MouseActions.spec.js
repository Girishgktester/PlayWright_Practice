const { test, expect } = require('@playwright/test');
const exp = require('constants');

test('Mouse Actions', async function ({ page }) {

    await page.goto("https://demo.opencart.com.gr/")

    const desktop = await page.locator("//a[normalize-space()='Desktops']")
    const pc = await page.getByText('PC (0)');
    desktop.hover();
    pc.click();

});


test('Mouse Right click', async function ({ page }) {

    await page.goto("https://testautomationpractice.blogspot.com/")

    const dClickMe = await page.getByText("Copy Text").first();
    await dClickMe.dblclick();

    await page.waitForTimeout(3000)


});



test('Double click', async function ({ page }) {

    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html")

    const rClickMe = await page.getByText("right click me").first();
    await rClickMe.click({ rClickMe: 'right' })

    await page.waitForTimeout(3000)


});


test('Drag and drop', async function ({ page }) {

    await page.goto("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")

    const romecity = await page.locator('#box6')
    const southkoreaCountry = await page.locator("#box106")

    await romecity.dragTo(southkoreaCountry)

    await romecity.hover();
    await page.mouse.down();

    await southkoreaCountry.hover()
    await page.mouse.down();


    await page.waitForTimeout(3000)

});


