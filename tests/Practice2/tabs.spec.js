import { test, expect } from '@playwright/test';

test("Frames", async ({ browser }) => {
    const context = await browser.newContext(); // Await the context creation
    const page = await context.newPage(); // Create a new page
    await page.goto("https://freelance-learn-automation.vercel.app/login");

    // Wait for a new page to open (if needed)
    await Promise.all([
        context.waitForEvent("page"), // Corrected method name
    ]);

    // Closing the context after execution (best practice)
    await context.close();
});
