const { test, expect } = require('@playwright/test');
const exp = require('constants');
let page;



test.only('Check number of products', async () => {

    const links = await page.$$('//a')    // return aall the links
    console.log(links.length)

});


test.skip('This test will be skipped', async () => {
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();

});


test.fixme('Fix me ', async () => {
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();


});

test('This will fail ', async () => {
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();

    test.fail();

});


test('This test is slow ', async () => {
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
    test.slow();
});





