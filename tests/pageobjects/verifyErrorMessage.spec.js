import { test, expect } from '@playwright/test';

test.only("GetText examples", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByPlaceholder("Username").fill("Admin", { delay: 200 });
    await page.getByPlaceholder("Password").fill("admin123d");

    await page.locator("button[type='submit']").click();

    const errorMessage = await page.locator(".oxd-text.oxd-text--p.oxd-alert-content-text").textContent();

    console.log(errorMessage)

    expect(errorMessage.toBe("Invalid credentials")).toBeTruthy();

    
});