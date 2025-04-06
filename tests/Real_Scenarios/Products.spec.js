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

test('Testcase 13: Verify Product quantity in Cart', async ({ page }) => {
    await page.goto("https://automationexercise.com/");
    await page.locator("a[href='/products']").click();

    await page.getByText("View Product").first().click();

    await page.locator("#quantity").fill("4")
    await page.keyboard.press("Enter")

    await page.locator("//button[normalize-space()='Add to cart']").click();

    await page.waitForSelector('#cartModal', { state: 'visible' });

    await page.getByText("View Cart").click();

    await expect(page.locator('.cart_quantity button')).toHaveText("4", { trim: true });

});

