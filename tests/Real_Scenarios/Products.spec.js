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


test('Testcase 21:  Add review on product', async ({ page }) => {
    await page.goto("https://automationexercise.com/");
    await page.locator("a[href='/products']").click();
    
    await page.locator("a:has-text('View Product')").first().click({strict:true});
    await expect(page.getByText("Write Your Review")).toBeVisible();

    await page.getByPlaceholder("Your Name").fill("Name");

       await page.getByPlaceholder("Email Address").first().fill("Name@gmail.com");
       await page.getByPlaceholder("Add Review Here!").fill("Nice website for automaption practice");

       await page.locator("#button-review").click();

    
});


test('Testcase: Scroll down and up, verify texts', async ({ page }) => {
  await page.goto('https://automationexercise.com');

  await expect(page.locator("img[alt='Website for automation practice']")).toBeVisible();

  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1000); 

  await expect(page.getByText('SUBSCRIPTION')).toBeVisible();

  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1000);

  await expect(page.locator("//img[@alt='Website for automation practice']")).toBeVisible();
});


test('Testcase: Scroll down and up verification', async ({ page }) => {
  await page.goto('http://automationexercise.com');

  await expect(page.locator("//img[@alt='Website for automation practice']")).toBeVisible();

  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

  await expect(page.getByText('Subscription', { exact: false })).toBeVisible();

  await page.locator('#scrollUp').click();

  await expect(page.locator("//img[@alt='Website for automation practice']")).toBeVisible();
});

