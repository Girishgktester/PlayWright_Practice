import { test, expect } from '@playwright/test';

test("Test Alerts", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    await page.waitForTimeout(5000);


    await page.locator("//button[normalize-space()='Click for JS Alert']").click()

    page.on('dialog', async (d) => {
        expect(d.type()).toContain("alert")
        console.log("d.message() " + d.message())
        expect(d.message().toContain("aefsdv"))
        await d.accept();
    });


    await page.waitForTimeout(5000);



});
