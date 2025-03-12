import { test, expect } from '@playwright/test';

test("Login to OrangeHRM", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByPlaceholder("Username").fill("Admin",{delay:200});
    await page.getByPlaceholder("Password").fill("admin123");

    await page.locator("button[type='submit']").click();

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

    await page.waitForTimeout(1000);

    const titles = await page.title();

    await expect(page).toHaveTitle("OrangeHRM");

    await expect(page.locator(".oxd-userdropdown-tab")).toBeVisible();

});