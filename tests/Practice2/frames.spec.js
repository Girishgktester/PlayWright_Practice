import { test, expect } from '@playwright/test';

test("Frames", async ({ page }) => {

    await page.goto("https://docs.oracle.com/javase/8/docs/api/");

    await page.waitForTimeout(5000);

   const frame =  await page.frameLocator("//frame[@title='All Packages']")

   const text =  await frame.locator("//a[text()='java.applet']").textContent();

   console.log("Text of frame" + text)

   await frame.locator("//a[text()='java.applet']").click();
   await page.waitForTimeout(5000);



   text.match("framejava.applet")



});
