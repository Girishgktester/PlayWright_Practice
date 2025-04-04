import { test, expect } from '@playwright/test';

test('Testcase 6 : Contact us Form', async ({ page }) => {

    await page.goto("https://automationexercise.com/")

    await page.getByText(" Contact us").click();

    await expect(page.getByText("Get In Touch")).toBeVisible();

    await page.getByPlaceholder("Name").fill("Test user");

    await page.getByPlaceholder("Email").first().fill("Email@Email.com")

    await page.getByPlaceholder("Subject").fill("Subject")

    await page.getByPlaceholder("Your Message Here").fill("Your Message Here")

    await page.locator("input[name='upload_file']").setInputFiles("C:\\Users\\user\\Documents\\Playwright\\upload\\Selenide.txt");
    
    await page.locator("//input[@name='submit']").click();

});
