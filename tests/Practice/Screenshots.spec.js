const { test, expect } = require('@playwright/test');
const exp = require('constants');

test('Page Screenshot', async function ({ page }) {
    
    await page.goto("https://gotranscript.com/text-compare")

    await page.screenshot({path: 'tests/screenshots/'+Date.now() +'Homepage.png'})

});


test('Fullpage Screenshot', async function ({ page }) {
    
    await page.goto("https://gotranscript.com/text-compare")

    await page.screenshot({path: 'tests/screenshots' +'Homepage.png' ,fullPage:true})

});

test('Element Screenshot', async function ({ page }) {
    
    await page.goto("https://gotranscript.com/text-compare")

    await page.getByPlaceholder("Paste one version of the text here.").fill("Hello");

    await page.getByPlaceholder("Paste one version of the text here.") .screenshot({path: 'tests/screenshots' +'HomepageElement.png'})

});

