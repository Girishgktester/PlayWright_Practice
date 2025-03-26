import { test, expect } from '@playwright/test';

test("Auto complete", async ({ page }) => {

    await page.goto("https://www.google.com/");


    await page.locator("textarea[name='q']").fill("Mukesh Otwani");


    await page.waitForSelector("//li[@role='presentation']")


    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("ArrowDown");

    await page.waitForTimeout(2000);

    await page.keyboard.press("ArrowDown");

    await page.waitForTimeout(2000);

    await page.keyboard.press("Enter");

    await page.waitForTimeout(2000);

});


test("Auto complete using loop", async ({ page }) => {

    await page.goto("https://www.google.com/");

    await page.locator("textarea[name='q']").fill("Mukesh Otwani");

    const elemtn = await page.$$("//li[@role='presentation']")


    console.log( elemtn.length)

    for (let i = 0; i < elemtn.length; i++) {

        const text = await elemtn[i].textContent();


        console.log("text " + text)

        if (text.includes("youtube"))

            await elemtn[i].click();
            break;
    }

    await page.waitForTimeout(20000);


});
