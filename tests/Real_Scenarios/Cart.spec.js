import { test, expect } from '@playwright/test';

test('Testcase 11:  Verify Subscription in Cart page', async ({ page }) => {
    await page.goto("https://automationexercise.com/");

    await page.getByText(" Cart").first().click({strict:true});

    await page.getByText("Subscription").scrollIntoViewIfNeeded();

    await page.getByPlaceholder('Your email address').fill("test@gmail.com");

    await page.keyboard.press("Enter")

    await  expect(page.getByText("You have been successfully subscribed!")).toBeVisible();

   
});


test('Testcase 17: View Category Products', async ({ page }) => {
   
    await page.goto("https://automationexercise.com/");
    const screen = await page.evaluate(() => {
        return {
          width: window.screen.width,
          height: window.screen.height
        };
      });

    //   const accordianBox = await page.locator('#accordian');
    // const box = await accordianBox.boundingBox();
      
      const leftQuarterMax = screen.width / 4;
      const box = await page.locator('#accordian').boundingBox();
      
      if (box) {
        console.log(`Element x position: ${box.x}`);
        expect(box.x).toBeLessThanOrEqual(leftQuarterMax);
      } else {
        throw new Error("Element not found or not visible.");
      }
   
      await page.locator("//a[normalize-space()='Women']").first().click();
   
      await page.getByText("Dress ").first().click();
   
      await expect(page.getByText("Women - Dress Products").first()).toBeVisible()

      await page.locator("//a[normalize-space()='Men']").click();

      await page.getByText("Tshirts ").first().click();

      await expect(page.getByText("Men - Tshirts Products")).toBeVisible();

});


test('Testcase 11:  Remove Products From Cart', async ({ page }) => {
   
    await page.goto("https://automationexercise.com/");
    await page.locator('[data-product-id="1"]').first().hover();
    await page.locator('[data-product-id="1"]').first().click();
    await page.waitForTimeout(2000);
    await page.getByText("View Cart").first().click();
    await page.locator('.cart_quantity_delete').click();
    await expect(page.locator('p.text-center')).toHaveText("Cart is empty! Click here to buy products.");
   
});
