import { test, expect } from '@playwright/test';

test('Testcase 8: Verify Product Page Details', async ({ page }) => {
    await page.goto("https://automationexercise.com/");

    await page.locator("a[href='/products']").click();
    await expect(page.getByText("All Products").first()).toBeVisible();

    const productsCount = await page.locator("//img[@alt='ecommerce website products']").count();
    console.log("Products Count:", productsCount);
    expect(productsCount).toBe(34);

    await page.locator("a:has-text('View Product')").first().click({strict:true});

    await expect(page.getByText("Write Your Review")).toBeVisible();

    const productName = await page.locator("div.product-information h2").textContent();
    expect(productName?.trim()).toBe("Blue Top");

    await expect(page.getByText("Rs. 500")).toBeVisible();

    await expect(page.locator("#quantity")).toHaveValue("1");
});
