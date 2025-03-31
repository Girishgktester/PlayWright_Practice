const { test, expect } = require('@playwright/test');
const exp = require('constants');

test('Frames handling', async function ({ page }) {

    await page.goto("https://ui.vision/demo/webtest/frames/")

    const framescont = await page.frames();
    console.log(framescont.length)
    const framelocator = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_1.html' });
    await framelocator.fill("input[name='mytext1']", "Hello")

    // approach  2

    const framloc = await page.frameLocator("frame[src='frame_1.html']").locator("input[name='mytext1']")
    await framloc.fill("Rewrite test")

});

test('Nested frames', async function ({ page }) {

    await page.goto("https://ui.vision/demo/webtest/frames/")

    const framelocator = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3.html' });

    const childframes = await framelocator.childFrames()
    await childframes[0].getByText("I am a human").check();




});

