
const { test, expect, request } = require('@playwright/test');
const { text } = require('stream/consumers');

const loginPayload = { userEmail: "anshika@gmail.com", userPassword: "Iamking@000" }

let authToken;

//https://rahulshettyacademy.com/api/ecom/auth/login
//anshika@gmail.com
//Iamking@000
test.beforeAll(async () => {

    const apiContext = await request.newContext();

    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", {
        data: loginPayload
    });

    // Validate response status
    expect(loginResponse.ok()).toBeTruthy();

    const responseBody = await loginResponse.json();
    console.log("Login Response:", responseBody);


    authToken = responseBody.token;
    console.log("Auth Token:", authToken);

});

test("API Integeration part 1 ", async ({ page }) => {

    const errorText = page.locator(".error");
    const phoneNames = page.locator(".card-body");
    const productNamezara = "ZARA COAT 3"



    page.addInitScript(value => {

        window.localStorage.setItem('token', value);
    }, authToken)

    let productNames = 'anshika@gmail.com'
    await page.goto("https://rahulshettyacademy.com/client");

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

    await page.locator("div[class='cartSection'] h3").waitFor();


    const productnameFromcart = await page.locator("div[class='cartSection'] h3").textContent();

    console.log(" names ->" + productNamezara)
    console.log(" productnameFromcart ->" + productnameFromcart)
    expect(productNamezara).toBe(productnameFromcart);

    await page.getByText("Checkout").click();


    await page.locator("input[placeholder='Select Country']").waitFor();


    await page.locator("[placeholder*='Country']").pressSequentially("ind");

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