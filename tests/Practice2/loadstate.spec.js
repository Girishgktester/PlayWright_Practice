import { test, expect } from '@playwright/test';

test("Frames", async ({ browser }) => {
    const context = await browser.newContext(); // Await the context creation
    const page = await context.newPage(); // Create a new page
    await page.goto("https://freelance-learn-automation.vercel.app/login");


    await page.getByText("New user? Signup").click();

    await page.waitForLoadState("networkidle")

    const counts = await page.locator("//input[@type='checkbox']").count();


    console.log("" + counts)

    expect(counts).toBe(10)


});
