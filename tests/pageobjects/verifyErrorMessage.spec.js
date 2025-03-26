import { test, expect } from '@playwright/test';

// test.use({viewport:{width:1920,height:1850}})

test.only("GetText examples", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByPlaceholder("Username").fill("Admin", { delay: 200 });
    await page.getByPlaceholder("Password").fill("admin123d");

    await page.locator("button[type='submit']").click();

    const errorMessage = await page.locator(".oxd-text.oxd-text--p.oxd-alert-content-text").textContent();

    console.log(errorMessage)

    await page.waitForTimeout(2000);

    expect(errorMessage.toBe("Invalid credentials")).toBeTruthy();

    
});