import { test, expect } from '@playwright/test';

test("File upload", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/upload");

    const filePath = "./upload/Selenide.txt";


    await page.locator("#file-upload").setInputFiles(filePath);

    await page.locator("#file-submit").click();

    const text = await page.locator("\\h3").textContent();

    text.match("File Uploaded!");


});
