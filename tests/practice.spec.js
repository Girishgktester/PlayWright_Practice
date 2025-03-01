
const { test, expect } = require('@playwright/test');
const { text } = require('stream/consumers');




test("Practice PW ", async ({ page }) => {

    const userName = page.locator("#userEmail");
    const password = page.locator("#userPassword");
    const loginButton = page.locator("#login");
    const errorText = page.locator(".error");
    const phoneNames = page.locator(".card-body");
    const productNamezara = "ZARA COAT 3"

    await page.goto("https://rahulshettyacademy.com/client");

    let productNames = 'anshika@gmail.com'

    await userName.fill(productNames);
    await password.fill("Iamking@000");

    await loginButton.click();

    await page.waitForLoadState('networkidle');
    const titless = await page.locator(".card-body b").allTextContents();

    console.log(titless);

    const countss = await phoneNames.count();

    console.log(countss);



    for (let i = 0; i < countss; ++i) {

        console.log(await phoneNames.nth(i).locator("b").textContent())
        if (await phoneNames.nth(i).locator("b").textContent() == productNamezara) {
            console.log("True")

            await phoneNames.nth(i).locator("text = Add To Cart").click();
            break;
        } else {
            console.log("False")
        }
    }

    await page.locator(".btn.btn-custom[routerlink='/dashboard/cart']").click();
    // await page.waitForLoadState('networkidle');

    await page.locator("div[class='cartSection'] h3").waitFor();


    const productnameFromcart = await page.locator("div[class='cartSection'] h3").textContent();

    console.log(" names ->" + productNamezara)
    console.log(" productnameFromcart ->" + productnameFromcart)
    expect(productNamezara).toBe(productnameFromcart);

    await page.getByText("Checkout").click();

    // await page.locator("li[class='totalRow'] button[type='button']").click();

    await page.locator("input[placeholder='Select Country']").waitFor();


    await page.locator("[placeholder*='Country']").type("ind");

    const dropdown = page.locator(".ta-results");

    await dropdown.waitFor();
    const optionsCount = await dropdown.locator("button").count();
    for (let i = 0; i < optionsCount; ++i) {
        const text = await dropdown.locator("button").nth(i).textContent();
        if (text === " India") {
            await dropdown.locator("button").nth(i).click();
            break;
        }
    }
    await page.getByText("Place Order ").click();
    const sucesstext = await page.locator(".hero-primary")

    sucesstext.isVisible();

    console.log(sucesstext.textContent());

    const orfderID = await page.locator("label[class='ng-star-inserted']").textContent();

    let orderID = await page.getByText("Orders History Page").textContent();

    const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(orderId);




});  